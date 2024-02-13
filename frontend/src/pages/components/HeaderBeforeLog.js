import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./HeaderBeforeLog.css";
import axios from "axios"

const HeaderBeforeLog = () => {
  const navigate = useNavigate();

  const LoginfisrtClick = useCallback(() => {
    alert("you have to login first")
  }, [navigate]);

  const onLoginBackClick = useCallback(() => {
    navigate("/loginpage");
  }, [navigate]);

  const onSignUpContainerClick = useCallback(() => {
    navigate("/regitration");
  }, [navigate]);

  const onHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutUsClick = useCallback(() => {
    navigate("/aboutus");
  }, [navigate]);

  const onRegistrationClick = useCallback(() => {
    navigate("/regitration");
  }, [navigate]);



  return (
    <div className="headerbeforelog">
      <img className="uopname-icon" alt="" src="/uopname@2x.png" />
      <div className="department-of-physical-container1">
        <p className="department-of-physical1">
          Department of Physical Education
        </p>
        <p className="university-of-peradeniya2">University of Peradeniya</p>
      </div>
      <div className="headerback" />
      <img className="unilogo-icon1" alt="" src="/unilogo@2x.png" />
      <button className="loginback" onClick={onLoginBackClick}>
        <div className="log-in">Log In</div>
      </button>
      <div className="signup1" onClick={onSignUpContainerClick}>
        <button className="signupback" />
        <button className="sign-up1">Sign Up</button>
      </div>
      <button className="special-programmes1">Special Programmes</button>
      <div className="navigationbar">
        <div className="naviback" />
        <button className="home" onClick={onHomeClick}>
          Home
        </button>
        <button className="about-us" onClick={onAboutUsClick}>
          About Us
        </button>
        <button className="registration" onClick={onRegistrationClick}>
          Registration
        </button>
        <button className="payments" onClick={LoginfisrtClick}>
          Payments
        </button>
        <button className="booking1"onClick={LoginfisrtClick}>
          Booking
        </button>
        <button className="sports3" onClick={LoginfisrtClick}>
          Sports
        </button>
        <button className="locker-system"onClick={LoginfisrtClick} >
          Locker System
        </button>
        <button className="facilities2" onClick={LoginfisrtClick}>
          Facilities
        </button>
        <button className="events"onClick={LoginfisrtClick} >
          Events
        </button>
        <button className="classes" onClick={LoginfisrtClick}>
          Classes
        </button>
        <button
          className="special-programmes2"
          onClick={LoginfisrtClick}
        >
          Special Programmes
        </button>
      </div>
    </div>
  );
};

export default HeaderBeforeLog;
