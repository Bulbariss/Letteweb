import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ContactForm from "../components/contactForm";
import { Link } from "gatsby";
import Particles from "react-particles-js";

function ContactPage() {
  return (
    <Layout>
      <SEO keywords={[`letteweb`]} title="Contact" />

      <section className="min-h-screen flex justify-center text-coolGray-800">
        <div
          id="content-page-container"
          className="self-center py-20 z-30 absolute max-w-80 px-6 sm:px-10 lg:px-16"
        >
          <div className="flex flex-col max-w-4xl md:flex-row bg-white rounded-lg w-fit shadow-2xl">
            <div className="pb-0 p-4 sm:px-6 sm:pt-6 md:pb-6 relative w-full">
              <h1 className="text-3xl md:text-4xl text-coolGray-900">
                We&apos;ll be glad to hear from you.
              </h1>
              <div className="absolute bottom-0 pb-4 sm:pb-6 hidden md:block">
                <p className="font-bold mb-2 text-lg">Email</p>
                <a
                  href="mailto:work@letteweb.lv"
                  className="block w-fit hover-opacity mb-6"
                >
                  work@letteweb.lv
                </a>
                <p className="font-bold mb-2 text-lg">Socials</p>
                <Link to="/" className="block w-fit hover-opacity mb-1">
                  Facebook
                </Link>
                <Link to="/" className="block w-fit hover-opacity">
                  Instagram
                </Link>
              </div>
            </div>
            <div id="form-container" className="p-4 sm:p-6 w-full">
              <ContactForm />
            </div>
          </div>
        </div>
        <div id="particles-js">
          <Particles
            params={{
              particles: {
                number: {
                  value: 142,
                  density: {
                    enable: true,
                    value_area: 800
                  }
                },
                color: {
                  value: "#000000"
                },
                shape: {
                  type: "circle",
                  stroke: {
                    width: 0,
                    color: "#000000"
                  },
                  polygon: {
                    nb_sides: 5
                  },
                  image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100
                  }
                },
                opacity: {
                  value: 0.5,
                  random: false,
                  anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                  }
                },
                size: {
                  value: 3,
                  random: true,
                  anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                  }
                },
                line_linked: {
                  enable: true,
                  distance: 150,
                  color: "#000000",
                  opacity: 0.4,
                  width: 1
                },
                move: {
                  enable: true,
                  speed: 2,
                  direction: "none",
                  random: false,
                  straight: false,
                  out_mode: "out",
                  bounce: false,
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                  }
                }
              },
              interactivity: {
                detect_on: "canvas",
                events: {
                  onhover: {
                    enable: false,
                    mode: "repulse"
                  },
                  onclick: {
                    enable: false,
                    mode: "push"
                  },
                  resize: true
                },
                modes: {
                  grab: {
                    distance: 400,
                    line_linked: {
                      opacity: 1
                    }
                  },
                  bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4
                  },
                  push: {
                    particles_nb: 4
                  },
                  remove: {
                    particles_nb: 2
                  }
                }
              },
              retina_detect: true
            }}
          />
        </div>
      </section>
    </Layout>
  );
}

export default ContactPage;
