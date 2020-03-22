import PropTypes from "prop-types";
import React, { Fragment } from "react";
import Header from "./header";
import Footer from "./footer";
import CookieBanner from "./cookieBanner";

function Layout({ children }) {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>

      <Footer />
      <CookieBanner />
    </Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
