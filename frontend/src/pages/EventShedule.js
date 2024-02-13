import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./EventShedule.css";
import HeaderAfterLog from "./components/HeaderAfterLog"
import Footer from "./components/Footer"

const EventShedule = () => {
  const navigate = useNavigate();

  const onSportEventButtonContainerClick = useCallback(() => {
    navigate("/sportsevents");
  }, [navigate]);

  const onSpecialProButtonContainerClick = useCallback(() => {
    navigate("/special-programms");
  }, [navigate]);

  const onDailyEventButtonContainerClick = useCallback(() => {
    navigate("/dailypractices");
  }, [navigate]);

  const onMusicEventButtonContainerClick = useCallback(() => {
    navigate("/musical-events");
  }, [navigate]);

  const onMusicalEventCallTextClick = useCallback(() => {
    navigate("/musical-events");
  }, [navigate]);

  const onSportEventCallTextClick = useCallback(() => {
    navigate("/sportsevents");
  }, [navigate]);

  const onSpecialEventCallTextClick = useCallback(() => {
    navigate("/special-programms");
  }, [navigate]);

  const onDailyEventCallTextClick = useCallback(() => {
    navigate("/dailypractices");
  }, [navigate]);

  return (
    <div className="eventshedule">
      <HeaderAfterLog/>
      <img className="backpic1-icon" alt="" src="/backpic1@2x.png" />
      <div className="event-shedule">EVENT SHEDULE</div>
      <div className="available-events">Available Events</div>
      <div
        className="sporteventbutton"
        onClick={onSportEventButtonContainerClick}
      >
        <img
          className="pexels-thibault-trillet-167491-icon"
          alt=""
          src="/pexelsthibaulttrillet167491-1@2x.png"
        />
        <div className="sport-events">SPORT EVENTS</div>
      </div>
      <div
        className="specialprobutton"
        onClick={onSpecialProButtonContainerClick}
      >
        <img
          className="pexels-thibault-trillet-167491-icon"
          alt=""
          src="/pexelsthibaulttrillet167491-1@2x.png"
        />
        <div className="special-programmes">SPECIAL PROGRAMMES</div>
      </div>
      <div
        className="dailyeventbutton"
        onClick={onDailyEventButtonContainerClick}
      >
        <img
          className="pexels-thibault-trillet-167491-icon"
          alt=""
          src="/pexelsthibaulttrillet167491-1@2x.png"
        />
        <div className="sport-events">DAILY EVENTS</div>
      </div>
      <div
        className="musiceventbutton"
        onClick={onMusicEventButtonContainerClick}
      >
        <img
          className="pexels-thibault-trillet-167491-icon"
          alt=""
          src="/pexelsthibaulttrillet167491-1@2x.png"
        />
        <div className="sport-events">MUSICAL EVENTS</div>
      </div>
      <img className="line-icon5" alt="" src="/line.svg" />
      <div className="musicaleventdiscription">
        Come enjoy the wonderful music shows at our gym! Different departments
        host these events, offering various tunes and vibes to make your day
        brighter.
      </div>
      <div className="sporteventdiscription">
        <p className="feel-the-excitement">
          Feel the excitement of our gym's sports competitions! From big
          tournaments like SLUG to smaller faculty matches, these events bring
          athletes together to showcase their skills and teamwork.
        </p>
      </div>
      <div className="dailyeventdiscription">
        <p className="feel-the-excitement">
          Stay active with our gym's daily activities! We have practice
          sessions, fitness classes, social gatherings, and more happening every
          day. Check the schedule to join in the fun!
        </p>
      </div>
      <div className="specialeventdiscription">
        <p className="feel-the-excitement">{`Get ready for some special moments at our gym! We host important ceremonies like graduations, lively celebrations like Colours Night, and even educational conferences to learn new things.                                                           `}</p>
      </div>
      <div className="musicaleventcall" onClick={onMusicalEventCallTextClick}>
        Read more
      </div>
      <div className="sporteventcall" onClick={onSportEventCallTextClick}>
        Read more
      </div>
      <div className="specialeventcall" onClick={onSpecialEventCallTextClick}>
        Read more
      </div>
      <div className="dailyeventcall" onClick={onDailyEventCallTextClick}>
        Read more
      </div>
      <Footer/>
    </div>
  );
};

export default EventShedule;
