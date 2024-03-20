import "./services.css";
import designer from "../../assets/images/Designer-rafiki.png";
import programmer from "../../assets/images/Programming-rafiki.png";
import notes from "../../assets/images/Notes-rafiki.png";
import learnMore from "../../assets/images/tail-right.png";
import customer from "../../assets/images/customer-pic.png";
import Stars from "../../assets/images/Stars.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Services = () => {
  useEffect(() => {
    Aos.init({ duration: "1500" });
  }, []);
  return (
    <>
      <div className="services-main">
        <div className="services-container">
          <p className="services-title">
            our services
          </p>
          <h4 className="services-description">
            We provide great services for our <br />
            customers based on needs
          </h4>
          <div className="service-card-main">
            {/* Designer card section */}
            <div className="designer-card-container" data-aos="fade-right">
              <img src={designer} alt="designer" />
              <p className="designer-title">Graphic Design</p>
              <p className="designer-description">
                With lots of unique blocks, you can easily build a page without
                coding. Build your next landing page.
              </p>
              <div className="learnmore-button-container mt-4" data-aos="flip-up">
                <button className="learnmore-button">Learn more</button>
                <img
                  src={learnMore}
                  alt="learnMore"
                  className="learnmore-arrow"
                />
              </div>
            </div>

            {/* Programmer card section */}
            <div className="programmer-card-container" data-aos="fade-up">
              <img src={programmer} alt="designer" />
              <p className="designer-title">Web Development</p>
              <p className="designer-description">
                With lots of unique blocks, you can easily build a page without
                coding. Build your next landing page.
              </p>
              <div className="learnmore-button-container mt-4" data-aos="flip-up">
                <button className="learnmore-button">Learn more</button>
                <img
                  src={learnMore}
                  alt="learnMore"
                  className="learnmore-arrow"
                />
              </div>
            </div>

            {/* Notes card section */}
            <div className="notes-card-container" data-aos="fade-left">
              <img src={notes} alt="designer" />
              <p className="designer-title">Content Writing</p>
              <p className="designer-description">
                With lots of unique blocks, you can easily build a page without
                coding. Build your next landing page.
              </p>
              <div className="learnmore-button-container mt-4" data-aos="flip-up">
                <button className="learnmore-button">Learn more</button>
                <img
                  src={learnMore}
                  alt="learnMore"
                  className="learnmore-arrow"
                />
              </div>
            </div>
          </div>
          <div className="customer-rating-container" data-aos="fade-down">
            <div className="customer-pic-main">
              <img src={customer} alt="customer-pic" />
            </div>
            <div className="customer-reply-main">
              <p className="customer-rating">
                <img src={Stars} alt="Stars rating" />
              </p>
              <div className="customer-reply">
                <b>
                  “OMG! I cannot believe that I have got a brand new landing
                  page <br />
                  after getting Albino. It was super easy to edit and publish.”
                </b>
              </div>
              <div className="customer-name-with-position">
                <b className="customer-name-main">Franklin Hicks</b>
                <p className="customer-postname-main">Web Developer</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="service-devider" />
      </div>
    </>
  );
};

export default Services;
