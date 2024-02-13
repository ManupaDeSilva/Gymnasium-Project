import { useState, useEffect } from "react";
import "./Baseball.css";
import HeaderAfterLog from "./components/HeaderAfterLog"
import Footer from "./components/Footer"
import BookButtonLarge from "./components/BookButtonLarge";

const Baseball = () => {

  const [baseballData, setBaseballData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/baseball');
        const data = await response.json();
        setBaseballData(data);
      } catch (error) {
       // console.error('Error fetching baseball data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="baseball6">
      <HeaderAfterLog/>
      <img className="locker02back-icon" alt="" src="/locker02back@2x.png" />
      <div className="baseballtopic">
        <div className="baseball7">BASEBALL</div>
      </div>
      <div className="locker-02">Locker 02</div>
      <div className="equipments20">Equipments</div>
      <div className="court14">Court</div>
      <div className="available-number-of32">Available Number of balls</div>
      <div className="available-number-of33">Available Number of bats</div>
      <div className="today-available-times19">Today Available Times</div>
      <div className="bacsketballsavailable32">
        <div className="div32">{baseballData.balls || '6'}</div>
      </div>
      <div className="bacsketballsavailable33">
        <div className="div32">{baseballData.bats || '10'}</div>
      </div>
      <div className="courttimeslots36">
        <div className="div32">{baseballData.availableTimes?.length
            ? baseballData.availableTimes.join(', ')
            : 'monday 1-4 '}</div>
      </div>
      <div className="frame">
        <div className="div32">{`Data Not Available Yet `}</div>
      </div>
      <b className="baseballdiscription1">
        Welcome to the University Gymnasium's Baseball Practice Sessions, where
        we offer an exciting opportunity for players of all skill levels to come
        together and enjoy America's favorite pastime. Whether you're a seasoned
        player or new to the sport, our practice sessions are designed to help
        you improve your skills, learn the fundamentals, and have a great time
        on the field.
      </b>
      <div className="baseballdiscription2">
        <p className="batting-and-fielding">What to Expect:</p>
        <p className="batting-and-fielding">&nbsp;</p>
        <p className="batting-and-fielding">
          Batting and Fielding Drills: Our practice sessions include a variety
          of batting and fielding drills to help you refine your hitting,
          catching, and throwing techniques.
        </p>
        <p className="batting-and-fielding">&nbsp;</p>
        <p className="batting-and-fielding">
          Individualized Coaching: Receive personalized coaching and feedback
          from our experienced baseball coaches who are dedicated to helping you
          reach your full potential.
        </p>
        <p className="batting-and-fielding">
          Teamwork and Strategy: Engage in scrimmage games and strategic
          exercises that promote teamwork, communication, and sportsmanship
          among players.
        </p>
        <p className="batting-and-fielding">
          Equipment Provided: We provide all the necessary equipment, including
          bats, gloves, and baseballs, so you can focus on enjoying the game.
        </p>
        <p className="batting-and-fielding">&nbsp;</p>
        <p className="batting-and-fielding">Details:</p>
        <p className="batting-and-fielding">&nbsp;</p>
        <p className="batting-and-fielding">
          Location: University Gymnasium, [University Of Peradeniya]
        </p>
        <p className="batting-and-fielding">
          Attire: Wear comfortable athletic clothing and bring a cap or visor to
          protect yourself from the sun during outdoor sessions.
        </p>
        <p className="batting-and-fielding">&nbsp;</p>
        <p className="batting-and-fielding">Registration:</p>
        <p className="batting-and-fielding">&nbsp;</p>
        <p className="batting-and-fielding">
          While walk-ins are welcome, we recommend pre-registering to guarantee
          your spot in the session. You can register online through our website
          or contact our gymnasium staff for assistance.
        </p>
      </div>
      <div className="sheduletable20">
        <b className="schedule21">Schedule</b>
        <div className="scheduletable20">
          <b className="dates20">Dates</b>
          <b className="times20">Times</b>
          <b className="event-description20">Event Description</b>
          <img className="border-icon101" alt="" src="/border.svg" />
          <img className="border-icon102" alt="" src="/border.svg" />
          <img className="border-icon103" alt="" src="/border.svg" />
          <img className="border-icon104" alt="" />
          <div className="monday20">Monday</div>
          <div className="am-4oo40">9.00 am - 4.oo pm</div>
          <div className="am-4oo41">9.00 am - 4.oo pm</div>
          <div className="tuesday20">Tuesday</div>
          <div className="practices40">Practices</div>
          <div className="practices41">Practices</div>
          <div className="dateinput41">
            <button className="updatebutton">UPDATE</button>
          </div>
          <div className="timeinput20">
            <button className="updatebutton">UPDATE</button>
          </div>
          <div className="dateinput42">
            <button className="updatebutton">UPDATE</button>
          </div>
        </div>
      </div>
      <div className="bookingbutton1">
          <BookButtonLarge/>
         </div>
      <Footer/>
    </div>
  );
};

export default Baseball;
