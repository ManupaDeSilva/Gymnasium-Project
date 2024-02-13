import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LogInPage.css";
import HeaderBeforeLog from "./components/HeaderBeforeLog"
import FooterHome from "./components/FooterHome"
import axios from 'axios';
import AboutUs from "./AboutUs.js"

const LogInPage = () => {
  const navigate = useNavigate();
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  const onRegisterButtonTextClick = useCallback(() => {
    navigate("/regitration");
  }, [navigate]);

  const onLoginButtonContainerClick = useCallback(async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        username,
        password,
      });
      const responseData = response.data;
      console.log(responseData)
      if (responseData.success === true) {
        console.log("Login successfull****");
        navigate("/Homepage2");
        alert("login success");
      } else {
        //navigate("/LoginPage");
       
        console.error("Login failed....", responseData.message || "Unknown error");
       
      }
    } catch (error) {
      alert("login failed");
      console.error("An error occurred during login:", error);
    }
  }, [username, password, navigate]);

  return (
    <div className="loginpage">
      <HeaderBeforeLog/>
      <div className="loginbackground" />
      <div className="log-in-to">Log in to start your session</div>
      <div className="faculty-of-physical">
        ©Faculty of Physical Education, University of Peradeniya ,Peradeniya
      </div>
      <b className="log-in-your">Log In Your Account</b>
      <b className="welcome1">Welcome</b>
      <div className="usernameframe" />
      <div className="passwordframe" />
      <div className="usernametopback" />
      <div className="passwordtopback" />
      <b className="usernamesmall">Username</b>
      <b className="passwordsmall">Password</b>
      <input
        className="usernamefield"
        placeholder="Type Your  User Name Here"
        type="text"
        value={username}
        onChange={(e)=> setUsername(e.target.value)}
      />
      <input
        className="passwordfield"
        placeholder="Type Your Password Here"
        type="password"
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
      />
      <b className="dont-have-an">Don’t have an account ?</b>
      <b className="registerbutton" onClick={onRegisterButtonTextClick}>
        Register | Create an account
      </b>
      <div className="contactus">If you have an issue contact us .</div>
      <img className="loginimage-icon" alt="" src="/loginimage@2x.png" />
      <div className="loginbutton" onClick={onLoginButtonContainerClick}>
        <b className="login">Login</b>
      </div>
      <FooterHome/>
    </div>
  );
};

export default LogInPage;
