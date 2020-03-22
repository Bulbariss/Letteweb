import React from "react";

function ContactForm() {
  return (
    <form id="contact-form" className="max-w-lg mx-auto w-full">
      <div id="name-input" className="w-full  pb-2">
        <label className="text-left block" htmlFor="input-name">
          Your Name
        </label>
        <input
          className="w-full d-flex mb-1"
          type="text"
          placeholder="Your Name"
          id="input-name"
          name="name"
        />
        <p className="text-xs text-red-600 hidden" id="input-name-p">
          Enter valid name
        </p>
      </div>
      <div id="email-input" className="w-full  pb-2">
        <label className="text-left block" htmlFor="input-email">
          Your Email
        </label>
        <input
          className="w-full mb-1 "
          type="text"
          placeholder="Your Email"
          id="input-email"
          name="email"
        />
        <p className="text-xs text-red-600 hidden" id="input-email-p">
          Enter valid email
        </p>
      </div>
      <div id="subject-input" className="w-full pb-2">
        <label className="text-left block" htmlFor="input-subject">
          Subject
        </label>
        <input
          className="w-full d-flex mb-1"
          type="text"
          placeholder="Subject"
          id="input-subject"
          name="subject"
        />
        <p className="text-xs text-red-600 hidden" id="input-subject-p">
          Enter subject
        </p>
      </div>
      <div id="message-input" className=" w-full pb-2">
        <label className="text-left block" htmlFor="input-message">
          Message
        </label>
        <textarea
          className="w-full "
          placeholder="Message"
          id="input-message"
          name="msg"
        ></textarea>
        <p className="text-xs text-red-600 hidden" id="input-message-p">
          Enter message
        </p>
      </div>
      <button
        type="submit"
        id="contact-submit-btn"
        className="btn-skeleton bg-indigo-700 hover:bg-indigo-600 text-white w-full text-base
            cursor-not-allowed flex justify-center"
      >
        <p className="text-base" id="contact-submit-btn-text">
          Submit
        </p>
        <div className="lds-ring hidden mx-auto" id="form-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </button>
    </form>
  );
}

export default ContactForm;
