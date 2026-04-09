import LanguageSelector from "../Global/LanguageSelector";
import { useTranslation } from "react-i18next";
import PageSkeleton from "../Global/PageSkeleton";
import { Link } from "react-router-dom";

const CoverC6 = () => {
    const { t } = useTranslation();

    return (
        <PageSkeleton
            assets={[
                "/Img/C6/ImgC6.png",
                "/Img/Global/Numbers/06.svg",
                "/Logos/LogoPequeño.svg"
            ]}
            tintHex="#00AE43"
            graceMs={2000}
            variant="cover"
        >
            <div
                className="relative min-h-screen w-screen overflow-hidden bg-no-repeat bg-center bg-cover bg-black"
                style={{ backgroundImage: "url('/Img/C6/ImgC6.png')" }}
            >
                {/* Overlay oscuro suave */}
                <div className="absolute inset-0 bg-black/30 z-20" />

                <div className="lg:hidden absolute left-0 right-0 z-20" style={{ top: 'calc(30vh)' }}>
                    <div className="relative flex items-center">
                        <h2
                            className="relative z-30 pl-4 text-white text-[9vw] leading-[1.1] max-w-[65vw] uppercase"
                            style={{ fontFamily: "GothamBold" }}
                        >
                            {t("c6.cover.title.line1")} <br />
                            {t("c6.cover.title.line2")} <br />
                            {t("c6.cover.title.line3")}
                        </h2>
                        <img
                            src="/Img/Global/Numbers/06.svg"
                            alt={t("c6.cover.alts.chapter", { num: 6 })}
                            title={t("c6.cover.alts.chapter", { num: 6 })}
                            className="absolute right-[5vw] w-[50vw] h-auto z-20"
                        />
                    </div>

                    <div className="pl-4 mt-[8vh]">
                        <h3
                            className="text-white text-[4.5vw] uppercase"
                            style={{ fontFamily: "GothamBold" }}
                        >
                            {t("c6.cover.subtitle")}
                        </h3>
                        <div className="w-[20vw] h-[1vh] bg-[#00AE43] mt-[1vh]"></div>
                    </div>
                </div>

                <div className="hidden lg:block absolute top-[20vh] right-[25vh] z-30">
                    <img
                        src="/Img/Global/Numbers/06.svg"
                        alt={t("c6.cover.alts.chapter", { num: 6 })}
                        title={t("c6.cover.alts.chapter", { num: 6 })}
                        className="w-[50vh] h-auto"
                    />
                </div>

                <div className="hidden lg:block absolute top-[25vh] right-[40vh] z-30 text-white text-left">
                    <h2
                        className="text-white text-[8vh] leading-[1] max-w-[60vw] uppercase"
                        style={{ fontFamily: "GothamBold" }}
                    >
                        {t("c6.cover.title.line1")} <br />
                        {t("c6.cover.title.line2")} <br />
                        {t("c6.cover.title.line3")}
                    </h2>
                    <h3
                        className="text-white text-[4vh] mt-[10vh] uppercase"
                        style={{ fontFamily: "GothamBold" }}
                    >
                        {t("c6.cover.subtitle")}
                    </h3>
                    <div className="w-[10vw] h-[1.5vh] bg-[#00AE43] mt-[0.5vh]"></div>
                    <p
                        className="text-white text-justify text-[3vh] mt-[2vh] max-w-[35vw]"
                        style={{ fontFamily: "GothamNormal" }}
                    >
                        {t("c6.cover.body")}
                    </p>
                </div>

                <Link to='/'>
                <div className="absolute bottom-[5vh] left-4 z-30 lg:left-[5vh]">
                    <img
                        src="/Logos/LogoPequeño.svg"
                        alt={t("c6.cover.alts.greenBook")}
                        title={t("c6.cover.alts.greenBook")}
                        className="w-[35vw] h-auto lg:w-[22vh]"
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

export default CoverC6;
