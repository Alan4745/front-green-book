import CoverColab from "./CoverColab";
import PageSkeleton from "../Global/PageSkeleton";

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
                <CoverColab />
            </div>
        </PageSkeleton>
    );
}

export default MainColab;