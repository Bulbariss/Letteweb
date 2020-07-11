import PropTypes from "prop-types";
import React, { Suspense } from "react";
import Header from "./header";
import Footer from "./footer";
// import { getCookie, googleAnalytics } from "../components/utils/CookieUtils";
import SmartOutline from "./utils/SmartOutline";
import "./i18n";
import Spinner from "./atoms/Spinner";

function Layout({ children }) {
  // useEffect(() => {
  //   if (getCookie("consent") === "true") {
  //     googleAnalytics();
  //   }
  // }, []);
  return (
    <Suspense fallback={<Spinner />}>
      <Header />
      <SmartOutline />
      <main>{children}</main>
      <Footer />
      {/* <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-171683260-1"
      ></script> */}
    </Suspense>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
