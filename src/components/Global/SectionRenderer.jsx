const SectionRenderer = ({ sections = [] }) => {
    return (
        <>
            {sections.map(({ key, Component }) => (
                <Component key={key} />
            ))}
        </>
    );
};

export default SectionRenderer;
