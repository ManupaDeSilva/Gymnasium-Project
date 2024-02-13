import "./Taekwondo.css";
import HeaderAfterLog from "./components/HeaderAfterLog"
import Footer from "./components/Footer"
import BookButtonLarge from "./components/BookButtonLarge";

const Taekwondo = () => {
  return (
    <div className="taekwondo4">
      <HeaderAfterLog/>
      <img className="locker18back-icon" alt="" src="/locker18back@2x.png" />
      <div className="taekwondotopic">
        <div className="taekwondo5">TAEKWONDO</div>
      </div>
      <div className="locker-18">Locker 18</div>
      <div className="equipments16">Equipments</div>
      <div className="boxing-mat1">Boxing Mat</div>
      <div className="available-number-of23">
        Available Number of Chest pads
      </div>
      <div className="available-number-of24">Available Number of headgears</div>
      <div className="today-available-times15">Today Available Times</div>
      <div className="bacsketballsavailable23">
        <div className="div23">10</div>
      </div>
      <div className="bacsketballsavailable24">
        <div className="div23">10</div>
      </div>
      <div className="courttimeslots29">
        <div className="div23">{`Data Not Available Yet `}</div>
      </div>
      <div className="courttimeslots30">
        <div className="div23">{`Data Not Available Yet `}</div>
      </div>
      <b className="taekwondodiscription1">
        Welcome to the University Gymnasium's Taekwondo Practice Sessions, where
        practitioners of all levels come together to experience the discipline
        and tradition of taekwondo. Whether you're a seasoned practitioner or
        new to the martial art, our practice sessions are designed to help you
        develop your skills, focus, and self-confidence.
      </b>
      <div className="taekwondodiscription2">
        <p className="form-practice-engage">What to Expect:</p>
        <p className="form-practice-engage">
          Training Time: Our practice sessions offer plenty of training time for
          you to work on your kicks, strikes, blocks, and forms.
        </p>
        <p className="form-practice-engage">
          Skill Development: Receive expert coaching from our experienced
          taekwondo instructors dedicated to helping you refine your technique,
          improve your balance, and enhance your overall proficiency.
        </p>
        <p className="form-practice-engage">
          Form Practice: Engage in form practice and poomsae drills that
          emphasize precision, fluidity, and mental concentration.
        </p>
        <p className="form-practice-engage">
          Equipment Provided: Don't have your own taekwondo uniform or
          protective gear? No problem – we provide all the necessary equipment
          for you to participate in the session.
        </p>
        <p className="form-practice-engage">Details:</p>
        <p className="form-practice-engage">
          Location: University Gymnasium, [University Of Peradeniya]
        </p>
        <p className="form-practice-engage">
          Attire: Wear comfortable athletic clothing and proper taekwondo attire
          for mobility and tradition. Uniforms and belts will be provided for
          new practitioners.
        </p>
        <p className="form-practice-engage">Registration:</p>
        <p className="form-practice-engage">
          While walk-ins are welcome, we recommend pre-registering to secure
          your spot. Register online through our website or contact our
          gymnasium staff for assistance.
        </p>
      </div>
      <div className="sheduletable15">
        <b className="schedule16">Schedule</b>
        <div className="scheduletable15">
          <b className="dates15">Dates</b>
          <b className="times15">Times</b>
          <b className="event-description15">Event Description</b>
          <img className="border-icon76" alt="" src="/border.svg" />
          <img className="border-icon77" alt="" src="/border.svg" />
          <img className="border-icon78" alt="" src="/border.svg" />
          <img className="border-icon79" alt="" />
          <div className="monday15">Monday</div>
          <div className="am-4oo30">9.00 am - 4.oo pm</div>
          <div className="am-4oo31">9.00 am - 4.oo pm</div>
          <div className="tuesday15">Tuesday</div>
          <div className="practices30">Practices</div>
          <div className="practices31">Practices</div>
          <div className="dateinput31">
            <button className="updatebutton">UPDATE</button>
          </div>
          <div className="timeinput15">
            <button className="updatebutton">UPDATE</button>
          </div>
          <div className="dateinput32">
            <button className="updatebutton">UPDATE</button>
          </div>
        </div>
      </div>
      <div className="bookingbutton1">
          <BookButtonLarge/>
         </div>
      <Footer/>?
    </div>
  );
};

export default Taekwondo;
