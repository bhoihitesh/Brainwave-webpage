import "./chooseus.css";
import manager from "../../assets/images/business-contact-86.png";
import chat from "../../assets/images/chat-33.png";
import task from "../../assets/images/ic_layers_48px.png";
import deadline from "../../assets/images/ic_timelapse_48px.png";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";
const ChooseUs = () => {
  useEffect(()=>{
    Aos.init({duration:'1500'})
  },[])
  return (
    <>
      <div className="why-chooseus-main">
        <div className="why-chooseus-container">
          <div className="why-chooseus-heading-main" data-aos="fade-up">
            <div className="why-chooseus-heading-title">
              <p>Why choose us</p>
            </div>
            <div className="why-chooseus-heading-description">
              <b>
                People choose us because we <br /> serve the best for everyone
              </b>
            </div>
          </div>
          <div className="why-chooseus-topics-main">
            <div className="left-chooseus-section" data-aos="fade-right">
              <div className="project-manager-section">
                <div className="manager-icon-main">
                  <img src={manager} alt="manager" className="manager" />
                </div>
                <div className="manager-summery">
                  <div className="manager-title">
                    <b>Dedicated project manager</b>
                  </div>
                  <div className="manager-description">
                    <p>
                      With lots of unique blocks, you can <br /> easily build a
                      page without coding. <br /> Build your next landing page.
                    </p>
                  </div>
                </div>
              </div>
              <div className="feedback-sharing-section">
                <div className="feedback-sharing-pic-main">
                  <img src={chat} alt="chat" className="chat" />
                </div>
                <div className="feedback-sharing-summery">
                  <div className="feedback-sharing-title">
                    <b>Easy feedback sharing</b>
                  </div>
                  <div className="feedback-sharing-description">
                    <p>
                      With lots of unique blocks, you can <br /> easily build a
                      page without coding. <br /> Build your next landing page.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-chooseus-section" data-aos="fade-left">
              <div className="organize-task-section">
                <div className="organize-task-pic-main">
                  <img src={task} alt="task" className="task" />
                </div>
                <div className="organize-task-summery">
                  <div className="organize-task-title">
                    <b>Organized tasks</b>
                  </div>
                  <div className="organize-task-description">
                    <p>
                      With lots of unique blocks, you can <br /> easily build a
                      page without coding. <br /> Build your next landing page.
                    </p>
                  </div>
                </div>
              </div>
              <div className="deadline-section">
                <div className="deadline-pic-main">
                  <img src={deadline} alt="deadline" className="deadline" />
                </div>
                <div className="deadline-summery">
                  <div className="deadline-title">
                    <b>Never miss deadline</b>
                  </div>
                  <div className="deadline-description">
                    <p>
                      With lots of unique blocks, you can <br /> easily build a
                      page without coding. <br /> Build your next landing page.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="why-chooseus-divider" />
        </div>

        <div className="launch-nextProject-container">
          <div className="launch-project-summery" data-aos="fade-right">
            <b className="nextProject-title">
              Ready to launch your next project?
            </b>
            <p className="nextProject-description">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </p>
          </div>
          <div className="get-project-button" data-aos="fade-left">
            <button>Get started a project</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ChooseUs;
