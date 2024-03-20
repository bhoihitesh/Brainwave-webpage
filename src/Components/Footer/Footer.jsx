import React, { useEffect } from "react";
import "./footer.css";
import { CiTwitter, CiInstagram, CiLinkedin } from "react-icons/ci";
import { IoLogoFacebook } from "react-icons/io";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import Aos from "aos";
import 'aos/dist/aos.css'
const Footer = () => {
  useEffect(()=>{
    Aos.init({duration:'1500'})
  },[])
  return (
    <>
      <div className="footer-main">
        <div className="footer-container">
          <div className="launch-project-main">
            <div className="launch-project-container" data-aos="flip-up">
              <div className="launch-project-title">
                <p>Ready to launch your next project?</p>
              </div>
              <div className="launch-project-description">
                <p>
                  With lots of unique blocks, you can easily build a page
                  without <br />
                  coding. Build your next landing page.
                </p>
                <button className="start-project">Get started a project</button>
              </div>
            </div>
          </div>
          <hr className="launch-project-divider" />
          <div className="footer-section-main">
            <div className="footer-section-container">
              <div className="brand-section-main" data-aos="fade-right">
                <div className="brand-title">
                  <p>Brainwave.io</p>
                </div>
                <div className="brand-description">
                  <p>
                    With lots of unique blocks, you can <br />
                    easily build a page without coding. <br />
                    Build your next landing page.
                  </p>
                  <div className="social-media-links">
                    <FaTwitter
                      className="social-icon"
                      style={{ color: "#7D818D" }}
                    />
                    <IoLogoFacebook
                      className="social-icon"
                      style={{ color: "#7D818D" }}
                    />
                    <CiInstagram
                      className="social-icon"
                      style={{ color: "#7D818D" }}
                    />
                    <FaLinkedin
                      className="social-icon"
                      style={{ color: "#7D818D" }}
                    />
                  </div>
                </div>
              </div>
              <div className="footer-section">
              <div className="footer-first-section">
                <div className="company-section-main" data-aos="fade-up">
                  <div className="company-title">
                    <p>Company</p>
                  </div>
                  <div className="company-page-options">
                    <p>About us</p>
                    <p>Contact us</p>
                    <p>Careers</p>
                    <p>Press</p>
                  </div>
                </div>
                <div className="product-section-main" data-aos="fade-down">
                  <div className="company-title">
                    <p>Product</p>
                  </div>
                  <div className="company-page-options">
                    <p>Features</p>
                    <p>Pricing</p>
                    <p>News</p>
                    <p>Help desk</p>
                    <p>Support</p>
                  </div>
                </div>
              </div>

              <div className="footer-second-section">
                <div className="services-section-main" data-aos="fade-right">
                  <div className="company-title">
                    <p>Services</p>
                  </div>
                  <div className="company-page-options">
                    <p>Digital Marketing</p>
                    <p>Content Writing</p>
                    <p>SEO for Business</p>
                    <p>UI Design</p>
                  </div>
                </div>
                <div className="legal-section-main" data-aos="fade-left">
                  <div className="company-title">
                    <p>Legal</p>
                  </div>
                  <div className="company-page-options">
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                    <p>Return Policy</p>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
