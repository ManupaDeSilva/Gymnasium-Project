import "./Carrom.css";
import HeaderAfterLog from "./components/HeaderAfterLog"
import Footer from "./components/Footer"
import BookButtonLarge from "./components/BookButtonLarge";

const Carrom = () => {
  return (
    <div className="carrom4">
      <HeaderAfterLog/>
      <img className="locker04back-icon" alt="" src="/locker04back@2x.png" />
      <div className="carromtopic">
        <div className="carrom5">CARROM</div>
      </div>
      <div className="locker-04">Locker 04</div>
      <div className="equipments3">Equipments</div>
      <div className="court2">Court</div>
      <div className="available-number-of3">Available Number of Boards</div>
      <div className="today-available-times2">Today Available Times</div>
      <div className="bacsketballsavailable3">
        <div className="div3">10</div>
      </div>
      <div className="courttimeslots4">
        <div className="div3">{`Data Not Available Yet `}</div>
      </div>
      <div className="courttimeslots5">
        <div className="div3">{`Data Not Available Yet `}</div>
      </div>
      <b className="carromdiscription1">
        Welcome to the University Gymnasium's Carrom Practice Sessions, where we
        invite enthusiasts of all levels to join us for a fun and competitive
        game of carrom. Whether you're a seasoned player or new to the game, our
        practice sessions provide a welcoming environment for players to learn,
        improve their skills, and enjoy friendly competition.
      </b>
      <div className="carromdiscription2">
        <p className="skill-development-our">What to Expect:</p>
        <p className="skill-development-our">&nbsp;</p>
        <p className="skill-development-our">
          Skill Development: Our practice sessions focus on honing your carrom
          skills, including aiming, striking, and pocketing techniques, through
          a variety of drills and exercises.
        </p>
        <p className="skill-development-our">&nbsp;</p>
        <p className="skill-development-our">
          Friendly Matches: Engage in friendly matches with fellow players to
          apply your skills in a supportive and encouraging environment.
        </p>
        <p className="skill-development-our">
          Strategic Gameplay: Learn about the strategic aspects of carrom,
          including positioning your pieces, planning your moves, and
          anticipating your opponent's actions.
        </p>
        <p className="skill-development-our">
          Equipment Provided: We provide carrom boards, striker pieces, and
          carrom men, ensuring that all players have access to the necessary
          equipment for a fulfilling gaming experience.
        </p>
        <p className="skill-development-our">&nbsp;</p>
        <p className="skill-development-our">Details:</p>
        <p className="skill-development-our">&nbsp;</p>
        <p className="skill-development-our">
          Location: University Gymnasium, [University Of Peradeniya]
        </p>
        <p className="skill-development-our">
          Attire: Wear comfortable clothing suitable for playing indoor games.
          Closed-toe shoes are recommended for added safety.
        </p>
        <p className="skill-development-our">&nbsp;</p>
        <p className="skill-development-our">Registration:</p>
        <p className="skill-development-our">&nbsp;</p>
        <p className="skill-development-our">
          While walk-ins are welcome, we encourage players to register in
          advance to secure their spot in the session. Registration can be done
          online through our website or by contacting our gymnasium staff for
          assistance. Join us for an enjoyable and rewarding experience as we
          gather to play the timeless game of carrom!
        </p>
        <p className="skill-development-our">&nbsp;</p>
        <p className="skill-development-our">&nbsp;</p>
        <p className="skill-development-our">&nbsp;</p>
      </div>
      <div className="sheduletable2">
        <b className="schedule3">Schedule</b>
        <div className="scheduletable2">
          <b className="dates2">Dates</b>
          <b className="times2">Times</b>
          <b className="event-description2">Event Description</b>
          <img className="border-icon11" alt="" src="/border.svg" />
          <img className="border-icon12" alt="" src="/border.svg" />
          <img className="border-icon13" alt="" src="/border.svg" />
          <img className="border-icon14" alt="" />
          <div className="monday2">Monday</div>
          <div className="am-4oo4">9.00 am - 4.oo pm</div>
          <div className="am-4oo5">9.00 am - 4.oo pm</div>
          <div className="tuesday2">Tuesday</div>
          <div className="practices4">Practices</div>
          <div className="practices5">Practices</div>
          <div className="dateinput5">
           <button className="updatebutton">UPDATE</button>
          </div>
          <div className="timeinput2">
            <button className="updatebutton">UPDATE</button>
          </div>
          <div className="dateinput6">
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

export default Carrom;
