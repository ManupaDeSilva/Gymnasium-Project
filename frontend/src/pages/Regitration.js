import { useState,useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Regitration.css";
import HeaderBeforeLog from "./components/HeaderBeforeLog"
import FooterHome from "./components/FooterHome"
import axios from "axios"

const Regitration = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [sportAttending, setSportAttenting] = useState('');
  const [userType, setUserType] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [city, setCity] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');

 

  const onSignUpClick = useCallback(async() => {
    try {

      if (!firstName || !lastName || !contactNumber  || !emailAddress  || !password) {
        alert("Please fill in all the required fields.");
        return;
      }

      // Registration data
      const registrationData = {
      
        password,
        firstName,
        lastName,
        contactNumber,
        userType,
        sportAttending,
        emailAddress,
        address,
        city,
        gender,
      };
  
      // Registration request
      const registrationResponse = await fetch("http://localhost:5000/api/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registrationData),
      });
  
      const registrationResult = await registrationResponse.json();
  
      if (registrationResponse.ok && registrationResult.success) {
        console.log("Registration successful");
        alert("Registration successful");

  
        // Redirect to the login page
        navigate("/loginpage");
      } else {
        console.error("Registration failed:", registrationResult.message || "Unknown error");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }, [navigate,
    
    password,
    firstName,
    lastName,
    contactNumber,
    userType,
    sportAttending,
    emailAddress,
    address,
    city,
    gender,]);

  const onLoginTextClick = useCallback(() => {
    navigate("/loginpage");
  }, [navigate]);

  return (
    <div className="regitration">
      <HeaderBeforeLog/>
      <div className="loginbackground1" />
      <div className="faculty-of-physical1">
        ©Faculty of Physical Education, University of Peradeniya ,Peradeniya
      </div>
      <div className="usernametopback1" />
      <div className="passwordtopback1" />
      <div className="contactus1">If you have an issue contact us .</div>
      <img className="loginimage-icon1" alt="" src="/loginimage@2x.png" />
      <b className="registration-form">{`Registration Form `}</b>
      <b className="first-name">First Name</b>
      <b className="contact-number">Contact Number</b>
      <b className="password">Password</b>
      <b className="re-enter-password">Re-Enter Password</b>
      <b className="academic-staff">Academic Staff</b>
      <b className="non-academic">Non - Academic</b>
      <b className="outsider">Outsider</b>
      <b className="student">Student</b>
      <b className="which-sport-and">
        Which sport and practice you are attendant in Gymnasium
      </b>
      <b className="last-name">Last Name</b>
      <b className="email-address">Email Address</b>
      <b className="address">Address</b>
      <img className="line01-icon" alt="" src="/line01.svg" />
      <img className="line05-icon" alt="" src="/line05.svg" />
      <img className="line02-icon" alt="" src="/line02.svg" />
      <img className="line03-icon" alt="" src="/line02.svg" />
      <img className="line04-icon" alt="" src="/line02.svg" />
      <img className="line06-icon" alt="" src="/line02.svg" />
      <img className="line04-2-icon" alt="" src="/line02.svg" />
      <img className="line06-2-icon" alt="" src="/line02.svg" />
      <img className="line05-icon1" alt="" src="/line05.svg" />
      <img className="line07-icon" alt="" src="/line05.svg" />
      <input
        className="re-enterpasswordinput"
        placeholder="Same as you entered before"
        type="password"
      />
      <input
        className="passwordinput"
        placeholder="At least 6 characters"
        type="password"
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
      />
      <input
        className="sportinputline2"
        placeholder="sport or practices"
        type="text"
      />
      <input
        className="sportinputline1"
        placeholder="sport or practices"
        type="text"
        value={sportAttending }
        onChange={(e)=> setSportAttenting(e.target.value)}
      />
      <input
        className="contatctinput"
        placeholder="Enter your contact number here"
        type="text"
        value={contactNumber}
        onChange={(e)=> setContactNumber(e.target.value)}
      />
      <input 
      className="cityinput" 
      placeholder="City" 
      type="text" 
      value={city }
      onChange={(e)=> setCity(e.target.value)}
      />
      <input
        className="adressinput"
        placeholder="Enter your adress here"
        type="text"
        value={address }
        onChange={(e)=> setAddress(e.target.value)}
      />
      <input
        className="emailinput"
        placeholder="Enter your email here"
        type="text"
        value={emailAddress }
        onChange={(e)=> setEmailAddress(e.target.value)}
      />
      <input
        className="lastnameinput"
        placeholder="Enter your last name here"
        type="text"
        value={lastName }
        onChange={(e)=> setLastName(e.target.value)}
      />
      <input
        className="firstnameinput"
        placeholder="Enter your first name here"
        type="text"
        value={firstName }
        onChange={(e)=> setFirstName(e.target.value)}
      />
      <button className="signup" onClick={onSignUpClick}>
        <b className="sign-up">Sign Up</b>
      </button>
      <b className="already-have-an">Already have an account ?</b>
      <b className="login1" onClick={onLoginTextClick}>
        Login
      </b>
      <select className="gender" required={true}>
        <option value="1">Male</option>
        <option value="0">Female</option>
        value={gender }
        onChange={(e)=> setGender(e.target.value)}
      </select>
      <input
        className="checkbox1"
        required={true}
        id="student"
        type="checkbox"
      />
      <input
        className="checkbox3"
        required={true}
        id="Academic"
        type="checkbox"
      />
      <input
        className="checkbox2"
        required={true}
        id="NonAcademic"
        type="checkbox"
      />
      <input
        className="checkbox4"
        required={true}
        id="Outsider"
        type="checkbox"
      />

      <FooterHome/>
    </div>
  );
};

export default Regitration;
