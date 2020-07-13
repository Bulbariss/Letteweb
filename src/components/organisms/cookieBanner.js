import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import {
  handleRejectCookies,
  handleAllowCookies,
  googleAnalytics,
} from "../utils/CookieUtils";
import Button from "../atoms/Button";

function CookieBanner({
  isVisible,
  text,
  buttonDecline,
  buttonAccept,
  policyLink,
}) {
  let [visibility, setVisibility] = useState();

  useEffect(() => {
    setVisibility(isVisible["visible"]);
  }, [isVisible]);

  function accept() {
    handleAllowCookies();
    googleAnalytics();
    setVisibility(false);
  }

  function decline() {
    handleRejectCookies();
    setVisibility(false);
  }

  return (
    <div
      className={`fixed bottom-0 right-0 w-full pb-6 px-2 sm:px-4 z-50 text-dark ${
        !visibility && "hidden"
      }`}
    >
      <div
        id="cookie-banner-container"
        className="max-w-80 bg-indigo-200 flex rounded-lg py-4 sm:py-2 items-center flex-col sm:flex-row px-4 w-fit "
      >
        <p className="h-fit text-coolgrey-900 pb-2 md:pb-0">
          {text}{" "}
          <Link
            to="/privacy-policy"
            className="text-coolgrey-600 hover:text-coolgrey-400 underline"
          >
            {policyLink}
          </Link>
        </p>
        <div className="sm:ml-16 flex mt-2 sm:mt-0">
          <Button
            onClick={() => decline()}
            type="classic"
            className="border-2 border-dark hover:bg-grey-200"
          >
            {buttonDecline}
          </Button>
          <Button
            onClick={() => accept()}
            type="classic"
            className="text-white bg-indigo-700 hover:bg-indigo-600 ml-4"
          >
            {buttonAccept}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CookieBanner;
