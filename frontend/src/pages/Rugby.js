import "./Rugby.css";
import HeaderAfterLog from "./components/HeaderAfterLog"
import Footer from "./components/Footer"
import BookButtonLarge from "./components/BookButtonLarge";

const Rugby = () => {
  return (
    <div className="rugby4">
      <HeaderAfterLog/>
      <img className="locker15back-icon" alt="" src="/locker15back@2x.png" />
      <div className="rugbytopic">
        <div className="rugby5">RUGBY</div>
      </div>
      <div className="locker-15">Locker 15</div>
      <div className="equipments13">Equipments</div>
      <div className="court12">Court</div>
      <div className="available-number-of18">Available Number of balls</div>
      <div className="today-available-times12">Today Available Times</div>
      <div className="bacsketballsavailable18">
        <div className="div18">10</div>
      </div>
      <div className="courttimeslots24">
        <div className="div18">{`Data Not Available Yet `}</div>
      </div>
      <div className="courttimeslots25">
        <div className="div18">{`Data Not Available Yet `}</div>
      </div>
      <b className="rugbydiscription1">
        Welcome to the University Gymnasium's Rugby Practice Sessions, where
        players of all levels come together to experience the physicality and
        excitement of rugby. Whether you're a seasoned player or new to the
        sport, our practice sessions are designed to help you develop your
        skills, teamwork, and passion for rugby.
      </b>
      <div className="rugbydiscription2">
        <p className="what-to-expect12">What to Expect:</p>
        <p className="what-to-expect12">&nbsp;</p>
        <p className="what-to-expect12">
          Field Time: Our practice sessions offer plenty of field time for you
          to work on your passing, tackling, scrummaging, and kicking skills.
        </p>
        <p className="what-to-expect12">
          Skill Enhancement: Receive expert coaching from our experienced rugby
          instructors dedicated to helping you refine your technique, improve
          your decision-making, and enhance your overall game.
        </p>
        <p className="what-to-expect12">
          Team Bonding: Engage in drills, game simulations, and tactical
          exercises that foster teamwork, communication, and camaraderie among
          players.
        </p>
        <p className="what-to-expect12">
          Equipment Provided: Don't have your own rugby ball or protective gear?
          No problem – we provide all the necessary equipment for you to enjoy
          the session.
        </p>
        <p className="what-to-expect12">&nbsp;</p>
        <p className="what-to-expect12">Details:</p>
        <p className="what-to-expect12">&nbsp;</p>
        <p className="what-to-expect12">
          Location: University Gymnasium, [University Of Peradeniya]
        </p>
        <p className="what-to-expect12">
          Attire: Wear comfortable athletic clothing and proper rugby boots for
          traction and ankle support. Mouthguards and headgear are recommended
          for added safety.
        </p>
        <p className="what-to-expect12">&nbsp;</p>
        <p className="what-to-expect12">Registration:</p>
        <p className="what-to-expect12">&nbsp;</p>
        <p className="what-to-expect12">
          While walk-ins are welcome, we recommend pre-registering to secure
          your spot. Register online through our website or contact our
          gymnasium staff for assistance.
        </p>
      </div>
      <div className="sheduletable12">
        <b className="schedule13">Schedule</b>
        <div className="scheduletable12">
          <b className="dates12">Dates</b>
          <b className="times12">Times</b>
          <b className="event-description12">Event Description</b>
          <img className="border-icon61" alt="" src="/border.svg" />
          <img className="border-icon62" alt="" src="/border.svg" />
          <img className="border-icon63" alt="" src="/border.svg" />
          <img className="border-icon64" alt="" />
          <div className="monday12">Monday</div>
          <div className="am-4oo24">9.00 am - 4.oo pm</div>
          <div className="am-4oo25">9.00 am - 4.oo pm</div>
          <div className="tuesday12">Tuesday</div>
          <div className="practices24">Practices</div>
          <div className="practices25">Practices</div>
          <div className="dateinput25">
            <button className="updatebutton">UPDATE</button>
          </div>
          <div className="timeinput12">
           <button className="updatebutton">UPDATE</button>
          </div>
          <div className="dateinput26">
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

export default Rugby;
