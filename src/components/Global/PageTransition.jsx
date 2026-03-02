import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const FADE_IN_MS = 500;   // blur + oscurecer la página actual
const FADE_OUT_MS = 600;  // revelar la pantalla de carga

/**
 * Wrapper que mantiene compatibilidad con App.jsx — no agrega nada al DOM.
 */
export function TransitionProvider({ children }) {
    return children;
}

/**
 * Hook: crea un overlay con backdrop-blur sobre la página actual
 * para una transición suave que usa el fondo real de la página.
 */
export function useTransitionNavigate() {
    const navigate = useNavigate();

    const go = useCallback(
        (to) => {
            // ---------- crear overlay directamente en <body> ----------
            const overlay = document.createElement("div");
            Object.assign(overlay.style, {
                position: "fixed",
                top: "0",
                left: "0",
                width: "100vw",
                height: "100vh",
                // Fondo semi-transparente + blur del contenido de atrás
                backgroundColor: "rgba(0, 0, 0, 0)",
                backdropFilter: "blur(0px)",
                WebkitBackdropFilter: "blur(0px)",
                opacity: "1",
                zIndex: "999999",
                pointerEvents: "none",
                transition: `background-color ${FADE_IN_MS}ms ease-in-out, backdrop-filter ${FADE_IN_MS}ms ease-in-out, -webkit-backdrop-filter ${FADE_IN_MS}ms ease-in-out`,
            });
            document.body.appendChild(overlay);

            // doble rAF para que el browser pinte el estado inicial
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    // Blur progresivo — sin oscurecer, solo desenfoque total
                    overlay.style.backdropFilter = "blur(40px)";
                    overlay.style.WebkitBackdropFilter = "blur(40px)";
                    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.15)";
                });
            });

            // cuando la animación termina → navegar
            setTimeout(() => {
                // Blur extremo para que no se distinga nada durante el cambio
                overlay.style.transition = "none";
                overlay.style.backdropFilter = "blur(80px)";
                overlay.style.WebkitBackdropFilter = "blur(80px)";
                overlay.style.backgroundColor = "rgba(0, 0, 0, 0.3)";

                navigate(to);

                // Dar tiempo al PageSkeleton para montarse, luego
                // desvanecer el overlay para revelar el loading
                setTimeout(() => {
                    overlay.style.transition = `opacity ${FADE_OUT_MS}ms ease-in-out`;
                    overlay.style.opacity = "0";
                    overlay.addEventListener(
                        "transitionend",
                        () => overlay.remove(),
                        { once: true }
                    );
                    setTimeout(() => {
                        if (overlay.parentNode) overlay.remove();
                    }, FADE_OUT_MS + 100);
                }, 80);
            }, FADE_IN_MS + 30);
        },
        [navigate]
    );

    return go;
}
