import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Waves from "../components/waves";
import ContactForm from "../components/organisms/ContactForm";
import BackgroundImage from "gatsby-background-image";
import Button from "../components/atoms/Button";
import PersonCard from "../components/atoms/PersonCard";
import { useTranslation } from "react-i18next";
import Testimony from "../components/Testimony";
import { useInView } from "react-intersection-observer";
import teamPhoto from "../images/team.svg";

function IndexPage() {
  const { t } = useTranslation(["index", "contactForm", "SEO"]);

  const { bg, personPhoto } = useStaticQuery(graphql`
    fragment Image on File {
      sharp: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    query {
      bg: file(relativePath: { eq: "bg-hero.jpg" }) {
        ...Image
      }
      personPhoto: file(relativePath: { eq: "person2.jpg" }) {
        ...Image
      }
    }
  `);

  const buttonText = {
    defaultText: t("contactForm:defaultText"),
    errorText: t("contactForm:errorText"),
    successText: t("contactForm:successText"),
    loadingtext: t("contactForm:loadingtext"),
  };

  const formText = {
    nameLabel: t("contactForm:nameLabel"),
    emailLabel: t("contactForm:emailLabel"),
    messageLabel: t("contactForm:messageLabel"),
    namePlaceholder: t("contactForm:nameLabel"),
    emailPlaceholder: t("contactForm:emailLabel"),
    messagePlaceholder: t("contactForm:messageLabel"),
  };

  const personnel = [
    {
      src: personPhoto.sharp.fluid,
      name: t("index:nameOne"),
      occupation: t("index:occupation‎One"),
      className: "FadeUp",
    },
    {
      src: personPhoto.sharp.fluid,
      name: t("index:nameTwo"),
      occupation: t("index:occupationTwo"),
      className: "FadeUp anim-delay-05",
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "40px",
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    rootMargin: "40px",
  });
  const [ref3, inView3] = useInView({
    triggerOnce: true,
    rootMargin: "40px",
  });

  return (
    <Layout>
      <SEO
        keywords={t("SEO:keywords").split(",")}
        title={t("SEO:index.title")}
        description={t("SEO:description")}
        lang={t("SEO:lang")}
        pathname=""
      />
      <BackgroundImage
        className="min-h-screen flex"
        Tag="section"
        fluid={bg.sharp.fluid}
        durationFadeIn={200}
        loading="eager"
      >
        <div className="px-6 py-12 sm:px-10 lg:px-16 w-full mx-auto self-center max-w-80 w-fit text-left sm:text-center -mt-12 sm:mt-0 overflow-hidden">
          <h1 className="H1 text-muted-black mt-0 sm:mt-12 max-w-4xl mx-auto sm:whitespace-pre-line break-words">
            {t("index:heading")}
          </h1>
          <p className="P text-gray-900">{t("index:secondHeading")}</p>
          <div className="inline-flex flex-col sm:flex-row w-full sm:w-auto mt-3 sm:mt-4 md:mt-5">
            <Button
              href="/contact"
              className="text-lg"
              color="bg-indigo-700"
              hoverColor="hover:bg-indigo-600"
              size="lg"
            >
              {t("index:primaryButton")}
            </Button>
            <Button
              variant="outline"
              color="border-black"
              textColor="text-black"
              hoverColor="hover:border-gray-700"
              hoverTextColor="hover:text-gray-700"
              href="/studio"
              className="sm:ml-4 mt-2 sm:mt-0 text-lg"
              size="lg"
            >
              {t("index:secondaryButton")}
            </Button>
          </div>
        </div>
      </BackgroundImage>

      <section id="what-we-do" className="bg-coolGray-050 flex">
        <div className="max-w-80 mx-auto flex flex-col px-6 sm:px-10 lg:px-16 justify-center overflow-hidden">
          <div className="justify-center py-16 md:py-24">
            <div className="flex flex-col sm:flex-row ">
              <div
                ref={ref}
                className={`w-full sm:w-1/2 sm:order-last z-10 sm:h-1/2 self-center ${
                  inView ? "anim" : ""
                } animated FadeLeft`}
              >
                <img
                  src={teamPhoto}
                  className="rounded-lg"
                  alt="A man working"
                />
              </div>

              <div className="sm:pr-8  max-w-2xl sm:w-1/2 self-center z-10">
                <div
                  ref={ref2}
                  className={`max-w-md mt-8 sm:mt-0 ${
                    inView2 ? "anim" : ""
                  } animated FadeRight`}
                >
                  <h2 className="text-2xl sm:text-lx lg:text-2xl font-bold text-coolGray-900 leading-snug pb-2">
                    {t("index:testimonyHeading")}
                  </h2>
                  <p className="text-coolGray-700 leading-relaxed">
                    {t("index:testimonyText")}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center sm:justify-between flex-col sm:flex-row pt-8 text-coolGray-700 leading-relaxed">
              <Testimony className="FadeUp sm:anim-delay-04 before-01">
                {t("index:testimonyOne")}
              </Testimony>
              <Testimony className="FadeUp sm:anim-delay-05 before-02">
                {t("index:testimonyTwo")}
              </Testimony>
              <Testimony className="FadeUp sm:anim-delay-06 before-03">
                {t("index:testimonyThree")}
              </Testimony>
            </div>
          </div>
        </div>
      </section>

      <section
        id="who-we-are"
        className="px-6 sm:px-10 lg:px-16 bg-coolGray-800"
      >
        <div className=" max-w-80 mx-auto flex flex-col justify-center py-16 md:py-24">
          <h3 className="text-4xl font-bold  pb-12 underline text-center text-indigo-100">
            {t("index:teamHeading")}
          </h3>
          <div className="self-center text-left max-w-2xl overflow-hidden flex flex-wrap justify-center w-full">
            {personnel.map((i, k) => (
              <PersonCard
                src={i.src}
                name={i.name}
                occupation={i.occupation}
                className={i.className}
                key={k}
              ></PersonCard>
            ))}
          </div>
        </div>
      </section>

      <section
        id="our-portfolio"
        className="bg-coolGray-100 px-6 sm:px-10 lg:px-16 py-16 sm:py-24"
      >
        <div className=" max-w-80 mx-auto flex flex-col text-center px-6 sm:px-10 lg:px-16 h-56">
          <h4 className="text-4xl font-bold py-8 underline text-coolGray-900">
            {t("index:projectsHeading")}
          </h4>
          <h5 className="text-3xl flex self-center font-bold m-auto w-fit text-coolGray-900">
            {t("index:projectsText")}
          </h5>
        </div>
      </section>

      <section id="get-in-touch" className="bg-coolGray-100">
        <div className="min-h-screen max-w-80 mx-auto flex flex-col justify-center px-6 sm:px-10 lg:px-16 ">
          <div
            ref={ref3}
            id="form-main-page"
            className={`w-full pt-12 pb-32 md:pb-40 ${
              inView3 ? "anim" : ""
            } animated FadeUp`}
          >
            <div className="max-w-lg mx-auto p-4 sm:p-6 shadow-lg sm:shadow-2xl rounded-lg bg-white z-10  text-coolGray-800 border-coolGray-200">
              <h6 className="text-4xl font-bold h-fit pb-6 underline max-w-lg mx-auto text-coolGray-900">
                {t("index:contactUsHeading")}
              </h6>
              <ContactForm formText={formText} buttonText={buttonText} />
            </div>
          </div>
        </div>
      </section>
      <Waves />
    </Layout>
  );
}

export default IndexPage;
