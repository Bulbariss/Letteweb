import React, { forwardRef } from "react";

const Textarea = ({ className, placeholder, ...props }, ref) => {
  return (
    <>
      <textarea
        ref={ref}
        maxLength="180"
        placeholder={placeholder}
        rows="6"
        wrap="hard"
        className={`w-full text-base outline-none ${className}`}
        {...props}
      ></textarea>
      <style jsx>{`
        textarea {
          vertical-align: middle;
          line-height: normal;
          padding: 6px 10px;
          box-shadow: none;
          box-sizing: border-box;
          appearance: none;
          min-height: 100px;
          transition: border-color 0.2s;
        }

        textarea::placeholder {
          line-height: normal !important;
        }
        textarea::-moz-placeholder {
          line-height: normal !important;
        }
        textarea::-webkit-input-placeholder {
          line-height: normal !important;
        }

        textarea:focus {
          outline: 0;
        }
      `}</style>
    </>
  );
};

export default forwardRef(Textarea);
