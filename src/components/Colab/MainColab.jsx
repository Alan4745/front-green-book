import PageSkeleton from "../Global/PageSkeleton";
import SectionRenderer from "../Global/SectionRenderer";
import { colabSections } from "./sections";

const MainColab = () => {
    return (
        <PageSkeleton
            assets={[
                "/Logos/Logo.svg",
            ]}
            tintHex="#046C7F"
            graceMs={2000}
            variant="cover"
        >
            <div>
                <SectionRenderer sections={colabSections} />
            </div>
        </PageSkeleton>
    );
};

export default MainColab;
