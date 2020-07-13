import React from "react";
import { Link } from "gatsby";

class CookieBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: null
    };

    this.handleAllowCookies = this.handleAllowCookies.bind(this);
    this.handleRejectCookies = this.handleRejectCookies.bind(this);
  }

  componentDidMount() {
    const cookieConsent = this.getCookie("consent");
    if (cookieConsent === "true") {
      this.activateCookies();
    } else if (cookieConsent === "false") {
      this.deactivateCookies();
    } else {
      this.showCookieBanner();
    }
  }

  handleAllowCookies() {
    this.setCookie("consent", true, 365);
    this.hideCookieBanner();
  }

  handleRejectCookies() {
    this.setCookie("consent", false, 365);
    this.hideCookieBanner();
  }
  // Get cookie value
  getCookie(cname) {
    // eslint-disable-next-line
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      // eslint-disable-next-line eqeqeq
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      // eslint-disable-next-line eqeqeq
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  activateCookies() {
    window["ga-disable-UA-154158494-1"] = false;
    this.googleAnalytics();
  }

  deactivateCookies() {
    window["ga-disable-UA-154158494-1"] = true;
  }

  showCookieBanner() {
    this.setState({
      isVisible: true
    });
  }

  hideCookieBanner() {
    this.setState({
      isVisible: false
    });
  }

  googleAnalytics() {
    window.dataLayer = window.dataLayer || [];

    this.gtag = () => {
      // eslint-disable-next-line
      dataLayer.push(arguments);
    };
    this.gtag("js", new Date());
    this.gtag("config", "UA-154158494-1");
  }

  // Create cookie that lives 365 days
  setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    const expires = `expires=${d.toUTCString()}`;
    document.cookie = `${cname}=${cvalue};${expires};path=/`;
  }

  render() {
    return (
      <div
        className={` ${
          this.state.isVisible || this.props.isCookieBannerOpened
            ? ``
            : `hidden`
        } fixed bottom-0 w-full pb-4 px-4 z-50`}
      >
        <div
          id="cookie-banner-container"
          className="max-w-80 bg-indigo-200 flex rounded-lg py-4 sm:py-2 items-center flex-col sm:flex-row px-4 w-fit "
        >
          <p className="h-fit text-coolGray-900">
            This website uses cookies to ensure you get the best experience on
            our website.{" "}
            <Link
              to="/privacy_policy"
              className="text-coolGray-600 hover:text-coolGray-400 underline"
            >
              Our privacy policy
            </Link>
          </p>
          <div className="sm:ml-16 flex mt-2 sm:mt-0">
            <button
              onClick={this.handleRejectCookies}
              id="btn-reject-cookies"
              className="btn-cc text-coolGray-800 hover:text-coolGray-600"
            >
              Decline
            </button>
            <button
              onClick={this.handleAllowCookies}
              id="btn-allow-cookies"
              className="btn-cc text-white bg-indigo-700 hover:bg-indigo-600 ml-4 rounded-lg"
            >
              Allow cookies
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CookieBanner;
