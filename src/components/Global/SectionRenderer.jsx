const SectionRenderer = ({ sections = [] }) => {
    return (
        <>
            {sections.map(({ key, Component }) => (
                <div key={key} className="snap-start">
                    <Component />
                </div>
            ))}
        </>
    );
};

export default SectionRenderer;
