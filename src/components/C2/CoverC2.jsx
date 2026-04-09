import { useTranslation } from "react-i18next";
import PageSkeleton from "../Global/PageSkeleton";
import { Link } from "react-router-dom";

const CoverC2 = () => {
    const { t } = useTranslation();

    return (
        <PageSkeleton
            assets={[
                    "/Img/C2/ImgC2.png",
                    "/Img/Global/Numbers/02.svg",
                    "/Logos/LogoPequeño.svg"
                ]}
            tintHex="#5FCAD0"
            graceMs={2000}
            variant="cover"
        >
            <div
                className="relative min-h-screen w-screen overflow-hidden bg-no-repeat bg-center bg-cover bg-black z-10"
                style={{ backgroundImage: "url('/Img/C2/ImgC2.png')" }}
            >
                {/* Overlay oscuro suave */}
                <div className="absolute inset-0 bg-black/30 z-20" />

                <div className="lg:hidden absolute left-0 right-0 z-20" style={{ top: 'calc(30vh)' }}>
                    <div className="relative flex items-center">
                        <h2
                            className="relative z-30 pl-4 text-white text-[9vw] leading-[1.1] max-w-[65vw] uppercase"
                            style={{ fontFamily: "GothamBold" }}
                        >
                            {t("c2.cover.title.top")} <br /> {t("c2.cover.title.bottom")}
                        </h2>
                        <img
                            src="/Img/Global/Numbers/02.svg"
                            alt={t("c2.cover.chapterAlt", { num: 2 })}
                            className="absolute right-[5vw] w-[50vw] h-auto z-20"
                        />
                    </div>

                    <div className="pl-4 mt-[8vh]">
                        <h3
                            className="text-white text-[4.5vw] uppercase"
                            style={{ fontFamily: "GothamBold" }}
                        >
                            {t("c2.cover.subtitle.top")} <br /> {t("c2.cover.subtitle.bottom")}
                        </h3>
                        <div className="w-[20vw] h-[1vh] bg-[#5FCAD0] mt-[1vh]" />
                    </div>
                </div>

                <div className="hidden lg:block absolute top-[20vh] right-[25vh] z-30">
                    <img
                        src="/Img/Global/Numbers/02.svg"
                        alt={t("c2.cover.chapterAlt", { num: 2 })}
                        className="w-[50vh] h-auto"
                    />
                </div>

                <div className="hidden lg:block absolute top-[30vh] right-[50vh] z-30 text-white text-left">
                    <h2
                        className="text-white text-[8vh] leading-[1] max-w-[50vw] uppercase"
                        style={{ fontFamily: "GothamBold" }}
                    >
                        {t("c2.cover.title.top")} <br /> {t("c2.cover.title.bottom")}
                    </h2>
                    <h3
                        className="text-white text-[4vh] mt-[20vh] uppercase"
                        style={{ fontFamily: "GothamBold" }}
                    >
                        {t("c2.cover.subtitle.top")} <br /> {t("c2.cover.subtitle.bottom")}
                    </h3>
                    <div className="w-[10vw] h-[1.5vh] bg-[#5FCAD0] mt-[0.5vh]" />
                </div>

                <Link to='/'>
                <div className="absolute bottom-[5vh] left-4 z-30 lg:left-[3vw]">
                    <img
                        src="/Logos/LogoPequeño.svg"
                        alt={t("app.title")}
                        className="w-[35vw] h-auto lg:w-[22vh]"
                    />
                </div>
                /</Link>

                
            </div>
        </PageSkeleton>
    );
};

export default CoverC2;
