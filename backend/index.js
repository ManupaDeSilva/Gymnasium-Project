

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const cors = require("cors");

const router = express.Router();


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());


// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/MERNapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("Error connecting to MongoDB:", err);
});


// User schema
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  contactNumber: String,
  userType: String,
  sportAttending: String,
  emailAddress: String,
  address: String,
  city: String,
  gender: String



});


//EQUIPMENT BOOKING PAGE BACKEND PART1
const equipmentSchema = new mongoose.Schema({
  equipmentName: String,
  paymentAmount: Number,
});

//FACILITY BOOKING PAGE BACKEND PART1
const facilitySchema = new mongoose.Schema({
  facilityName: String,
  paymentAmount: Number,
  paymentDescription: String,
  bookingTime: {
    from: Date,
    to: Date,
  },
});

//PAYMENT

const paymentSchema = new mongoose.Schema({
  cardHolderName: String,
  cardNumber: String,
  expirationDate: String,
  amount: String,
  cvv: String,
});

// const baseballDataSchema = new mongoose.Schema({
//   balls: Number,
//   bats: Number,
//   availableTimes: [String], // An array of available times
// });





const User = mongoose.model("User", userSchema);
const EquipmentModel = mongoose.model('Equipment', equipmentSchema);
const Facility = mongoose.model('Facility', facilitySchema);
const PaymentModel = mongoose.model('Payment', paymentSchema);

//const BaseballData = mongoose.model('BaseballData', baseballDataSchema);

//module.exports = BaseballData;


// router.get('/baseball', async (req, res) => {
//   try {
//     const baseballData = await BaseballData.findOne(); // Assuming you have only one record
//     res.json(baseballData);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// module.exports = router;

// app.get('/welcome', (req, res) => {
//   res.send('Hello, World!');
// });


app.post('/api/registration', async (req, res) => {
  try {
    const registrationData = req.body;

    // Save user data to MongoDB
    const newUser = new User(registrationData);
    await newUser.save();

    res.json({ success: true, message: 'Registration successful' });
  } catch (error) {
    console.error('Registration failed:', error);
    res.status(500).json({ success: false, message: 'Registration failed' });
  }
});


// const users = new mongoose.Schema({
//   username: String,
//   password: String,
// });

const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
];

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Check if the provided credentials are valid
  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    res.json({ success: true, message: 'Login successfull' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});


//EQUIPMENT BOOKING PAGE BACKEND PART2
app.post('/api/equipment/book', async (req, res) => {
  try {
    // Extract data from the request body
    const { equipmentName, paymentAmount } = req.body;

    // Check if required fields are provided
    if (!equipmentName || !paymentAmount) {
      return res.status(400).json({ success: false, message: 'Equipment name and payment amount are required.' });
    }

    // Create a new equipment instance
    const newEquipment = new EquipmentModel({
      equipmentName,
      paymentAmount,
    });

    // Save the equipment to the database
    await newEquipment.save();

    res.json({ success: true, message: 'Equipment booking successful' });
  } catch (error) {
    console.error('Error during equipment booking:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});


//FACILITY BOOKING PAGE BACKEND PART2

app.post('/api/facility/book', async (req, res) => {
  try {
    const facilityData = req.body;

    const newFacility = new Facility(facilityData);
    await newFacility.save();

    res.json({ success: true, message: 'Facility booking successful' });
  } catch (error) {
    console.error('Facility booking failed:', error);
    res.status(500).json({ success: false, message: 'Facility booking failed' });
  }
});



//PAYMENT BACKEND

app.post('/api/payment', async (req, res) => {
  try {
    const { cardHolderName, cardNumber, expirationDate, amount, cvv } = req.body;

    // Check if any field is empty
    if (!cardHolderName || !cardNumber || !expirationDate || !amount || !cvv) {
      return res.status(400).json({ success: false, message: 'Please fill all the required fields' });
    }

    // Create a new payment document
    const payment = new PaymentModel({
      cardHolderName,
      cardNumber,
      expirationDate,
      amount,
      cvv,
    });

    // Save the payment to the database
    await payment.save();

    return res.status(201).json({ success: true, message: 'Payment successful' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});




app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
