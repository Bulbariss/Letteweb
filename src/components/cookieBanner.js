import React from "react";
import { Link } from "gatsby";

function CookieBanner() {
  return (
    <div
      id="cookie-banner"
      className="fixed bottom-0 w-full pb-4 px-4 hidden z-50"
    >
      <div
        id="cookie-banner-container"
        className="max-w-80 bg-indigo-200 flex rounded-lg py-4 sm:py-2 items-center flex-col sm:flex-row px-4 w-fit "
      >
        <p className="h-fit text-coolGray-900">
          This website uses cookies to ensure you get the best experience on our
          website.
          <Link
            to="/privacy_policy"
            className="text-coolGray-600 hover:text-coolGray-400 underline"
          >
            Our privacy policy
          </Link>
        </p>
        <div className="sm:ml-16 flex mt-2 sm:mt-0">
          <button
            id="btn-reject-cookies"
            className="btn-cc text-coolGray-800 hover:text-coolGray-600"
          >
            Decline
          </button>
          <button
            id="btn-allow-cookies"
            className="btn-cc text-white bg-indigo-700 hover:bg-indigo-600 ml-4 rounded-lg "
          >
            Allow cookies
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookieBanner;
