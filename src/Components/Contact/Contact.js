import React from "react";
import Heading from "../Heading/Heading";

function Contact() {
  return (
    <section className="contactSection">
      <Heading title="Contact" subtitle="Me" />
      <section class="contact py-2" id="contact">
        <div class="container my-3" id="contact">
          <div class="row">
            <div class="col-md-5">
              <div class="contact-item d-flex mb-3">
                <div class="icon fs-4 text-primary">
                  <i class="fas fa-envelope"></i>
                </div>
                <div class="text ms-2">
                  <h3 class="fs-5 text-light">Email</h3>
                  <p class="text-light email_id">
                    utkarshsingh737091@gmail.com
                  </p>
                </div>
              </div>
              <div class="contact-item d-flex mb-3">
                <div class="icon fs-4 text-primary">
                  <i class="fas fa-phone"></i>
                </div>
                <div class="text ms-2 ">
                  <h3 class="fs-5 text-light">Phone</h3>
                  <p class="text-light">+91 73709 88146</p>
                </div>
              </div>
              <div class="contact-item d-flex mb-3">
                <div class="icon fs-4 text-primary">
                  <i class="fas fa-location-arrow"></i>
                </div>
                <div class="text ms-2">
                  <h3 class="fs-5 text-light">Location</h3>
                  <p class="text-light">Hajipur, Vaishali, Bihar-844102</p>
                </div>
              </div>
            </div>

            <div class="col-lg-7 col-md-12 col-12">
              <form
                class="form"
                // style={{font-family: 'IBM Plex Sans Thai Looped', sans-serif;}}
                action="https://formspree.io/f/xayvojvv"
                method="POST"
              >
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control firstName border-0 shadow-sm p-2"
                    id="firstName"
                    placeholder="Enter First Name."
                    required
                    autocomplete="off"
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control lastName border-0 shadow-sm p-2"
                    id="lastName"
                    placeholder="Enter Last Name."
                    required
                    autocomplete="off"
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="tel"
                    class="form-control phone border-0 shadow-sm p-2"
                    id="phone"
                    placeholder="Enter Contact Number"
                    required
                    autocomplete="off"
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="email"
                    class="form-control email border-0 shadow-sm p-2"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter Your Email"
                    required
                    autocomplete="off"
                  />
                </div>

                <div class="form-floating">
                  <textarea
                    class="form-control message border-0 shadow-sm p-2"
                    placeholder="Message.."
                    id="message"
                    style={{ height: "100px" }}
                  ></textarea>
                </div>
                <div class="row">
                  <div class="col-lg-12">
                    <button type="submit" class="btn px-3 mt-3 fs-5">
                      Send Me <i class="fas fa-paper-plane"></i>
                    </button>
                    {/* <!-- <a href="mailto:utkarshsingh73709@gmail.com">Send email</a> --> */}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Contact;
