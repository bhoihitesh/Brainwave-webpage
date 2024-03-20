import React, { useEffect, useState } from "react";
import "./navbar.css";
import logo from "../../assets/icons/shadepro.svg";
import menubar from "../../assets/icons/icons8-menu-bar.svg";
import Aos from "aos";
const Navbar = () => {
  const [navbarCollaps, setNavbarCollaps] = useState(true);
  const [screenSize, setScreensize] = useState(false);

  // screen size measurement function
  function checkWindowSize() {
    // Get the width of the browser window
    var windowWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    // Update the screenSize state
    setScreensize(windowWidth < 768 ? true : false);

    // Update the navbarCollapse state based on the window width
    setNavbarCollaps(windowWidth > 767 ? true : false);
  }

  // Initial check on page load
  useEffect(() => {
    checkWindowSize();
  }, []); // Run only on mount

  // Add an event listener for the resize event
  useEffect(() => {
    window.addEventListener("resize", checkWindowSize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []); // Run only on mount and unmount

  console.warn("screenSize", screenSize);

  // Your component rendering logic here
  useEffect(() => {
    Aos.init({ duration: "1500" });
  });
  return (
    <>
      <div
        className="navbar-main"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <div className="navbar-container">
          <div className="navbar-brand">
            <img src={logo} alt="logo" />
            {screenSize && (
              <div className="menu-bar">
                <img
                  src={menubar}
                  alt="menu bar icon"
                  onClick={() => setNavbarCollaps(!navbarCollaps)}
                />
              </div>
            )}
          </div>
          <div
            className={`${
              navbarCollaps ? "navbar-options" : "hide-navbar-options"
            }`}
          >
            <ul>
              <li>Home</li>
              <li>Products</li>
              <li>Services</li>
              <li>Contact us</li>
              <li>About us</li>
            </ul>
            <div className="navbar-button">
              <button className="start-project-btn">
                Get started a project
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
