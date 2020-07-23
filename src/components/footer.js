import { Link } from "gatsby";
import React from "react";
import { useTranslation } from "react-i18next";
import CookieButtons from "./atoms/CookieButtons";

function Footer() {
  const { t } = useTranslation("footerAndCookies");
  return (
    <>
      <footer id="footer" className="bg-indigo-1000">
        <div
          className="flex flex-wrap max-w-80 px-6 sm:px-10 lg:px-16  pt-16 pb-10 sm:py-24 text-white"
          id="footer-container"
        >
          <div className="item w-full s flex flex-col sm:flex-row">
            <div className="w-full sm:w-full text-4xl pb-16 sm:pb-0 let-space-5 font-black">
              LETTEWEB
            </div>
            <div className="w-full sm:w-full flex">
              <Link to="/contact" className="mb-auto text-xl hover-opacity  ">
                {t("getInTouch")}
              </Link>
            </div>
          </div>
          <div className="item w-full pt-10 flex flex-col-reverse sm:flex-row">
            <div className="w-full sm:w-full flex flex-col">
              <p className="h-fit mt-auto pb-2">
                © 2019 - {new Date().getFullYear()}, Letteweb
              </p>
              <CookieButtons
                text={t("bannerText")}
                buttonDecline={t("buttonDecline")}
                buttonAccept={t("buttonAccept")}
                policyLink={t("policyLink")}
                privacy={t("privacy")}
                cookies={t("cookies")}
                classes={"w-full md:w-auto md:text-base md:pt-0"}
              />
            </div>
            <div className="w-full sm:w-full flex pb-12 sm:pb-0">
              <div className="w-1/2 lg:w-4/12">
                <p className="text-sm mb-2 font-bold"> {t("contacts")}</p>
                <a
                  href="mailto:work@letteweb.lv"
                  className="block w-fit hover-opacity mb-2"
                >
                  Email
                </a>
                <Link to="/" className="block w-fit hover-opacity">
                  Whatsapp
                </Link>
              </div>
              <div className="w-1/2 lg:w-4/12">
                <p className="text-sm mb-2 font-bold">{t("followUs")}</p>
                <Link to="/" className="block w-fit mb-2 hover-opacity">
                  Instagram
                </Link>
                <Link to="/" className="block w-fit hover-opacity">
                  Facebook
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
