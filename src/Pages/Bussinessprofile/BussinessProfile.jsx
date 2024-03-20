import "./bussinessprofile.css";
import bussinessPic from '../../assets/images/Image.png';
const BussinessProfile = () => {
  return (
    <>
      <div className="bussiness-profile-main animate__animated animate__bounce">
        <div className="bussiness-profile-container">
          <div className="bussiness-profile-description-container">
            <p className="shift-bussiness-title">Let’s shift your business</p>
            <h2 className="shift-bussiness-heading">
              Shift your business <br /> fast with shade pro.
            </h2>
            <p className="bussiness-profile-details">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next consultancy website within few minutes.
            </p>

            <div className="project-button-container">
                <button>Get started a project</button>
            </div>
          </div>
          <div className="bussiness-profile-picture-container">
            <img src={bussinessPic} alt="bussinessPic" className="bussiness-pic" style={{ maxWidth: '80%', height: 'auto' }}/>
          </div>
        </div>  
      </div>
    </>
  );
};

export default BussinessProfile;
