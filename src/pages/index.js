import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Waves from "../components/waves";
import ContactForm from "../components/organisms/ContactForm";
import BackgroundImage from "gatsby-background-image";
import mouseSvg from "../images/mouse.svg";
import teamPhoto from "../images/team.jpg";
import personPhoto from "../images/person2.jpg";
import InViewComp from "../components/inViewComp";
import Button from "../components/atoms/Button";
import { useTranslation } from "react-i18next";
// import Testimonies from "../components/Testimonies";

function IndexPage() {
  const { t } = useTranslation("index");

  // const testimoniesText = {
  //   textOne:
  //      {t("testimonyOne")},
  //   textTwo:
  //      {t("testimonyTwo")},
  //   textThree:
  //      {t("testimonyThree")},
  // };

  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "bg-hero.jpg" }) {
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
      <SEO keywords={[`letteweb`]} title="Home" />
      <BackgroundImage
        className="min-h-screen flex"
        Tag="section"
        fluid={image.sharp.fluid}
        fadeIn="soft"
      >
        <div className="px-6 py-12 sm:px-10 lg:px-16 w-full mx-auto self-center max-w-80 w-fit text-left sm:text-center ">
          <h1 className="font-bold text-4xl mt-0 sm:mt-12 md:text-6xl  max-w-4xl leading-none mx-auto whitespace-pre-line">
            {t("heading")}
          </h1>
          <p className="text-lg md:text-xl lg:text-xl pb-4 leading-snug  text-muted-black max-w-sm lg:max-w-xl mx-auto mt-4">
            {t("secondHeading")}
          </p>
          <div className="inline-flex flex-col md:flex-row">
            <Button
              href="/contact"
              className="text-lg"
              color="indigo-700"
              hoverColor="indigo-600"
              size="lg"
            >
              {t("primaryButton")}
            </Button>
            <Button
              variant="outline"
              color="black"
              textColor="black"
              hoverColor="gray-700"
              hoverTextColor="gray-700"
              href="/about"
              className="md:ml-4 mt-2 md:mt-0 text-lg"
              size="lg"
            >
              {t("secondaryButton")}
            </Button>
          </div>
        </div>
        <img
          src={mouseSvg}
          className="absolute bottom-0 center-y z-10"
          id="mouse-img"
          alt="Scroll down"
        />
      </BackgroundImage>

      <section id="what-we-do" className="bg-coolGray-050  flex">
        <div className="max-w-80 mx-auto flex flex-col px-6 sm:px-10 lg:px-16 justify-center overflow-hidden">
          <div className="justify-center py-16 md:py-24">
            <div className="flex flex-col sm:flex-row ">
              <InViewComp className="sm:w-1/2 sm:order-last z-10 sm:h-1/2 self-center">
                <img
                  src={teamPhoto}
                  className="animated FadeLeft rounded-lg"
                  alt="Team"
                />
              </InViewComp>

              <div className="sm:pr-8  max-w-2xl sm:w-1/2 self-center z-10">
                <InViewComp className="max-w-md mt-8 sm:mt-0 ">
                  <h2 className="text-2xl sm:text-lx lg:text-2xl font-bold text-coolGray-900 leading-snug animated FadeRight pb-2">
                    {t("testimonyHeading")}
                  </h2>
                  <p className="text-coolGray-700 leading-relaxed">
                    {t("testimonyText")}
                  </p>
                </InViewComp>

                {/* <Button
                  href="/studio"
                  className="mt-4"
                  color="indigo-700"
                  hoverColor="indigo-600"
                >
                  See more
                </Button> */}
              </div>
            </div>
            <div className="flex items-center sm:justify-between flex-col sm:flex-row pt-8 text-coolGray-700 leading-relaxed">
              {/* <Testimonies text={testimoniesText} /> */}
            </div>
          </div>
        </div>
      </section>

      <section
        id="who-we-are"
        className="px-6 sm:px-10 lg:px-16 bg-coolGray-800"
      >
        <div className=" max-w-80 mx-auto flex flex-col justify-center py-16 md:py-24">
          <h2 className="text-4xl font-bold  pb-12 underline text-center text-indigo-100">
            {t("teamHeading")}
          </h2>
          <div className="flex flex-col sm:flex-row self-center text-left max-w-5xl overflow-hidden">
            <div className="flex w-full sm:w-1/2 ">
              <InViewComp className="max-w-xs p-4 z-10 animated FadeUp">
                <img
                  className=" rounded-lg mb-4"
                  src={personPhoto}
                  alt="Erlends Morozo"
                />
                <p className="font-bold text-indigo-100">{t("nameOne")}</p>
                <p className="text-indigo-200">{t("occupation‎One")}</p>
              </InViewComp>
              <InViewComp className=" max-w-xs  p-4 z-10 animated FadeUp anim-delay-05">
                <img
                  className=" rounded-lg mb-4"
                  src={personPhoto}
                  alt="Vladimir Radionovsky"
                />
                <p className="font-bold text-indigo-200">{t("nameTwo")}</p>
                <p className="text-indigo-200">{t("occupationTwo")}</p>
              </InViewComp>
            </div>
            <div className="flex w-fit  w-full sm:w-1/2 ">
              <InViewComp className=" max-w-xs p-4 z-10 animated FadeUp   anim-delay-06">
                <img
                  className=" rounded-lg mb-4"
                  src={personPhoto}
                  alt="John Doe"
                />
                <p className="font-bold text-indigo-200">{t("nameThree")}</p>
                <p className="text-indigo-200">{t("occupationThree")}</p>
              </InViewComp>
              <InViewComp className=" max-w-xs p-4 z-10  animated FadeUp  anim-delay-07">
                <img
                  className=" rounded-lg mb-4"
                  src={personPhoto}
                  alt="John Doe"
                />
                <p className="font-bold text-indigo-200">{t("nameFour")}</p>
                <p className="text-indigo-200">{t("occupationFour")}</p>
              </InViewComp>
            </div>
          </div>
        </div>
      </section>

      <section
        id="our-portfolio"
        className="bg-coolGray-100 px-6 sm:px-10 lg:px-16 py-16 sm:py-24"
      >
        <div className=" max-w-80 mx-auto flex flex-col text-center px-6 sm:px-10 lg:px-16 h-56">
          <h2 className="text-4xl font-bold py-8 underline text-coolGray-900">
            {t("projectsHeading")}
          </h2>
          <h1 className="text-3xl flex self-center font-bold m-auto w-fit text-coolGray-900">
            {t("projectsText")}
          </h1>
        </div>
      </section>

      <section id="get-in-touch" className="bg-coolGray-100">
        <div className="min-h-screen max-w-80 mx-auto flex flex-col justify-center px-6 sm:px-10 lg:px-16 ">
          <InViewComp
            id="form-main-page"
            className=" w-full pt-12 pb-32 md:pb-40 animated FadeUp"
          >
            <div className="max-w-lg mx-auto p-4 sm:p-6 shadow-lg sm:shadow-2xl rounded-lg bg-white z-10  text-coolGray-800 border-coolGray-200 ">
              <h2 className="text-4xl font-bold h-fit pb-6 underline max-w-lg mx-auto text-coolGray-900">
                {t("contactUsHeading")}
              </h2>
              <ContactForm />
            </div>
          </InViewComp>
        </div>
      </section>
      <Waves />
    </Layout>
  );
}

export default IndexPage;
