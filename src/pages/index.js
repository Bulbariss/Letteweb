import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Waves from "../components/waves";
import ContactForm from "../components/contactForm";
import BackgroundImage from "gatsby-background-image";
import mouseSvg from "../images/mouse.svg";
import teamPhoto from "../images/team.jpg";
import personPhoto from "../images/person2.jpg";
import InViewComp from "../components/inViewComp";

function IndexPage() {
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
          <h1 className="font-bold text-4xl mt-0 sm:mt-12 md:text-6xl  max-w-4xl leading-none mx-auto">
            New generation of <br /> web development
          </h1>
          <p className="text-2xl md:text-2xl lg:text-3xl leading-snug  text-muted-black max-w-sm lg:max-w-xl mx-auto mt-4">
            We create websites for businesses that provide great experience for
            their users.
          </p>
          <Link
            to="/contact"
            className="btn-cc btn-lg mt-8 text-white bg-indigo-700 rounded-lg transform hover:scale-105 hover:bg-indigo-600 ease-in
                duration-100
                w-fit px-8
                sm:mx-auto shadow-2xl"
          >
            Get in touch
          </Link>
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
          <div className="justify-center py-16 sm:py-20 xxl:py-24">
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
                  <h2 className="text-2xl sm:text-lg lg:text-2xl font-bold text-coolGray-900 leading-snug animated FadeRight">
                    Combining modern design with science proved principles
                    allows us to create beautiful and functional websites that
                    bring customers to your business.
                  </h2>
                </InViewComp>
                <Link
                  to="/studio"
                  className="btn-cc mt-8 text-white rounded-lg bg-indigo-700 rounded-lg 
                             hover:bg-indigo-600 
                            duration-100 w-fit px-8"
                >
                  See more
                </Link>
              </div>
            </div>
            <div className="flex items-center sm:justify-between flex-col sm:flex-row pt-8 text-coolGray-700 leading-relaxed">
              <InViewComp className="w-full sm:w-1/3 max-w-xs p-4 sm:pl-0 z-10 animated FadeUp">
                <p className="before-01 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt soluta natus cum qui facilis repudiandae sapiente
                  modi tempore dolores commodi!
                </p>
              </InViewComp>
              <InViewComp className="w-full sm:w-1/3 max-w-xs p-4 sm:px-2 z-10 animated FadeUp  sm:anim-delay-05">
                <p className="before-02">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt soluta natus cum qui facilis repudiandae sapiente
                  modi tempore dolores commodi!
                </p>
              </InViewComp>
              <InViewComp className="w-full sm:w-1/3 max-w-xs p-4 sm:pr-0 z-10 animated FadeUp  sm:anim-delay-06">
                <p className="before-03">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt soluta natus cum qui facilis repudiandae sapiente
                  modi tempore dolores commodi!
                </p>
              </InViewComp>
            </div>
          </div>
        </div>
      </section>

      <section
        id="who-we-are"
        className="  px-6 sm:px-10 lg:px-16 bg-coolGray-800"
      >
        <div className=" max-w-80 mx-auto flex flex-col justify-center py-16 sm:py-20 xxl:py-24">
          <h2 className="text-3xl font-bold  pb-4 underline text-center text-indigo-100">
            Great team is the key
          </h2>
          <div className="flex flex-col sm:flex-row self-center text-left max-w-5xl overflow-hidden">
            <div className="flex w-full sm:w-1/2 ">
              <InViewComp className="max-w-xs p-4 z-10 animated FadeUp">
                <img
                  className=" rounded-lg mb-4"
                  src={personPhoto}
                  alt="Erlends Morozo"
                />
                <p className="font-bold text-indigo-100">Erlends Morozo</p>
                <p className="text-indigo-200">Project Manager</p>
              </InViewComp>
              <InViewComp className=" max-w-xs  p-4 z-10 animated FadeUp anim-delay-05">
                <img
                  className=" rounded-lg mb-4"
                  src={personPhoto}
                  alt="Vladimir Radionovsky"
                />
                <p className="font-bold text-indigo-200">
                  Vladimir Radionovsky
                </p>
                <p className="text-indigo-200">Web developer</p>
              </InViewComp>
            </div>
            <div className="flex w-fit  w-full sm:w-1/2 ">
              <InViewComp className=" max-w-xs p-4 z-10 animated FadeUp   anim-delay-06">
                <img
                  className=" rounded-lg mb-4"
                  src={personPhoto}
                  alt="John Doe"
                />
                <p className="font-bold text-indigo-200">John Doe</p>
                <p className="text-indigo-200">Creative Director</p>
              </InViewComp>
              <InViewComp className=" max-w-xs p-4 z-10  animated FadeUp  anim-delay-07">
                <img
                  className=" rounded-lg mb-4"
                  src={personPhoto}
                  alt="John Doe"
                />
                <p className="font-bold text-indigo-200">John Doe</p>
                <p className="text-indigo-200">Creative Director</p>
              </InViewComp>
            </div>
          </div>
        </div>
      </section>

      <section
        id="our-portfolio"
        className=" bg-coolGray-100 px-6 sm:px-10 lg:px-16 py-16 sm:py-20 xxl:py-24"
      >
        <div className=" max-w-80 mx-auto flex flex-col text-center px-6 sm:px-10 lg:px-16 h-56">
          <h2 className="text-4xl font-bold py-8 underline text-coolGray-900">
            Our projects
          </h2>
          <h1 className="text-3xl flex self-center font-bold m-auto w-fit text-coolGray-900">
            Coming soon...
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
                Contact Us
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
