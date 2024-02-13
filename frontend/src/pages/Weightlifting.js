import "./Weightlifting.css";
import HeaderAfterLog from "./components/HeaderAfterLog"
import Footer from "./components/Footer"
import BookButtonLarge from "./components/BookButtonLarge";

const Weightlifting = () => {
  return (
    <div className="weightlifting4">
      <HeaderAfterLog/>
      <img className="locker19back-icon" alt="" src="/locker19back@2x.png" />
      <div className="weighttopic">
        <div className="weight-lifting">WEIGHT LIFTING</div>
      </div>
      <div className="locker-19">Locker 19</div>
      <div className="equipments17">Equipments</div>
      <div className="court13">Court</div>
      <div className="available-number-of25">Available Number of Barbells</div>
      <div className="today-available-times16">Today Available Times</div>
      <div className="bacsketballsavailable25">
        <div className="div25">10</div>
      </div>
      <div className="courttimeslots31">
        <div className="div25">{`Data Not Available Yet `}</div>
      </div>
      <div className="courttimeslots32">
        <div className="div25">{`Data Not Available Yet `}</div>
      </div>
      <b className="weightliftingdiscription1">
        Welcome to the University Gymnasium's Weightlifting Sessions, where
        fitness enthusiasts gather to build strength, power, and muscle mass
        through the art of weightlifting. Whether you're a seasoned lifter or
        new to the sport, our sessions offer a supportive and motivating
        environment for you to achieve your fitness goals.
      </b>
      <div className="weightliftingdiscription2">
        <p className="lifting-time-our">What to Expect:</p>
        <p className="lifting-time-our">
          Lifting Time: Our sessions provide dedicated time for you to focus on
          your lifts, including squats, deadlifts, bench presses, and Olympic
          lifts.
        </p>
        <p className="lifting-time-our">
          Technique Instruction: Receive expert guidance and coaching from our
          experienced weightlifting instructors who are dedicated to helping you
          master proper lifting technique and form.
        </p>
        <p className="lifting-time-our">
          Progressive Overload: Engage in progressive overload training methods
          that challenge your muscles and promote strength and hypertrophy gains
          over time.
        </p>
        <p className="lifting-time-our">
          Equipment Provided: Don't have your own weightlifting equipment? No
          problem – we provide all the necessary barbells, plates, and
          accessories for you to enjoy the session.
        </p>
        <p className="lifting-time-our">Details:</p>
        <p className="lifting-time-our">
          Location: University Gymnasium, [University Of Peradeniya]
        </p>
        <p className="lifting-time-our">
          Attire: Wear appropriate athletic clothing and footwear for stability
          and support. Weightlifting belts and chalk are recommended for added
          safety and grip.
        </p>
        <p className="lifting-time-our">Registration:</p>
        <p className="lifting-time-our">
          While walk-ins are welcome, we recommend pre-registering to ensure
          your spot. Register online through our website or contact our
          gymnasium staff for assistance.
        </p>
      </div>
      <div className="sheduletable16">
        <b className="schedule17">Schedule</b>
        <div className="scheduletable16">
          <b className="dates16">Dates</b>
          <b className="times16">Times</b>
          <b className="event-description16">Event Description</b>
          <img className="border-icon81" alt="" src="/border.svg" />
          <img className="border-icon82" alt="" src="/border.svg" />
          <img className="border-icon83" alt="" src="/border.svg" />
          <img className="border-icon84" alt="" />
          <div className="monday16">Monday</div>
          <div className="am-4oo32">9.00 am - 4.oo pm</div>
          <div className="am-4oo33">9.00 am - 4.oo pm</div>
          <div className="tuesday16">Tuesday</div>
          <div className="practices32">Practices</div>
          <div className="practices33">Practices</div>
         
          <div className="dateinput33">
            <button className="updatebutton">UPDATE</button>
          </div>
          
          <div className="timeinput16">
          <button className="updatebutton">UPDATE</button>
          </div>
          
          <div className="dateinput34">
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

export default Weightlifting;
