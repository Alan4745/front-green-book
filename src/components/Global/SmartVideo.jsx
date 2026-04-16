import { useRef, useEffect, forwardRef, useImperativeHandle } from 'react';

const getStartLevel = () => {
  const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  const type = conn?.effectiveType ?? '4g';
  if (type === 'slow-2g' || type === '2g') return 0;
  if (type === '3g') return 1;
  return 2;
};

const SmartVideo = forwardRef(({
  hlsSrc,
  src,
  poster,
  className = '',
  autoPlay = false,
  muted = true,
  loop = false,
  playsInline = true,
  controls = false,
  ...props
}, ref) => {
  const videoRef = useRef(null);

  useImperativeHandle(ref, () => videoRef.current);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hlsInstance = null;

    if (hlsSrc) {
      import('hls.js').then(({ default: Hls }) => {
        if (!videoRef.current) return;

        if (Hls.isSupported()) {
          hlsInstance = new Hls({
            startLevel: getStartLevel(),
            capLevelToPlayerSize: true,
            maxBufferLength: 20,
          });
          hlsInstance.loadSource(hlsSrc);
          hlsInstance.attachMedia(video);
          hlsInstance.on(Hls.Events.MANIFEST_PARSED, () => {
            if (autoPlay) video.play().catch(() => {});
          });
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
          video.src = hlsSrc;
          if (autoPlay) video.play().catch(() => {});
        } else if (src) {
          video.src = src;
          if (autoPlay) video.play().catch(() => {});
        }
      });
    } else if (src) {
      video.src = src;
      if (autoPlay) video.play().catch(() => {});
    }

    return () => { hlsInstance?.destroy(); };
  }, [hlsSrc, src, autoPlay]);

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
