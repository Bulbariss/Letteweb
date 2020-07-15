import React from "react";
import HeaderLinks from "../atoms/HeaderLinks";
import { useTranslation } from "react-i18next";

function MobileMenu({ items, className, langList, activeLang }) {
  const { i18n } = useTranslation("footerAndCookies");

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };

  function handleOnClick() {
    document
      .getElementsByTagName("body")[0]
      .classList.remove("mobile-menu-active");
  }

  return (
    <div
      id="menuScreen"
      className={`flex justify-center items-start flex-col sm:hidden w-full bg-white text-5xl font-bold text-left ${className}`}
    >
      <ul id="menu-items" className="flex flex-col items-start">
        {items.map((link) => (
          <HeaderLinks
            onClick={() => handleOnClick()}
            link={link}
            key={link.route}
          />
        ))}
      </ul>
      <ul className="flex" id="mobileLangs">
        {langList.map((i) => (
          <HeaderLinks
            className={`${
              i.title.toUpperCase() === activeLang
                ? "text-black"
                : "text-gray-500"
            }`}
            onClick={() => (
              handleOnClick(), changeLanguage(i.title.toLowerCase())
            )}
            link={i}
            button
            key={i.route}
          />
        ))}
      </ul>
      <style jsx global>{`
        #menu-items a {
          color: #1e1e23;
          transition: 200ms;
        }

        #menuScreen {
          -webkit-transform: translate3d(0, -100%, 0);
          transform: translate3d(0, -100%, 0);
          transition: transform cubic-bezier(0.4, 0.01, 0.165, 0.99) 0.4s;
        }

        body.mobile-menu-active {
          overflow: hidden;
        }

        body.mobile-menu-active #menuScreen {
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
          overflow: hidden;
        }

        #menuScreen a,
        #menuScreen #mobileLangs {
          opacity: 0;
          -webkit-transform: translate3d(0, 2rem, 0);
          transform: translate3d(0, 2rem, 0);
          transition: opacity 0.2s ease, transform 0.3s ease;
        }

        body.mobile-menu-active #menuScreen a,
        body.mobile-menu-active #menuScreen #mobileLangs {
          opacity: 1;
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
          transition: opacity 0.2s ease,
            transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), color 0.2s ease;
        }

        body.mobile-menu-active #menuScreen a:nth-child(1) {
          -webkit-transition-delay: 0.5s;
          transition-delay: 0.5s;
        }

        body.mobile-menu-active #menuScreen a:nth-child(2) {
          -webkit-transition-delay: 0.6s;
          transition-delay: 0.6s;
        }

        body.mobile-menu-active #menuScreen a:nth-child(3) {
          -webkit-transition-delay: 0.7s;
          transition-delay: 0.7s;
        }

        body.mobile-menu-active #menuScreen a:nth-child(4),
        body.mobile-menu-active #menuScreen #mobileLangs {
          -webkit-transition-delay: 0.8s;
          transition-delay: 0.8s;
        }
      `}</style>
    </div>
  );
}

export default MobileMenu;
