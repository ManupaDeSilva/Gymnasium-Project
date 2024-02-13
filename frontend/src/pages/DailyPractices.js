import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./DailyPractices.css";
import HeaderAfterLog from "./components/HeaderAfterLog"
import Footer from "./components/Footer"

const DailyPractices = () => {
  const navigate = useNavigate();

  const onGotoTopContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='shadow']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

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
    <div className="dailypractices">
      <HeaderAfterLog/>
      <div className="sports6">
        <div className="equipmenttopic1">
          <div className="daily-practices-for">Daily Practices For Sports</div>
        </div>
        <div className="select-equipment-by1">
          Click sport to see daily practices in gymnasium
        </div>
        <div className="gototop4" onClick={onGotoTopContainerClick}>
          <img className="gototopicon2" alt="" src="/gototopicon@2x.png" />
          <b className="gototop5">Go to Top</b>
        </div>
        <div className="row71">
          <button className="weightlifting2" onClick={onWeightLiftingClick}>
            <img
              className="weightliftingimg-icon1"
              alt=""
              src="/weightliftingimg@2x.png"
            />
            <b className="weightlifting3">Weight Lifting</b>
          </button>
          <button className="swimming2" onClick={onSwimmingClick}>
            <img
              className="swimmingimg-icon1"
              alt=""
              src="/swimmingimg@2x.png"
            />
            <b className="weightlifting3">Swimming</b>
          </button>
          <button className="trackandfield2" onClick={onTrackAndFieldClick}>
            <img
              className="trackandfieldimg-icon1"
              alt=""
              src="/trackandfieldimg@2x.png"
            />
            <b className="weightlifting3">{`Track & Field`}</b>
          </button>
        </div>
        <div className="row61">
          <button className="wrestling2" onClick={onWrestlingClick}>
            <img
              className="wrestlingimg-icon1"
              alt=""
              src="/wrestlingimg@2x.png"
            />
            <b className="weightlifting3">Wrestling</b>
          </button>
          <button className="kickboxing2" onClick={onKickBoxingClick}>
            <img
              className="kickboxingimg-icon1"
              alt=""
              src="/kickboxingimg@2x.png"
            />
            <b className="weightlifting3">
              <p className="kick-boxing1">Kick Boxing</p>
            </b>
          </button>
          <button className="taekwondo2" onClick={onTaekwondoClick}>
            <img
              className="taekwondoimg-icon1"
              alt=""
              src="/taekwondoimg@2x.png"
            />
            <b className="weightlifting3">Taekwondo</b>
          </button>
        </div>
        <div className="row51">
          <button className="tennis2" onClick={onTennisClick}>
            <img
              className="taekwondoimg-icon1"
              alt=""
              src="/tennisimg@2x.png"
            />
            <b className="weightlifting3">Tennis</b>
          </button>
          <button className="volleyball2" onClick={onVolleyballClick}>
            <img
              className="volleyballimg-icon1"
              alt=""
              src="/volleyballimg@2x.png"
            />
            <b className="weightlifting3">Volleyball</b>
          </button>
          <button className="rugby2" onClick={onRugbyClick}>
            <img className="rugbyimg-icon1" alt="" src="/rugbyimg@2x.png" />
            <b className="weightlifting3">Rugby</b>
          </button>
        </div>
        <div className="row41">
          <button className="netball2" onClick={onNetballClick}>
            <img className="netballimg-icon1" alt="" src="/netballimg@2x.png" />
            <b className="weightlifting3">Netball</b>
          </button>
          <button className="karate2" onClick={onKarateClick}>
            <img className="karateimg-icon1" alt="" src="/karateimg@2x.png" />
            <b className="weightlifting3">Karate</b>
          </button>
          <button className="tabletennis2" onClick={onTableTennisClick}>
            <img
              className="tabletennisimg-icon1"
              alt=""
              src="/tabletennisimg@2x.png"
            />
            <b className="weightlifting3">Table Tennis</b>
          </button>
        </div>
        <div className="row31">
          <button className="elle2" onClick={onElleClick}>
            <img className="netballimg-icon1" alt="" src="/elletimg@2x.png" />
            <b className="elle3">Elle</b>
          </button>
          <button className="football2" onClick={onFootballClick}>
            <img
              className="footballtimg-icon1"
              alt=""
              src="/footballtimg@2x.png"
            />
            <b className="weightlifting3">Football</b>
          </button>
          <button className="hockey1" onClick={onHockeyClick}>
            <img className="hockeyimg-icon1" alt="" src="/hockeyimg@2x.png" />
            <b className="weightlifting3">Hockey</b>
          </button>
        </div>
        <div className="row21">
          <button className="carrom2" onClick={onCarromClick}>
            <img className="carromimg-icon1" alt="" src="/carromimg@2x.png" />
            <b className="weightlifting3">Carrom</b>
          </button>
          <button className="chess2" onClick={onChessClick}>
            <img className="chessimg-icon1" alt="" src="/chessimg@2x.png" />
            <b className="weightlifting3">Chess</b>
          </button>
          <button className="cricket4" onClick={onCricketClick}>
            <img className="cricketimg-icon1" alt="" src="/cricketimg@2x.png" />
            <b className="weightlifting3">Cricket</b>
          </button>
        </div>
        <div className="row11">
          <button className="batminton3" onClick={onBatmintonClick}>
            <div className="batminton4">
              <img
                className="batmintonimg-icon1"
                alt=""
                src="/batmintonimg@2x.png"
              />
              <b className="batminton5">Badminton</b>
            </div>
          </button>
          <button className="baseball3" onClick={onBaseBallClick}>
            <div className="baseball4">
              <img
                className="baseballimg-icon1"
                alt=""
                src="/baseballimg@2x.png"
              />
              <b className="baseball5">Baseball</b>
            </div>
          </button>
          <button className="basketball2" onClick={onBasketballClick}>
            <img
              className="basketballimg-icon1"
              alt=""
              src="/basketballimg@2x.png"
            />
            <b className="weightlifting3">Basketball</b>
          </button>
        </div>
      </div>
      <div className="faculty-of-physical6">
        ©Faculty of Physical Education, University of Peradeniya ,Peradeniya
      </div>
      <Footer/>
    </div>
  );
};

export default DailyPractices;
