import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";

const FooterHome = () => {
  const navigate = useNavigate();

  const onContactUsTextClick = useCallback(() => {
    navigate("/aboutus");
  }, [navigate]);

  const onRegistrationsTextClick = useCallback(() => {
    navigate("/regitration");
  }, [navigate]);

  return (
    <div className="footer">
      <img className="callicon" alt="" src="/callicon@2x.png" />
      <img className="locationicon" alt="" src="/locationicon@2x.png" />
      <div className="contactus3" />
      <b className="contact-us1" onClick={onContactUsTextClick}>
        Contact Us
      </b>
      <div className="faculty-of-physical5">
        ©Faculty of Physical Education, University of Peradeniya ,Peradeniya
      </div>
      <b className="departments-of-physical-container">
        <p className="departments-of-physical">
          Departments of Physical Education,
        </p>
        <p className="departments-of-physical">University of Peradeniya,</p>
        <p className="peradeniya">Peradeniya</p>
      </b>
      <b className="telephone">Telephone</b>
      <b className="office-081-container">
        <p className="departments-of-physical">Office - 081 - 239 2162</p>
        <p className="peradeniya">Director - 081 - 239 2164</p>
      </b>
      <div className="services">
        <div className="services1">Services</div>
        <div className="sports4" >Sports</div>
        <div className="booking2" >Booking</div>
        <div className="lockers" >Lockers</div>
        <div className="events1" >Events</div>
        <div className="payments1" >Payments</div>
        <div className="facilities3" > Facilities</div>
        <div
          className="registrations"
          onClick={onRegistrationsTextClick}
        >{`Registrations `}</div>
      </div>
      <div className="finduson">
        <div className="find-us-on">Find Us On</div>
        <a
          className="twitlogo"
          href="https://twitter.com/DVC_Peradeniya/status/1620995132203089921?lang=en"
          target="_blank"
        />
        <a
          className="instalogo"
          href="https://www.instagram.com/universityofperadeniya/"
          target="_blank"
        />
        <a
          className="fblogo"
          href="https://www.facebook.com/UniversityOfPeradeniya/"
          target="_blank"
        />
        <a
          className="ytlogo"
          href="https://www.youtube.com/channel/UCxN_hZh8t5uFGW7kwahQwqQ"
          target="_blank"
        />
        <a
          className="inlogo"
          href="https://www.linkedin.com/school/university-of-peradeniya/"
          target="_blank"
        />
      </div>
      <div className="samarakoonsmabgspdnaclk">samarakoonsmab@gs.pdn.ac.lk</div>
    </div>
  );
};

export default FooterHome;
