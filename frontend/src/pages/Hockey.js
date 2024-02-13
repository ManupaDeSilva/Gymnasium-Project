import "./Hockey.css";
import HeaderAfterLog from "./components/HeaderAfterLog"
import Footer from "./components/Footer"
import BookButtonLarge from "./components/BookButtonLarge";

const Hockey = () => {
  return (
    <div className="hockey2">
      <HeaderAfterLog/>
      <img className="locker09back-icon" alt="" src="/locker09back@2x.png" />
      <div className="hockeytopic">
        <div className="hockey3">HOCKEY</div>
      </div>
      <div className="locker-09">Locker 09</div>
      <div className="equipments8">Equipments</div>
      <div className="court7">Court</div>
      <div className="available-number-of10">Available Number of balls</div>
      <div className="available-number-of11">Available Number of bats</div>
      <div className="today-available-times7">Today Available Times</div>
      <div className="bacsketballsavailable10">
        <div className="div10">10</div>
      </div>
      <div className="bacsketballsavailable11">
        <div className="div10">10</div>
      </div>
      <div className="courttimeslots14">
        <div className="div10">{`Data Not Available Yet `}</div>
      </div>
      <div className="courttimeslots15">
        <div className="div10">{`Data Not Available Yet `}</div>
      </div>
      <b className="hockeydiscription1">
        Welcome to the University Gymnasium's Hockey Practice Sessions, where
        players of all levels gather to experience the thrill of this fast-paced
        and dynamic sport. Whether you're a seasoned hockey player or new to the
        game, our practice sessions offer the perfect opportunity to develop
        your skills, teamwork, and passion for hockey.
      </b>
      <div className="hockeydiscription2">
        <p className="field-time-our">What to Expect:</p>
        <p className="field-time-our">&nbsp;</p>
        <p className="field-time-our">
          Field Time: Our practice sessions provide ample time on the field for
          you to work on your stickhandling, passing, shooting, and defensive
          techniques.
        </p>
        <p className="field-time-our">
          Skill Enhancement: Receive expert coaching from our experienced hockey
          instructors dedicated to helping you improve your game and reach your
          full potential.
        </p>
        <p className="field-time-our">
          Team Bonding: Engage in drills, scrimmages, and tactical exercises
          that foster teamwork, communication, and camaraderie among players.
        </p>
        <p className="field-time-our">
          Equipment Provided: Don't have your own hockey stick or protective
          gear? No problem – we provide all the necessary equipment for you to
          enjoy the session.
        </p>
        <p className="field-time-our">&nbsp;</p>
        <p className="field-time-our">Details:</p>
        <p className="field-time-our">&nbsp;</p>
        <p className="field-time-our">
          Location: University Gymnasium, [University Of Peradeniya]
        </p>
        <p className="field-time-our">
          Attire: Wear appropriate athletic clothing and shin guards for safety.
          Hockey sticks and mouthguards are recommended but can be provided upon
          request.
        </p>
        <p className="field-time-our">&nbsp;</p>
        <p className="field-time-our">Registration:</p>
        <p className="field-time-our">&nbsp;</p>
        <p className="field-time-our">
          While walk-ins are welcome, we recommend pre-registering to secure
          your spot. Sign up online through our website or contact our gymnasium
          staff for assistance.
        </p>
      </div>
      <div className="sheduletable7">
        <b className="schedule8">Schedule</b>
        <div className="scheduletable7">
          <b className="dates7">Dates</b>
          <b className="times7">Times</b>
          <b className="event-description7">Event Description</b>
          <img className="border-icon36" alt="" src="/border.svg" />
          <img className="border-icon37" alt="" src="/border.svg" />
          <img className="border-icon38" alt="" src="/border.svg" />
          <img className="border-icon39" alt="" />
          <div className="monday7">Monday</div>
          <div className="am-4oo14">9.00 am - 4.oo pm</div>
          <div className="am-4oo15">9.00 am - 4.oo pm</div>
          <div className="tuesday7">Tuesday</div>
          <div className="practices14">Practices</div>
          <div className="practices15">Practices</div>
          <div className="dateinput15">
            <button className="updatebutton">UPDATE</button>
          </div>
          <div className="timeinput7">
            <button className="updatebutton">UPDATE</button>
          </div>
          <div className="dateinput16">
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

export default Hockey;
