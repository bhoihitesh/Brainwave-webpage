import "./casestudy.css";
import branding from "../../assets/images/case study01.png";
import development from "../../assets/images/case study02.png";
import packaging from "../../assets/images/case study03.png";
import magazine from "../../assets/images/case study04.png";
import arrow from "../../assets/images/tail-right01.png";
import axios from "axios";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
const CaseStudy = () => {
// live cricket score API
  // const options = {
  //   method: "GET",
  //   url: "https://cricbuzz-cricket.p.rapidapi.com/matches/v1/upcoming",
  //   headers: {
  //     "X-RapidAPI-Key": "e0bb9b6bddmsh43109cf55e35b7ep17114bjsn3eff4acfc380",
  //     "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
  //   },
  // };

  // const scoreData = async () => {
  //   try {
  //     console.warn("options", options);
  //     const response = await axios.request(options);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // scoreData();
  useEffect(()=>{
    Aos.init({duration:'1500'})
  },[])
  return (
    <>
      <div className="casestudy-main">
        <div className="casestudy-container">
          <div className="casestudy-heading-main" data-aos="fade-down">
            <div className="casestudy-title">
              <p>Case studies</p>
            </div>
            <div className="casestudy-title-description">
              <b>
                Our works describe why we are <br /> the best in the business
              </b>
            </div>
          </div>
          <div className="product-main">
            <div className="left-casestudy-container" data-aos="fade-right">
              <div className="branding-section">
                <div className="product-pic">
                  <img src={branding} alt="branding" className="branding" />
                </div>
                <div className="product-description">
                  <div className="product-category-name">
                    <p>Graphic Design</p>
                  </div>
                  <div className="product-title">
                    <b>Aura Branding Design</b>
                  </div>
                </div>
              </div>
              <div className="development-section">
                <div className="product-pic">
                  <img
                    src={development}
                    alt="development"
                    className="development"
                  />
                </div>
                <div className="product-description">
                  <div className="product-category-name">
                    <p>Web Development</p>
                  </div>
                  <div className="product-title">
                    <b>Gradient Website Development</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-casestudy-container" data-aos="fade-left">
              <div className="packaging-section">
                <div className="product-pic">
                  <img src={packaging} alt="packaging" className="packaging" />
                </div>
                <div className="product-description">
                  <div className="product-category-name">
                    <p>Graphic Design</p>
                  </div>
                  <div className="product-title">
                    <b>AB.S Snack Packaging</b>
                  </div>
                </div>
              </div>
              <div className="magazine-section">
                <div className="product-pic">
                  <img src={magazine} alt="magazine" className="magazine" />
                </div>
                <div className="product-description">
                  <div className="product-category-name">
                    <p>Content Writing</p>
                  </div>
                  <div className="product-title">
                    <b>Magazine Content Writing</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="all-works-button">
            <button className="see-all-btn" data-aos="flip-up">
              <span>See all works</span>
              <img src={arrow} alt="arrow" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudy;
