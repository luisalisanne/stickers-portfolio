import i18next from "i18next";
import ChainedBackend from "i18next-chained-backend";
import HttpBackend from "i18next-http-backend";
import LocalStorageBackend from "i18next-localstorage-backend";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

void i18next
	.use(ChainedBackend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: "de",
		supportedLngs: ["de", "en"],
		ns: ["common"],
		defaultNS: "common",
		detection: {
			lookupCookie: "lang",
		},
		backend: {
			backends: [LocalStorageBackend, HttpBackend],
			backendOptions: [
				{
					// use 1s caching for development, otherwise 7d
					expirationTime:
						process.env.NODE_ENV === "development"
							? 1000
							: 7 * 24 * 60 * 60 * 1000,
					defaultVersion: "1.0.0",
				},
				{
					loadPath: "/i18n/{{lng}}/{{ns}}.json",
				},
			],
		},
	});
