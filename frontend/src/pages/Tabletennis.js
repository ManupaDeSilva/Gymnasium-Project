import "./Tabletennis.css";
import HeaderAfterLog from "./components/HeaderAfterLog"
import Footer from "./components/Footer"
import BookButtonLarge from "./components/BookButtonLarge";

const Tabletennis = () => {
  return (
    <div className="tabletennis4">
      <HeaderAfterLog/>
      <img className="locker12back-icon" alt="" src="/locker12back@2x.png" />
      <div className="tabletennistopic">
        <div className="table-tennis">TABLE TENNIS</div>
      </div>
      <div className="locker-12">Locker 12</div>
      <div className="equipments10">Equipments</div>
      <div className="court9">Court</div>
      <div className="available-number-of13">Available Number of Balls</div>
      <div className="available-number-of14">Available Number of Paddles</div>
      <div className="today-available-times9">Today Available Times</div>
      <div className="bacsketballsavailable13">
        <div className="div13">10</div>
      </div>
      <div className="bacsketballsavailable14">
        <div className="div13">10</div>
      </div>
      <div className="courttimeslots18">
        <div className="div13">{`Data Not Available Yet `}</div>
      </div>
      <div className="courttimeslots19">
        <div className="div13">{`Data Not Available Yet `}</div>
      </div>
      <b className="tabletennisdiscription1">
        Welcome to the University Gymnasium's Table Tennis Practice Sessions,
        where players of all levels gather to sharpen their skills and enjoy the
        fast-paced action of table tennis. Whether you're a seasoned player or
        new to the sport, our practice sessions offer the perfect opportunity to
        develop your technique, agility, and competitive spirit.
      </b>
      <div className="tabletennisdiscription2">
        <p className="table-time-our">What to Expect:</p>
        <p className="table-time-our">&nbsp;</p>
        <p className="table-time-our">
          Table Time: Our practice sessions provide ample time on the table for
          you to work on your serves, volleys, footwork, and strategy.
        </p>
        <p className="table-time-our">
          Skill Enhancement: Receive expert coaching from our experienced table
          tennis instructors dedicated to helping you improve your game and
          master advanced techniques.
        </p>
        <p className="table-time-our">
          Friendly Competition: Engage in singles and doubles matches, drills,
          and mini-tournaments that challenge your skills and test your
          reflexes.
        </p>
        <p className="table-time-our">
          Equipment Provided: Don't have your own table tennis paddle? No
          problem – we provide all the necessary equipment for you to
          participate in the session.
        </p>
        <p className="table-time-our">&nbsp;</p>
        <p className="table-time-our">Details:</p>
        <p className="table-time-our">&nbsp;</p>
        <p className="table-time-our">
          Location: University Gymnasium, [University Of Peradeniya]
        </p>
        <p className="table-time-our">
          Attire: Wear comfortable athletic clothing and proper indoor shoes for
          agility and traction. Table tennis balls will be provided.
        </p>
        <p className="table-time-our">&nbsp;</p>
        <p className="table-time-our">Registration:</p>
        <p className="table-time-our">&nbsp;</p>
        <p className="table-time-our">
          While walk-ins are welcome, we recommend pre-registering to secure
          your spot. Sign up online through our website or contact our gymnasium
          staff for assistance.
        </p>
      </div>
      <div className="sheduletable9">
        <b className="schedule10">Schedule</b>
        <div className="scheduletable9">
          <b className="dates9">Dates</b>
          <b className="times9">Times</b>
          <b className="event-description9">Event Description</b>
          <img className="border-icon46" alt="" src="/border.svg" />
          <img className="border-icon47" alt="" src="/border.svg" />
          <img className="border-icon48" alt="" src="/border.svg" />
          <img className="border-icon49" alt="" />
          <div className="monday9">Monday</div>
          <div className="am-4oo18">9.00 am - 4.oo pm</div>
          <div className="am-4oo19">9.00 am - 4.oo pm</div>
          <div className="tuesday9">Tuesday</div>
          <div className="practices18">Practices</div>
          <div className="practices19">Practices</div>
          <div className="dateinput19">
            <button className="updatebutton">UPDATE</button>
          </div>
          <div className="timeinput9">
            <button className="updatebutton">UPDATE</button>
          </div>
          <div className="dateinput20">
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

export default Tabletennis;
