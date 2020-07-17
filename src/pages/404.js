import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Button from "../components/atoms/Button";
import { useTranslation } from "react-i18next";

function NotFoundPage() {
  const { t } = useTranslation(["privacyAnd404", "SEO"]);
  return (
    <Layout>
      <SEO
        title={t("SEO:404.title")}
        keywords={t("SEO:keywords").split(",")}
        description={t("SEO:description")}
        lang={t("SEO:lang")}
        pathname="/404"
      />
      <section className="h-screen flex justify-center">
        <div className="self-center">
          <h1 className="text-3xl font-bold m-auto w-fit mb-4">
            {t("privacyAnd404:404Heading")}
          </h1>
          <Button
            href="/"
            className="text-lg"
            color="bg-indigo-700"
            hoverColor="hover:bg-indigo-600"
            size="lg"
          >
            {t("privacyAnd404:404BtnText")}
          </Button>
        </div>
      </section>
    </Layout>
  );
}

export default NotFoundPage;
