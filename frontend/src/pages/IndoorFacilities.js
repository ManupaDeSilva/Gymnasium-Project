import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./IndoorFacilities.css";
import HeaderAfterLog from "./components/HeaderAfterLog"
import Footer from "./components/Footer"
import BookButtonSmall from "./components/BookButtonSmall";

const IndoorFacilities = () => {
  const navigate = useNavigate();

  const onTaekwondoClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='taekondoContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onBadmintonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='badmintonContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onBasketballClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='basketballContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onNetballClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='netballContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onVolleyballClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='volleyballContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onTabletennisClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='tabletennisContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onWrestlingClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='wrestlingContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onClimbingClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='climbingContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onChessClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='chessroomcontainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onTrampClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='trampcontainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFitnessClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='Fitnesscontainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);


  
  return (
    <div className="indoorfacilities">
      <HeaderAfterLog/>
      <img
        className="indoorfacilityimg-icon"
        alt=""
        src="/indoorfacilityimg@2x.png"
      />

      <div className="indoortopic01">
        <b className="indoor-facilities1">INDOOR FACILITIES</b>
      </div>
      <div className="indoortopic02">In the University Gymnasium</div>
      <div className="indoorpagediscription">{`University Gymnasium is a large indoor complex equipped with top –class sports training facilities. This huge building offers facilities for badminton, basketball, netball, volleyball, 5-a-side football (futsal), trampoline, aerobics, carom, chess, table tennis, weight lifting, powerlifting, weight training, wushu, karate, taekwondo, judo, kick boxing & wrestling. The playing area is covered with state-of –the-art high quality wooden floor. It is provided with 04 large tilled wash rooms & changing rooms plus a balcony for the spectators.`}</div>
      
      <div className="check-or-book1">
        Check or book indoor facilities, please go to homepage.
      </div>
      
      <div className="chesscaromrooms" data-scroll-to="chessroomcontainer">
      <div className="bookingbutton4">
              <BookButtonSmall/>
            </div>
        <b className="chesscaromrooms1">{`Chess & Carom rooms`}</b>
        <img
          className="chesscaromroomsimg-icon"
          alt=""
          src="/chesscaromroomsimg@2x.png"
        />
      </div>
      <div className="trampoline" data-scroll-to='trampcontainer'>
      <div className="bookingbutton4">
              <BookButtonSmall/>
            </div>
        <b className="trampoline1">Trampoline</b>
        <img
          className="chesscaromroomsimg-icon"
          alt=""
          src="/trampolineimg@2x.png"
        />
      </div>
      <div className="fitnesscentre" data-scroll-to="Fitnesscontainer">
      <div className="bookingbutton4">
              <BookButtonSmall/>
            </div>
        <b className="fitnesscentre1">{`Specialist fitness Centre equipped for weight training & Fitness`}</b>
        <img
          className="chesscaromroomsimg-icon"
          alt=""
          src="/fitnesscentreimg@2x.png"
        />
      </div>
      <div className="wrestlingarea" data-scroll-to='wrestlingContainer'>
      <div className="bookingbutton4">
              <BookButtonSmall/>
            </div>
        <b className="wrestlingarea1">Wrestling area</b>
        <img
          className="chesscaromroomsimg-icon"
          alt=""
          src="/wrestlingareaimg@2x.png"
        />
      </div>
      <div className="taekwondoarea" data-scroll-to='taekondoContainer'>
      <div className="bookingbutton4">
              <BookButtonSmall/>
            </div>
        <b className="taekwondoarea1">Taekwondo area</b>
        <img
          className="chesscaromroomsimg-icon"
          alt=""
          src="/taekwondoareaimg@2x.png"
        />
      </div>
      <div className="climbingboard" data-scroll-to="climbingContainer">
      <div className="bookingbutton4">
              <BookButtonSmall/>
            </div>
        <b className="climbingboard1">Climbing Board</b>
        <img
          className="climbingboardimg-icon"
          alt=""
          src="/climbingboardimg@2x.png"
        />
      </div>
      <div className="tabletenniscourt">
      <div className="bookingbutton4">
              <BookButtonSmall/>
            </div>
        <b className="tabletenniscourt1">TableTennis Courts</b>
        <img
          className="chesscaromroomsimg-icon"
          alt=""
          src="/tabletenniscourtimg@2x.png"
        />
        <div className="tabletennisdiscription">
          Six table tennis tables set up in a designated area within the
          gymnasium. The university would provide regulation-sized table tennis
          tables, which are typically 2.74 meters (9 feet) long, 1.525 meters (5
          feet) wide, and 0.76 meters (2.5 feet) high, with a net dividing the
          table into two equal halves
        </div>
      </div>
      <div className="netballcourt">
      <div className="bookingbutton4">
              <BookButtonSmall/>
            </div>
        <b className="netballcourt1">Netball Court</b>
        <img
          className="chesscaromroomsimg-icon"
          alt=""
          src="/netballcourtimg@2x.png"
        />
        <div className="netballdiscription">
          There is a world standard Netball court. A netball court in the
          gymnasium at the University of Peradeniya would typically adhere to
          standard international dimensions and markings. The court measures
          30.5 meters (100 feet) in length and 15.25 meters (50 feet) in width.
          The court is divided into thirds by two transverse lines, creating
          three distinct areas: the center third and two goal thirds.
        </div>
      </div>
      <div className="volleyballcourt">
      <div className="bookingbutton4">
              <BookButtonSmall/>
            </div>
        <b className="volleyballcourt1">Volleyball Courts</b>
        <img
          className="chesscaromroomsimg-icon"
          alt=""
          src="/volleyballcourtimg@2x.png"
        />
        <div className="volleyballdiscription">
          There are two Volleyball courts in the gymnasium. Volleyball court
          measures 18 meters (59 feet) in length and 9 meters (29.5 feet) in
          width. The court is divided into equal halves by a net suspended over
          the centerline.
        </div>
      </div>
      <div className="bascketballcourt">
      <div className="bookingbutton4">
              <BookButtonSmall/>
            </div>
        <b className="bascketballcourt1">Bascketball Court</b>
        <img
          className="chesscaromroomsimg-icon"
          alt=""
          src="/bascketballcourtimg@2x.png"
        />
        <div className="bascketballdiscription">
          There is a world standard basketball court in the gymnasium.
          Basketball court measures 94 feet in length and 50 feet in width. The
          court is divided into two main sections: the playing area and the
          out-of-bounds area.
        </div>
      </div>
      <div className="badmintoncourt">
            <div className="bookingbutton4">
              <BookButtonSmall/>
            </div>

        <b className="badmintoncourt1">Badminton Courts</b>
        <img
          className="chesscaromroomsimg-icon"
          alt=""
          src="/badmintonimg@2x.png"
        />
        <div className="badmintondiscription"  data-scroll-to="badmintonContainer">
          <p className="there-are-08">
            There are 08 Badminton courts in the Gymnasium. Every badminton
            court provides a regulated space for players to compete in the
            sport, ensuring fair play and providing clear boundaries for the
            game.
          </p>
        </div>
      </div>

      <div className="posseses">
      <b className="gymnasium-possesses">Gymnasium Possesses</b>

        <img className="line-icon6" alt="" src="/line.svg" />

        <b className="badminton-courts" onClick={onBadmintonClick}>Badminton courts</b>

        <b className="basketball-court2" onClick={onBasketballClick}>Basketball court</b>

        <b className="netball-court" onClick={onNetballClick}>Netball court</b>

        <b className="volleyball-courts1" onClick={onVolleyballClick}>Volleyball courts</b>

        <b className="table-tennis-tables" onClick={onTabletennisClick}>Table Tennis Tables</b>

        <b className="taekwondo-area" onClick={onTaekwondoClick}>Taekwondo area</b>

        <b className="wrestling-area" onClick={onWrestlingClick}>Wrestling area</b>

        <b className="chess-carom" onClick={onChessClick}>{`Chess & Carom rooms`}</b>

        <b className="climbing-board" onClick={onClimbingClick}>Climbing board</b>
        
        <b className="specialist-fitness-centre" onClick={onFitnessClick} >{`Specialist fitness Centre equipped for weight training & Fitness`}</b>
        
        <b className="trampoline2" onClick={onTrampClick}>Trampoline</b>


        <img className="dot-icon" alt="" src="/dot.svg" />
        <img className="dot-icon1" alt="" src="/dot.svg" />
        <img className="dot-icon2" alt="" src="/dot.svg" />
        <img className="dot-icon3" alt="" src="/dot.svg" />
        <img className="dot-icon4" alt="" src="/dot.svg" />
        <img className="dot-icon5" alt="" src="/dot.svg" />
        <img className="dot-icon6" alt="" src="/dot.svg" />
        <img className="dot-icon7" alt="" src="/dot.svg" />
        <img className="dot-icon8" alt="" src="/dot.svg" />
        <img className="dot-icon9" alt="" src="/dot.svg" />
        <img className="dot-icon10" alt="" src="/dot.svg" />

      </div>
      <Footer/>
    </div>
  );
};

export default IndoorFacilities;
