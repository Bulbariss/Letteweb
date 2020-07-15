import React, { forwardRef } from "react";

const classes = "outline-none";

const Input = ({ className, ...props }, ref) => {
  return (
    <>
      <input {...props} className={`${classes} ${className}`} ref={ref} />
      <style jsx>{`
        input {
          vertical-align: middle;
          line-height: normal;
          padding: 6px 10px;
          box-shadow: none;
          box-sizing: border-box;
          appearance: none;
          transition: border-color 0.2s;
        }

        input::-webkit-input-placeholder {
          line-height: normal !important;
        }
        input::placeholder {
          line-height: normal !important;
        }
        input::-moz-placeholder {
          line-height: normal !important;
        }
      `}</style>
    </>
  );
};

export default forwardRef(Input);
