import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Sports.css";
import HeaderAfterLog from "./components/HeaderAfterLog"
import Footer from "./components/Footer"


const Sports = () => {
  const navigate = useNavigate();

  const onQuipmentBookingButtonContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='sportcontainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onGotoTopContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='shadow']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onOutdoorBookingButtonContainerClick = useCallback(() => {
    navigate("/outdoorfacilities");
  }, [navigate]);

  const onIndoorBookingbuttonContainerClick = useCallback(() => {
    navigate("/indoorfacilities");
  }, [navigate]);



  const onWeightLiftingClick = useCallback(() => {
    navigate("/weightlifting");
  }, [navigate]);

  const onSwimmingClick = useCallback(() => {
    navigate("/swimming");
  }, [navigate]);

  const onTrackAndFieldClick = useCallback(() => {
    navigate("/tracksfileds");
  }, [navigate]);

  const onWrestlingClick = useCallback(() => {
    navigate("/wrestling");
  }, [navigate]);

  const onKickBoxingClick = useCallback(() => {
    navigate("/kickboxing");
  }, [navigate]);

  const onTaekwondoClick = useCallback(() => {
    navigate("/taekwondo");
  }, [navigate]);

  const onTennisClick = useCallback(() => {
    navigate("/tennis");
  }, [navigate]);

  const onVolleyballClick = useCallback(() => {
    navigate("/volleyball");
  }, [navigate]);

  const onRugbyClick = useCallback(() => {
    navigate("/rugby");
  }, [navigate]);

  const onNetballClick = useCallback(() => {
    navigate("/netball");
  }, [navigate]);

  const onKarateClick = useCallback(() => {
    navigate("/karate");
  }, [navigate]);

  const onTableTennisClick = useCallback(() => {
    navigate("/tabletennis");
  }, [navigate]);

  const onElleClick = useCallback(() => {
    navigate("/elle");
  }, [navigate]);

  const onFootballClick = useCallback(() => {
    navigate("/football");
  }, [navigate]);

  const onHockeyClick = useCallback(() => {
    navigate("/hockey");
  }, [navigate]);

  const onCarromClick = useCallback(() => {
    navigate("/carrom");
  }, [navigate]);

  const onChessClick = useCallback(() => {
    navigate("/chess");
  }, [navigate]);

  const onCricketClick = useCallback(() => {
    navigate("/cricket");
  }, [navigate]);

  const onBatmintonClick = useCallback(() => {
    navigate("/badminton");
  }, [navigate]);

  const onBaseBallClick = useCallback(() => {
    navigate("/baseball");
  }, [navigate]);

  const onBasketballClick = useCallback(() => {
    navigate("/bascketball");
  }, [navigate]);

  return (

    <div className="sports">
      <HeaderAfterLog/>


      <div className="bookingheader">

        <div className="faculty-of-physical4">
          ©Faculty of Physical Education, University of Peradeniya ,Peradeniya
        </div>


        <div className="bookingTopBackground1">
          <img
            className="topicbackimg"
            alt=""
            src="/topicbackimg@2x.png"
          />


          <div className="bookingTopBackground2">
            <div className="shadow" data-scroll-to="shadow" />
            <div className="topicbooking">BOOKING</div>
            <div className="topicbooking1">
              <p className="bookdiscription">
                Check the availability of any service from gymnasium and book
                any equipments,
              </p>
              <p className="bookdiscription">
               
                <span>
                  facilities from one place. Much easiest and faster way for
                  your needs
                </span>
                <span className="span">.</span>
              </p>
            </div>

            <div
              className="quipmentbookingbutton"
              onClick={onQuipmentBookingButtonContainerClick}
            >
              <div className="TopButtonStyle">EQUIPMENT BOOKING</div>
            </div>


            <div
              className="outdoorbookingbutton"
              onClick={onOutdoorBookingButtonContainerClick}
            >
              <div className="TopButtonStyle">OUTDOOR FACILITY BOOKING</div>
            </div>

            <div
              className="indoorbookingbutton"
              onClick={onIndoorBookingbuttonContainerClick}
            >
              <div className="TopButtonStyle">INDOOR FACILITY BOOKING</div>
            </div>

          </div>
        </div>


      </div>


      <div className="sports1" data-scroll-to='sportcontainer'>
        <div className="equipmenttopic">
          <div className="SportFontStyle">Sports</div>
        </div>
        <div className="select-equipment-by">Select equipment by sport.</div>
       
      
        <div className="row7">
          <button className="weightlifting" onClick={onWeightLiftingClick}>
            <img
              className="weightliftingimg-icon"
              alt=""
              src="/weightliftingimg@2x.png"
            />
            <b className="sportfont">Weight Lifting</b>
          </button>
          <button className="swimming" onClick={onSwimmingClick}>
            <img
              className="swimmingimg-icon"
              alt=""
              src="/swimmingimg@2x.png"
            />
            <b className="sportfont">Swimming</b>
          </button>
          <button className="trackandfield" onClick={onTrackAndFieldClick}>
            <img
              className="trackandfieldimg-icon"
              alt=""
              src="/trackandfieldimg@2x.png"
            />
            <b className="sportfont">{`Track & Field`}</b>
          </button>
        </div>


        <div className="row6">
          <button className="wrestling" onClick={onWrestlingClick}>
            <img
              className="wrestlingimg-icon"
              alt=""
              src="/wrestlingimg@2x.png"
            />
            <b className="sportfont">Wrestling</b>
          </button>
          <button className="kickboxing" onClick={onKickBoxingClick}>
            <img
              className="kickboxingimg-icon"
              alt=""
              src="/kickboxingimg@2x.png"
            />
            <b className="sportfont">
              Kick Boxing
            </b>
          </button>
          <button className="taekwondo" onClick={onTaekwondoClick}>
            <img
              className="taekwondoimg-icon"
              alt=""
              src="/taekwondoimg@2x.png"
            />
            <b className="sportfont">Taekwondo</b>
          </button>
        </div>


        <div className="row5">
          <button className="tennis" onClick={onTennisClick}>
            <img className="taekwondoimg-icon" alt="" src="/tennisimg@2x.png" />
            <b className="sportfont">Tennis</b>
          </button>
          <button className="volleyball" onClick={onVolleyballClick}>
            <img
              className="volleyballimg-icon"
              alt=""
              src="/volleyballimg@2x.png"
            />
            <b className="sportfont">Volleyball</b>
          </button>
          <button className="rugby" onClick={onRugbyClick}>
            <img className="rugbyimg-icon" alt="" src="/rugbyimg@2x.png" />
            <b className="sportfont">Rugby</b>
          </button>
        </div>


        <div className="row4">
          <button className="elle" onClick={onNetballClick}>
            <img className="netballimg-icon" alt="" src="/netballimg@2x.png" />
            <b className="sportfont">Netball</b>
          </button>
          <button className="karate" onClick={onKarateClick}>
            <img className="karateimg-icon" alt="" src="/karateimg@2x.png" />
            <b className="sportfont">Karate</b>
          </button>
          <button className="tabletennis" onClick={onTableTennisClick}>
            <img
              className="tabletennisimg-icon"
              alt=""
              src="/tabletennisimg@2x.png"
            />
            <b className="sportfont">Table Tennis</b>
          </button>
        </div>


        <div className="row3">
          <button className="elle" onClick={onElleClick}>
            <img className="netballimg-icon" alt="" src="/elletimg@2x.png" />
            <b className="sportfont">Elle</b>
          </button>
          <button className="football" onClick={onFootballClick}>
            <img
              className="footballtimg-icon"
              alt=""
              src="/footballtimg@2x.png"
            />
            <b className="sportfont">Football</b>
          </button>
          <button className="hockey" onClick={onHockeyClick}>
            <img className="hockeyimg-icon" alt="" src="/hockeyimg@2x.png" />
            <b className="sportfont">Hockey</b>
          </button>
        </div>


        <div className="row2">
          <button className="carrom" onClick={onCarromClick}>
            <img className="carromimg-icon" alt="" src="/carromimg@2x.png" />
            <b className="sportfont">Carrom</b>
          </button>
          <button className="chess" onClick={onChessClick}>
            <img className="chessimg-icon" alt="" src="/chessimg@2x.png" />
            <b className="sportfont">Chess</b>
          </button>
          <button className="cricket1" onClick={onCricketClick}>
            <img className="cricketimg-icon" alt="" src="/cricketimg@2x.png" />
            <b className="sportfont">Cricket</b>
          </button>
        </div>


        <div className="row1">
          <button className="batminton" onClick={onBatmintonClick}>
            <div className="batminton1">
              <img
                className="batmintonimg-icon"
                alt=""
                src="/batmintonimg@2x.png"
              />
              <b className="sportfont">Badminton</b>
            </div>
          </button>
          <button className="baseball" onClick={onBaseBallClick}>
            <div className="baseball1">
              <img
                className="baseballimg-icon"
                alt=""
                src="/baseballimg@2x.png"
              />
              <b className="sportfont">Baseball</b>
            </div>
          </button>
          <button className="basketball" onClick={onBasketballClick}>
            <img
              className="basketballimg-icon"
              alt=""
              src="/basketballimg@2x.png"
            />
            <b className="sportfont">Basketball</b>
          </button>
        </div>
        <div className="gototop2" onClick={onGotoTopContainerClick}>
          
          <img className="gototopicon1" alt="" src="/gototopicon@2x.png" />
             <b className="gototop3">Go to Top</b>
          </div>

      </div>
      <Footer/>
    </div>
  );
};

export default Sports;
