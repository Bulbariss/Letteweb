import React, { forwardRef } from "react";

const Spinner = ({ color, size, loadingText, ...props }, ref) => {
  const SIZES = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-6 h-6",
  };
  return (
    <>
      <div
        className={`spin-container inline-block ${
          !loadingText ? "relative" : "absolute"
        } border-2 rounded-full mr-2 ${color} ${SIZES[size]}`}
        ref={ref}
        {...props}
      >
        <div className="spin whitespace-no-wrap absolute border-0 p-0 overflow-hidden"></div>
      </div>
      <style jsx>{`
        .spin-container {
          animation: 0.45s linear 0s infinite normal none running spinning;
          border-bottom-color: transparent !important;
          border-left-color: transparent !important;
        }

        .spin-container .spin {
          clip: rect(0px, 0px, 0px, 0px);
          height: 1px;
          width: 1px;
          border-style: initial;
          border-color: initial;
          border-image: initial;
          margin: -1px;
        }

        @keyframes spinning {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
};
export default forwardRef(Spinner);
