import "./Badminton.css";
import HeaderAfterLog from "./components/HeaderAfterLog"
import Footer from "./components/Footer"
import BookButtonLarge from "./components/BookButtonLarge";

const Badminton = () => {
  return (
    <div className="badminton">
      <HeaderAfterLog/>
      
   
      <img className="locker01back-icon" alt="" src="/locker01back@2x.png" />
      <div className="badmintontopic">
        <div className="badminton1">BADMINTON</div>
      </div>
      <div className="locker-01">Locker 01</div>
      <div className="equipments2">Equipments</div>
      <div className="court1">Court</div>
      <div className="available-number-of1">Available Number of Rackets</div>
      <div className="available-number-of2">
        Available Number of Shuttlecocks
      </div>
      <div className="today-available-times1">Today Available Times</div>
      <div className="bacsketballsavailable1">
        <div className="div1">10</div>
      </div>
      <div className="bacsketballsavailable2">
        <div className="div1">10</div>
      </div>
      <div className="courttimeslots2">
        <div className="div1">{`Data Not Available Yet `}</div>
      </div>
      <div className="courttimeslots3">
        <div className="div1">{`Data Not Available Yet `}</div>
      </div>
      <div className="sheduletable1">
        <b className="schedule2">Schedule</b>
        <div className="scheduletable1">
          <b className="dates1">Dates</b>
          <b className="times1">Times</b>
          <b className="event-description1">Event Description</b>
          <img className="border-icon6" alt="" src="/border.svg" />
          <img className="border-icon7" alt="" src="/border.svg" />
          <img className="border-icon8" alt="" src="/border.svg" />
          <img className="border-icon9" alt="" />
          <div className="monday1">Monday</div>
          <div className="am-4oo2">9.00 am - 4.oo pm</div>
          <div className="am-4oo3">9.00 am - 4.oo pm</div>
          <div className="tuesday1">Tuesday</div>
          <div className="practices2">Practices</div>
          <div className="practices3">Practices</div>
          <div className="dateinput3">
            <button className="updatebutton">UPDATE</button>
          </div>
          <div className="timeinput1">
            <button className="updatebutton">UPDATE</button>
          </div>
          <div className="dateinput4">
            <button className="updatebutton">UPDATE</button>
          </div>
        </div>
      </div>
      <div className="badmintondiscription2">
        <p className="welcome-to-the">What to Expect:</p>
        <p className="welcome-to-the">&nbsp;</p>
        <ul className="court-time-our-practice-sessi">
          <li className="friendly-environment-enjoy">
            Court Time: Our practice sessions provide ample court time for you
            to practice your serves, smashes, and rallies.
          </li>
          <li className="friendly-environment-enjoy">
            Friendly Environment: Enjoy a welcoming and inclusive atmosphere
            where players of all skill levels can participate and have fun.
          </li>
          <li className="friendly-environment-enjoy">
            Equipment Provided: If you don't have your own racket or
            shuttlecocks, no worries – we provide equipment for your
            convenience.
          </li>
          <li className="friendly-environment-enjoy">
            Coaching Available: Our experienced Badminton coaches are available
            to provide tips and guidance for beginners or those looking to
            enhance their skills.
          </li>
        </ul>
        <p className="welcome-to-the">&nbsp;</p>
        <p className="welcome-to-the">Details:</p>
        <ul className="court-time-our-practice-sessi">
          <li className="friendly-environment-enjoy">
            Location: University Gymnasium
          </li>
          <li className="friendly-environment-enjoy">
            Attire: Wear comfortable athletic clothing and non-marking indoor
            sports shoes. Don't forget to bring a water bottle to stay hydrated.
          </li>
        </ul>
        <p className="welcome-to-the">&nbsp;</p>
        <p className="welcome-to-the">&nbsp;</p>
        <p className="welcome-to-the">Registration:</p>
        <p className="welcome-to-the">&nbsp;</p>
        <p className="welcome-to-the">
          While walk-ins are welcome, it's advisable to register in advance to
          secure your spot. You can register on our website or contact our
          gymnasium staff for more information.
        </p>
      </div>
      <b className="badmintondiscription1">
        <p className="blank-line27">&nbsp;</p>
        <p className="welcome-to-the">
          Welcome to the University Gymnasium's Badminton Practice Sessions,
          where we provide the perfect environment for players of all levels to
          enjoy and improve their badminton skills. Whether you're a seasoned
          player looking to hone your game or a beginner eager to learn the
          basics, our practice sessions cater to everyone's needs.
        </p>
      </b>
      <div className="bookingbutton1">
        <BookButtonLarge/>
      </div>
      <Footer/>

    </div>
  );
};

export default Badminton;
