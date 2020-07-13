import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import CookieBanner from "../organisms/cookieBanner";
import { getCookie } from "../utils/CookieUtils";

function CookieButtons({ classes }) {
  let [isBannerVisible, setIsBannerVisible] = useState({
    visible: false,
  });
  useEffect(() => {
    if (!getCookie("consent")) {
      setIsBannerVisible({ visible: true });
    }
  }, []);

  return (
    <>
      <div className={classes}>
        <Link className="hover-opacity" to="/privacy-policy">
          Privacy Policy &#32;
        </Link>
        <span className="px-1">|</span>
        <button
          onClick={() => setIsBannerVisible({ visible: true })}
          className="cursor-pointer hover-opacity btn-change-cookie-preferences inline"
        >
          Cookie preferences
        </button>
      </div>
      <CookieBanner isVisible={isBannerVisible} />
    </>
  );
}

export default CookieButtons;
