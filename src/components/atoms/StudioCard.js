import React from "react";
import { useInView } from "react-intersection-observer";

const StudioCard = ({ heading, text, ...props }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <div className="w-full sm:w-1/2 mb-16 px-0 sm:px-6" {...props}>
      <div
        ref={ref}
        className={`max-w-sm mx-auto point  ${
          inView ? "anim" : ""
        } animated FadeUp`}
      >
        <h6 className="text-2xl font-bold mb-4 ">{heading}</h6>
        <p className=" font-medium leading-relaxed">{text}</p>
      </div>
    </div>
  );
};

export default StudioCard;
