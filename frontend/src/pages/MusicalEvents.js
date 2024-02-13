import "./MusicalEvents.css";
import HeaderAfterLog from "./components/HeaderAfterLog"
import Footer from "./components/Footer"

const MusicalEvents = () => {
  return (
    <div className="musical-events1">
      <HeaderAfterLog/>


      <div className="geethanjalee">GEETHANJALEE</div>
      <div className="pahantharuwa">PAHAN THARUWA</div>
      <div className="pagediscription">
        Normally, there are 5 or 6 indoor musical shows held at Peradeniya
        University in a year. Many faculties organize musical shows to give
        scholarships to students in their faculties who have poor economic
        conditions. The shows are different faculty wise because they maintain a
        special kind of taste in their faculty.
      </div>
      <div className="pahandiscription">
        Pahantharuwa is one of the indoor shows organized by the medical faculty
        of University of Peradeniya. This is an annual event of this faculty.A
        lower rhythm is maintained in Pahan tharuwa.Yeah Yeah…It is true, all
        songs touched at the deep of our heart and one who closes eyes, opens
        them at the end of the show.Normally, University students are stressed
        with problems. They are away from their families and many students
        belong to low or middle-income families. Not like Colombo, Kalani and
        Japura universities, part time jobs are rare in Kandy area. And low
        capability to do part time jobs for Peradeniya student, specially girls.
        And the academic stress is high specially who follow a clinical base
        course. This kind of event helps to forget their problems for a while
        and relax their mind from stressed thoughts.
      </div>
      <img className="pahanimg-icon" alt="" src="/pahanimg@2x.png" />
      <div className="geethanjaleediscription">
        Geethanjalee is the Biggest Musical EVE of University of Peradeniya.one
        of the indoor shows organized by the science faculty of University of
        Peradeniya.
      </div>
      <img
        className="geethanjaleeimg-icon"
        alt=""
        src="/geethanjaleeimg@2x.png"
      />
      <div className="upcomingfield1">
        <div className="upcoming-events-will1">
          Upcoming Events will be show here
        </div>
      </div>
      <div className="upcomingtopic1">
        <div className="upcoming-events-will1">UPCOMING EVENTS</div>
      </div>
      <Footer/>
    </div>
  );
};

export default MusicalEvents;
