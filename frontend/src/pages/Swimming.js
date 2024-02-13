import "./Swimming.css";
import HeaderAfterLog from "./components/HeaderAfterLog"
import Footer from "./components/Footer"
import BookButtonLarge from "./components/BookButtonLarge";

const Swimming = () => {
  return (
    <div className="swimming4">
      <HeaderAfterLog/>
      <img className="locker20back-icon" alt="" src="/locker20back@2x.png" />
      <div className="swimmingtopic">
        <div className="swimming5">SWIMMING</div>
      </div>
      <div className="locker-20">Locker 18</div>
      <div className="equipments18">Equipments</div>
      <div className="swimming-pool">SWIMMING POOL</div>
      <div className="available-number-of26">Available Number of goggles</div>
      <div className="available-number-of27">
        Available Number of KickboardS
      </div>
      <div className="available-number-of28">
        Available Number of Pull buoys
      </div>
      <div className="today-available-times17">Today Available Times</div>
      <div className="bacsketballsavailable26">
        <div className="div26">10</div>
      </div>
      <div className="bacsketballsavailable27">
        <div className="div26">10</div>
      </div>
      <div className="bacsketballsavailable28">
        <div className="div26">10</div>
      </div>
      <div className="courttimeslots33">
        <div className="div26">{`Data Not Available Yet `}</div>
      </div>
      <b className="swimmingdiscription1">
        Welcome to the University Gymnasium's Swimming Sessions, where swimmers
        of all levels come together to enjoy the health benefits and
        recreational enjoyment of swimming. Whether you're a seasoned swimmer or
        new to the sport, our sessions offer a safe and supportive environment
        for you to improve your technique, endurance, and confidence in the
        water.
      </b>
      <div className="swimmingdiscription2">
        <p className="pool-time-our">What to Expect:</p>
        <p className="pool-time-our">
          Pool Time: Our sessions provide ample time for you to swim laps,
          practice strokes, and work on your aquatic fitness in our
          state-of-the-art swimming pool.
        </p>
        <p className="pool-time-our">
          Technique Instruction: Receive expert coaching from our certified
          swimming instructors who are dedicated to helping you refine your
          stroke technique, breathing, and efficiency in the water.
        </p>
        <p className="pool-time-our">
          Fitness Focus: Engage in swim workouts and drills designed to improve
          cardiovascular endurance, muscular strength, and overall fitness
          levels.
        </p>
        <p className="pool-time-our">
          Equipment Provided: Don't have your own swim gear? No problem – we
          provide all the necessary equipment, including goggles, swim caps, and
          kickboards for you to enjoy the session.
        </p>
        <p className="pool-time-our">Details:</p>
        <p className="pool-time-our">
          Location: University Gymnasium, [University Of Peradeniya]
        </p>
        <p className="pool-time-our">
          Attire: Wear appropriate swimwear and footwear for comfort and
          mobility in the water. Swim caps are recommended for long hair.
        </p>
        <p className="pool-time-our">Registration:</p>
        <p className="pool-time-our">
          While walk-ins are welcome, we recommend pre-registering to secure
          your spot. Register online through our website or contact our
          gymnasium staff for assistance.
        </p>
      </div>
      <div className="sheduletable17">
        <b className="schedule18">Schedule</b>
        <div className="scheduletable17">
          <b className="dates17">Dates</b>
          <b className="times17">Times</b>
          <b className="event-description17">Event Description</b>
          <img className="border-icon86" alt="" src="/border.svg" />
          <img className="border-icon87" alt="" src="/border.svg" />
          <img className="border-icon88" alt="" src="/border.svg" />
          <img className="border-icon89" alt="" />
          <div className="monday17">Monday</div>
          <div className="am-4oo34">9.00 am - 4.oo pm</div>
          <div className="am-4oo35">9.00 am - 4.oo pm</div>
          <div className="tuesday17">Tuesday</div>
          <div className="practices34">Practices</div>
          <div className="practices35">Practices</div>
          <div className="dateinput35">
           <button className="updatebutton">UPDATE</button>
          </div>
          <div className="timeinput17">
           <button className="updatebutton">UPDATE</button>
          </div>
          <div className="dateinput36">
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

export default Swimming;
