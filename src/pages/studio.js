import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Waves from "../components/waves";
import { Link, graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import InViewComp from "../components/inViewComp";
import MoovingLetters from "../components/MoovingLetters";
import { useTranslation } from "react-i18next";

function Studio() {
  const { t } = useTranslation("studio");

  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "bg-studio.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO keywords={[`letteweb`]} title="Studio" />

      <BackgroundImage
        className="min-h-screen flex"
        Tag="section"
        fluid={image.sharp.fluid}
        fadeIn="soft"
        id="studio-hero"
      >
        <div className="self-center max-w-80 w-full px-6 sm:px-10 lg:px-16">
          <MoovingLetters
            className="text-3xl font-bold"
            text={t("pageHeading")}
          />
        </div>
      </BackgroundImage>

      <section className="bg-coolGray-050 px-6 sm:px-10 lg:px-16 text-coolGray-900 flex">
        <div className="max-w-80 self-center py-16 sm:py-20 xxl:py-24">
          <h2 className="text-5xl sm:text-4xl sm:text-center mb-16 sm:mb-20 xxl:mb-24 font-bold">
            {t("workHeading")}
          </h2>
          <div id="points" className="flex flex-wrap max-w-5xl">
            <div className="w-full sm:w-1/2 mb-16 px-0 sm:px-6 ">
              <InViewComp className="max-w-sm mx-auto point  animated FadeUp">
                <h6 className="text-2xl font-bold mb-4 ">{t("pointOne")}</h6>
                <p className=" font-medium leading-relaxed">
                  {t("primaryButton")}
                </p>
              </InViewComp>
            </div>
            <div className="w-full sm:w-1/2 mb-16 px-0 sm:px-6 ">
              <InViewComp className="max-w-sm mx-auto point  animated FadeUp">
                <h6 className="text-2xl font-bold mb-4 ">{t("pointTwo")}</h6>
                <p className=" font-medium leading-relaxed">
                  {t("primaryButton")}
                </p>
              </InViewComp>
            </div>
            <div className="w-full sm:w-1/2 mb-16 px-0 sm:px-6 ">
              <InViewComp className="max-w-sm mx-auto point  animated FadeUp">
                <h6 className="text-2xl font-bold mb-4 ">
                  {t("primaryButton")}
                </h6>
                <p className=" font-medium leading-relaxed">
                  {t("primaryButton")}
                </p>
              </InViewComp>
            </div>
            <div className="w-full sm:w-1/2 mb-16 px-0 sm:px-6 ">
              <InViewComp className="max-w-sm mx-auto point  animated FadeUp">
                <h6 className="text-2xl font-bold mb-4 ">
                  {t("primaryButton")}
                </h6>
                <p className=" font-medium leading-relaxed">
                  More often than not websites are overflowing with unnecessary
                  additions. Rather than bringing value they increase expenses.
                  We do it differently. Our team works with minimalistic
                  principles in mind. They cut out the unnecessary and add only
                  something that brings value.
                </p>
              </InViewComp>
            </div>
            <div className="w-full sm:w-1/2 mb-16 px-0 sm:px-6">
              <InViewComp className="max-w-sm mx-auto point  animated FadeUp">
                <h6 className="text-2xl font-bold mb-4 ">
                  Tailored experience
                </h6>
                <p className=" font-medium leading-relaxed">
                  Whatever idea you may have. We will do everything we can to
                  bring it to life. Every project is unique and we are always
                  excited to find new solutions.
                </p>
              </InViewComp>
            </div>
            <div className="w-full sm:w-1/2 mb-16 px-0 sm:px-6">
              <InViewComp className="max-w-sm mx-auto point  animated FadeUp">
                <h6 className="text-2xl font-bold mb-4 ">
                  Beauty in functionality
                </h6>
                <p className=" font-medium leading-relaxed">
                  Each project is different. Nevertheless all of them have one
                  thing in common – our websites remain beautiful yet highly
                  functional.
                </p>
              </InViewComp>
            </div>
            <div className="w-full sm:w-1/2 mb-16 sm:mb-0 px-0 sm:px-6">
              <InViewComp className="max-w-sm mx-auto point  animated FadeUp">
                <h6 className="text-2xl font-bold mb-4 ">
                  Trust and communication
                </h6>
                <p className=" font-medium leading-relaxed">
                  It seems obvious but often is forgotten. Communication leads
                  to building trust and vice versa.
                </p>
              </InViewComp>
            </div>
            <div className="w-full sm:w-1/2 mb-0 px-0 sm:px-6">
              <InViewComp className="max-w-sm mx-auto point  animated FadeUp">
                <h6 className="text-2xl font-bold mb-4 ">From A to Z</h6>
                <p className=" font-medium leading-relaxed">
                  Need a fresh design or some text for your website? Do not
                  worry. We have got you covered trough the whole ride.
                </p>
              </InViewComp>
            </div>
          </div>
        </div>
      </section>

      <section
        id="who-we-are"
        className="px-6 sm:px-10 lg:px-16 bg-coolGray-100"
      >
        <div className=" max-w-80 mx-auto flex flex-col justify-center py-16 sm:py-20 xxl:py-24">
          <div className="flex text-coolGray-800 justify-center items-center">
            <Link
              to="/contact"
              className="text-2xl font-bold h-fit sm:leading-none"
            >
              {t("actionText")}
            </Link>
            <Link to="/contact" className="ml-4 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="arrow-studio-page"
                viewBox="0 0 512 512"
                fill="#5966D9"
              >
                <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      <Waves />
    </Layout>
  );
}

export default Studio;
