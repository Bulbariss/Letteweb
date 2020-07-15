import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="Privacy Policy" />
      <section>
        <div className="px-6 sm:px-10 lg:px-16 mx-auto pt-24 py-10 text-lg relative max-w-2xl text-muted-black">
          <h1 className="mb-4 text-4xl font-bold">Privacy Policy</h1>
          <h2 className="mb-4 text-2xl font-bold">What Are Cookies</h2>
          <p className="mb-6">
            As is common practice with almost all professional websites this
            site uses cookies, which are tiny files that are downloaded to your
            computer, to improve your experience. This page describes what
            information they gather, how we use it and why we sometimes need to
            store these cookies. We will also share how you can prevent these
            cookies from being stored however this may downgrade or
            &apos;break&apos; certain elements of the sites functionality.
          </p>
          <h2 className="mb-4 text-2xl font-bold">How We Use Cookies</h2>
          <p className="mb-4">
            When you use and access the Service, we may place a number of
            cookies files in your web browser. We use cookies for the following
            purposes:
          </p>
          <ul className="list-disc padding-inline-start">
            <li className="mb-4">
              Cookies Policy / Notice Acceptance Cookies: These Cookies identify
              if users have accepted the use of cookies on the Website.
            </li>
            <li className="mb-6">
              Tracking and Performance Cookies: These Cookies are used to track
              information about traffic to the Website and how users use the
              Website. The information gathered via these Cookies may directly
              or indirectly identify you as an individual visitor. This is
              because the information collected is typically linked to a
              pseudonymous identifier associated with the device you use to
              access the Website. We may also use these Cookies to test new
              advertisements, pages, features or new functionality of the
              Website to see how our users react to them.
            </li>
          </ul>

          <h2 className="mb-4 text-2xl font-bold">Analytics</h2>
          <p className="mb-4">
            We may use third-party Service providers to monitor and analyze the
            use of our Service.
          </p>
          <ul className="list-disc padding-inline-start">
            <li className="mb-6">
              Google Analytics is a web analytics service. You can visit their
              Privacy Policy page here:
              <a
                href="https://support.google.com/analytics/answer/6004245?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover-opacity break-all"
              >
                support.google.com/analytics/answer/6004245?hl=en
              </a>
            </li>
          </ul>
          <h2 className="mb-4 text-2xl font-bold">Change your preferences</h2>
          <p className="mb-6">
            You can change your cookie preferences by pressing{" "}
            <button className="btn-change-cookie-preferences cursor-pointer underline hover-opacity">
              here
            </button>
            .
          </p>
          <h2 className="mb-4 text-2xl font-bold">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, You can contact
            us: info@letteweb.lv
          </p>
        </div>
      </section>
    </Layout>
  );
}

export default NotFoundPage;
