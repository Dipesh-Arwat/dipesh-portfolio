import React from "react";
import { Link } from "react-router-dom";

import "../../styles/About/About.scss";

const About = () => {

  return (
    <>
      <div className="about" id="about">
        <div className="about__container">
          <div className="about__header" id="about__heading">
            <h1 data-aos="fade-down" data-aos-delay="0" data-aos-offset="20">
              <span
                data-aos="fade-down"
                data-aos-delay="0"
                data-aos-offset="200"
              >
                A
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-offset="200"
              >
                B
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="400"
                data-aos-offset="200"
              >
                O
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="600"
                data-aos-offset="200"
              >
                U
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="800"
                data-aos-offset="200"
              >
                T
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="1000"
                data-aos-offset="200"
              >
                .
              </span>
            </h1>
            <p></p>
          </div>

          <div className="about__details-container">
            <div
              className="about__details"
              data-aos="fade-down"
              data-aos-offset="0"
              data-aos-delay="0"
              data-aos-once="true"
            >
              <Link to="/about/intro">
                <h1>
                  0<span>1</span>
                </h1>
                <h2>
                  H<span>ello,</span>
                </h2>
                <p>
                  I am <span>Dipesh Arwat.</span> <br /> Motivated and dedicated Full Stack Developer with a strong desire to utilize and enhance skills in a professional environment..
                </p>
              </Link>
            </div>
            <div
              className="about__details"
              data-aos="fade-down"
              data-aos-offset="-180"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <Link to="/about/graduation">
                <h1>
                  0<span>3</span>
                </h1>
                <h2>
                  E<span>ducation</span>
                </h2>
                <p>
                  <span>DBJ College </span>
                  <br />
                  During my academic journey, I focused heavily on web development and database management, which sparked my interest in full-stack technologies.
                </p>
              </Link>
            </div>
            <div
              className="about__details"
              data-aos="fade-down"
              data-aos-offset="50"
              data-aos-delay="500"
              data-aos-once="true"
            >
              <Link to="/about/internships">
                <h1>
                  0<span>2</span>
                </h1>
                <h2>
                  I<span>nternships</span>
                </h2>
                <p>
                  <span>Interned at -</span> <br />
                </p>
                <ul>
                 <li>
                    <span>Ollato Eduvercity Pvt Ltd</span> - Web Developer{" "}
                  </li>
                  <li>
                    <span>DC Info Tech Pvt Ltd</span> - Web Developer{" "}
                  </li>
                  <li>
                    <span>Sarvi Solution</span> - Web Developer{" "}
                  </li>
                </ul>
              </Link>
            </div>
            <div
              className="about__details"
              data-aos="fade-down"
              data-aos-offset="-180"
              data-aos-delay="700"
              data-aos-once="true"
            >
              <Link to="/about/experience">
                <h1>
                  0<span>4</span>
                </h1>
                <h2>
                  I<span>nterests</span>
                </h2>
                <p>
                  <span>Hobbies & Languages</span>
                  
                </p>
              </Link>
              {/* -- */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
