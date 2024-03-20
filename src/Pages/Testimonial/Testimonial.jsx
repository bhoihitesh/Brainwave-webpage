import React, { useEffect } from "react";
import "./testimonial.css";
import user from '../../assets/images/Oval-testimonial.png'
import Aos from "aos";
// import 'aos/dist/aos'
const Testimonial = () => {
  useEffect(()=>{
    Aos.init({duration:'1500'})
  },[])
  return (
    <>
      <div className="testimonial-main">
        <div className="testimonail-container">
          <div className="testimonial-heading">
            <div className="testimonial-title" data-aos="fade-down">
                <p>Testimonial</p>
            </div>
            <div className="testimonial-description" data-aos="fade-right">
                <p>
                “Simply the best. Better than all the rest. I’d
                <br />
                 recommend this product to beginners and
                 <br />
                  advanced users.”
                </p>
            </div>
          </div>
          <div className="testimonial-profile" data-aos="fade-up">
            <div className="testimonial-profile-pic">
                <img src={user} alt="user" />
            </div>
            <div className="testimonial-profile-description">
              <div className="testimonial-profile-name"><p>Ian Klein</p></div>
              <div className="testimonial-profile-designation"><p>Digital Marketer</p></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
