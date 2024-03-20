import React from "react";
import "./stories.css";
import firstPerson from "../../assets/images/person1.png";
import firstTwoPerson from "../../assets/images/person2.png";
import secondTwoPerson from "../../assets/images/person3.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Stories = () => {
    useEffect(()=>{
      Aos.init({duration:'1500'})
    },[])
  return (
    <>
      <div className="stories-main">
        <div className="stories container">
          <div className="story-heading">
            <span data-aos="fade-up">our story</span>
            <div className="story-title-description-container">
              <p className="title-description" data-aos="fade-up">
                We know how everything works <br /> and why your business is
                failing <br /> over and over again.
              </p>
            </div>
          </div>
          <div className="person-story-main">
            <div className="first-person-container" data-aos="fade-right">
              <img
                src={firstPerson}
                alt="firstPerson"
                className="firstPerson"
              />
            </div>
            <div className="second-person-container">
              <div className="two-person-containers" data-aos="fade-right">
                <img
                  src={firstTwoPerson}
                  alt="firstTwoPerson"
                  className="firstTwoPerson"
                />
                <img
                  src={secondTwoPerson}
                  alt="secondTwoPerson"
                  className="secondTwoPerson"
                />
              </div>
              <div className="story-description-container" data-aos="fade-up">
                <p className="story-description">
                  We share common trends and strategies for improving your
                  rental income and making sure you stay in high demand. With
                  lots of unique blocks, you can easily build a page without
                  coding. Build your next landing page.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="customer-statistics-main">
          <div className="customer-statistics-container" data-aos="fade-up">
            <div className="visited-customers-container">
              <b>1M+</b>
              <p>
                Customers visit Omega every month <br /> to get their service done.
              </p>
            </div>
            <div className="visited-rating-container">
              <b>92%</b>
              <p>Satisfaction rate comes from our <br /> awesome customers.</p>
            </div>
            <div className="visited-averageRating-container">
              <b>4.9/5.0</b>
              <p>Average customer ratings we have <br /> got all over internet.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stories;
