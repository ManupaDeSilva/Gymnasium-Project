import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";
import HeaderBeforeLog from "./components/HeaderBeforeLog"
import FooterHome from "./components/FooterHome"
import axios from "axios"

const Homepage = () => {
  const navigate = useNavigate();

  const LoginfisrtClick = useCallback(() => {
    alert("you have to login first")
  }, [navigate]);

  


  return (
    <div className="homepage">
      <HeaderBeforeLog/>
      <div className="middle2">
        <b className="discription">{`The Department of Physical Education is the governing body of sports & recreational activities of the University of Peradeniya which is the oldest university in Sri Lanka. The University of Peradeniya is well known for renowned athletes and the most picturesque sporting assets which none of other universities within the Sri Lankan university system can challenge. The Department of Physical Education facilitates all the sports & recreational activities within the University and hire sports venues for concessionary rates for outsiders.`}</b>
      </div>
      <img
        className="homepageslider-icon"
        alt=""
        src="/homepageslider@2x.png"
      />
      <div className="servicesprovides">
        <div className="services-provides">Services Provides</div>
      </div>
      <img className="line-icon" alt="" src="/line.svg" />
      <img className="line-icon1" alt="" src="/line.svg" />
      <div className="homebutton1-2" onClick={LoginfisrtClick}>
        <img
          className="bookinghomepageimg-2-icon"
          alt=""
          src="/bookinghomepageimg-2@2x.png"
        />
        <div className="facilities-equipments">
          <p className="facilities">FACILITIES</p>
          <p className="facilities">EQUIPMENTS</p>
        </div>
        <b className="booking">BOOKING</b>
      </div>
      <div className="homebutton3-2" onClick={LoginfisrtClick}>
        <img
          className="bookinghomepageimg-2-icon"
          alt=""
          src="/bookinghomepageimg-2@2x.png"
        />
        <div
          className="outdoor-facilities"
          onClick={LoginfisrtClick}
        >
          Outdoor Facilities
        </div>
        <div
          className="indoor-facilities"
          onClick={LoginfisrtClick}
        >
          Indoor Facilities
        </div>
        <b className="schedule">FACILITIES</b>
      </div>
      <div className="homebutton2-2" onClick={LoginfisrtClick}>
        <img
          className="bookinghomepageimg-2-icon"
          alt=""
          src="/bookinghomepageimg-2@2x.png"
        />
        <div className="daily-schedule-music-container">
          <p className="facilities">Daily Schedule</p>
          <p className="facilities">{`Music & special`}</p>
          <p className="facilities">programs</p>
        </div>
        <b className="schedule">SCHEDULE</b>
      </div>
      <div className="middle">
        <div className="welcomeback" />
        <div className="welcome">WELCOME</div>
      </div>
      <div className="vision-and-mission">
        <div className="visionback01" />
        <div className="visionback02" />
        <div className="visiondiscription">
          to create an environment that allows students to enhance their social
          skills, teamwork, peer interaction, leadership, sportsmanship,
          positive attitude, self-esteem, and enjoyment to pursue an active life
          that leads to lifelong wellness.
        </div>
        <b className="vision">Vision</b>
        <div className="missionback01" />
        <div className="missionback02" />
        <div className="missiondiscription">
          <p className="facilities">
            <b>&nbsp;</b>
          </p>
          <p className="facilities">
            to promote lifelong learning recognizing the value of personal
            development to meet the complex challenges of regional and global
            communities.
          </p>
        </div>
        <b className="mission">Mission</b>
      </div>
      <div className="selectsport" >
        <img
          className="selectsportbackimg-icon"
          alt=""
          src="/selectsportbackimg@2x.png"
        />
        <div className="select-your-sport">SELECT YOUR SPORT</div>
      </div>
      <div className="bookingdiscription">
        <p className="facilities">
          When booking facilities and equipment, it's essential to plan ahead to
          ensure availability and smooth logistics for your event or activity.
        </p>
      </div>
      <div className="facilitiesdiscription">
        Using facilities responsibly ensures their longevity and availability
        for future users.
      </div>
      <div className="shedulediscription">
        Adhering to the time schedule ensures efficiency and allows for seamless
        coordination of tasks and activities.
      </div>
      <FooterHome/>
    </div>
  );
};

export default Homepage;
