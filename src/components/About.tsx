import { changeLanguage } from "i18next";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function About() {
  const [showAbout, setShowAbout] = useState(false);
  const { t, i18n } = useTranslation();
  const currentLang = i18n.resolvedLanguage;

  const toggleLang = (lang: string) => {
    changeLanguage(lang);
  };

  return (
    <>
      {/* Left side of the curtain */}
      <span
        className={`absolute fixed inset-0 z-100 flex h-screen w-screen flex-col justify-between bg-pink-200 p-1 transition-all duration-700 ease-in-out md:h-1/2 md:h-full md:w-1/2 md:p-2 ${
          !showAbout &&
          "mt-[-95vh] flex-col-reverse md:mt-0 md:ml-[-45%] md:flex-col"
        }`}
      >
        <header className={`flex ${!showAbout && "md:justify-end"}`}>
          <div
            className={`flex w-full justify-between gap-2 ${!showAbout ? "md:w-auto md:flex-col" : "md:flex-row"}`}
          >
            <button
              onClick={() => setShowAbout(!showAbout)}
              className="border-2 p-1 text-pink-500 hover:font-bold hover:text-orange-500"
            >
              {!showAbout
                ? t("about.buttonTextOpen")
                : t("about.buttonTextClose")}
            </button>
            <button
              onClick={() => toggleLang(currentLang === "en" ? "de" : "en")}
              className="border-2 p-1 text-pink-500 hover:font-bold hover:text-orange-500"
            >
              {t("global.language.switch")}
            </button>
          </div>
        </header>
        <div className="align-center mx-auto flex w-3/4 flex-col items-center gap-4">
          <h2 className="text-lg text-orange-500">{t("about.heading")}</h2>
          <img
            className="w-48 rounded-full"
            src="src/assets/images/luisa.jpg"
            alt=""
          />
          <h3 className="text-md font-bold">{t("about.subheading")}</h3>
          <p>{t("about.text")}</p>
        </div>
        <div className="mx-auto flex h-[20%] w-3/4 flex-col gap-1 border-t-1 border-dotted pt-4 text-center">
          <p className="font-bold">{t("about.contact.text")}</p>
          <a
            href="mailto:forck@posteo.de"
            className="text-orange-500 underline hover:text-pink-500"
          >
            {t("about.contact.email")}
          </a>
          <a
            className="text-orange-500 underline hover:text-pink-500"
            href="https://www.linkedin.com/in/lforck/"
          >
            {t("about.contact.linkedin")}
          </a>
          <a
            className="text-orange-500 underline hover:text-pink-500"
            href="https://www.linkedin.com/in/lforck/"
          >
            {t("about.contact.github")}
          </a>
        </div>
      </span>
      {/* Right side of the curtain */}
      <span
        onClick={() => setShowAbout(false)}
        className={`invisible absolute inset-y-0 right-0 z-100 w-1/2 bg-pink-200 opacity-50 transition-all duration-700 ease-in-out md:visible md:fixed ${
          !showAbout && "md:mr-[-45%]"
        }`}
      />
    </>
  );
}

export default About;
