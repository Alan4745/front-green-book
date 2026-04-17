import LanguageSelector from "../Global/LanguageSelector";
import { useTranslation } from "react-i18next";
import PageSkeleton from "../Global/PageSkeleton";
import { Link } from "react-router-dom";
import SmartImage from "../Global/SmartImage";

const CoverC3 = () => {
    const { t } = useTranslation();

    return (
        <PageSkeleton
            assets={[
                    "/Img/C3/ImgC3.webp",
                    "/Img/Global/Numbers/03.svg",
                    "/Logos/LogoPequeño.svg"
                ]}
            tintHex="#00B3BD"
            graceMs={300}
            variant="cover"
        >
            <div
                className="relative min-h-screen w-screen overflow-hidden bg-no-repeat bg-center bg-cover bg-black z-10"
                style={{ backgroundImage: "url('/Img/C3/ImgC3.webp')" }}
            >
                {/* Overlay oscuro suave */}
                <div className="absolute inset-0 bg-black/30 z-20" />

                <div className="lg:hidden absolute left-0 right-0 z-20" style={{ top: 'calc(30vh)' }}>
                    <div className="relative flex items-center">
                        <h2
                            className="relative z-30 pl-4 text-white text-[9vw] sm:text-[7vw] md:text-[5.5vw] leading-[1.1] max-w-[65vw] uppercase"
                            style={{ fontFamily: "GothamBold" }}
                        >
                            {t("c3.cover.title.top")} <br /> {t("c3.cover.title.bottom")}
                        </h2>
                        {/* Número de capítulo mobile — eager (priority) */}
                        <SmartImage
                            src="/Img/Global/Numbers/03.svg"
                            alt={t("c3.cover.alts.chapter", { num: 3 })}
                            title={t("c3.cover.alts.chapter", { num: 3 })}
                            className="absolute right-[5vw] w-[50vw] h-auto z-20"
                            priority
                        />
                    </div>

                    <div className="pl-4 pr-4 mt-[6vh]">
                        <h3
                            className="text-white text-[2.5vh] uppercase tracking-wider"
                            style={{ fontFamily: "GothamBold" }}
                        >
                            {t("c3.cover.subtitle")}
                        </h3>
                        <div className="w-[15vw] h-[1.5vh] bg-[#00B3BD] mt-[0.5vh]" />
                    </div>
                </div>

                <div className="hidden lg:block absolute top-[20vh] right-[14vw] z-30">
                    {/* Número de capítulo desktop — eager (priority) */}
                    <SmartImage
                        src="/Img/Global/Numbers/03.svg"
                        alt={t("c3.cover.alts.chapter", { num: 3 })}
                        title={t("c3.cover.alts.chapter", { num: 3 })}
                        className="w-[50vh] h-auto"
                        priority
                    />
                </div>

                <div className="hidden lg:block absolute top-[20vh] right-[28vw] z-30 text-white text-left">
                    <h2
                        className="text-white text-[3.6vw] leading-[1.1] max-w-[45vw] uppercase"
                        style={{ fontFamily: "GothamBold" }}
                    >
                        {t("c3.cover.title.top")} <br /> {t("c3.cover.title.bottom")}
                    </h2>
                    <h3
                        className="text-white text-[2vw] mt-[3vw] uppercase"
                        style={{ fontFamily: "GothamBold" }}
                    >
                        {t("c3.cover.subtitle")}
                    </h3>
                    <div className="w-[10vw] h-[0.4vw] bg-[#00B3BD] mt-[0.5vw]"></div>
                </div>

                <Link to='/'>
                <div className="absolute bottom-[5vh] left-[3vw] z-30 max-lg:bottom-[2vh] max-lg:left-[4vw]">
                    {/* Logo portada — eager (priority) */}
                    <SmartImage
                        src="/Logos/LogoPequeño.svg"
                        alt={t("c3.cover.alts.greenBook")}
                        title={t("c3.cover.alts.greenBook")}
                        className="w-[22vh] h-auto max-lg:w-[15vh]"
                        priority
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
