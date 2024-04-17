const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    email: { type: String, unique: true, required: true },
    password: String,
    hospitalname : String,
    city : String,
    address : String,
    state : String,
    pincode : String,
    hospitalregistrationdate : String,
    numberofavailableambulance : String,
    phoneno : String,
    hospitalregistrationnumber : String,
    emergencywardno : String,
    registrationcertificate : String,
});


const User = mongoose.model("User" , userschema);
module.exports = {  User };