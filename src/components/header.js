import { Link } from "gatsby";
import React, { useState } from "react";
import MobileMenuToggle from "./organisms/MobileMenuToggle";
import MobileMenu from "./organisms/MobileMenu";
import HeaderLinks from "./atoms/HeaderLinks";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation("footerAndCookies");

  const [isLangListExpanded, toggleExpansion] = useState(false);

  const links = [
    {
      route: `/projects`,
      title: t("linkOne").toUpperCase(),
    },
    {
      route: `/studio`,
      title: t("linkTwo").toUpperCase(),
    },
    {
      route: `/contact`,
      title: t("linkThree").toUpperCase(),
    },
  ];

  const langList = [
    {
      route: `/${t("langOne")}`,
      title: t("langOne").toUpperCase(),
    },
    {
      route: `/${t("langTwo")}`,
      title: t("langTwo").toUpperCase(),
    },
    {
      route: `/${t("langThree")}`,
      title: t("langThree").toUpperCase(),
    },
  ];

  const langs = langList.filter(
    (word) => word.title !== i18n.languages[0].toUpperCase()
  );

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };

  return (
    <>
      <header className="fixed w-full">
        <div className="max-w-80 flex mx-auto h-full items-center px-6 sm:px-10 lg:px-16">
          <div className="logo mr-auto w-auto h-auto">
            <Link className="text-2xl let-space-3 font-black" to="/">
              LETTEWEB
            </Link>
          </div>
          <nav className="ml-auto w-auto h-auto text-sm hidden sm:flex">
            {links.map((link) => (
              <HeaderLinks link={link} key={link.route} />
            ))}
            <HeaderLinks
              className="w-52px"
              onClick={() => toggleExpansion(!isLangListExpanded)}
              button
              link={{ title: `${i18n.languages[0].toUpperCase()}` }}
            />
            {isLangListExpanded && (
              <div
                className={`absolute flex flex-col items-end w-full max-w-80 right-0 mx-6
              sm:mx-10 lg:mx-16 text-sm`}
                id="lang-list"
              >
                {langs.map((link) => (
                  <HeaderLinks
                    className="w-52px"
                    onClick={() => (
                      changeLanguage(link.title.toLowerCase()),
                      toggleExpansion(!isLangListExpanded)
                    )}
                    button
                    link={link}
                    key={link.route}
                  />
                ))}
              </div>
            )}
          </nav>
          <MobileMenuToggle>
            <MobileMenu
              className="absolute left-0 top-0 h-screen"
              items={links}
              langList={langList}
              activeLang={i18n.languages[0].toUpperCase()}
            />
          </MobileMenuToggle>
        </div>
      </header>
      <style jsx>
        {`
  header {
    height: 80px;
    z-index: 1000;
  }

  #lang-toggle {
    padding: 0;
    text-align: center;
    background-color: rgba(0, 0, 0, 0);
    box-shadow: none;
    min-width: fit-content;
    top: 50px !important;
  }

  #lang-toggle span {
    padding-top: 13px;
    width: fit-content;
    margin: auto;
  }


  #lang-toggle {
    color: #000;
    font-size: 14px;
    width: 48.5px;
  }

  #lang-toggle a {
    height: 40px;
  }

  #lang-list {
    line-height: 0;
    top: 61px;
    width: 52px;
  `}
      </style>
    </>
  );
}

export default Header;
