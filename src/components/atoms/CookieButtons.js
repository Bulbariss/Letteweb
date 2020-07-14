import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import CookieBanner from "../organisms/cookieBanner";
import { getCookie } from "../utils/CookieUtils";

function CookieButtons({
  classes,
  privacy,
  cookies,
  text,
  buttonDecline,
  buttonAccept,
  policyLink,
}) {
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
          {/* Privacy Policy &#32; */}
          {privacy}
        </Link>
        <span className="px-1">|</span>
        <button
          onClick={() => setIsBannerVisible({ visible: true })}
          className="cursor-pointer hover-opacity btn-change-cookie-preferences inline"
        >
          {cookies}
        </button>
      </div>
      <CookieBanner
        text={text}
        buttonDecline={buttonDecline}
        buttonAccept={buttonAccept}
        policyLink={policyLink}
        isVisible={isBannerVisible}
      />
    </>
  );
}

export default CookieButtons;
