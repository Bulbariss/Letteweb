import React, { useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import Textarea from "../atoms/Textarea";
import Label from "../atoms/Label";
import PropTypes from "prop-types";

function ContactForm({
  className,
  style = "classic",
  colors = {
    themeBgColor: "bg-indigo-600",
    errorBgColor: "bg-red-500",
    errorBorderColor: "border-red-500",
    successBgColor: "bg-green-500",
    loadingColor: "bg-blue-500",
    btnHover: "bg-indigo-700",
    inputColor: "bg-white",
    inputFocusColor: "focus:border-indigo-600",
    inputBorderColor: "border-gray-300",
  },
  buttonText = {
    defaultText: "Send",
    errorText: "Error",
    successText: "Message sent",
    loadingtext: "",
  },
  formText = {
    nameLabel: "Your Name",
    emailLabel: "Your Email",
    messageLabel: "Your Message",
    namePlaceholder: "Your Name",
    emailPlaceholder: "Your Email",
    messagePlaceholder: "Your Message",
  },
  inputHeight = "h-12",
  textareaHeight = "h-40",
  ...props
}) {
  const emailRegex = /^\S+@\S+\.\S+$/i;
  const wordRegex = /^\w+.*$/i;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isNameValid, setIsNameValid] = useState(null);
  const [isEmailValid, setIsEmailValid] = useState(null);
  const [isMessageValid, setIsMessageValid] = useState(null);
  const [sendingStatus, setSendingStatus] = useState("notSending");

  const INPUTSTYLES = {
    classic: `border-2 ${colors.inputColor} ${colors.inputBorderColor} ${colors.themeColor} rounded-md w-full mb-4`,
  };

  function validateName() {
    wordRegex.test(name) ? setIsNameValid(true) : setIsNameValid(false);
  }

  function validateEmail() {
    emailRegex.test(email) ? setIsEmailValid(true) : setIsEmailValid(false);
  }

  function validateMessage() {
    wordRegex.test(message)
      ? setIsMessageValid(true)
      : setIsMessageValid(false);
  }

  function clearForm() {
    setName("");
    setEmail("");
    setMessage("");
    setIsNameValid(null);
    setIsEmailValid(null);
    setIsMessageValid(null);
    setSendingStatus("notSending");
  }

  function showError() {
    setSendingStatus("error");
    setTimeout(() => {
      setSendingStatus("notSending");
    }, 5000);
  }

  function showSuccess() {
    setSendingStatus("sent");
    setTimeout(() => {
      setSendingStatus("notSending");
      clearForm();
    }, 5000);
  }

  function handleSubmit() {
    if (sendingStatus === "notSending") {
      validateName();
      validateEmail();
      validateMessage();
      // Send email if everything is valid
      if (name && emailRegex.test(email) && message) {
        // add spinner
        setSendingStatus("sending");

        const data = `name=${name}&email=${email}&subject="subject"&msg=${message}`;

        const xhr = new XMLHttpRequest();
        xhr.open("POST", "mail/send.php");
        xhr.setRequestHeader(
          "Content-Type",
          "application/x-www-form-urlencoded"
        );
        xhr.onerror = () => {
          showError();
        };
        xhr.onload = () => {
          if (xhr.status === 200 && xhr.responseText === "1") {
            showSuccess();
          } else {
            showError();
          }
        };
        xhr.send(data);
      }
    }
  }

  const BUTTON_STATES = {
    notSending: {
      state: {
        color: colors.themeColor,
        hoverColor: colors.btnHover,
      },
      buttonText: buttonText.defaultText,
    },
    sending: {
      state: {
        color: colors.loadingColor,
        isLoading: true,
      },
      buttonText: buttonText.loadingText,
    },
    error: {
      state: {
        color: colors.errorBorderColor,
      },
      buttonText: buttonText.errorText,
    },
    sent: {
      state: {
        color: colors.successColor,
      },
      buttonText: buttonText.successText,
    },
  };

  return (
    <form className={className} {...props}>
      <Label label={formText.nameLabel} htmlFor="input-name" />
      <Input
        id="input-name"
        name="Name"
        type="text"
        placeholder={formText.namePlaceholder}
        className={`${isNameValid === false && `${colors.errorBorderColor}`} ${
          INPUTSTYLES[style]
        } ${inputHeight}`}
        value={name}
        onChange={(e) => setName(e.target.value)}
        onBlur={() => validateName()}
      />

      <Label label={formText.emailLabel} htmlFor="input-email" />
      <Input
        id="input-email"
        name="Email"
        type="text"
        placeholder={formText.emailPlaceholder}
        className={`${isEmailValid === false && `${colors.errorBorderColor}`} ${
          INPUTSTYLES[style]
        } ${inputHeight}`}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={() => validateEmail()}
      />

      <Label label={formText.messageLabel} htmlFor="input-message" />
      <Textarea
        id="input-message"
        className={`${
          isMessageValid === false && `${colors.errorBorderColor}`
        } ${INPUTSTYLES[style]} ${textareaHeight}`}
        name="Message"
        placeholder={formText.messagePlaceholder}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onBlur={() => validateMessage()}
      />

      <Button
        textColor="text-white"
        size="lg"
        onClick={(event) => {
          event.stopPropagation();
          event.preventDefault();
          handleSubmit(event);
        }}
        className="w-full text-lg"
        {...BUTTON_STATES[sendingStatus]["state"]}
      >
        {BUTTON_STATES[sendingStatus]["buttonText"]}
      </Button>
    </form>
  );
}

ContactForm.propTypes = {
  className: PropTypes.string,
  style: PropTypes.string,
  colors: PropTypes.object,
  buttonText: PropTypes.object,
  formText: PropTypes.object,
  inputHeight: PropTypes.string,
  textareaHeight: PropTypes.string,
};

export default ContactForm;
