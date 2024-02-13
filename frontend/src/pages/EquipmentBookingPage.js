import "./EquipmentBookingPage.css";
import { useState, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import HeaderAfterLog from "./components/HeaderAfterLog"
import Footer from "./components/Footer"
import BookButtonLarge from "./components/BookButtonLarge";


//backendpart

const EquipmentBookingPage = () => {

  //const navigate = useNavigate();
  const [equipmentName, setEquipmentName] = useState('');
  const [paymentAmount, setPaymentAmount] = useState('');

  const onBookClick = useCallback(async() => {
    try {
      // Validate inputs
      if (!equipmentName || !paymentAmount) {
        alert("Equipment name and payment amount are required.");
        return;
      }

      // Equipment data to be sent to the backend
      const equipmentData = {
        equipmentName,
        paymentAmount: parseFloat(paymentAmount), //payment number
      };

      // Make  request to the backend API
      const response = await axios.post("http://localhost:5000/api/equipment/book", equipmentData);

      if (response.data.success) {
        alert("Equipment booking successful");
      } else {
        console.error("Equipment booking failed:", response.data.message);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }

  }, [equipmentName, paymentAmount]);

//frontend part

  return (
    <div className="equipmentbookingpage">
      <HeaderAfterLog/>

      <img className="bookimg03-icon" alt="" src="/bookimg03@2x.png" />
      <img className="bookimg02-icon" alt="" src="/bookimg02@2x.png" />
      <b className="equipmentBookingTopic">Equipment Booking</b>
      <div className="bookPharse">
        "Streamline your operations with our efficient facilities and equipment
        booking system."
      </div>

      <img className="bookimg01-icon" alt="" src="/bookimg01@2x.png" />
      <div className="equipTopicBack">
        <div className="equipment-reservation">EQUIPMENT RESERVATION</div>
      </div>

      <div className="equipment-name">Equipment Name :</div>
      <div className="payment-description">Payment Description</div>
      <div className="payment-amount">Payment Amount :</div>
      <div className="line01" />

      <img className="line" alt="" src="/line-5.svg" />
      <img className="line4" alt="" src="/line-5.svg" />
      <img className="line2" alt="" src="/line-5.svg" />
      
      <div className="please-check-the">
        Please check the availability before booking
      </div>

      <input
        className="equipmentnameinput"
        placeholder="Enter Equipment Name"
        type="text"
        value={equipmentName}
        onChange={(e) => setEquipmentName(e.target.value)}
      />
      <input
        className="equipamountinput"
        placeholder="Enter in LKR"
        type="number"
        value={paymentAmount}
        onChange={(e) => setPaymentAmount(e.target.value)}
      />



      <div className="equipto">To</div>
      <div className="equipfrom">From</div>
      <div className="frombox" />
      <img className="tobox" alt="" src="/rectangle-128.svg" />
      <input
        className="equipmentfrominput"
        placeholder="2024.01.20 "
        type="datetime-local"
      />
      <input
        className="equipmenttoinput"
        placeholder="1.30 p.m to 2.30 p.m"
        type="datetime-local"
      />
      <img className="footballimg" alt="" src="/equipimg@2x.png" />
      <div className="all-set-one">
        All set. One step to book your Equipment
      </div>
      <input
        className="equippaymentdescriptionline1"
        placeholder="Payment Description"
        type="text"
      />
      <input
        className="equippaymentdescriptionline2"
        placeholder="Payment Description"
        type="text"
      />
      <div className="bookingbutton" onClick={onBookClick}>
        <BookButtonLarge/>
      </div>
      
      <Footer/>
    </div>
  );
};

export default EquipmentBookingPage;
