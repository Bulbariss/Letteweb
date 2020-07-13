import React from "react";

function MobileMenuToggle({ children }) {
  function toggleNav() {
    document
      .getElementsByTagName("body")[0]
      .classList.toggle("mobile-menu-active");
  }
  return (
    <>
      <div
        id="menuToggle"
        className="w-auto ml-auto py-0 px-4 flex md:hidden flex items-center"
      >
        <button
          onClick={toggleNav}
          aria-label="Toggle navigation"
          type="button"
          className="cursor-pointer relative block md:hidden w-10 h-10"
        />
      </div>
      {children}
      <style jsx global>{`
        /* Menu toggle */
        #menuToggle button::before,
        #menuToggle button::after {
          content: "";
          position: absolute;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #555;
          transition: all 0.2s ease;
        }

        #menuToggle button::before {
          top: 0.8rem;
        }

        #menuToggle button::after {
          bottom: 0.8rem;
        }

        body.mobile-menu-active #menuToggle button::before {
          -webkit-transform: translate3d(0, 0.35rem, 0) rotate(45deg);
          transform-origin: center center;
          transform: translate3d(0, 0.35rem, 0) rotate(45deg);
        }

        body.mobile-menu-active #menuToggle button::after {
          -webkit-transform: translate3d(0, -0.4rem, 0) rotate(-45deg);
          transform-origin: center center;
          transform: translate3d(0, -0.4rem, 0) rotate(-45deg);
        }
      `}</style>
    </>
  );
}

export default MobileMenuToggle;
