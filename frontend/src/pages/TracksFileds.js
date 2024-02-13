import "./TracksFileds.css";
import HeaderAfterLog from "./components/HeaderAfterLog"
import Footer from "./components/Footer"
import BookButtonLarge from "./components/BookButtonLarge";

const TracksFileds = () => {
  return (
    <div className="tracksfileds">
      <HeaderAfterLog/>
      <img className="locker21back-icon" alt="" src="/locker21back@2x.png" />
      <div className="tracktopic">
        <div className="tracks-and-fileds">TRACKS AND FILEDS</div>
      </div>
      <div className="locker-21">Locker 18</div>
      <div className="athletic-track">Athletic Track</div>
      <div className="courttimeslots34">
        <div className="data-not-available34">{`Data Not Available Yet `}</div>
      </div>
      <b className="tracksandfiledsdiscription1">
        Welcome to the University Gymnasium's Track and Field Sessions, where
        athletes of all levels come together to train and compete in a variety
        of track and field events. Whether you're a sprinter, jumper, thrower,
        or distance runner, our sessions offer a supportive and motivating
        environment for you to pursue your athletic goals.
      </b>
      <div className="tracksandfiledsdiscription2">
        <p className="competition-preparation-engag">What to Expect:</p>
        <p className="competition-preparation-engag">
          Training Time: Our sessions provide dedicated time for you to focus on
          your specific track and field event, whether it's sprints, jumps,
          throws, or distance running.
        </p>
        <p className="competition-preparation-engag">
          Technique Instruction: Receive expert coaching from our experienced
          track and field instructors who are dedicated to helping you refine
          your technique, improve your performance, and reach your full
          potential.
        </p>
        <p className="competition-preparation-engag">
          Competition Preparation: Engage in drills, simulations, and mock
          competitions that prepare you for real track and field meets,
          providing valuable experience and confidence on race day.
        </p>
        <p className="competition-preparation-engag">
          Equipment Provided: Don't have your own track and field equipment? No
          problem – we provide all the necessary implements, such as starting
          blocks, javelins, shot puts, and hurdles for you to enjoy the session.
        </p>
        <p className="competition-preparation-engag">Details:</p>
        <p className="competition-preparation-engag">
          Location: University Gymnasium, [University Of Peradeniya]
        </p>
        <p className="competition-preparation-engag">
          Attire: Wear appropriate athletic clothing and footwear for your
          specific event. Spikes are recommended for track events, while
          throwing gloves may be required for field events.
        </p>
        <p className="competition-preparation-engag">Registration:</p>
        <p className="competition-preparation-engag">
          While walk-ins are welcome, we recommend pre-registering to ensure
          your spot. Register online through our website or contact our
          gymnasium staff for assistance.
        </p>
      </div>
      <div className="sheduletable18">
        <b className="schedule19">Schedule</b>
        <div className="scheduletable18">
          <b className="dates18">Dates</b>
          <b className="times18">Times</b>
          <b className="event-description18">Event Description</b>
          <img className="border-icon91" alt="" src="/border.svg" />
          <img className="border-icon92" alt="" src="/border.svg" />
          <img className="border-icon93" alt="" src="/border.svg" />
          <img className="border-icon94" alt="" />
          <div className="monday18">Monday</div>
          <div className="am-4oo36">9.00 am - 4.oo pm</div>
          <div className="am-4oo37">9.00 am - 4.oo pm</div>
          <div className="tuesday18">Tuesday</div>
          <div className="practices36">Practices</div>
          <div className="practices37">Practices</div>
          <div className="dateinput37">
            <button className="updatebutton">UPDATE</button>
          </div>
          <div className="timeinput18">
            <button className="updatebutton">UPDATE</button>
          </div>
          <div className="dateinput38">
           <button className="updatebutton">UPDATE</button>
          </div>
        </div>
      </div>'
      <div className="bookingbutton1">
          <BookButtonLarge/>
         </div>
      <Footer/>'
    </div>
  );
};

export default TracksFileds;
