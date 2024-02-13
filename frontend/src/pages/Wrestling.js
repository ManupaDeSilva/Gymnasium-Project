import "./Wrestling.css";
import HeaderAfterLog from "./components/HeaderAfterLog"
import Footer from "./components/Footer"
import BookButtonLarge from "./components/BookButtonLarge";

const Wrestling = () => {
  return (
    <div className="wrestling4">
      <HeaderAfterLog/>
      <img className="locker16back-icon" alt="" src="/locker16back@2x.png" />
      <div className="wrestlingtopic">
        <div className="wrestling5">WRESTLING</div>
      </div>
      <div className="locker-16">Locker 16</div>
      <div className="equipments14">Equipments</div>
      <div className="wrestling-mat">Wrestling Mat</div>
      <div className="available-number-of19">Available Number of headgears</div>
      <div className="today-available-times13">Today Available Times</div>
      <div className="bacsketballsavailable19">
        <div className="div19">10</div>
      </div>
      <div className="courttimeslots26">
        <div className="div19">{`Data Not Available Yet `}</div>
      </div>
      <div className="courttimeslots27">
        <div className="div19">{`Data Not Available Yet `}</div>
      </div>
      <b className="wrestlingdiscription1">
        Welcome to the University Gymnasium's Wrestling Practice Sessions, where
        athletes of all levels come together to experience the physicality and
        technique of wrestling. Whether you're a seasoned wrestler or new to the
        sport, our practice sessions are designed to help you develop your
        skills, strength, and agility.
      </b>
      <div className="wrestlingdiscription2">
        <p className="mat-time-our">What to Expect:</p>
        <p className="mat-time-our">&nbsp;</p>
        <p className="mat-time-our">
          Mat Time: Our practice sessions offer plenty of mat time for you to
          work on your takedowns, escapes, pins, and grappling techniques.
        </p>
        <p className="mat-time-our">
          Skill Development: Receive expert coaching from our experienced
          wrestling instructors dedicated to helping you refine your technique,
          improve your leverage, and enhance your overall performance.
        </p>
        <p className="mat-time-our">
          Sparring Sessions: Engage in live sparring sessions and drills with
          fellow wrestlers, providing valuable match experience and
          opportunities for skill refinement.
        </p>
        <p className="mat-time-our">
          Equipment Provided: Don't have your own wrestling gear? No problem –
          we provide all the necessary equipment for you to participate in the
          session.
        </p>
        <p className="mat-time-our">&nbsp;</p>
        <p className="mat-time-our">Details:</p>
        <p className="mat-time-our">&nbsp;</p>
        <p className="mat-time-our">
          Location: University Gymnasium, [University Of Peradeniya]
        </p>
        <p className="mat-time-our">
          Attire: Wear comfortable athletic clothing and proper wrestling shoes
          for traction and support. Headgear and knee pads are recommended for
          added protection.
        </p>
        <p className="mat-time-our">&nbsp;</p>
        <p className="mat-time-our">Registration:</p>
        <p className="mat-time-our">&nbsp;</p>
        <p className="mat-time-our">
          While walk-ins are welcome, we recommend pre-registering to secure
          your spot. Register online through our website or contact our
          gymnasium staff for assistance.
        </p>
      </div>
      <div className="sheduletable13">
        <b className="schedule14">Schedule</b>
        <div className="scheduletable13">
          <b className="dates13">Dates</b>
          <b className="times13">Times</b>
          <b className="event-description13">Event Description</b>
          <img className="border-icon66" alt="" src="/border.svg" />
          <img className="border-icon67" alt="" src="/border.svg" />
          <img className="border-icon68" alt="" src="/border.svg" />
          <img className="border-icon69" alt="" />
          <div className="monday13">Monday</div>
          <div className="am-4oo26">9.00 am - 4.oo pm</div>
          <div className="am-4oo27">9.00 am - 4.oo pm</div>
          <div className="tuesday13">Tuesday</div>
          <div className="practices26">Practices</div>
          <div className="practices27">Practices</div>
         
         
          <div className="dateinput27">
            <button className="updatebutton">UPDATE</button>
          </div>


          <div className="timeinput13">
            <button className="updatebutton">UPDATE</button>
          </div>

          <div className="dateinput28">
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

export default Wrestling;
