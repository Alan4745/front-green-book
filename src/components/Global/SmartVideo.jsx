import { useRef, useEffect, forwardRef, useImperativeHandle } from 'react';

/* ─────────────────────────────────────────────────────────────────────────────
 * getStartLevel
 * Devuelve el índice de calidad inicial según el tipo de conexión detectada.
 *   0 → 360p  (slow-2g / 2g)
 *   1 → 480p  (3g)
 *   2 → 720p  (4g / desconocido)
 * ───────────────────────────────────────────────────────────────────────────── */
const getStartLevel = () => {
  const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  const type = conn?.effectiveType ?? '4g';
  if (type === 'slow-2g' || type === '2g') return 0;
  if (type === '3g') return 1;
  return 2;
};

/* ─────────────────────────────────────────────────────────────────────────────
 * SmartVideo
 * Componente de video optimizado con soporte HLS adaptativo.
 *
 * Props principales:
 *   hlsSrc          — URL del manifest HLS (.m3u8). Si el browser lo soporta,
 *                     usa streaming adaptativo. Safari usa soporte nativo.
 *   src             — URL del MP4 directo. Se usa como fallback si no hay HLS.
 *   poster          — Imagen que se muestra antes de que cargue el video.
 *   lazy            — (default true) Si es true, el HLS solo se inicializa cuando
 *                     el elemento está cerca del viewport (IntersectionObserver).
 *                     Útil para páginas con múltiples videos.
 *   rootMargin      — (default '200px') Margen previo al viewport donde se
 *                     dispara la carga lazy. '200px' = empieza a cargar 200px
 *                     antes de que el video sea visible.
 *   pauseWhenHidden — (default false) Si es true, pausa el video al salir del
 *                     viewport y lo reanuda al volver. Ideal para videos de
 *                     fondo en secciones largas. Solo aplica con autoPlay.
 *
 * Props heredadas de <video>:
 *   autoPlay, muted, loop, playsInline, controls, className, ...props
 * ───────────────────────────────────────────────────────────────────────────── */
const SmartVideo = forwardRef(({
  hlsSrc,
  src,
  poster,
  className = '',
  autoPlay    = false,
  muted       = true,
  loop        = false,
  playsInline = true,
  controls    = false,
  // ── Props de carga optimizada ──────────────────────────────────────────────
  lazy            = true,     // Diferir init HLS hasta entrar al viewport
  rootMargin      = '200px',  // Pre-carga antes de ser visible
  pauseWhenHidden = false,    // Pausar/reanudar según visibilidad
  ...props
}, ref) => {
  const videoRef  = useRef(null);
  const hlsRef    = useRef(null);     // Instancia HLS activa (para cleanup seguro)
  const initedRef = useRef(false);    // Guard: evita doble inicialización

  /* Exponer el elemento <video> nativo a través del ref externo */
  useImperativeHandle(ref, () => videoRef.current);

  /* ── EFECTO 1: Inicialización de HLS / MP4 ─────────────────────────────── */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    /* Al cambiar la fuente, limpiar la instancia anterior */
    initedRef.current = false;
    hlsRef.current?.destroy();
    hlsRef.current = null;

    /* ── Función principal de inicialización ────────────────────────────── */
    const initVideo = () => {
      if (initedRef.current) return; // Guard: solo inicializar una vez
      initedRef.current = true;

      if (hlsSrc) {
        /* Importación dinámica: hls.js solo se descarga cuando se necesita */
        import('hls.js').then(({ default: Hls }) => {
          if (!videoRef.current) return; // Componente desmontado durante la espera

          if (Hls.isSupported()) {
            /* ── Chrome, Firefox, Edge: usar hls.js con streaming adaptativo ── */
            const hls = new Hls({
              startLevel:         getStartLevel(), // Calidad inicial según red
              capLevelToPlayerSize: true,           // No exceder resolución del contenedor
              maxBufferLength:    20,               // Limitar buffer a 20 segundos
            });
            hls.loadSource(hlsSrc);
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED, () => {
              /* Reproducir automáticamente una vez que el manifest esté listo */
              if (autoPlay) video.play().catch(() => {});
            });
            hlsRef.current = hls; // Guardar referencia para cleanup

          } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            /* ── Safari: soporte nativo de HLS, no necesita hls.js ── */
            video.src = hlsSrc;
            if (autoPlay) video.play().catch(() => {});

          } else if (src) {
            /* ── Fallback: browser sin soporte HLS, usar MP4 directo ── */
            video.src = src;
            if (autoPlay) video.play().catch(() => {});
          }
        });

      } else if (src) {
        /* ── Sin hlsSrc: reproducción directa de MP4 ── */
        video.src = src;
        if (autoPlay) video.play().catch(() => {});
      }
    };

    /* ── Estrategia de carga ────────────────────────────────────────────── */
    let initObserver = null;

    if (lazy) {
      /* Modo lazy: esperar a que el elemento entre al área de pre-carga */
      initObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            initVideo();
            initObserver.disconnect(); // Inicializar solo una vez, luego desconectar
          }
        },
        { rootMargin, threshold: 0 }
      );
      initObserver.observe(video);
    } else {
      /* Modo eager: inicializar inmediatamente (ej. lightbox, modales) */
      initVideo();
    }

    /* ── Cleanup: desconectar observers y destruir instancia HLS ── */
    return () => {
      initObserver?.disconnect();
      hlsRef.current?.destroy();
      hlsRef.current = null;
    };
  }, [hlsSrc, src, autoPlay, lazy, rootMargin]);

  /* ── EFECTO 2: Pausar/reanudar según visibilidad en el viewport ─────────── */
  useEffect(() => {
    /* Solo aplica cuando pauseWhenHidden y autoPlay están activos */
    if (!pauseWhenHidden || !autoPlay) return;

    const video = videoRef.current;
    if (!video) return;

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          /* El video volvió al viewport: reanudar reproducción */
          video.play().catch(() => {});
        } else {
          /* El video salió del viewport: pausar para ahorrar CPU/batería */
          video.pause();
        }
      },
      { threshold: 0.1 } // Pausar cuando menos del 10% del video es visible
    );

    visibilityObserver.observe(video);
    return () => visibilityObserver.disconnect();
  }, [pauseWhenHidden, autoPlay]);

  /* ── Render ─────────────────────────────────────────────────────────────── */
  return (
    <video
      ref={videoRef}
      className={className}
      poster={poster}
      muted={muted}
      loop={loop}
      playsInline={playsInline}
      controls={controls}
      {...props}
    />
  );
});

SmartVideo.displayName = 'SmartVideo';
export default SmartVideo;
