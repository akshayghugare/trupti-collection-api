const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the cors module
const app = express();
const port = 5000;
const dotenv = require('dotenv');
dotenv.config()
// Use CORS middleware
app.use(cors());

// Middleware to parse incoming JSON data
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log("DB URL:::",process.env.MONGODB_ATLAS_URI)
  console.log('Connected to MongoDB');
});

app.use(bodyParser.json());

// Include the user routes
const routes = require('./src/routes/index');
app.use('/v1', routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
