import React from "react";
import { useInView } from "react-intersection-observer";

const PersonCard = ({ name, occupation, src, className, ...props }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div
      {...props}
      ref={ref}
      className={`w-1/2 sm:w-1/4 p-4 z-10 ${
        inView ? "anim" : ""
      } animated ${className}`}
    >
      <img className="rounded-lg mb-4" src={src} alt={name} />
      <p className="font-bold text-indigo-100">{name}</p>
      <p className="text-indigo-200">{occupation}</p>
    </div>
  );
};

export default PersonCard;
