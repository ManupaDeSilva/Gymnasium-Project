import "./Tennis.css";
import HeaderAfterLog from "./components/HeaderAfterLog"
import Footer from "./components/Footer"
import BookButtonLarge from "./components/BookButtonLarge";

const Tennis = () => {
  return (
    <div className="tennis4">
      <HeaderAfterLog/>
      <img className="locker13back-icon" alt="" src="/locker13back@2x.png" />
      <div className="tennistopic">
        <div className="tennis5">TENNIS</div>
      </div>
      <div className="locker-13">Locker 13</div>
      <div className="equipments11">Equipments</div>
      <div className="court10">Court</div>
      <div className="available-number-of15">Available Number of Balls</div>
      <div className="available-number-of16">Available Number of Paddles</div>
      <div className="today-available-times10">Today Available Times</div>
      <div className="bacsketballsavailable15">
        <div className="div15">10</div>
      </div>
      <div className="bacsketballsavailable16">
        <div className="div15">10</div>
      </div>
      <div className="courttimeslots20">
        <div className="div15">{`Data Not Available Yet `}</div>
      </div>
      <div className="courttimeslots21">
        <div className="div15">{`Data Not Available Yet `}</div>
      </div>
      <b className="tennisdiscription1">
        Welcome to the University Gymnasium's Tennis Practice Sessions, where
        players of all levels gather to enjoy the exhilarating game of tennis.
        Whether you're a seasoned player or new to the sport, our practice
        sessions provide the perfect opportunity to develop your skills,
        technique, and passion for tennis.
      </b>
      <div className="tennisdiscription2">
        <p className="match-play-engage">What to Expect:</p>
        <p className="match-play-engage">&nbsp;</p>
        <p className="match-play-engage">
          Court Time: Our practice sessions offer plenty of court time for you
          to work on your serves, volleys, groundstrokes, and footwork.
        </p>
        <p className="match-play-engage">
          Skill Development: Receive expert coaching from our experienced tennis
          instructors dedicated to helping you refine your technique, improve
          your consistency, and enhance your overall game.
        </p>
        <p className="match-play-engage">
          Match Play: Engage in singles and doubles matches, drills, and point
          simulations that challenge your skills and provide valuable match
          experience.
        </p>
        <p className="match-play-engage">
          Equipment Provided: Don't have your own tennis racket? No problem – we
          provide all the necessary equipment for you to enjoy the session.
        </p>
        <p className="match-play-engage">&nbsp;</p>
        <p className="match-play-engage">Details:</p>
        <p className="match-play-engage">&nbsp;</p>
        <p className="match-play-engage">
          Location: University Gymnasium, [University Of Peradeniya]
        </p>
        <p className="match-play-engage">
          Attire: Wear comfortable athletic clothing and proper tennis shoes for
          support and stability. Tennis balls will be provided.
        </p>
        <p className="match-play-engage">&nbsp;</p>
        <p className="match-play-engage">Registration:</p>
        <p className="match-play-engage">&nbsp;</p>
        <p className="match-play-engage">
          While walk-ins are welcome, we recommend pre-registering to secure
          your spot. Sign up online through our website or contact our gymnasium
          staff for assistance.
        </p>
      </div>
      <div className="sheduletable10">
        <b className="schedule11">Schedule</b>
        <div className="scheduletable10">
          <b className="dates10">Dates</b>
          <b className="times10">Times</b>
          <b className="event-description10">Event Description</b>
          <img className="border-icon51" alt="" src="/border.svg" />
          <img className="border-icon52" alt="" src="/border.svg" />
          <img className="border-icon53" alt="" src="/border.svg" />
          <img className="border-icon54" alt="" />
          <div className="monday10">Monday</div>
          <div className="am-4oo20">9.00 am - 4.oo pm</div>
          <div className="am-4oo21">9.00 am - 4.oo pm</div>
          <div className="tuesday10">Tuesday</div>
          <div className="practices20">Practices</div>
          <div className="practices21">Practices</div>
          <div className="dateinput21">
            <button className="updatebutton">UPDATE</button>
          </div>
          <div className="timeinput10">
            <button className="updatebutton">UPDATE</button>
          </div>
          <div className="dateinput22">
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

export default Tennis;
