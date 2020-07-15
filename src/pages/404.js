import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Button from "../components/atoms/Button";
import { useTranslation } from "react-i18next";

function NotFoundPage() {
  const { t } = useTranslation("privacyAnd404");
  return (
    <Layout>
      <SEO title="404: Not found" />
      <section className="h-screen flex justify-center">
        <div className="self-center">
          <h1 className="text-3xl font-bold m-auto w-fit mb-4">
            {t("404Heading")}
          </h1>
          <Button
            href="/"
            className="text-lg"
            color="bg-indigo-700"
            hoverColor="hover:bg-indigo-600"
            size="lg"
          >
            {t("404BtnText")}
          </Button>
        </div>
      </section>
    </Layout>
  );
}

export default NotFoundPage;
