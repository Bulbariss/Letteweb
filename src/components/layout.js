import PropTypes from "prop-types";
import React, { Fragment } from "react";
import Header from "./header";
import Footer from "./footer";
import CookieBanner from "./cookieBanner";

function Layout({ children }) {
  return (
    <Fragment>
      <Header />
      <main className="max-w-80 mx-auto flex flex-col px-6 sm:px-10 lg:px-16 justify-center min-h-screen">
        {children}
      </main>

      <Footer />
      <CookieBanner />
    </Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
