import React from "react";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      isNameValid: null,
      isEmailValid: null,
      isSubjectValid: null,
      isMessageValid: null,
      isSending: false,
      isError: false,
      isSent: false
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.validateName = this.validateName.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validateSubject = this.validateSubject.bind(this);
    this.validateMessage = this.validateMessage.bind(this);
  }

  showError() {
    this.setState({
      isError: true
    });

    setTimeout(() => {
      this.setState({
        isError: false,
        isSending: false
      });
      this.clearForm();
    }, 5000);
  }

  showSuccess() {
    this.setState({
      isSent: true
    });

    setTimeout(() => {
      this.setState({
        isSent: false,
        isSending: false
      });
      this.clearForm();
    }, 5000);
  }

  handleSubmit() {
    this.validateName();
    this.validateEmail();
    this.validateSubject();
    this.validateMessage();

    // Send email if everything is valid
    if (
      this.state.isNameValid &&
      this.state.isEmailValid &&
      this.state.isSubjectValid &&
      this.state.isMessageValid
    ) {
      // add spinner
      this.setState({
        isSending: true
      });

      const data = `name=${this.state.name}&email=${this.state.email}&subject=${this.state.subject}&msg=${this.state.message}`;

      const xhr = new XMLHttpRequest();
      xhr.open("POST", "mail/send.php");
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.onerror = () => {
        this.showError();
      };
      xhr.onload = () => {
        if (xhr.status === 200 && xhr.responseText === "1") {
          this.showSuccess();
        } else {
          this.showError();
        }
      };
      xhr.send(data);
    }
  }

  handleOnChange(event) {
    const target = event.target;
    this.setState({
      [target.name]: target.value
    });
  }

  // const regexName = /^[а-яА-ЯёЁa-zA-Z0-9]+$/i;

  validateName() {
    if (this.state.name) {
      this.setState({
        isNameValid: true
      });
    } else {
      this.setState({
        isNameValid: false
      });
    }
  }
  validateEmail() {
    if (this.state.email) {
      this.setState({
        isEmailValid: true
      });
    } else {
      this.setState({
        isEmailValid: false
      });
    }
  }
  validateSubject() {
    if (this.state.subject) {
      this.setState({
        isSubjectValid: true
      });
    } else {
      this.setState({
        isSubjectValid: false
      });
    }
  }
  validateMessage() {
    if (this.state.message) {
      this.setState({
        isMessageValid: true
      });
    } else {
      this.setState({
        isMessageValid: false
      });
    }
  }

  clearForm() {
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
      isNameValid: null,
      isEmailValid: null,
      isSubjectValid: null,
      isMessageValid: null,
      isSending: false,
      isError: false,
      isSent: false
    });
  }

  // // Regex for validating inputs
  // const regexName = /^[а-яА-ЯёЁa-zA-Z0-9]+$/i;
  // const regexEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  // // Check if cell input is valid
  // function validateName() {
  //   const x = document.querySelector("#input-name").value;
  //   if (regexName.test(x) || !x.length === 0) {
  //     validInput("input-name");
  //     name = true;
  //   } else {
  //     invalidInput("input-name");
  //     name = false;
  //   }
  // }

  // // Check if cell input is valid
  // function validateEmail() {
  //   const x = document.querySelector("#input-email").value;
  //   if (regexEmail.test(x) || !x.length === 0) {
  //     validInput("input-email");
  //     email = true;
  //   } else {
  //     invalidInput("input-email");
  //     email = false;
  //   }
  // }

  // // Check if cell input is valid
  // function validateSubject() {
  //   const x = document.querySelector("#input-subject").value;
  //   if (!x.length === 0 || x.trim()) {
  //     validInput("input-subject");
  //     subject = true;
  //   } else {
  //     invalidInput("input-subject");
  //     subject = false;
  //   }
  // }

  render() {
    return (
      <form
        id="contact-form"
        className="max-w-lg mx-auto w-full"
        onSubmit={event => {
          event.preventDefault();
          this.handleSubmit();
        }}
      >
        <div className="w-full">
          <label className="text-left block" htmlFor="input-name">
            <p className="pb-1">Your Name</p>
            <input
              className={`${
                this.state.isNameValid || this.state.isNameValid === null
                  ? ``
                  : `border-red`
              } w-full mb-1`}
              type="text"
              placeholder="Your Name"
              name="name"
              value={this.state.name}
              onChange={this.handleOnChange}
              onBlur={this.validateName}
            />
            <p
              className={`${
                this.state.isNameValid || this.state.isNameValid === null
                  ? `hidden`
                  : ``
              }  text-xs text-red-600 `}
            >
              Enter valid name
            </p>
          </label>
        </div>
        <div className="w-full">
          <label className="text-left block" htmlFor="input-email">
            <p className="pb-1">Your Email</p>
            <input
              className={`${
                this.state.isEmailValid || this.state.isEmailValid === null
                  ? ``
                  : `border-red`
              } w-full mb-1`}
              type="text"
              placeholder="Your Email"
              name="email"
              value={this.state.email}
              onChange={this.handleOnChange}
              onBlur={this.validateEmail}
            />
            <p
              className={`${
                this.state.isEmailValid || this.state.isEmailValid === null
                  ? `hidden`
                  : ``
              } text-xs text-red-600`}
            >
              Enter valid email
            </p>
          </label>
        </div>
        <div className="w-full ">
          <label className="text-left block" htmlFor="input-subject">
            <p className="pb-1">Subject</p>
            <input
              className={`${
                this.state.isSubjectValid || this.state.isSubjectValid === null
                  ? ``
                  : `border-red`
              } w-full mb-1`}
              type="text"
              placeholder="Subject"
              name="subject"
              value={this.state.subject}
              onChange={this.handleOnChange}
              onBlur={this.validateSubject}
            />
            <p
              className={`${
                this.state.isSubjectValid || this.state.isSubjectValid === null
                  ? `hidden`
                  : ``
              }  text-xs text-red-600 `}
            >
              Enter subject
            </p>
          </label>
        </div>
        <div className=" w-full ">
          <label className="text-left block" htmlFor="input-message">
            <p className="pb-1">Message</p>
            <textarea
              className={`${
                this.state.isMessageValid || this.state.isMessageValid === null
                  ? ``
                  : `border-red`
              } w-full`}
              placeholder="Message"
              name="message"
              value={this.state.message}
              onChange={this.handleOnChange}
              onBlur={this.validateMessage}
            />
            <p
              className={`${
                this.state.isMessageValid || this.state.isMessageValid === null
                  ? `hidden`
                  : ``
              }  text-xs text-red-600 `}
            >
              Enter message
            </p>
          </label>
        </div>
        <button
          type="submit"
          className={`${
            this.state.isSending
              ? `pointer-events-none select-none`
              : `bg-indigo-700 hover:bg-indigo-600`
          } 
          ${this.state.isError ? `bg-red-500` : ``}
          ${this.state.isSent ? `bg-green-500` : ``}
           btn-skeleton text-white w-full text-base
            cursor-not-allowed flex justify-center`}
        >
          <p className="text-base">
            {`${this.state.isSending ? `` : `Submit`}
             ${this.state.isError ? `Error, message not sent` : ``}
            ${this.state.isSent ? `Message Sent` : ``}`}
          </p>
          <div
            className={`${
              this.state.isSending && !this.state.isError && !this.state.isSent
                ? ``
                : `hidden`
            } lds-ring mx-auto`}
          >
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </button>
      </form>
    );
  }
}

export default ContactForm;
