import "./UserProfile.css";
import HeaderAfterLog from "./components/HeaderAfterLog"
import Footer from "./components/Footer"

const UserProfile = () => {
  return (
    <div className="userprofile">
      <HeaderAfterLog/>
      <div className="background4" />
      <div className="background2" />
      <div className="background3" />
      <div className="savechangesbutton">
        <b className="save-changes">save changes</b>
      </div>
      <img
        className="topicbackground1-icon"
        alt=""
        src="/topicbackground1.svg"
      />
      <div className="your-name-here">Your Name Here</div>
      <div className="account-type-show">Account Type show here</div>
      <div className="backgroundlogo" />
      <img className="profilelogo-icon" alt="" src="/profilelogo@2x.png" />
      <b className="name">Name :</b>
      <b className="email-address1">Email Address :</b>
      <b className="gender1">Gender :</b>
      <b className="contact-number1">Contact Number :</b>
      <b className="address1">Address :</b>
      <b className="account-type">Account Type :</b>
      <b className="change-password">{`Change Password `}</b>
      <b className="profiletopic2">
        Sports and practices you are attendant in Gymnasium
      </b>
      <b className="bio">BIO</b>
      <div className="nameshow">
        <b className="save-changes">Name will be show here</b>
      </div>
      <div className="emailshow">
        <b className="email-address-will">Email address will be show here</b>
      </div>
      <div className="gendershow">
        <b className="save-changes">Gender will be show here</b>
      </div>
      <div className="numbershow">
        <b className="save-changes">Number will be show here</b>
      </div>
      <div className="addressshow">
        <b className="save-changes">Address will be show here</b>
      </div>
      <div className="accounttypeshow">
        <b className="save-changes">Acc Type will be show here</b>
      </div>
      <b className="editname">edit</b>
      <b className="editemail">edit</b>
      <b className="editgender">edit</b>
      <b className="editcontactnumber">edit</b>
      <b className="editaddress">edit</b>
      <img className="editlogo-1-icon" alt="" src="/editlogo-1@2x.png" />
      <img className="editlogo-2-icon" alt="" src="/editlogo-1@2x.png" />
      <img className="editlogo-3-icon" alt="" src="/editlogo-1@2x.png" />
      <img className="editlogo-4-icon" alt="" src="/editlogo-1@2x.png" />
      <img className="editlogo-5-icon" alt="" src="/editlogo-1@2x.png" />
      <div className="sport1show">
        <b className="save-changes">Sport 01</b>
      </div>
      <div className="sport2show">
        <b className="save-changes">Sport 02</b>
      </div>
      <div className="sport3show">
        <b className="save-changes">Practice 01</b>
      </div>
      <div className="sport4show">
        <b className="save-changes">Practice 02</b>
      </div>
      <div className="pleasecontactus">
        If you have any issue with your details, please contact us
      </div>
      <div className="group01">
        <b className="registration-number">Registration Number :</b>
        <b className="faculty">Faculty :</b>
        <b className="year">Year :</b>
        <input
          className="enterregistrationnumber"
          placeholder="X/XX/XXXX"
          type="text"
        />
        <input
          className="enterfaculty"
          placeholder="Faculty of xxxxxxxxxxxx"
          type="text"
        />
        <input className="enteryear" placeholder="x Year" type="number" />
        <div className="if-you-are">If you are a Student</div>
      </div>
      <Footer/>
    </div>
  );
};

export default UserProfile;
