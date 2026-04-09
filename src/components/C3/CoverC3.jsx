import LanguageSelector from "../Global/LanguageSelector";
import { useTranslation } from "react-i18next";
import PageSkeleton from "../Global/PageSkeleton";
import { Link } from "react-router-dom";

const CoverC3 = () => {
    const { t } = useTranslation();

    return (
        <PageSkeleton
            assets={[
                    "/Img/C3/ImgC3.png",
                    "/Img/Global/Numbers/03.svg",
                    "/Logos/LogoPequeño.svg"
                ]}
            tintHex="#00B3BD"
            graceMs={2000}
            variant="cover"
        >
            <div
                className="relative min-h-screen w-screen overflow-hidden bg-no-repeat bg-center bg-cover bg-black z-10"
                style={{ backgroundImage: "url('/Img/C3/ImgC3.png')" }}
            >
                {/* Overlay oscuro suave */}
                <div className="absolute inset-0 bg-black/30 z-20" />

                <div className="lg:hidden absolute left-0 right-0 z-20" style={{ top: 'calc(30vh)' }}>
                    <div className="relative flex items-center">
                        <h2
                            className="relative z-30 pl-4 text-white text-[9vw] leading-[1.1] max-w-[65vw] uppercase"
                            style={{ fontFamily: "GothamBold" }}
                        >
                            {t("c3.cover.title.top")} <br /> {t("c3.cover.title.bottom")}
                        </h2>
                        <img
                            src="/Img/Global/Numbers/03.svg"
                            alt={t("c3.cover.alts.chapter", { num: 3 })}
                            title={t("c3.cover.alts.chapter", { num: 3 })}
                            className="absolute right-[5vw] w-[50vw] h-auto z-20"
                        />
                    </div>

                    <div className="pl-4 mt-[8vh]">
                        <h3
                            className="text-white text-[4.5vw] uppercase"
                            style={{ fontFamily: "GothamBold" }}
                        >
                            {t("c3.cover.subtitle")}
                        </h3>
                        <div className="w-[20vw] h-[1vh] bg-[#00B3BD] mt-[1vh]" />
                    </div>
                </div>

                <div className="hidden lg:block absolute top-[20vh] right-[25vh] z-30">
                    <img
                        src="/Img/Global/Numbers/03.svg"
                        alt={t("c3.cover.alts.chapter", { num: 3 })}
                        title={t("c3.cover.alts.chapter", { num: 3 })}
                        className="w-[50vh] h-auto"
                    />
                </div>

                <div className="hidden lg:block absolute top-[30vh] right-[50vh] z-30 text-white text-left">
                    <h2
                        className="text-white text-[8vh] leading-[1] max-w-[50vw] uppercase"
                        style={{ fontFamily: "GothamBold" }}
                    >
                        {t("c3.cover.title.top")} <br /> {t("c3.cover.title.bottom")}
                    </h2>
                    <h3
                        className="text-white text-[4vh] mt-[20vh] uppercase"
                        style={{ fontFamily: "GothamBold" }}
                    >
                        {t("c3.cover.subtitle")}
                    </h3>
                    <div className="w-[10vw] h-[1.5vh] bg-[#00B3BD] mt-[0.5vh]"></div>
                </div>

                <Link to='/'>
                <div className="absolute bottom-[5vh] left-4 z-30 lg:left-[3vw]">
                    <img
                        src="/Logos/LogoPequeño.svg"
                        alt={t("c3.cover.alts.greenBook")}
                        title={t("c3.cover.alts.greenBook")}
                        className="w-[35vw] h-auto lg:w-[22vh]"
                    />
                </div>
                </Link>

                <div className="absolute bottom-[5vh] right-6 z-50">
                    <LanguageSelector alignment="right" />
                </div>

                
            </div>
        </PageSkeleton>
    );
};

export default CoverC3;
