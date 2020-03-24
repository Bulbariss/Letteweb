import React from "react";
import { InView } from "react-intersection-observer";

const InViewComp = ({ children, className, id, triggerOnce }) => (
  <InView triggerOnce={triggerOnce || true}>
    {({ inView, ref }) => (
      <div
        ref={ref}
        id={id}
        className={`${inView ? `anim` : ``} ${className} `}
      >
        {children}
      </div>
    )}
  </InView>
);

export default InViewComp;
