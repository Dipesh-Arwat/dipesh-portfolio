import React, { useRef, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
    faLinkedin,
    faGithub,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import '../../styles/Contact/Contact.scss';


const Contact = () => {
    const [feedback, setFeedback] = useState("");
    const [error, setError] = useState("");
    const formRef = useRef(null); // Create a ref for the form
  
    const onSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      
      // Use environment variable for access key
      formData.append("access_key", '7e42c10a-cb64-419c-b209-7a96e1a51610');
  
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
  
      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: json,
        });
        
        const data = await res.json();
  
        if (data.success) {
          setFeedback("Form submitted successfully!");
          setError("");
  
          // Reset the form fields
          formRef.current.reset();
  
          // Remove feedback message after 3 seconds
          window.location.reload();
        } else {
          setFeedback("");
          setError("Failed to submit the form. Please try again.");
        }
      } catch (error) {
        setFeedback("");
        setError("An error occurred while submitting the form.");
        console.error("Error:", error);
      }
    };
  
  
    return (
        <>
        {/* '7e42c10a-cb64-419c-b209-7a96e1a51610' */}
            <div className="contact" id='contact'>
                <div className="contact__header">
                    <h1>
                        <span
                            data-aos="fade-down"
                            data-aos-delay="0"
                            data-aos-offset="200"
                        >
                            C
                        </span>
                        <span
                            data-aos="fade-down"
                            data-aos-delay="200"
                            data-aos-offset="200"
                        >
                            O
                        </span>
                        <span
                            data-aos="fade-down"
                            data-aos-delay="400"
                            data-aos-offset="200"
                        >
                            N
                        </span>
                        <span
                            data-aos="fade-down"
                            data-aos-delay="600"
                            data-aos-offset="200"
                        >
                            T
                        </span>
                        <span
                            data-aos="fade-down"
                            data-aos-delay="800"
                            data-aos-offset="200"
                        >
                            A
                        </span>
                        <span
                            data-aos="fade-down"
                            data-aos-delay="1000"
                            data-aos-offset="200"
                        >
                            C
                        </span>
                        <span
                            data-aos="fade-down"
                            data-aos-delay="1200"
                            data-aos-offset="200"
                        >
                            T
                        </span>
                        <span
                            data-aos="fade-down"
                            data-aos-delay="1400"
                            data-aos-offset="200"
                        >
                            .
                        </span>
                    </h1>
                </div>
                <div className="contact__container">
                    <div className="contact__details">
                        <div className="contact__form" data-aos="fade-up">
                            <form ref={formRef} name="contact" onSubmit={onSubmit}>
                                {/* <input type="hidden" name="form-name" value="contact" /> */}
                                <p className="contact__form-group">
                                    <label htmlFor="name">Name: </label>
                                    <input
                                        type="text"
                                        name="name"
                                        autoComplete="off"
                                        placeholder="Enter name"
                                        required
                                    />
                                </p>
                                <p className="contact__form-group">
                                    <label htmlFor="email">Email: </label>
                                    <input
                                        type="email"
                                        name="email"
                                        autoComplete="off"
                                        placeholder="Enter email"
                                        required
                                    />
                                </p>
                                <p className="contact__form-group">
                                    <label htmlFor="message">Message: </label>
                                    <textarea
                                        name="message"
                                        id="contact__message"
                                        cols="20"
                                        rows="5"
                                        placeholder="Type your messsage"
                                    ></textarea>
                                </p>
                                <button type='submit' className="contact__send-btn">
                                    Send
                                </button>
                            </form>
                            {feedback && <p style={{ color: 'green' }}>{feedback}</p>}
                            {error && <p style={{ color: 'red' }}>{error}</p>}
                        </div>
                    </div>
                    <div className="contact__info" data-aos="fade-up">
                        <h3 className="contact__info-title">Let's Connect</h3>
                        <div className="contact__info-details">
                            <ul>
                                <li> <FontAwesomeIcon icon={faPhone} size="2x" /><p><span>Phone:</span>&nbsp;&nbsp;(+91) 8767859176</p></li>
                                <li> <FontAwesomeIcon icon={faEnvelope} size="2x" /><p><span>Email:&nbsp;&nbsp;</span>dipesharwat80@gmail.com</p></li>
                            </ul>
                        </div>
                        <div className="contact__social">
                            <p className="contact__linkedin">
                                <a href="https://www.linkedin.com/in/dipesh-arwat-881b1924b" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                            </p>

                            <p className='contact__github'>
                                <a href="https://github.com/Dipesh-Arwat" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                            </p>

                            <p className='contact__youtube'>
                                <a href="https://www.instagram.com/dipesh_arwat/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
