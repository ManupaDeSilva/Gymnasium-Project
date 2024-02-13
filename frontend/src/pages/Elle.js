import "./Elle.css";
import HeaderAfterLog from "./components/HeaderAfterLog"
import Footer from "./components/Footer"
import BookButtonLarge from "./components/BookButtonLarge";

const Elle = () => {
  return (
    <div className="elle4">
      <HeaderAfterLog/>
      <img className="locker07back-icon" alt="" src="/locker07back@2x.png" />
      <div className="elletopic">
        <div className="elle5">ELLE</div>
      </div>
      <div className="locker-07">Locker 07</div>
      <div className="equipments6">Equipments</div>
      <div className="court5">Court</div>
      <div className="available-number-of7">Available Number of balls</div>
      <div className="available-number-of8">Available Number of bats</div>
      <div className="today-available-times5">Today Available Times</div>
      <div className="bacsketballsavailable7">
        <div className="div7">10</div>
      </div>
      <div className="bacsketballsavailable8">
        <div className="div7">10</div>
      </div>
      <div className="courttimeslots10">
        <div className="div7">{`Data Not Available Yet `}</div>
      </div>
      <div className="courttimeslots11">
        <div className="div7">{`Data Not Available Yet `}</div>
      </div>
      <b className="ellediscription1">
        Welcome to the University Gymnasium's Elle Practice Sessions, where
        agility, coordination, and strategy come together in an exhilarating
        game of Elle. Whether you're a seasoned player or new to the sport, our
        practice sessions provide the perfect environment for players of all
        levels to enjoy and excel in this traditional Sri Lankan game.
      </b>
      <div className="ellediscription2">
        <p className="agility-and-coordination">What to Expect:</p>
        <p className="agility-and-coordination">&nbsp;</p>
        <p className="agility-and-coordination">
          Agility and Coordination: Elle requires quick footwork, coordination,
          and agility. Our practice sessions focus on enhancing these skills
          through drills and exercises designed to improve your speed and
          maneuverability on the court.
        </p>
        <p className="agility-and-coordination">
          Teamwork: Elle is a team sport that emphasizes cooperation and
          communication among players. Engage in practice games and activities
          that foster teamwork, strategic thinking, and effective coordination
          with your teammates.
        </p>
        <p className="agility-and-coordination">
          Fitness and Endurance: Expect to engage in fitness drills and
          conditioning exercises that enhance your stamina, endurance, and
          overall physical fitness, ensuring you're prepared to perform at your
          best during gameplay.
        </p>
        <p className="agility-and-coordination">
          Equipment: Elle requires minimal equipment – all you need is a pair of
          comfortable athletic clothing and suitable footwear. We provide all
          the necessary equipment for you to enjoy the session hassle-free.
        </p>
        <p className="agility-and-coordination">&nbsp;</p>
        <p className="agility-and-coordination">Details:</p>
        <p className="agility-and-coordination">&nbsp;</p>
        <p className="agility-and-coordination">
          Location: University Gymnasium, [University Of Peradeniya]
        </p>
        <p className="agility-and-coordination">
          Attire: Wear comfortable athletic clothing and appropriate sports
          shoes.
        </p>
        <p className="agility-and-coordination">&nbsp;</p>
        <p className="agility-and-coordination">Registration:</p>
        <p className="agility-and-coordination">&nbsp;</p>
        <p className="agility-and-coordination">
          Pre-registration is recommended to secure your spot in the session.
          Contact our gymnasium staff or visit our website to sign up. Whether
          you're dodging opponents or showcasing your skills, join us for an
          exciting game of Elle at the University Gymnasium!
        </p>
        <p className="agility-and-coordination">&nbsp;</p>
        <p className="agility-and-coordination">&nbsp;</p>
      </div>
      <div className="sheduletable5">
        <b className="schedule6">Schedule</b>
        <div className="scheduletable5">
          <b className="dates5">Dates</b>
          <b className="times5">Times</b>
          <b className="event-description5">Event Description</b>
          <img className="border-icon26" alt="" src="/border.svg" />
          <img className="border-icon27" alt="" src="/border.svg" />
          <img className="border-icon28" alt="" src="/border.svg" />
          <img className="border-icon29" alt="" />
          <div className="monday5">Monday</div>
          <div className="am-4oo10">9.00 am - 4.oo pm</div>
          <div className="am-4oo11">9.00 am - 4.oo pm</div>
          <div className="tuesday5">Tuesday</div>
          <div className="practices10">Practices</div>
          <div className="practices11">Practices</div>
          <div className="dateinput11">
            <button className="updatebutton">UPDATE</button>
          </div>
          <div className="timeinput5">
            <button className="updatebutton">UPDATE</button>
          </div>
          <div className="dateinput12">
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

export default Elle;
