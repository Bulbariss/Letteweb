import React from "react";
import { useInView } from "react-intersection-observer";
import Img from "gatsby-image";

const PersonCard = ({ name, occupation, src, className, ...props }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "40px",
  });

  return (
    <div
      {...props}
      ref={ref}
      className={`w-full sm:w-1/2 p-4 z-10 ${
        inView ? "anim" : ""
      } animated ${className}`}
    >
      <Img className="rounded-lg mb-4" fluid={src} alt={name} />
      <p className="font-bold text-indigo-100">{name}</p>
      <p className="text-indigo-200">{occupation}</p>
    </div>
  );
};

export default PersonCard;
