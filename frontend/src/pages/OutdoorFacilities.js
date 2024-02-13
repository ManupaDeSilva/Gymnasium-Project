import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./OutdoorFacilities.css";
import HeaderAfterLog from "./components/HeaderAfterLog"
import Footer from "./components/Footer"
import BookButtonSmall from "./components/BookButtonSmall"

const OutdoorFacilities = () => {
  const navigate = useNavigate();

  const onCinderAthleticTrackClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='topic1Container']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onSoccerRugbyClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='topic2Container']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onCricketPitchTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='topic3Container']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onTennisCourtsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='topic4Container']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onVolleyballCourtsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='topic5Container']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onBasketballCourtTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='topic6Container']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onHockeyPitchTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='topic7Container']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onSwimmingPoolComplexClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='topic8Container']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onBacktoHomeButtonContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGotoTopContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='outdoorTopicContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="outdoorfacilities">
      <HeaderAfterLog/>
     
      <div className="outdoortopic" data-scroll-to="outdoorTopicContainer">
        <b className="outdoor-facilities1">OUTDOOR FACILITIES</b>
      </div>
      <img className="rightline-icon" alt="" src="/rightline.svg" />
      <img className="leftline-icon" alt="" src="/leftline.svg" />
      <b className="the-department-of">{`The Department of Physical Education, the governing body of sports, of the prestigious University of Peradeniya possess unique sporting facilities which none of other Universities in Sri Lanka can challenge. Not only these sports facilities are extraordinary in capacity, standards & space but also these are located in an utmost picturesque environment too.`}</b>
      <img
        className="facilityslider-icon"
        alt=""
        src="/facilityslider@2x.png"
      />
      <div className="availablefacilitiesbackground" />
      <b className="availabale-facilities">AVAILABALE FACILITIES</b>
      <b
        className="cinder-athletic-track"
        onClick={onCinderAthleticTrackClick}
      >{`Cinder Athletic Track & Athletic Field
`}</b>
      <img className="linkicon" alt="" src="/linkicon@2x.png" />
      <img className="linkicon1" alt="" src="/linkicon@2x.png" />
      <img className="linkicon2" alt="" src="/linkicon@2x.png" />
      <img className="linkicon3" alt="" src="/linkicon@2x.png" />
      <img className="linkicon4" alt="" src="/linkicon@2x.png" />
      <img className="linkicon5" alt="" src="/linkicon@2x.png" />
      <img className="linkicon6" alt="" src="/linkicon@2x.png" />
      <img className="linkicon7" alt="" src="/linkicon@2x.png" />
      <img className="linkicon8" alt="" src="/linkicon@2x.png" />
      <img className="linkicon9" alt="" src="/linkicon@2x.png" />
      <b
        className="soccer-rugby"
        onClick={onSoccerRugbyClick}
      >{`Soccer & Rugby Football Ground
`}</b>
      <b className="cricket-pitch" onClick={onCricketPitchTextClick}>
        Cricket Pitch
      </b>
      <b className="tennis-courts" onClick={onTennisCourtsTextClick}>
        Tennis Courts
      </b>
      <b className="volleyball-courts" onClick={onVolleyballCourtsTextClick}>
        Volleyball Courts
      </b>
      <b className="basketball-court" onClick={onBasketballCourtTextClick}>
        Basketball Court
      </b>
      <div className="gamesiconlist1">
        <img className="athletic-icon" alt="" src="/athletic@2x.png" />
        <img className="football-icon" alt="" src="/football@2x.png" />
        <img className="cricket-icon" alt="" src="/cricket@2x.png" />
        <img className="tennis-icon" alt="" src="/tennis@2x.png" />
        <img className="volleyball-icon" alt="" src="/volleyball@2x.png" />
        <img className="basketball-icon" alt="" src="/basketball@2x.png" />
      </div>
      <b className="hockey-pitch" onClick={onHockeyPitchTextClick}>
        Hockey Pitch
      </b>
      <b className="soft-ball-pitches">Soft Ball Pitches</b>
      <b className="swimming-pool-complex" onClick={onSwimmingPoolComplexClick}>
        Swimming Pool Complex
      </b>
      <b className="general-fitness-area">General Fitness Area</b>
      <div className="gamesiconlist11">
        <img className="hockey-icon" alt="" src="/hockey@2x.png" />
        <img className="fitness-icon" alt="" src="/fitness@2x.png" />
        <img className="softball-icon" alt="" src="/softball@2x.png" />
        <img className="pngwing-1-icon" alt="" src="/pngwing-1@2x.png" />
      </div>
      <div className="topic1" data-scroll-to="topic1Container">

      <div className="bookingbutton3">
          <BookButtonSmall/>
         </div>

        <b className="discription1">
          <p className="cricket-ground">{`Cinder Athletic Track & Athletic Field`}</p>
          <p className="blank-line1">&nbsp;</p>
          <p className="the-cinder-athletic">{`The Cinder athletic track is made of coal and has 6 lanes with an inner lane distance of 400 meters. The University acquired this cinder track in 1953 and it is said that this cinder track is the only one remaining tracks of that kind and now it has received a historical value due to that reason. This athletic field accommodates field events also, including long jump & triple jump pit with runways, Discus & putt shot rings, pole vault and high jump area and javelin throw area.`}</p>
        </b>
        <img className="topicimg1-icon" alt="" src="/topicimg1@2x.png" />
      </div>
      <div className="topic2" data-scroll-to="topic2Container">
        
      <div className="bookingbutton3">
          <BookButtonSmall/>
         </div>
         
        <b className="discription2">
          <p className="cricket-ground">{`Soccer & Rugby Football Ground`}</p>
          <p className="blank-line1">&nbsp;</p>
          <p className="the-cinder-athletic">{`University Soccer & Rugby Football pitch is mainly a grass surfaced 120m X 65m area. This well maintained pitch is used primarily for training & matches of both Soccer & Rugby. The pitch hosts Inter University matches, University intra-mural competitions, Kandy & Gampola League matches, FFSL FA Cup & Premier League matches as well as other community club tournaments. The pitch has adjacent one storied- pavilion & changing rooms for players & referees.`}</p>
        </b>
        <img className="topicimg2-icon" alt="" src="/topicimg2@2x.png" />
      </div>
      <div className="topic3" data-scroll-to="topic3Container">
      
      <div className="bookingbutton3">
          <BookButtonSmall/>
         </div>

        <b className="discription3">
          <p className="cricket-ground">Cricket Ground</p>
          <p className="blank-line1">&nbsp;</p>
          <p className="the-cinder-athletic">{`The University cricket pitch is mainly a grass surfaced 65m full length area. This well maintained ground has one matting pitch & two clay pitches. The ground has an adjacent one storied- pavilion & changing rooms with attached wash-rooms for players & referees. This ground is located in a very picturesque environment. The pitch hosts Inter University matches, University intra-mural competitions, and as well as other community club tournaments.`}</p>
        </b>
        <img className="topicimg1-icon" alt="" src="/topicimg3@2x.png" />
      </div>
      <div className="topic4" data-scroll-to="topic4Container">
        
      <div className="bookingbutton3">
          <BookButtonSmall/>
         </div>
         
        <b className="discription4">
          <p className="cricket-ground">Tennis Courts</p>
          <p className="blank-line1">&nbsp;</p>
          <p className="the-cinder-athletic">
            University of Peradeniya Tennis court complex has 03 tennis courts.
            These courts are clay surfaced and well maintained. These are
            available for university students, staff members, and for outsiders
            as well.
          </p>
        </b>
        <img className="topicimg1-icon" alt="" src="/topicimg4@2x.png" />
      </div>
      <div className="topic5" data-scroll-to="topic5Container">
        
      <div className="bookingbutton3">
          <BookButtonSmall/>
         </div>
         
        <b className="discription4">
          <p className="cricket-ground">Out-door Volleyball Courts</p>
          <p className="blank-line1">&nbsp;</p>
          <p className="the-cinder-athletic">
            The University outdoor volleyball courts are located adjacent to the
            athletic track and have two clay based courts. These are available
            for university students, staff members, and for outsiders as well
            upon request.
          </p>
        </b>
        <img className="topicimg1-icon" alt="" src="/topicimg5@2x.png" />
      </div>
      <div className="topic6" data-scroll-to="topic6Container">
        
      <div className="bookingbutton3">
          <BookButtonSmall/>
         </div>
         
        <b className="discription4">
          <p className="cricket-ground">Basketball Court</p>
          <p className="blank-line1">&nbsp;</p>
          <p className="the-cinder-athletic">
            The Outdoor basketball court is situated next to the volleyball
            courts and is mainly a hard court made of tar. These are available
            for university students, staff members, and for outsiders as well
            upon request.
          </p>
        </b>
        <img className="topicimg1-icon" alt="" src="/topicimg6@2x.png" />
      </div>
      <div className="topic7" data-scroll-to="topic7Container">
        
      <div className="bookingbutton3">
          <BookButtonSmall/>
         </div>
         
        <b className="discription7">
          <p className="cricket-ground">Hockey Pitch</p>
          <p className="blank-line1">&nbsp;</p>
          <p className="the-cinder-athletic">{`The University hockey pitch is mainly a grass surfaced 100m X 60m area. This well maintained pitch is used primarily for training & matches and located in a very beautiful environment. The pitch hosts Inter University matches, University intra-mural competitions, as well as other community club tournaments. The pitch has an adjacent one storied- pavilion & changing rooms together with wash rooms.`}</p>
        </b>
        <img className="topicimg1-icon" alt="" src="/topicimg7@2x.png" />
      </div>
      <div className="topic8" data-scroll-to="topic8Container">
        
      <div className="bookingbutton3">
          <BookButtonSmall/>
         </div>
         
        <b className="discription8">
          <p className="cricket-ground">Swimming Pool Complex</p>
          <p className="blank-line1">&nbsp;</p>
          <p className="the-cinder-athletic">{`The Swimming pool is a 50m standard size & has 08 lanes. Its shallow end is 1.5 m in depth and at the deep end, the depth is 5.5 m. The swimming pool has an adjacent two storied- building which consists of changing rooms and wash-rooms for swimmers. The pool is available for university students, staff members, and for outsiders as well upon request.`}</p>
        </b>
        <img className="topicimg1-icon" alt="" src="/topicimg8@2x.png" />
      </div>
      <div
        className="backtohomebutton"
        onClick={onBacktoHomeButtonContainerClick}
      >
        <div className="back-to-home">Back to Home</div>
        <img
          className="backtohomearrow-icon"
          alt=""
          src="/backtohomearrow.svg"
        />
      </div>
      <div className="check-or-book">
        Check or book indoor facilities, please go to homepage.
      </div>
      <div className="gototop" onClick={onGotoTopContainerClick}>
        <img className="gototopicon" alt="" src="/gototopicon@2x.png" />
        <b className="gototop1">Go to Top</b>
      </div>

      <Footer/>
    </div>
  );
};

export default OutdoorFacilities;
