import React, { forwardRef } from "react";
import { Link } from "gatsby";

const HeaderLinks = forwardRef(
  ({ link, button = false, className, ...props }, ref) => {
    const span = (
      <span
        data-letters={link.title}
        className="leading-tight font-bold block relative"
      >
        {link.title}
      </span>
    );
    return (
      <>
        {button ? (
          <button
            {...props}
            ref={ref}
            className={`link-animation noSelect px-4 py-3 text-left relative inline-block ${className}`}
            tabIndex="0"
          >
            {span}
          </button>
        ) : (
          <Link
            {...props}
            ref={ref}
            className={`link-animation noSelect px-4 py-3 relative inline-block text-black ${className}`}
            key={link.title}
            to={link.route}
            activeClassName="underline"
          >
            {span}
          </Link>
        )}
        <style global jsx>{`
          .w-52px {
            width: 52px;
          }
          /* Kumya */
          .link-animation {
            overflow: hidden;
            line-height: 1;
             {
              /* color: #242424; */
            }
          }

          .link-hover:hover {
            opacity: 0.7;
            transition: all 0.2s;
          }

          .link-animation:hover {
             {
              /* color: #242424; */
            }
          }

          .link-animation::after {
            content: "";
            position: absolute;
            margin-top: 0;
            height: 100%;
            width: 100%;
            top: 0;
            right: 0;
            z-index: -1;
            background: #000;
            -webkit-transform: translate3d(101%, 0, 0);
            transform: translate3d(101%, 0, 0);
            -webkit-transition: -webkit-transform 0.5s;
            transition: transform 0.5s;
            -webkit-transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
            transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
          }

          .link-animation:hover::after {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
            margin-top: 0;
            height: 100%;
            width: 100%;
          }

          .link-animation span::before {
            content: attr(data-letters);
            position: absolute;
            color: #fff;
            left: 0;
            overflow: hidden;
            white-space: nowrap;
            width: 0%;
            -webkit-transition: width 0.5s;
            transition: width 0.5s;
            -webkit-transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
            transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
            /* transition-delay: 0.1s; */
          }

          .link-animation:hover span::before {
            width: 100%;
          }

          /* Kumya */
        `}</style>
      </>
    );
  }
);

HeaderLinks.displayName = "HeaderLinks";

export default HeaderLinks;
