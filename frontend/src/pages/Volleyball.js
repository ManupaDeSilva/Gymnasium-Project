import "./Volleyball.css";
import HeaderAfterLog from "./components/HeaderAfterLog"
import Footer from "./components/Footer"
import BookButtonLarge from "./components/BookButtonLarge";

const Volleyball = () => {
  return (
    <div className="volleyball4">
      <HeaderAfterLog/>
      <img className="locker14back-icon" alt="" src="/locker14back@2x.png" />
      <div className="volleyballtopic">
        <div className="volleyball5">VOLLEYBALL</div>
      </div>
      <div className="locker-14">Locker 14</div>
      <div className="equipments12">Equipments</div>
      <div className="court11">Court</div>
      <div className="available-number-of17">Available Number of balls</div>
      <div className="today-available-times11">Today Available Times</div>
      <div className="bacsketballsavailable17">
        <div className="div17">10</div>
      </div>
      <div className="courttimeslots22">
        <div className="div17">{`Data Not Available Yet `}</div>
      </div>
      <div className="courttimeslots23">
        <div className="div17">{`Data Not Available Yet `}</div>
      </div>
      <b className="vollyballdiscription1">
        Welcome to the University Gymnasium's Volleyball Practice Sessions,
        where players of all levels come together to enjoy the thrilling game of
        volleyball. Whether you're a seasoned player or new to the sport, our
        practice sessions are designed to help you develop your skills,
        teamwork, and passion for volleyball.
      </b>
      <div className="vollyballdiscription2">
        <p className="what-to-expect11">What to Expect:</p>
        <p className="what-to-expect11">&nbsp;</p>
        <p className="what-to-expect11">
          Court Time: Our practice sessions offer plenty of court time for you
          to work on your passing, setting, spiking, and defensive techniques.
        </p>
        <p className="what-to-expect11">
          Skill Development: Receive expert coaching from our experienced
          volleyball instructors dedicated to helping you refine your technique,
          improve your positioning, and enhance your overall game.
        </p>
        <p className="what-to-expect11">
          Team Collaboration: Engage in drills, game simulations, and positional
          exercises that promote teamwork, communication, and synergy among
          players.
        </p>
        <p className="what-to-expect11">
          Equipment Provided: Don't have your own volleyball? No worries – we
          provide all the necessary equipment for you to participate in the
          session.
        </p>
        <p className="what-to-expect11">&nbsp;</p>
        <p className="what-to-expect11">Details:</p>
        <p className="what-to-expect11">&nbsp;</p>
        <p className="what-to-expect11">
          Location: University Gymnasium, [University Of Peradeniya]
        </p>
        <p className="what-to-expect11">
          Attire: Wear comfortable athletic clothing and proper volleyball shoes
          for traction and support. Knee pads are recommended for added
          protection.
        </p>
        <p className="what-to-expect11">&nbsp;</p>
        <p className="what-to-expect11">Registration:</p>
        <p className="what-to-expect11">&nbsp;</p>
        <p className="what-to-expect11">
          While walk-ins are welcome, we recommend pre-registering to ensure
          your spot. Register online through our website or contact our
          gymnasium staff for assistance.
        </p>
      </div>
      <div className="sheduletable11">
        <b className="schedule12">Schedule</b>
        <div className="scheduletable11">
          <b className="dates11">Dates</b>
          <b className="times11">Times</b>
          <b className="event-description11">Event Description</b>
          <img className="border-icon56" alt="" src="/border.svg" />
          <img className="border-icon57" alt="" src="/border.svg" />
          <img className="border-icon58" alt="" src="/border.svg" />
          <img className="border-icon59" alt="" />
          <div className="monday11">Monday</div>
          <div className="am-4oo22">9.00 am - 4.oo pm</div>
          <div className="am-4oo23">9.00 am - 4.oo pm</div>
          <div className="tuesday11">Tuesday</div>
          <div className="practices22">Practices</div>
          <div className="practices23">Practices</div>
          <div className="dateinput23">
            <button className="updatebutton">UPDATE</button>
          </div>
          <div className="timeinput11">
            <button className="updatebutton">UPDATE</button>
          </div>
          <div className="dateinput24">
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

export default Volleyball;
