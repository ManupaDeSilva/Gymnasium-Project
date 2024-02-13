import "./Bascketball.css";
import HeaderAfterLog from "./components/HeaderAfterLog"
import Footer from "./components/Footer"
import BookButtonLarge from "./components/BookButtonLarge";

const Bascketball = () => {
  return (
    <div className="bascketball">
      <HeaderAfterLog/>
      <img className="locker03back-icon" alt="" src="/locker03back@2x.png" />
      <div className="bascketballtopic">
        <div className="bascketball1">BASCKETBALL</div>
      </div>
      <div className="locker-03">Locker 03</div>
      <div className="equipments1">Equipments</div>
      <div className="court">Court</div>
      <div className="available-number-of">Available Number of balls</div>
      <div className="today-available-times">Today Available Times</div>
      <div className="bacsketballsavailable">
        <div className="div">10</div>
      </div>
      <div className="courttimeslots">
        <div className="div">{`Data Not Available Yet `}</div>
      </div>
      <div className="courttimeslots1">
        <div className="div">{`Data Not Available Yet `}</div>
      </div>
      <div className="bascketballdiscription1">
        <div className="what-to-expect-container">
          <p className="what-to-expect">What to Expect:</p>
          <p className="what-to-expect">&nbsp;</p>
          <p className="what-to-expect">
            Court Time: Our practice sessions offer plenty of court time for you
            to work on your shooting, dribbling, passing, and defensive
            techniques.
          </p>
          <p className="what-to-expect">&nbsp;</p>
          <p className="what-to-expect">
            Skill Development: Receive expert guidance and coaching from our
            experienced basketball instructors who are dedicated to helping you
            improve your game.
          </p>
          <p className="what-to-expect">
            Teamwork: Engage in drills and scrimmage games that promote
            teamwork, communication, and camaraderie among players.
          </p>
          <p className="what-to-expect">
            Equipment Provided: Don't worry if you don't have your own
            basketball – we provide all the necessary equipment for you to enjoy
            the session.
          </p>
          <p className="what-to-expect">&nbsp;</p>
          <p className="what-to-expect">Details:</p>
          <p className="what-to-expect">&nbsp;</p>
          <p className="what-to-expect">
            Location: University Gymnasium, [University Of Peradeniya]
          </p>
          <p className="what-to-expect">
            Attire: Wear comfortable athletic clothing and proper basketball
            shoes to ensure safety and performance on the court.
          </p>
          <p className="what-to-expect">&nbsp;</p>
          <p className="what-to-expect">Registration:</p>
          <p className="what-to-expect">&nbsp;</p>
          <p className="what-to-expect">
            While walk-ins are welcome, we encourage you to register in advance
            to secure your spot. You can sign up on our website or contact our
            gymnasium staff for more information.
          </p>
        </div>
      </div>
      <b className="bascketballdiscription11">
        Welcome to the University Gymnasium's Basketball Practice Sessions,
        where we provide a vibrant and energetic environment for players of all
        levels to come together and enjoy the game of basketball. Whether you're
        a seasoned player or just starting out, our practice sessions are
        designed to help you develop your skills, build teamwork, and have fun
        on the court.
      </b>
      <div className="sheduletable">
        <b className="schedule1">Schedule</b>
        <div className="scheduletable">
          <b className="dates">Dates</b>
          <b className="times">Times</b>
          <b className="event-description">Event Description</b>
          <img className="border-icon1" alt="" src="/border.svg" />
          <img className="border-icon2" alt="" src="/border.svg" />
          <img className="border-icon3" alt="" src="/border.svg" />
          <img className="border-icon4" alt="" />
          <div className="monday">Monday</div>
          <div className="am-4oo">9.00 am - 4.oo pm</div>
          <div className="am-4oo1">9.00 am - 4.oo pm</div>
          <div className="tuesday">Tuesday</div>
          <div className="practices">Practices</div>
          <div className="practices1">Practices</div>
          <div className="dateinput1">
          <button className="updatebutton">UPDATE</button>
          </div>
          <div className="timeinput">
          <button className="updatebutton">UPDATE</button>
          </div>
          <div className="dateinput2">
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

export default Bascketball;
