import React from "react";

function Waves() {
  return (
    <section className="absolute bottom-0 right-0 left-0">
      <svg
        className="waves bg-coolGray-100"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use xlinkHref="#gentle-wave" x="48" fill="rgba(58,52,98,0.7" />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="3"
            fill="rgba(58,52,98,0.5)"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="5"
            fill="rgba(58,52,98,0.3)"
          />
          <use xlinkHref="#gentle-wave" x="48" y="7" fill="#3A3462" />
        </g>
      </svg>
    </section>
  );
}

export default Waves;
