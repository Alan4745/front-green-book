import { useState } from "react";
import { useTransitionNavigate } from "./PageTransition";

const HoverButton = ({
    text = "Hover Me",
    textOffset = -120,
    hoverOffset = -10,
    link,
    to,
    color = "white",
    iconSide = "left",
    className = "",
    animateText = true,
    hoverTrigger = "container"
}) => {
    const [hover, setHover] = useState(false);
    const navigate = useTransitionNavigate();
    const isExternal = link?.startsWith("http://") || link?.startsWith("https://");
    const isIconRight = iconSide === "right";
    const iconOnlyHover = hoverTrigger === "icon";

    const getContrastColor = (bgColor) => {
        return bgColor?.toLowerCase() === "white" || bgColor === "#fff" || bgColor === "#ffffff"
            ? "black"
            : "white";
    };

    const iconColor = getContrastColor(color);

    const handleClick = (e) => {
        if (to) {
            e.preventDefault();
            navigate(to);
        }
    };

    const handleHoverStart = () => setHover(true);
    const handleHoverEnd = () => setHover(false);

    const anchorStyle = { color };

    return (
        <a
            href={link || (to ? "#" : undefined)}
            {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
            onClick={handleClick}
            role="link"
            className={`relative flex h-[120px] w-[400px] items-center gap-4 text-[2vh] tracking-wide no-underline transition-all duration-300 cursor-pointer ${isIconRight ? "justify-end" : "justify-start"} ${className}`}
            style={anchorStyle}
            onMouseEnter={iconOnlyHover ? undefined : handleHoverStart}
            onMouseLeave={iconOnlyHover ? undefined : handleHoverEnd}
        >
            <span
                className="flex items-center transition-all duration-300"
                style={{
                    fontFamily: "GothamNormal",
                    marginLeft: !isIconRight && animateText && hover ? `${hoverOffset}px` : "0px",
                    marginRight: isIconRight && animateText && hover ? `${hoverOffset}px` : "0px",
                    whiteSpace: "pre-line",
                    lineHeight: "1.3",
                    textAlign: isIconRight ? "right" : "left"
                }}
            >
                {text}
            </span>

            <div
                className={`relative flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                    hover ? "scale-0" : "scale-100"
                }`}
                style={{ borderColor: color, order: isIconRight ? 2 : 0 }}
                onMouseEnter={iconOnlyHover ? handleHoverStart : undefined}
                onMouseLeave={iconOnlyHover ? handleHoverEnd : undefined}
            >
                <span
                    className={`h-[15px] w-[15px] border-t-2 border-r-2 transform ${isIconRight ? "rotate-45 -translate-x-[4px]" : "rotate-225 translate-x-[4px]"}`}
                    style={{ borderColor: color }}
                />
            </div>

            <div
                className={`absolute flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                    hover ? "scale-100" : "scale-0"
                }`}
                style={{
                    backgroundColor: color,
                    right: isIconRight ? 0 : "auto",
                    left: isIconRight ? "auto" : 0
                }}
                onMouseEnter={iconOnlyHover ? handleHoverStart : undefined}
                onMouseLeave={iconOnlyHover ? handleHoverEnd : undefined}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    stroke={iconColor}
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </div>
        </a>
    );
};

export default HoverButton;
