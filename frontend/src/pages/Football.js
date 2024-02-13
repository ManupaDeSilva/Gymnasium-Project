import "./Football.css";
import HeaderAfterLog from "./components/HeaderAfterLog"
import Footer from "./components/Footer"
import BookButtonLarge from "./components/BookButtonLarge";

const Football = () => {
  return (
    <div className="football4">
      <HeaderAfterLog/>
      <img className="locker08back-icon" alt="" src="/locker08back@2x.png" />
      <div className="footballtopic">
        <div className="football5">FOOTBALL</div>
      </div>
      <div className="locker-08">Locker 08</div>
      <div className="equipments7">Equipments</div>
      <div className="court6">Court</div>
      <div className="available-number-of9">Available Number of balls</div>
      <div className="today-available-times6">Today Available Times</div>
      <div className="bacsketballsavailable9">
        <div className="div9">10</div>
      </div>
      <div className="courttimeslots12">
        <div className="div9">{`Data Not Available Yet `}</div>
      </div>
      <div className="courttimeslots13">
        <div className="div9">{`Data Not Available Yet `}</div>
      </div>
      <b className="footballdiscription1">
        Welcome to the University Gymnasium's Football Practice Sessions, where
        the thrill of the beautiful game comes alive on the field. Whether
        you're a seasoned footballer or a newcomer to the sport, our practice
        sessions provide the perfect opportunity to develop your skills,
        teamwork, and passion for football.
      </b>
      <div className="footballdiscription2">
        <p className="teamwork-football-is">What to Expect:</p>
        <p className="teamwork-football-is">&nbsp;</p>
        <p className="teamwork-football-is">
          Skill Development: Our practice sessions focus on honing fundamental
          football skills such as dribbling, passing, shooting, and tactical
          awareness. Receive expert guidance and coaching from our experienced
          football instructors dedicated to helping you improve your game.
        </p>
        <p className="teamwork-football-is">&nbsp;</p>
        <p className="teamwork-football-is">
          Teamwork: Football is a team sport that thrives on collaboration and
          communication. Engage in drills, scrimmages, and small-sided games
          that promote teamwork, strategic thinking, and effective coordination
          with your teammates.
        </p>
        <p className="teamwork-football-is">
          Fitness and Conditioning: Expect to participate in fitness drills and
          conditioning exercises designed to enhance your strength, speed,
          agility, and endurance – essential attributes for success on the
          football field.
        </p>
        <p className="teamwork-football-is">
          Gameplay: Experience the excitement of match simulations and practice
          games where you can apply your skills in realistic game scenarios,
          sharpen your decision-making abilities, and improve your overall game
          awareness.
        </p>
        <p className="teamwork-football-is">&nbsp;</p>
        <p className="teamwork-football-is">Details:</p>
        <p className="teamwork-football-is">&nbsp;</p>
        <p className="teamwork-football-is">
          Location: University Gymnasium, [University Of Peradeniya]
        </p>
        <p className="teamwork-football-is">
          Attire: Wear comfortable athletic clothing, football cleats or turf
          shoes, and shin guards for safety. Don't forget to bring a water
          bottle to stay hydrated during the session.
        </p>
        <p className="teamwork-football-is">&nbsp;</p>
        <p className="teamwork-football-is">Registration:</p>
        <p className="teamwork-football-is">&nbsp;</p>
        <p className="teamwork-football-is">
          While walk-ins are welcome, pre-registration is recommended to secure
          your spot in the session. Register online through our website or
          contact our gymnasium staff for more information. Whether you're
          dribbling past defenders or scoring goals, join us for an exhilarating
          game of football at the University Gymnasium!
        </p>
        <p className="teamwork-football-is">&nbsp;</p>
        <p className="teamwork-football-is">&nbsp;</p>
      </div>
      <div className="sheduletable6">
        <b className="schedule7">Schedule</b>
        <div className="scheduletable6">
          <b className="dates6">Dates</b>
          <b className="times6">Times</b>
          <b className="event-description6">Event Description</b>
          <img className="border-icon31" alt="" src="/border.svg" />
          <img className="border-icon32" alt="" src="/border.svg" />
          <img className="border-icon33" alt="" src="/border.svg" />
          <img className="border-icon34" alt="" />
          <div className="monday6">Monday</div>
          <div className="am-4oo12">9.00 am - 4.oo pm</div>
          <div className="am-4oo13">9.00 am - 4.oo pm</div>
          <div className="tuesday6">Tuesday</div>
          <div className="practices12">Practices</div>
          <div className="practices13">Practices</div>
          <div className="dateinput13">
           <button className="updatebutton">UPDATE</button>
          </div>
          <div className="timeinput6">
            <button className="updatebutton">UPDATE</button>
          </div>
          <div className="dateinput14">
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

export default Football;
