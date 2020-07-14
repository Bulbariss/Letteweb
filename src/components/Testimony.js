import React from "react";
import { useInView } from "react-intersection-observer";

function Testimony({ children, className, ...props }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "40px",
  });

  return (
    <p
      {...props}
      ref={ref}
      className={`w-full sm:w-1/3 max-w-md sm:max-w-xs p-4 sm:px-2 z-10 ${
        inView ? "anim" : ""
      } animated  ${className}`}
    >
      {children}
    </p>
  );
}

export default Testimony;
