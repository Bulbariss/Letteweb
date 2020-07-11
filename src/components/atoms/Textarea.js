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
         {
          /* textarea::placeholder {
          color: #52606d;
          line-height: 1.5;
        }

        textarea:-ms-input-placeholder {
          color: #52606d;
          line-height: 1.5;
        }

        textarea::-webkit-input-placeholder {
          color: #52606d;
          line-height: 1.5;
        } */
        }

        textarea {
          vertical-align: middle;
          padding: 6px 10px;
          box-shadow: none;
          box-sizing: border-box;
          appearance: none;
          min-height: 100px;
          transition: border-color 0.2s;
        }

        textarea:focus {
          outline: 0;
        }
      `}</style>
    </>
  );
};

export default forwardRef(Textarea);
