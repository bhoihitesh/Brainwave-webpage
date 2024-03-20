import React from "react";
import "./home.css";
import Navbar from "../../Components/Navbar/Navbar";
import BussinessProfile from "../Bussinessprofile/BussinessProfile";
import Services from "../Services/Services";
import Stories from "../Stories/Stories";
import ChooseUs from "../Chooseus/ChooseUs";
import CaseStudy from "../Casestudy/CaseStudy";
import Testimonial from "../Testimonial/Testimonial";
import Footer from "../../Components/Footer/Footer";
const Home = () => {
  return (
    <>
      <div className="home-main">
        <Navbar />
        <div className="home-container">
        <BussinessProfile/>
        <Services/>
        <Stories/>
        <ChooseUs/>
        <CaseStudy/>
        <Testimonial/>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default Home;
