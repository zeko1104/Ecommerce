import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources ={
 en:{
    translation:{
      Home:'Home',
      About:'About',
      Products:'Products',
      Login:"Login",
      Register:"Register"
    }
 },
 az:{
    translation:{
        Home:'Ana Səhifə',
        About:'Haqqında',
        Products:'Məhsullar',
        Login:"Giriş",
        Register:"Qeydiyyat",
        Laptops:"Notbuklar",
    }
 }
}

i18n

  .use(initReactI18next)
//   .use(Backend)
//   .use(LanguageDetector)
  .init({
    lang: 'az',
    resources
  })

  export default i18n;