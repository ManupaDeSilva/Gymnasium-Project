import "./Netball.css";
import HeaderAfterLog from "./components/HeaderAfterLog"
import Footer from "./components/Footer"
import BookButtonLarge from "./components/BookButtonLarge";

const Netball = () => {
  return (
    <div className="netball4">
      <HeaderAfterLog/>
      <img className="locker10back-icon" alt="" src="/locker10back@2x.png" />
      <div className="netballtopic">
        <div className="netball5">NETBALL</div>
      </div>
      <div className="locker-10">Locker 10</div>
      <div className="equipments9">Equipments</div>
      <div className="court8">Court</div>
      <div className="available-number-of12">Available Number of balls</div>
      <div className="today-available-times8">Today Available Times</div>
      <div className="bacsketballsavailable12">
        <div className="div12">10</div>
      </div>
      <div className="courttimeslots16">
        <div className="div12">{`Data Not Available Yet `}</div>
      </div>
      <div className="courttimeslots17">
        <div className="div12">{`Data Not Available Yet `}</div>
      </div>
      <b className="netballdiscription1">
        Welcome to the University Gymnasium's Netball Practice Sessions, where
        players of all skill levels come together to enjoy the exhilarating game
        of netball. Whether you're a seasoned netballer or new to the sport, our
        practice sessions are designed to help you develop your skills,
        teamwork, and passion for netball.
      </b>
      <div className="netballdiscription2">
        <p className="team-collaboration-engage">What to Expect:</p>
        <p className="team-collaboration-engage">&nbsp;</p>
        <p className="team-collaboration-engage">
          Court Time: Our practice sessions offer plenty of court time for you
          to work on your passing, shooting, footwork, and defensive strategies.
        </p>
        <p className="team-collaboration-engage">
          Skill Development: Receive expert coaching from our experienced
          netball instructors dedicated to helping you refine your technique and
          enhance your game.
        </p>
        <p className="team-collaboration-engage">
          Team Collaboration: Engage in drills, game simulations, and positional
          exercises that promote teamwork, communication, and cohesion among
          players.
        </p>
        <p className="team-collaboration-engage">
          Equipment Provided: Don't have your own netball? No worries – we
          provide all the necessary equipment for you to participate in the
          session.
        </p>
        <p className="team-collaboration-engage">&nbsp;</p>
        <p className="team-collaboration-engage">Details:</p>
        <p className="team-collaboration-engage">&nbsp;</p>
        <p className="team-collaboration-engage">
          Location: University Gymnasium, [University Of Peradeniya]
        </p>
        <p className="team-collaboration-engage">
          Attire: Wear comfortable athletic clothing and proper netball shoes
          for agility and support. Bibs will be provided for team
          identification.
        </p>
        <p className="team-collaboration-engage">&nbsp;</p>
        <p className="team-collaboration-engage">Registration:</p>
        <p className="team-collaboration-engage">&nbsp;</p>
        <p className="team-collaboration-engage">
          While walk-ins are welcome, we recommend pre-registering to ensure
          your spot. Register online through our website or contact our
          gymnasium staff for assistance.
        </p>
      </div>
      <div className="sheduletable8">
        <b className="schedule9">Schedule</b>
        <div className="scheduletable8">
          <b className="dates8">Dates</b>
          <b className="times8">Times</b>
          <b className="event-description8">Event Description</b>
          <img className="border-icon41" alt="" src="/border.svg" />
          <img className="border-icon42" alt="" src="/border.svg" />
          <img className="border-icon43" alt="" src="/border.svg" />
          <img className="border-icon44" alt="" />
          <div className="monday8">Monday</div>
          <div className="am-4oo16">9.00 am - 4.oo pm</div>
          <div className="am-4oo17">9.00 am - 4.oo pm</div>
          <div className="tuesday8">Tuesday</div>
          <div className="practices16">Practices</div>
          <div className="practices17">Practices</div>
          <div className="dateinput17">
            <button className="updatebutton">UPDATE</button>
          </div>
          <div className="timeinput8">
            <button className="updatebutton">UPDATE</button>
          </div>
          <div className="dateinput18">
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

export default Netball;
