import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Payment.css";
import HeaderAfterLog from "./components/HeaderAfterLog"
import Footer from "./components/Footer"

const Payment = () => {
  const navigate = useNavigate();

  const [cardHolderName, setCardHolderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [amount, setAmount] = useState("");
  const [cvv, setCVV] = useState("");

  const onPayNowContainerClick = useCallback(async () => {
    try {
      // Form validation
      if (!cardHolderName || !cardNumber || !expirationDate || !amount || !cvv) {
        alert("Please fill all the required fields");
        return;
      }

      // Payment data
      const paymentData = {
        cardHolderName,
        cardNumber,
        expirationDate,
        amount,
        cvv,
      };

      // Payment request
      const paymentResponse = await fetch("http://localhost:5000/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData),
      });

      const paymentResult = await paymentResponse.json();

      if (paymentResponse.ok && paymentResult.success) {
        alert("Payment successful");
        navigate("/paymentreceipt");
      } else {
        alert(paymentResult.message || "Payment failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }, [cardHolderName, cardNumber, expirationDate, amount, cvv, navigate]);

  // const onPayNowContainerClick = useCallback(() => {
  //   navigate("/paymentreceipt");
  // }, [navigate]);

  return (
    <div className="payment">
      <HeaderAfterLog/>

      <div className="fdf" alt="" src/>
      <div className="paymenticonimg" />
      <img className="cardimg-icon" alt="" src="/cardimg@2x.png" />
      <img className="paymentimg-icon" alt="" src="/paymentimg@2x.png" />
      <img className="secureimg-icon" alt="" src="/secureimg@2x.png" />
      <div className="faculty-of-physical2">
        ©Faculty of Physical Education, University of Peradeniya ,Peradeniya
      </div>
      <div className="savetime">
        <div className="savetimeback" />
        <div className="saveyourtimettext">
          <p className="save-your">{`Save Your `}</p>
          <p className="save-your">Time</p>
        </div>
        <img className="timeimg-icon" alt="" src="/timeimg@2x.png" />
      </div>
      <div className="paymentdetails">
        <b className="your-payment-details">Your Payment Details</b>
        <b className="card-holders-name">Card Holder’s Name</b>
        <b className="card-number">Card Number</b>
        <b className="expiration-date">Expiration Date</b>
        <b className="amount-lkr">Amount (LKR)</b>
        <b className="cvv">CVV</b>
        <img
          className="visamasterimg-icon"
          alt=""
          src="/visamasterimg@2x.png"
        />
        <div className="cardname">
          <input
            className="cardnameinput"
            placeholder="Enter card holders name"
            type="text"
            value={cardHolderName}
           onChange={(e) => setCardHolderName(e.target.value)}
          />
          <img className="line-icon2" alt="" src="/line.svg" />
        </div>
        <div className="amount">
          <input
            className="cardnameinput"
            placeholder="RS. 1234.00"
            type="text"
            value={amount}
          onChange={(e) => setAmount(e.target.value)}
          />
          <img className="line-icon2" alt="" src="/line.svg" />
        </div>
        <input
          className="cardnumber"
          placeholder="1234 - 5678 - 1234 -5678"
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <input 
        className="exdate" 
        placeholder="MM / YY" 
        type="text" 
        value={expirationDate}
        onChange={(e) => setExpirationDate(e.target.value)}
        />
        <div className="cvv1">
          <input 
          className="cvvinput" 
          placeholder="123" 
          type="text" 
          value={cvv}
          onChange={(e) => setCVV(e.target.value)}
          />
          <img className="line-icon4" alt="" src="/line.svg" />
        </div>
        <div className="paynow" onClick={onPayNowContainerClick}>
          <div className="pay-now">PAY NOW</div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Payment;


// const [cardHolderName, setCardHolderName] = useState("");
//   const [cardNumber, setCardNumber] = useState("");
//   const [expirationDate, setExpirationDate] = useState("");
//   const [amount, setAmount] = useState("");
//   const [cvv, setCVV] = useState("");
