import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation("projects");
  return (
    <Layout>
      <SEO keywords={[`letteweb`]} title="Contact" />
      <section className="h-screen flex justify-center">
        <h1 className="text-3xl flex self-center font-bold m-auto w-fit">
          {t("heading")}
        </h1>
      </section>
    </Layout>
  );
}

export default Projects;
