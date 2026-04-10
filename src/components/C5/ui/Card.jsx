import ExpandButton from '../../Global/ExpandButton';

const Card = ({
    image,
    Number,
    description,
    title,
    highlightWords = [],
    onExpandClick = null,
    isActive = false,
    compact = false,
    expandLabel = '',
    className = ""
}) => {
    const highlightText = (text, wordsToHighlight) => {
        if (!wordsToHighlight || wordsToHighlight.length === 0) {
            return text;
        }

        let highlightedText = text;

        wordsToHighlight.forEach((word) => {
            const regex = new RegExp(`\\b(${word})\\b`, 'gi');
            highlightedText = highlightedText.replace(regex, '<span style="color: #AC7EF0;">$1</span>');
        });

        return highlightedText;
    };

    return (
        <article className={`relative h-full w-full overflow-hidden rounded-[1.1rem] bg-black shadow-xl ${className}`}>
            <img
                src={image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                draggable="false"
            />
            <div className={`absolute inset-0 ${compact ? 'bg-black/38' : 'bg-black/32'}`} />
            <div
                className={`absolute left-3 top-3 z-10 rounded-full bg-center bg-cover bg-no-repeat ${compact ? 'h-8 w-8' : 'h-10 w-10 md:h-12 md:w-12'}`}
                style={{ backgroundImage: `url(${Number})` }}
                aria-hidden="true"
            />
            {isActive && onExpandClick && (
                <ExpandButton
                    className="absolute right-3 top-3 z-20 bottom-auto"
                    onClick={() => onExpandClick(image)}
                    title={expandLabel}
                    aria-label={expandLabel}
                />
            )}
            <div className={`absolute inset-x-0 bottom-0 z-10 text-white ${compact ? 'p-3' : 'p-5 md:p-7'}`}>
                <h3
                    className={compact
                        ? 'max-w-[92%] text-[clamp(0.85rem,1.25vw,1.15rem)] leading-none'
                        : 'mb-2 max-w-[92%] text-[clamp(1.25rem,6vw,2rem)] leading-none md:text-[clamp(1.6rem,3vw,2.35rem)]'}
                    style={{ fontFamily: 'GothamBold' }}
                >
                    {title}
                </h3>
                {!compact && (
                    <p
                        className="max-w-[92%] text-[clamp(1rem,5vw,1.55rem)] leading-none md:max-w-[78%] md:text-[clamp(1.2rem,2.4vw,1.9rem)]"
                        style={{ fontFamily: 'GothamNormal' }}
                        dangerouslySetInnerHTML={{
                            __html: highlightText(description, highlightWords)
                        }}
                    />
                )}
            </div>
        </article>
    );
};

export default Card;
