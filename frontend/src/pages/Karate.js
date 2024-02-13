import "./Karate.css";
import HeaderAfterLog from "./components/HeaderAfterLog"
import Footer from "./components/Footer"
import BookButtonLarge from "./components/BookButtonLarge";

const Karate = () => {
  return (
    <div className="karate4">
      <HeaderAfterLog/>
      <img className="locker11back-icon" alt="" src="/locker11back@2x.png" />
      <div className="karatetopic">
        <div className="karate5">KARATE</div>
      </div>
      <div className="locker-11">Locker 11</div>
      <div className="equipments19">Equipments</div>
      <div className="boxing-mat2">Boxing Mat</div>
      <div className="available-number-of29">
        Available Number of Hand guards
      </div>
      <div className="available-number-of30">Available Number of Headgears</div>
      <div className="available-number-of31">
        Available Number of Heavy Bags
      </div>
      <div className="today-available-times18">Today Available Times</div>
      <div className="bacsketballsavailable29">
        <div className="div29">10</div>
      </div>
      <div className="bacsketballsavailable30">
        <div className="div29">10</div>
      </div>
      <div className="bacsketballsavailable31">
        <div className="div29">10</div>
      </div>
      <div className="courttimeslots35">
        <div className="div29">{`Data Not Available Yet `}</div>
      </div>
      <div className="what-to-expect-container1">
        <p className="what-to-expect19">What to Expect:</p>
        <p className="what-to-expect19">&nbsp;</p>
        <ul className="expert-instruction-our-highly">
          <li className="expert-instruction-our">
            Expert Instruction: Our highly skilled and certified Karate
            instructors will guide you through the principles and techniques of
            traditional Karate.
          </li>
          <li className="expert-instruction-our">
            Physical Fitness: Karate is an excellent full-body workout that
            improves strength, flexibility, and endurance. Expect to break a
            sweat and leave feeling more energized.
          </li>
          <li className="expert-instruction-our">
            Mental Focus: Karate is not just about physical strength; it also
            teaches mental discipline, concentration, and self-control.
          </li>
          <li className="expert-instruction-our">
            Self-Defense: Learn practical self-defense techniques that can boost
            your confidence and personal safety.
          </li>
          <li className="expert-instruction-our">
            All Levels Welcome: Whether you're a white belt or a black belt, our
            sessions cater to all skill levels.
          </li>
        </ul>
        <p className="what-to-expect19">&nbsp;</p>
        <p className="what-to-expect19">Details:</p>
        <p className="what-to-expect19">&nbsp;</p>
        <ul className="expert-instruction-our-highly">
          <li className="expert-instruction-our">
            Location: University Gymnasium, [University Of Peradeniya]
          </li>
          <li className="expert-instruction-our">
            Attire: Wear comfortable workout attire, and if you have a Karate
            gi, feel free to bring it.
          </li>
        </ul>
        <p className="what-to-expect19">&nbsp;</p>
        <p className="what-to-expect19">Registration:</p>
        <p className="what-to-expect19">&nbsp;</p>
        <p className="what-to-expect19">
          Pre-registration is recommended to ensure your spot in the session.
          Contact our gymnasium staff or visit our website to sign up.
        </p>
      </div>
      <b className="karatediscription1">
        Join us at the university gymnasium for an exhilarating Karate practice
        session that combines physical fitness, mental discipline, and
        self-defense skills. Whether you're a seasoned Karate practitioner or a
        beginner looking to learn the art of self-defense, our Karate practice
        sessions have something to offer for everyone.
      </b>
      <div className="sheduletable19">
        <b className="schedule20">Schedule</b>
        <div className="scheduletable19">
          <b className="dates19">Dates</b>
          <b className="times19">Times</b>
          <b className="event-description19">Event Description</b>
          <img className="border-icon96" alt="" src="/border.svg" />
          <img className="border-icon97" alt="" src="/border.svg" />
          <img className="border-icon98" alt="" src="/border.svg" />
          <img className="border-icon99" alt="" />
          <div className="monday19">Monday</div>
          <div className="am-4oo38">9.00 am - 4.oo pm</div>
          <div className="am-4oo39">9.00 am - 4.oo pm</div>
          <div className="tuesday19">Tuesday</div>
          <div className="practices38">Practices</div>
          <div className="practices39">Practices</div>
          <div className="dateinput39">
            <button className="updatebutton">UPDATE</button>
          </div>
          <div className="timeinput19">
            <button className="updatebutton">UPDATE</button>
          </div>
          <div className="dateinput40">
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

export default Karate;
