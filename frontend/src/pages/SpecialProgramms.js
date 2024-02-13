import "./SpecialProgramms.css";
import HeaderAfterLog from "./components/HeaderAfterLog"
import Footer from "./components/Footer"

const SpecialProgramms = () => {
  return (
    <div className="special-programms">
      <HeaderAfterLog/>
      <div className="colourstopic">Colours' Award Ceremony-2023</div>
      <div className="coloursdiscription">
        <p className="in-addition-to">
          The University of Peradeniya's Annual Colours' Award Ceremony, held on
          12thJanuary, 2024, at the E.O.E. Pereira Theater, was a splendid event
          dedicated to recognizing the outstanding achievements of undergraduate
          sportsmen and sportswomen who excelled in sports during 2023. A total
          of 170 sportsmen and 79 sportswomen were honored with university
          colours, including 124 half colours for men and 71 for women. The
          ceremony celebrated exceptional performances at Inter University,
          National, and International Competitions representing the University
          of Peradeniya.
        </p>
        <p className="in-addition-to"> </p>
        <p className="in-addition-to">{`In addition to the university colours, special awards were presented to athletes who demonstrated remarkable performances in national and international representations. The event acknowledged 19 special awards for national level competitions, and it also honored 4 swimming and 01 weightlifting Sri Lanka University Games records. Furthermore, athletes who set 06 new university athletic records at the SLUG Track & Field Championships-2023 were felicitated.`}</p>
        <p className="in-addition-to"> </p>
        <p className="in-addition-to">
          Ms. Y.M.C.S. Yapabandara was recognized as the Most Outstanding 01st
          Year Sportswoman of the Year, while Ms. W.M.S.K. Wijekoon and Mr. I.M.
          Abeyrathne were honored as the Most Outstanding Sportswoman and
          Sportsman of the Year 2023, respectively.
        </p>
        <p className="in-addition-to"> </p>
        <p className="in-addition-to">
          The Chief Guest at the Colours' Award Ceremony was the Deputy Vice
          Chancellor, Prof. Terrence Madujith. The Deans of Faculties, including
          Prof. D.M.U. I. Dissanayake from the Faculty of Engineering, Prof.
          R.H. Kuruppuge from the Faculty of Management, Prof. A. Manjula
          Atiyagala from the Faculty of Dental Sciences, Prof. R.G.S.C.
          Rajapakse from the Faculty of Science, and Prof. K.A.S.S. Kodithuwakku
          from the Faculty of Agriculture, attended as Guests of Honor. Prof.
          Neil Alles and Prof. Walter Senevirathne represented the Deans of
          Faculties of Medicine and Arts, respectively. Dr. Chandana
          Jayawardena, Director of HRDU, University of Peradeniya, also graced
          the occasion.
        </p>
        <p className="in-addition-to"> </p>
        <p className="in-addition-to">
          The Acting Director of Physical Education, Prof. Nanda Balasooriya,
          and Chief Guest Prof. Terrence Madhujith delivered speeches, adding
          significance to the event. The University Cultural Centre's dancing
          group presented stunning performances, enhancing the grandeur of the
          ceremony.
        </p>
        <p className="in-addition-to"> </p>
        <p className="in-addition-to">
          Following the Colours' Awards Ceremony, a glamorous Colours Night 2023
          organized by the Sports Council took place at the Gymnasium.
        </p>
      </div>
      <img className="coloursimg-icon" alt="" src="/coloursimg@2x.png" />
      <div className="convocationdiscription">
        One of the major expectations of parents in their life is to witness
        their children’s graduation. The Annual General Convocation marks the
        culmination of the academic programs of the students who have worked
        hard over the past 3-5 years to achieve their main objective. Every
        year, the Annual Convocation is organized by the university in a
        glamorous manner inviting parents to witness the graduation of their
        children. The university has made every effort to make the event as
        memorable and comfortable as possible for parents and graduands. Nearly
        3400 graduands will be conferred on basic and postgraduate degrees at
        each year’s convocation which will be held in several sessions. The
        event will be webcast over the university’s YouTube channel and Facebook
        pages. The university was able to clear the backlog created as a result
        of the global pandemic by holding two convocations last year.
      </div>
      <div className="convocationtopic">The Convocation Ceremony</div>
      <img
        className="convacationimg-icon"
        alt=""
        src="/convacationimg@2x.png"
      />
      <div className="upcomingfield">
        <div className="upcoming-events-will">
          Upcoming Events will be show here
        </div>
      </div>
      <div className="upcomingtopic">
        <div className="upcoming-events-will">UPCOMING EVENTS</div>
      </div>
      <Footer/>
    </div>
  );
};

export default SpecialProgramms;
