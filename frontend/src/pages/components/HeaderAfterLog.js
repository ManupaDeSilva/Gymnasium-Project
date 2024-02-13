import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./HeaderAfterLog.css";

const HeaderAfterLog = () => {
  const navigate = useNavigate();

  const onLogOutContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLogLogo1ImageClick = useCallback(() => {
    navigate("/userprofile");
  }, [navigate]);

  const onHomeClick = useCallback(() => {
    navigate("/Homepage2");
  }, [navigate]);

  const onAboutUsClick = useCallback(() => {
    navigate("/aboutus");
  }, [navigate]);


  const onPaymentsClick = useCallback(() => {
    navigate("/payment");
  }, [navigate]);

  const onBookingClick = useCallback(() => {
    navigate("/sports");
  }, [navigate]);

  const onSportsClick = useCallback(() => {
    navigate("/sports");
  }, [navigate]);

  const onLockerSystemClick = useCallback(() => {
    navigate("/sports");
  }, [navigate]);

  const onFacilitiesClick = useCallback(() => {
    navigate("/outdoorfacilities");
  }, [navigate]);

  const onEventsScheduleClick = useCallback(() => {
    navigate("/eventshedule");
  }, [navigate]);

  const onClassesClick = useCallback(() => {
    navigate("/dailypractices");
  }, [navigate]);

  const onSpecialProgrammesClick = useCallback(() => {
    navigate("/special-programms");
  }, [navigate]);

  return (
    <div className="headerafterlog">
      <div className="department-of-physical-container2">
        <p className="department-of-physical2">
          Department of Physical Education
        </p>
        <p className="university-of-peradeniya4">University of Peradeniya</p>
      </div>
      <div className="headerback1" />
      <img className="unilogo-icon2" alt="" src="/unilogo@2x.png" />
      <div className="logout" onClick={onLogOutContainerClick}>
        <b className="log-out">Log out</b>
      </div>
      <img className="uopname-icon1" alt="" src="/uopname@2x.png" />
      <img
        className="loglogo-1-icon"
        alt=""
        src="/loglogo-1@2x.png"
        onClick={onLogLogo1ImageClick}
      />
      <div className="navigationbar1">
        <div className="naviback1" />
        <button className="home1" onClick={onHomeClick}>
          Home
        </button>
        <button className="about-us1" onClick={onAboutUsClick}>
          About Us
        </button>
        <button className="registration1" >
          Registration
        </button>
        <button className="payments2" onClick={onPaymentsClick}>
          Payments
        </button>
        <button className="booking3" onClick={onBookingClick}>
          Booking
        </button>
        <button className="sports5" onClick={onSportsClick}>
          Sports
        </button>
        <button className="locker-system1" onClick={onLockerSystemClick}>
          Locker System
        </button>
        <button className="facilities4" onClick={onFacilitiesClick}>
          Facilities
        </button>
        <button className="events-schedule" onClick={onEventsScheduleClick}>
          Events Schedule
        </button>
        <button className="classes1" onClick={onClassesClick}>
          Classes
        </button>
      </div>
      <button
        className="special-programmes3"
        onClick={onSpecialProgrammesClick}
      >
        Special Programmes
      </button>
    </div>
  );
};

export default HeaderAfterLog;
