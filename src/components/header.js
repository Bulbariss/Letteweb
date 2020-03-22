import { Link } from "gatsby";
import React, { useState } from "react";

function Header() {
  const [isLangListExpanded, toggleExpansion] = useState(false);
  const [isMenuExpanded, menuExpansion] = useState(false);
  const links = [
    {
      route: `/projects`,
      title: `PROJECTS`
    },
    {
      route: `/studio`,
      title: `STUDIO`
    },
    {
      route: `/contact`,
      title: `CONTACT`
    }
  ];
  const langList = [
    {
      route: `/lv`,
      title: `LV`
    },
    {
      route: `/ru`,
      title: `RU`
    }
  ];

  return (
    <>
      <header className="fixed w-full">
        <div className="max-w-80 flex mx-auto h-full items-center px-6 sm:px-10 lg:px-16 relative">
          <div className="logo mr-auto w-auto h-auto">
            <Link className="text-2xl let-space-3 font-bold" to="/">
              LETTEWEB
            </Link>
          </div>
          <nav className="ml-auto w-auto h-auto text-sm  hidden sm:flex">
            {links.map(link => (
              <Link
                className="link-animation noSelect px-4 py-3"
                key={link.title}
                to={link.route}
              >
                <span
                  data-letters={link.title}
                  className="leading-tight font-medium"
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
              <span className="leading-tight font-medium" data-letters="EN">
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
              {langList.map(link => (
                <Link
                  key={link.title}
                  to={link.route}
                  className="link-animation noSelect px-4 py-3 w-full"
                >
                  <span
                    className="leading-tight font-medium"
                    data-letters={link.title}
                  >
                    {link.title}
                  </span>
                </Link>
              ))}
            </div>
          </nav>

          <div
            id="menuToggle"
            className={`${isMenuExpanded ? `active` : ` `} block sm:hidden`}
          >
            <label htmlFor="checkbox" className="label">
              <input
                type="checkbox"
                id="checkbox"
                className="checkbox"
                onClick={() => menuExpansion(!isMenuExpanded)}
                onKeyPress={() => menuExpansion(!isMenuExpanded)}
              />
            </label>
          </div>
        </div>
      </header>

      <nav id="menu" className={`${isMenuExpanded ? `active` : ` `} sm:hidden`}>
        <div id="menu-items" className="text-Bold">
          <ul>
            {links.map(link => (
              <li className="nav-list-item" key={link.title}>
                <Link className="link-animation noSelect" to={link.route}>
                  <span data-letters={link.title}>{link.title}</span>
                </Link>
              </li>
            ))}

            <div className="flex items-center nav-list-item">
              <div className="link-animation noSelect">
                <span data-letters="EN">EN</span>
              </div>

              {langList.map(link => (
                <Link
                  className="link-animation noSelect"
                  key={link.title}
                  to={link.route}
                >
                  <span
                    data-letters={link.title}
                    className="text-coolGray-400 text-4xl"
                  >
                    {link.title}
                  </span>
                </Link>
              ))}
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
