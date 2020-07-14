import { Link } from "gatsby";
import React, { useState } from "react";
import MobileMenuToggle from "./organisms/MobileMenuToggle";
import MobileMenu from "./organisms/MobileMenu";

function Header() {
  const [isLangListExpanded, toggleExpansion] = useState(false);

  const links = [
    {
      route: `/projects`,
      title: `PROJECTS`,
    },
    {
      route: `/studio`,
      title: `STUDIO`,
    },
    {
      route: `/contact`,
      title: `CONTACT`,
    },
  ];
  const langList = [
    {
      route: `/lv`,
      title: `LV`,
    },
    {
      route: `/ru`,
      title: `EN`,
    },
    {
      route: `/ru`,
      title: `RU`,
    },
  ];

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
              <Link
                className="link-animation noSelect px-4 py-3"
                key={link.title}
                to={link.route}
              >
                <span
                  data-letters={link.title}
                  className="leading-tight font-bold"
                >
                  {link.title}
                </span>
              </Link>
            ))}

            <div
              onClick={() => toggleExpansion(!isLangListExpanded)}
              onKeyPress={() => toggleExpansion(!isLangListExpanded)}
              className="link-animation noSelect px-4 py-3 w-52px"
              role="button"
              tabIndex="0"
            >
              <span className="leading-tight font-bold" data-letters="EN">
                EN
              </span>
            </div>
            <div
              className={`${
                isLangListExpanded ? `block` : `hidden`
              }  absolute right-0 mx-6
              sm:mx-10 lg:mx-16 text-sm`}
              id="lang-list"
            >
              {langList.map((link) => (
                <Link
                  key={link.title}
                  to={link.route}
                  className="link-animation noSelect px-4 py-3 w-full"
                >
                  <span
                    className="leading-tight font-bold"
                    data-letters={link.title}
                  >
                    {link.title}
                  </span>
                </Link>
              ))}
            </div>
          </nav>
          <MobileMenuToggle>
            <MobileMenu
              className="absolute left-0 top-0 h-screen"
              items={links}
              langList={langList}
            />
          </MobileMenuToggle>
        </div>
      </header>
    </>
  );
}

export default Header;
