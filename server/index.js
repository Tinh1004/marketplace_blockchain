const express = require("express");
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

const userRoute = require('./routes/authRoute.js');
const PORT = 5000;
MONGODB_URL= 'mongodb+srv://learnnodejs:learnnodejslearnnodejslearnnodejs@cluster0.wdwpr.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(
    MONGODB_URL, 
    { useNewUrlParser: true }
  )
  .then((result) => console.log("Connection"))
  .catch((error) => console.log('Error'));

app.use(express.json());
app.use(cors());
app.use('/auth', userRoute);

app.listen(PORT,()=>{
    console.log(`Server is runningon PORT ${PORT}`);
});
