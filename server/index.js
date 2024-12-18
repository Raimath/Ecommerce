const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./Router/router");
const dotenv = require('dotenv');

dotenv.config()
const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
app.use("/",router)

const port = process.env.PORT || 5000;
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI).then(()=>console.log("DB Connected")).catch((err)=>{console.log(err)})



app.listen(port, () => {
    console.log("Server started on port 8000")
})