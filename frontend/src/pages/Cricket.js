import "./Cricket.css";
import HeaderAfterLog from "./components/HeaderAfterLog"
import Footer from "./components/Footer"
import BookButtonLarge from "./components/BookButtonLarge";

const Cricket = () => {
  return (
    <div className="cricket6">
      <HeaderAfterLog/>
      <img className="locker06back-icon" alt="" src="/locker06back@2x.png" />
      <div className="crickettopic">
        <div className="cricket7">CRICKET</div>
      </div>
      <div className="locker-06">Locker 06</div>
      <div className="equipments5">Equipments</div>
      <div className="court4">Court</div>
      <div className="available-number-of5">Available Number of balls</div>
      <div className="available-number-of6">Available Number of bats</div>
      <div className="today-available-times4">Today Available Times</div>
      <div className="bacsketballsavailable5">
        <div className="div5">10</div>
      </div>
      <div className="bacsketballsavailable6">
        <div className="div5">10</div>
      </div>
      <div className="courttimeslots8">
        <div className="div5">{`Data Not Available Yet `}</div>
      </div>
      <div className="courttimeslots9">
        <div className="div5">{`Data Not Available Yet `}</div>
      </div>
      <b className="cricketdiscription1">
        Welcome to the University Gymnasium's Cricket Practice Sessions, where
        cricket enthusiasts of all skill levels gather for a dynamic and
        enjoyable experience on the field. Whether you're a seasoned cricketer
        or new to the game, our sessions offer an inclusive environment to
        refine your batting, bowling, and fielding skills while fostering
        teamwork and camaraderie.
      </b>
      <div className="cricketdiscription2">
        <p className="skill-development-engage">What to Expect:</p>
        <p className="skill-development-engage">&nbsp;</p>
        <p className="skill-development-engage">
          Skill Development: Engage in structured training and coaching to
          enhance fundamental cricket skills, including batting techniques,
          bowling variations, and fielding drills.
        </p>
        <p className="skill-development-engage">&nbsp;</p>
        <p className="skill-development-engage">
          Match Simulations: Participate in realistic game scenarios and
          practice matches to apply your skills, improve decision-making, and
          develop game awareness.
        </p>
        <p className="skill-development-engage">
          Team Collaboration: Experience the collaborative spirit of cricket as
          you work with teammates to strategize game plans and achieve common
          goals on the field.
        </p>
        <p className="skill-development-engage">
          Fitness and Conditioning: Elevate your physical fitness and endurance
          through fitness drills and conditioning exercises tailored to the
          demands of cricket.
        </p>
        <p className="skill-development-engage">&nbsp;</p>
        <p className="skill-development-engage">Details:</p>
        <p className="skill-development-engage">&nbsp;</p>
        <p className="skill-development-engage">
          Location: University Gymnasium, [University Of Peradeniya]
        </p>
        <p className="skill-development-engage">
          Attire: Dress in cricket-appropriate clothing and bring necessary
          gear, including bats, pads, helmets, and gloves.
        </p>
        <p className="skill-development-engage">&nbsp;</p>
        <p className="skill-development-engage">Registration:</p>
        <p className="skill-development-engage">&nbsp;</p>
        <p className="skill-development-engage">
          Pre-register online or contact gymnasium staff to secure your spot in
          the session. Join us for an exhilarating cricket experience at the
          University Gymnasium!
        </p>
        <p className="skill-development-engage">&nbsp;</p>
        <p className="skill-development-engage">&nbsp;</p>
        <p className="skill-development-engage">&nbsp;</p>
      </div>
      <div className="sheduletable4">
        <b className="schedule5">Schedule</b>
        <div className="scheduletable4">
          <b className="dates4">Dates</b>
          <b className="times4">Times</b>
          <b className="event-description4">Event Description</b>
          <img className="border-icon21" alt="" src="/border.svg" />
          <img className="border-icon22" alt="" src="/border.svg" />
          <img className="border-icon23" alt="" src="/border.svg" />
          <img className="border-icon24" alt="" />
          <div className="monday4">Monday</div>
          <div className="am-4oo8">9.00 am - 4.oo pm</div>
          <div className="am-4oo9">9.00 am - 4.oo pm</div>
          <div className="tuesday4">Tuesday</div>
          <div className="practices8">Practices</div>
          <div className="practices9">Practices</div>
          <div className="dateinput9">
            <button className="updatebutton">UPDATE</button>
          </div>
          <div className="timeinput4">
            <button className="updatebutton">UPDATE</button>
          </div>
          <div className="dateinput10">
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

export default Cricket;
