import "./Chess.css";
import HeaderAfterLog from "./components/HeaderAfterLog"
import Footer from "./components/Footer"
import BookButtonLarge from "./components/BookButtonLarge";

const Chess = () => {
  return (
    <div className="chess4">
      <HeaderAfterLog/>
      <img className="locker05back-icon" alt="" src="/locker05back@2x.png" />
      <div className="chesstopic">
        <div className="chess5">CHESS</div>
      </div>
      <div className="locker-05">Locker 05</div>
      <div className="equipments4">Equipments</div>
      <div className="court3">Court</div>
      <div className="available-number-of4">Available Number of Boards</div>
      <div className="today-available-times3">Today Available Times</div>
      <div className="bacsketballsavailable4">
        <div className="div4">10</div>
      </div>
      <div className="courttimeslots6">
        <div className="div4">{`Data Not Available Yet `}</div>
      </div>
      <div className="courttimeslots7">
        <div className="div4">{`Data Not Available Yet `}</div>
      </div>
      <div className="chessdiscription01">
        <p className="strategic-training-our">What to Expect:</p>
        <p className="strategic-training-our">&nbsp;</p>
        <p className="strategic-training-our">
          Strategic Training: Our practice sessions focus on developing your
          chess strategy, including opening theory, middle-game tactics, and
          endgame techniques, through interactive lessons and practice games.
        </p>
        <p className="strategic-training-our">&nbsp;</p>
        <p className="strategic-training-our">
          Friendly Matches: Engage in friendly matches with fellow players to
          apply your knowledge and test your skills in a supportive and
          encouraging atmosphere.
        </p>
        <p className="strategic-training-our">
          Chess Principles: Learn about fundamental chess principles such as
          controlling the center, developing pieces efficiently, and recognizing
          tactical opportunities to gain an advantage over your opponent.
        </p>
        <p className="strategic-training-our">
          Mental Stimulation: Chess is a game of intellect and concentration,
          requiring mental sharpness, critical thinking, and decision-making
          skills. Expect to engage your mind and challenge yourself
          intellectually during our practice sessions.
        </p>
        <p className="strategic-training-our">&nbsp;</p>
        <p className="strategic-training-our">Details:</p>
        <p className="strategic-training-our">&nbsp;</p>
        <p className="strategic-training-our">
          Location: University Gymnasium, [University Of Peradeniya]
        </p>
        <p className="strategic-training-our">
          Attire: Wear comfortable clothing suitable for indoor activities.
          Closed-toe shoes are recommended for added comfort and safety.
        </p>
        <p className="strategic-training-our">&nbsp;</p>
        <p className="strategic-training-our">Registration:</p>
        <p className="strategic-training-our">&nbsp;</p>
        <p className="strategic-training-our">
          While walk-ins are welcome, we encourage players to register in
          advance to secure their spot in the session. Registration can be
          completed online through our website or by contacting our gymnasium
          staff for assistance. Join us for an enriching and rewarding
          experience as we explore the intricate world of chess together!
        </p>
      </div>
      <b className="chessdiscription011">
        Welcome to the University Gymnasium's Chess Practice Sessions, where
        strategic minds come together to engage in the timeless game of chess.
        Whether you're a seasoned player or new to the game, our practice
        sessions provide a welcoming environment for players to enhance their
        skills, learn new strategies, and enjoy the mental challenge of chess.
      </b>
      <div className="sheduletable3">
        <b className="schedule4">Schedule</b>
        <div className="scheduletable3">
          <b className="dates3">Dates</b>
          <b className="times3">Times</b>
          <b className="event-description3">Event Description</b>
          <img className="border-icon16" alt="" src="/border.svg" />
          <img className="border-icon17" alt="" src="/border.svg" />
          <img className="border-icon18" alt="" src="/border.svg" />
          <img className="border-icon19" alt="" />
          <div className="monday3">Monday</div>
          <div className="am-4oo6">9.00 am - 4.oo pm</div>
          <div className="am-4oo7">9.00 am - 4.oo pm</div>
          <div className="tuesday3">Tuesday</div>
          <div className="practices6">Practices</div>
          <div className="practices7">Practices</div>
          <div className="dateinput7">
            <button className="updatebutton">UPDATE</button>
          </div>
          <div className="timeinput3">
           <button className="updatebutton">UPDATE</button>
          </div>
          <div className="dateinput8">
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

export default Chess;
