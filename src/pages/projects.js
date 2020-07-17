import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation(["projects", "SEO"]);
  return (
    <Layout>
      <SEO
        title={t("SEO:projects.title")}
        keywords={t("SEO:keywords").split(",")}
        description={t("SEO:description")}
        lang={t("SEO:lang")}
        pathname="/projects"
      />
      <section className="h-screen flex justify-center">
        <h1 className="text-3xl flex self-center font-bold m-auto w-fit">
          {t("projects:heading")}
        </h1>
      </section>
    </Layout>
  );
}

export default Projects;
