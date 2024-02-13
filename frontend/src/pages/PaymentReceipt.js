import "./PaymentReceipt.css";
import HeaderAfterLog from "./components/HeaderAfterLog"
import Footer from "./components/Footer"

const PaymentReceipt = () => {
  return (
    <div className="paymentreceipt">
      <HeaderAfterLog/>
      <div className="receipt">
        <div className="receiptheader" />
        <img className="unilogo-icon" alt="" src="/unilogo@2x.png" />
        <img className="watermark-icon" alt="" src="/watermark@2x.png" />
        <div className="payment-receipt">Payment Receipt</div>
        <div className="dateinputup">NOV 01, 2023</div>
        <div className="department-of-physical-container">
          <p className="department-of-physical">
            Department of Physical Education
          </p>
          <p className="university-of-peradeniya1">University of Peradeniya</p>
        </div>
        <div className="this-is-the-container">
          <p className="this-is-the">
            This is the e-receipt issued by the Gymnasium of, University of
            Peradeniya.
          </p>
          <p className="this-is-the">
            Make sure you received this email from a verified university email.
          </p>
        </div>
        <div className="receipttopics">
          <p className="this-is-the">Reference Number :</p>
          <p className="this-is-the">&nbsp;</p>
          <p className="this-is-the">Payment For :</p>
          <p className="this-is-the">&nbsp;</p>
          <p className="this-is-the">Date :</p>
          <p className="this-is-the">&nbsp;</p>
          <p className="this-is-the">Submitter :</p>
          <p className="this-is-the">
            <a
              className="blank-line13"
              href="mailto:s18377@sci.pdn.ac.lk"
              target="_blank"
            >
              <span className="blank-line14">&nbsp;</span>
            </a>
          </p>
          <p className="this-is-the">Currency :</p>
          <p className="this-is-the">&nbsp;</p>
          <p className="this-is-the">Amount :</p>
        </div>
        <div className="reference-number1">Reference Number :</div>
        <div className="refnumberinputdown">2023120612789</div>
        <div className="refnumberinputup">2023120612789</div>
        <div className="paymentforinput">Booking_Netball_Court_2023_4_4</div>
        <div className="dateinput">2023-10-11</div>
        <div className="submitterinput">s18554@sci.pdn.ac.lk</div>
        <div className="currencyinput">LKR</div>
        <div className="amountinput1">3500.00</div>
        <div className="contactus2">
          <p className="this-is-the">Contact us</p>
          <p className="this-is-the">081 - 239 2162</p>
          <p className="this-is-the">081 - 239 2164</p>
        </div>
        <button className="printbutton">
          <div className="print">Print</div>
        </button>
        <button className="downloadbutton">
          <div className="print">Download</div>
        </button>
      </div>
      <div className="faculty-of-physical3">
        ©Faculty of Physical Education, University of Peradeniya ,Peradeniya
      </div>
      <Footer/>
    </div>
  );
};

export default PaymentReceipt;
