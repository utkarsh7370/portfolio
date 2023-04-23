import React, { useRef } from "react";
import "./Contact.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Heading from "../Heading/Heading";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_7kw6l3a",
        "template_wsd9bpo",
        form.current,
        "h7x6riFA9qNr-jHXV"
      )
      .then(
        (result) => {
          console.log("Messege sent.");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <AnimationOnScroll animateIn="animate__bounceIn">
      <section className="contactSection">
        <Heading title="Contact" subtitle="Me" />
        <section className="contact py-2" id="contact">
          <div className="container my-3" id="contact">
            <div className="row">
              <div className="col-md-5">
                <div className="contact-item d-flex mb-3">
                  <div className="icon fs-4 text-primary">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="text ms-2">
                    <h3 className="fs-5 text-light">Email</h3>
                    <p className="text-light email_id">
                      utkarshsingh737091@gmail.com
                    </p>
                  </div>
                </div>
                <div className="contact-item d-flex mb-3">
                  <div className="icon fs-4 text-primary">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="text ms-2 ">
                    <h3 className="fs-5 text-light">Phone</h3>
                    <p className="text-light">+91 73709 88146</p>
                  </div>
                </div>
                <div className="contact-item d-flex mb-3">
                  <div className="icon fs-4 text-primary">
                    <i className="fas fa-location-arrow"></i>
                  </div>
                  <div className="text ms-2">
                    <h3 className="fs-5 text-light">Location</h3>
                    <p className="text-light">
                      Liluah, Howrah-711204, West Bengal.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-7 col-md-12 col-12">
                <p className="text-left">
                  I am always excited to collaberate. Send me message to
                  collaberate with me.
                </p>
                <form
                  className="form"
                  action="https://formspree.io/f/xayvojvv"
                  method="POST"
                  ref={form}
                  onSubmit={sendEmail}
                >
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control firstName border-0 shadow-sm p-2"
                      id="firstName"
                      placeholder="Enter First Name."
                      required
                      autocomplete="off"
                      name="user_name"
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="tel"
                      className="form-control phone border-0 shadow-sm p-2"
                      id="phone"
                      placeholder="Enter Contact Number"
                      name="user_phone"
                      required
                      autocomplete="off"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control email border-0 shadow-sm p-2"
                      id="email"
                      aria-describedby="emailHelp"
                      placeholder="Enter Your Email"
                      required
                      autocomplete="off"
                      name="user_email"
                    />
                  </div>

                  <div className="form-floating">
                    <textarea
                      className="form-control message border-0 shadow-sm p-2"
                      placeholder="Message.."
                      id="message"
                      style={{ height: "100px" }}
                      name="message"
                    ></textarea>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <input
                        type="submit"
                        className="btn px-3 mt-3 fs-5"
                        value="Send"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </section>
    </AnimationOnScroll>
  );
}

export default Contact;
