import React from "react";
import MyPic from "../../Assets/MyPic.jpg";
import "./Hero.css";

function Hero() {
  return (
    <>
      <section class="pb-20 mt-5 heroSection">
        <div class="container position-relative me-4">
          <div class="row align-items-center">
            <div class="col-lg-6 col-12  pt-24">
              <div class="mw-xl mw-lg-2xl mx-auto mx-lg-0 align-items-center">
                <h1 class="h2 mb-6 text-light">
                  Hello, I am <span>Utkarsh Kumar Singh</span>
                </h1>
                <p class="mw-lg fs-7 mb-10 ">
                  I am a frontend web developer, working with Reactjs, NextJs
                  ect like stacks.
                </p>
                <div class="d-sm-flex align-items-left mt-4 social-Text">
                  <a
                    class="btn d-block d-sm-inline-block mb-4 mb-sm-0 me-sm-6"
                    href="https://www.instagram.com/u.singh73/"
                  >
                    Instagram <i class="fa-brands fa-instagram"></i>
                  </a>
                  <a
                    class="btn d-block d-sm-inline-block btn-outline-light-dark"
                    href="https://github.com/utkarsh7370"
                  >
                    Github <i class="fa-brands fa-github"></i>
                  </a>
                  <a
                    class="btn d-block d-sm-inline-block btn-outline-light-dark"
                    href="https://twitter.com/UtKarsh_kRSiNgH"
                  >
                    Twitter <i class="fa-brands fa-twitter"></i>
                  </a>
                  <a
                    class="btn d-block d-sm-inline-block btn-outline-light-dark"
                    href="https://www.linkedin.com/in/utkarsh-kumar-singh-91b1a2205/"
                  >
                    LinkedIn <i class="fa-brands fa-linkedin"></i>
                  </a>
                </div>
                <div class="d-sm-flex align-items-left mt-1">
                  <a
                    class="btn d-block d-sm-inline-block mb-4 mb-sm-0 me-sm-6 btn"
                    href="https://drive.google.com/file/d/1xMpRzS7gMIDlXWlWJT-dSCkR3dcaVlNs/view?usp=share_link"
                  >
                    My Resume
                  </a>
                  <a
                    class="btn d-block ms-2 d-sm-inline-block btn-outline-light-dark"
                    href="tel:+7370988146"
                  >
                    <svg
                      width="19"
                      height="18"
                      viewbox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.75 3.75C2.75 2.92157 3.42157 2.25 4.25 2.25H6.70943C7.03225 2.25 7.31886 2.45657 7.42094 2.76283L8.5443 6.13291C8.66233 6.48699 8.50203 6.87398 8.1682 7.0409L6.47525 7.88737C7.30194 9.72091 8.77909 11.1981 10.6126 12.0247L11.4591 10.3318C11.626 9.99796 12.013 9.83767 12.3671 9.9557L15.7372 11.0791C16.0434 11.1811 16.25 11.4677 16.25 11.7906V14.25C16.25 15.0784 15.5784 15.75 14.75 15.75H14C7.7868 15.75 2.75 10.7132 2.75 4.5V3.75Z"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span class="ms-1 text-white fw-medium">Contact Me</span>
                  </a>
                </div>
              </div>
            </div>
            <div class=" ms-0 col-lg-6 col-12 pt-24">
              <div class="mw-2xl mx-auto my-pic">
                <img
                  class="img-fluid"
                  src={MyPic}
                  alt=""
                  height={450}
                  width={450}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
