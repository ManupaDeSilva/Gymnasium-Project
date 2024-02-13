import "./Kickboxing.css";
import HeaderAfterLog from "./components/HeaderAfterLog"
import Footer from "./components/Footer"
import BookButtonLarge from "./components/BookButtonLarge";

const Kickboxing = () => {
  return (
    <div className="kickboxing4">
      <HeaderAfterLog/>
      <img className="locker17back-icon" alt="" src="/locker17back@2x.png" />
      <div className="boxingtopic">
        <div className="kick-boxing2">KICK BOXING</div>
      </div>
      <div className="locker-17">Locker 17</div>
      <div className="equipments15">Equipments</div>
      <div className="boxing-mat">Boxing Mat</div>
      <div className="available-number-of20">Available Number of Gloves</div>
      <div className="available-number-of21">Available Number of Headgears</div>
      <div className="available-number-of22">
        Available Number of Heavy Bags
      </div>
      <div className="today-available-times14">Today Available Times</div>
      <div className="bacsketballsavailable20">
        <div className="div20">10</div>
      </div>
      <div className="bacsketballsavailable21">
        <div className="div20">10</div>
      </div>
      <div className="bacsketballsavailable22">
        <div className="div20">10</div>
      </div>
      <div className="courttimeslots28">
        <div className="div20">{`Data Not Available Yet `}</div>
      </div>
      <b className="kickboxingdiscription1">
        Welcome to the University Gymnasium's Kickboxing Practice Sessions,
        where practitioners of all levels come together to experience the art
        and discipline of kickboxing. Whether you're a seasoned kickboxer or new
        to the sport, our practice sessions are designed to help you develop
        your skills, technique, and fitness.
      </b>
      <div className="kickboxingdiscription2">
        <p className="training-time-our">What to Expect:</p>
        <p className="training-time-our">&nbsp;</p>
        <p className="training-time-our">
          Training Time: Our practice sessions offer plenty of training time for
          you to work on your punches, kicks, footwork, and defensive maneuvers.
        </p>
        <p className="training-time-our">
          Skill Enhancement: Receive expert coaching from our experienced
          kickboxing instructors dedicated to helping you refine your technique,
          improve your timing, and enhance your overall performance.
        </p>
        <p className="training-time-our">
          Sparring Drills: Engage in partner drills and controlled sparring
          sessions that simulate real fight scenarios, providing practical
          application of techniques and strategies.
        </p>
        <p className="training-time-our">
          Equipment Provided: Don't have your own kickboxing gear? No problem –
          we provide all the necessary equipment for you to participate in the
          session.
        </p>
        <p className="training-time-our">&nbsp;</p>
        <p className="training-time-our">Details:</p>
        <p className="training-time-our">&nbsp;</p>
        <p className="training-time-our">
          Location: University Gymnasium, [University Of Peradeniya]
        </p>
        <p className="training-time-our">
          Attire: Wear comfortable athletic clothing and proper kickboxing
          attire for mobility and protection. Hand wraps and gloves are required
          for safety.
        </p>
        <p className="training-time-our">&nbsp;</p>
        <p className="training-time-our">Registration:</p>
        <p className="training-time-our">&nbsp;</p>
        <p className="training-time-our">
          While walk-ins are welcome, we recommend pre-registering to secure
          your spot. Register online through our website or contact our
          gymnasium staff for assistance.
        </p>
      </div>
      <div className="sheduletable14">
        <b className="schedule15">Schedule</b>
        <div className="scheduletable14">
          <b className="dates14">Dates</b>
          <b className="times14">Times</b>
          <b className="event-description14">Event Description</b>
          <img className="border-icon71" alt="" src="/border.svg" />
          <img className="border-icon72" alt="" src="/border.svg" />
          <img className="border-icon73" alt="" src="/border.svg" />
          <img className="border-icon74" alt="" />
          <div className="monday14">Monday</div>
          <div className="am-4oo28">9.00 am - 4.oo pm</div>
          <div className="am-4oo29">9.00 am - 4.oo pm</div>
          <div className="tuesday14">Tuesday</div>
          <div className="practices28">Practices</div>
          <div className="practices29">Practices</div>
          <div className="dateinput29">
            <input
              className="updatebutton42"
              placeholder="UPDATE"
              type="text"
            />
          </div>
          <div className="timeinput14">
            <input
              className="updatebutton42"
              placeholder="UPDATE"
              type="text"
            />
          </div>
          <div className="dateinput30">
            <input
              className="updatebutton42"
              placeholder="UPDATE"
              type="text"
            />
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

export default Kickboxing;
