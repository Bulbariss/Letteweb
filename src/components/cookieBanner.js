import React from "react";
import { Link } from "gatsby";

function CookieBanner() {
  // function allowCookies() {
  //   setCookie("consent", true, 365);
  //   hideCookieBanner();
  // }

  // function rejectCookies() {
  //   setCookie("consent", false, 365);
  //   hideCookieBanner();
  // }

  // function initCookies() {
  //   const cookieConsent = getCookie("consent");
  //   if (cookieConsent === "true") {
  //     activateCookies();
  //   } else if (cookieConsent === "false") {
  //     deactivateCookies();
  //   } else {
  //     showCookieBanner();
  //   }
  // }

  // // Get cookie value
  // function getCookie(cname) {
  //   // eslint-disable-next-line
  //   const name = cname + "=";
  //   const decodedCookie = decodeURIComponent(document.cookie);
  //   const ca = decodedCookie.split(";");
  //   for (let i = 0; i < ca.length; i++) {
  //     let c = ca[i];
  //     // eslint-disable-next-line eqeqeq
  //     while (c.charAt(0) == " ") {
  //       c = c.substring(1);
  //     }
  //     // eslint-disable-next-line eqeqeq
  //     if (c.indexOf(name) == 0) {
  //       return c.substring(name.length, c.length);
  //     }
  //   }
  //   return "";
  // }

  // function activateCookies() {
  //   window["ga-disable-UA-154158494-1"] = false;
  //   googleAnalytics();
  // }

  // function deactivateCookies() {
  //   window["ga-disable-UA-154158494-1"] = true;
  // }

  // function showCookieBanner() {
  //   document.getElementById("cookie-banner").classList.add("block-imp");
  // }

  // function hideCookieBanner() {
  //   document.getElementById("cookie-banner").classList.remove("block-imp");
  // }

  // function googleAnalytics() {
  //   window.dataLayer = window.dataLayer || [];

  //   function gtag() {
  //     // eslint-disable-next-line
  //     dataLayer.push(arguments);
  //   }
  //   gtag("js", new Date());
  //   gtag("config", "UA-154158494-1");
  // }

  // // Create cookie that lives 365 days
  // function setCookie(cname, cvalue, exdays) {
  //   const d = new Date();
  //   d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  //   const expires = `expires=${d.toUTCString()}`;
  //   document.cookie = `${cname}=${cvalue};${expires};path=/`;
  // }

  // document.getElementById("btn-allow-cookies").addEventListener("click", () => {
  //   allowCookies();
  //   activateCookies();
  // });

  // document
  //   .getElementById("btn-reject-cookies")
  //   .addEventListener("click", () => {
  //     rejectCookies();
  //     deactivateCookies();
  //   });

  // document.querySelectorAll(".btn-change-cookie-preferences").forEach(btn => {
  //   btn.addEventListener("click", showCookieBanner);
  // });

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
