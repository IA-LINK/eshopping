const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes = require("./routes/orderRoutes");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());



const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes'); // Adjust the path if necessary
const paymentRoutes = require('./routes/paymentRoutes');




app.get('/', (req, res) => {
    res.send('API is running...');
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
