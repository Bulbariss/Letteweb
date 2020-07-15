import PropTypes from "prop-types";
import React, { useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import { getCookie, googleAnalytics } from "../components/utils/CookieUtils";
import SmartOutline from "./utils/SmartOutline";
import "./i18n";

function Layout({ children }) {
  useEffect(() => {
    if (getCookie("consent") === "true") {
      googleAnalytics();
    }
  }, []);
  return (
    <>
      <Header />
      <SmartOutline />
      <main>{children}</main>
      <Footer />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-171683260-1"
      ></script>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
