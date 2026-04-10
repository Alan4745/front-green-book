import LanguageSelector from "../Global/LanguageSelector";
import { useTranslation } from "react-i18next";
import PageSkeleton from "../Global/PageSkeleton";
import { Link } from "react-router-dom";

const CoverC5 = () => {
    const { t } = useTranslation();

    return (
        <PageSkeleton
            assets={[
                "/Img/C5/ImgC5.jpg",
                "/Img/Global/Numbers/05.svg",
                "/Logos/LogoPequeño.svg"
            ]}
            tintHex="#562E91"
            graceMs={2000}
            variant="cover"
        >
            <div
                className="relative min-h-screen w-screen overflow-hidden bg-no-repeat bg-center bg-cover bg-black z-10"
                style={{ backgroundImage: "url('/Img/C5/ImgC5.jpg')" }}
            >
                {/* Overlay oscuro suave */}
                <div className="absolute inset-0 bg-black/50 z-20" />

                <figcaption
                    className="hidden lg:block absolute top-[2vh] left-[2vh] z-30 text-white text-sm px-3 py-1 rounded"
                    style={{ fontFamily: "GothamNormal" }}
                >
                    {t("c5.cover.credits", { defaultValue: "Créditos: Rocío Silva" })}
                </figcaption>

                <div className="lg:hidden absolute left-0 right-0 z-20" style={{ top: 'calc(30vh)' }}>
                    <div className="relative flex items-center">
                        <h2
                            className="relative z-30 pl-4 text-white text-[9vw] sm:text-[7vw] md:text-[5.5vw] leading-[1.1] max-w-[65vw] uppercase"
                            style={{ fontFamily: "GothamBold" }}
                        >
                            {t("c5.cover.title.top")} <br /> {t("c5.cover.title.bottom")}
                        </h2>
                        <img
                            src="/Img/Global/Numbers/05.svg"
                            alt={t("c5.cover.alts.chapter", { num: 5 })}
                            title={t("c5.cover.alts.chapter", { num: 5 })}
                            className="absolute right-[5vw] w-[50vw] h-auto z-20"
                        />
                    </div>

                    <div className="pl-4 mt-[8vh]">
                        <h3
                            className="text-white text-[4.5vw] sm:text-[3.5vw] md:text-[2.8vw] uppercase"
                            style={{ fontFamily: "GothamBold" }}
                        >
                            {t("c5.cover.subtitle.line1")} <br /> {t("c5.cover.subtitle.line2")}
                        </h3>
                        <div className="w-[20vw] h-[1vh] bg-[#562E91] mt-[1vh]"></div>
                    </div>
                </div>

                <div className="hidden lg:block absolute top-[20vh] right-[14vw] z-30">
                    <img
                        src="/Img/Global/Numbers/05.svg"
                        alt={t("c5.cover.alts.chapter", { num: 5 })}
                        title={t("c5.cover.alts.chapter", { num: 5 })}
                        className="w-[50vh] h-auto"
                    />
                </div>

                <div className="hidden lg:block absolute top-[20vh] right-[28vw] z-30 text-white text-left">
                    <h2
                        className="text-white text-[4.5vw] leading-[1.1] max-w-[45vw] uppercase"
                        style={{ fontFamily: "GothamBold" }}
                    >
                        {t("c5.cover.title.top")} <br /> {t("c5.cover.title.bottom")}
                    </h2>
                    <h3
                        className="text-white text-[2vw] mt-[3vw] uppercase"
                        style={{ fontFamily: "GothamBold" }}
                    >
                        {t("c5.cover.subtitle.line1")} <br /> {t("c5.cover.subtitle.line2")}
                    </h3>
                    <div className="w-[10vw] h-[0.4vw] bg-[#562E91] mt-[0.5vw]"></div>
                </div>

                <Link to='/'>
                <div className="absolute bottom-[5vh] left-4 z-30 lg:left-[3vw]">
                    <img
                        src="/Logos/LogoPequeño.svg"
                        alt={t("c5.cover.alts.greenBook")}
                        title={t("c5.cover.alts.greenBook")}
                        className="w-[35vw] sm:w-[28vw] md:w-[22vw] h-auto lg:w-[22vh]"
                    />
                </div>
                /</Link>

                <div className="absolute bottom-[5vh] right-6 z-50">
                    <LanguageSelector alignment="right" />
                </div>
            </div>
        </PageSkeleton>
    );
};

export default CoverC5;
