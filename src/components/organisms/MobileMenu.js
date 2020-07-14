/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "gatsby";

function MobileMenu({ items, className, langList }) {
  const sides = items.map((value) => (
    <li className="p-4" key={value.title}>
      <Link
        className="hover:opacity-50"
        onClick={() => handleOnClick()}
        to={value.route}
      >
        {value.title}
      </Link>
    </li>
  ));

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
      <ul id="menu-items">{sides}</ul>
      <ul className="flex">
        {langList.map((i) => (
          <li className="p-4" key={i.title}>
            <Link
              className="hover:opacity-50"
              onClick={() => handleOnClick()}
              to={i.route}
            >
              {i.title}
            </Link>
          </li>
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

        #menuScreen li {
          opacity: 0;
          -webkit-transform: translate3d(0, 2rem, 0);
          transform: translate3d(0, 2rem, 0);
          transition: opacity 0.2s ease, transform 0.3s ease;
        }

        body.mobile-menu-active #menuScreen li {
          opacity: 1;
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
          transition: opacity 0.2s ease,
            transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), color 0.2s ease;
        }

        body.mobile-menu-active #menuScreen li:nth-child(1) {
          -webkit-transition-delay: 0.5s;
          transition-delay: 0.5s;
        }

        body.mobile-menu-active #menuScreen li:nth-child(2) {
          -webkit-transition-delay: 0.6s;
          transition-delay: 0.6s;
        }

        body.mobile-menu-active #menuScreen li:nth-child(3) {
          -webkit-transition-delay: 0.7s;
          transition-delay: 0.7s;
        }

        body.mobile-menu-active #menuScreen li:nth-child(4) {
          -webkit-transition-delay: 0.8s;
          transition-delay: 0.8s;
        }
      `}</style>
    </div>
  );
}

export default MobileMenu;
