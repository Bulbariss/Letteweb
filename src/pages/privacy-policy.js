import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { useTranslation } from "react-i18next";

function NotFoundPage() {
  const { t } = useTranslation(["privacyAnd404", "SEO"]);
  return (
    <Layout>
      <SEO
        title={t("SEO:privacy.title")}
        keywords={t("SEO:keywords").split(",")}
        description={t("SEO:description")}
        lang={t("SEO:lang")}
        pathname="/privacy-policy"
      />
      <section>
        <div className="px-6 sm:px-10 lg:px-16 mx-auto pt-24 py-10 text-lg relative max-w-2xl text-muted-black">
          <h1 className="mb-4 text-4xl font-bold">
            {t("privacyAnd404:privacyHeader")}
          </h1>
          <h2 className="mb-4 text-2xl font-bold">
            {t("privacyAnd404:headerOne")}
          </h2>
          <p className="mb-6">{t("privacyAnd404:textOne")}</p>
          <h2 className="mb-4 text-2xl font-bold">
            {t("privacyAnd404:headerTwo")}
          </h2>
          <p className="mb-4">{t("privacyAnd404:textTwo")}</p>
          <ul className="list-disc padding-inline-start">
            <li className="mb-4">{t("privacyAnd404:textTwoPointOne")}</li>
            <li className="mb-6">{t("privacyAnd404:textTwoPointTwo")}</li>
          </ul>
          <h2 className="mb-4 text-2xl font-bold">
            {t("privacyAnd404:headerThree")}
          </h2>
          <p className="mb-4">{t("privacyAnd404:textThree")}</p>
          <ul className="list-disc padding-inline-start">
            <li className="mb-6">
              {t("privacyAnd404:textThreePointOne")}{" "}
              <a
                href="https://support.google.com/analytics/answer/6004245?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover-opacity break-all"
              >
                {t("privacyAnd404:textThreeButton")}
              </a>
              .
            </li>
          </ul>
          <h2 className="mb-4 text-2xl font-bold">
            {t("privacyAnd404:headerFour")}
          </h2>
          <p className="mb-6">
            {t("privacyAnd404:textFour")}{" "}
            <a href="mailto:work@letteweb.lv" className="underline">
              info@letteweb.lv
            </a>
          </p>
        </div>
      </section>
    </Layout>
  );
}

export default NotFoundPage;
