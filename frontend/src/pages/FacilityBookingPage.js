import { useState, useCallback } from "react";
import axios from "axios";
import "./FacilityBookingPage.css";
import HeaderAfterLog from "./components/HeaderAfterLog"
import Footer from "./components/Footer"
import BookButtonLarge from "./components/BookButtonLarge";

const FacilityBookingPage = () => {


  const [formData, setFormData] = useState({
    facilityName: '',
    paymentAmount: '',
    paymentDescription: '',
    bookingTime: {
      from: '',
      to: '',
    },
  });

  const onBookClick = useCallback(async () => {
    try {

      const { facilityName, paymentDescription } = formData;
        // Validate inputs
      if (!facilityName ||  !paymentDescription) {
          alert("Please fill in all the required fields.");
          return;
      }
      const bookingResponse = await axios.post("http://localhost:5000/api/facility/book", formData);

      if (bookingResponse.data.success) {
        alert("Facility booking successful");
        console.log("Facility booking successful");
       
      } else {
        console.error("Facility booking failed:", bookingResponse.data.message || "Unknown error");
        
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }, [formData])

  return (
    <div className="facilitybookingpage">
      <HeaderAfterLog/>
      <img className="bookimg03-icon1" alt="" src="/bookimg03@2x.png" />
      <img className="bookimg02-icon1" alt="" src="/bookimg02@2x.png" />
      <b className="facilities-booking">Facilities Booking</b>
      <div className="bookPharse1">
        "Streamline your operations with our efficient facilities and equipment
        booking system."
      </div>
      <img className="bookimg01-icon1" alt="" src="/bookimg01@2x.png" />
      <div className="facilitytopic">
        <div className="facilities-reservation">FACILITIES RESERVATION</div>
      </div>
      <div className="facility-name">Facility Name :</div>
      <div className="payment-amount1">Payment Amount</div>
      <div className="payment-description1">Payment Description</div>
      <div className="facilitybookingpage-child" />
      <div className="facilitybookingpage-item" />
      <div className="facilitybookingpage-inner" />
      <div className="line-div" />
      <div className="please-check-the1">
        Please check the availability before booking
      </div>
      <input
        className="enterfacilitynameinput"
        placeholder="Enter Facility Name"
        type="text"
        value={formData.facilityName}
        onChange={(e) => setFormData({ ...formData, facilityName: e.target.value })}
      />
      <input
        className="facilityamountinput"
        placeholder="Enter in LKR"
        type="number"
        value={formData.paymentAmount}
        onChange={(e) => setFormData({ ...formData, paymentAmount: e.target.value })}

      />
      <div className="facilityto">To</div>
      <div className="facilityfrom">From</div>
      <div className="rectangle-div" />
      <div className="facilitybookingpage-child1" />
      <input
        className="facilityfrominput"
        placeholder="Date and Time"
        type="datetime-local"
        value={formData.bookingTime.from}
        onChange={(e) => setFormData({ ...formData, bookingTime: { ...formData.bookingTime, from: e.target.value } })}
      />
      <input
        className="facilitytoinput"
        placeholder="Date and Time"
        type="datetime-local"
        value={formData.bookingTime.to}
        onChange={(e) => setFormData({ ...formData, bookingTime: { ...formData.bookingTime, to: e.target.value } })}
      />
      <img className="facilityimg-icon" alt="" src="/facilityimg@2x.png" />
      <div className="all-set-one1">
        All set. One step to book your Facility
      </div>
      <input
        className="facilitypaymentdescriptionline"
        placeholder="Payment Description"
        type="text"
        value={formData.paymentDescription}
        onChange={(e) => setFormData({ ...formData, paymentDescription: e.target.value })}
      />
      <input
        className="facilitypaymentdescriptionline1"
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

export default FacilityBookingPage;
