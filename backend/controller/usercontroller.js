const express = require("express");
const collection = require("../models/signupschema");
const Razorpay = require("razorpay");
const KEY_ID='rzp_test_JvtA1mvfRJJoZn';
const KEY_SECRET='OVPxh8Uz8gAJS4p9tpO9xJ3O';
var crypto = require("crypto");


const signup = async (req, res) => {
  try {
    const { name, email, number, designation, city, date } = req.body;
    if (!name || !email || !number || !designation || !city || !date) {
      return res.status(400).json({ message: "All fields are necessary." });
    }

    const foundEmail = await collection.findOne({ email });
    if (foundEmail) {
      return res.status(400).json({ message: "You have already registered with this email." });
    }

    const user = await collection.create({
      name,
      email,
      number,
      designation,
      city,
      date,
    });

    if (user) {
      res.json({ message: "User is created." });
      console.log("User is created.");
    } else {
      res.status(500).json({ message: "User is not created." });
    }
  } catch (e) {
    console.error("Error has occurred:", e);
    res.status(500).json({ message: "An error occurred during registration. Please try again later." });
  }
};

const admin = async (req, res) => {

  try {

    const display = await collection.find();
    res.status(200);
    res.send(display);
    
  } 
  catch (err) {

    res.status(400);
    res.send("error ", err);
    console.log("error", err);

  }
};




const order = async (req, res) => {

  let instance = new Razorpay({
    key_id: KEY_ID,
    key_secret: KEY_SECRET,
  });

  var options = {
    amount: req.body.amount * 100 , // amount in the smallest currency unit
    currency: "INR",
    
  };
  instance.orders.create(options, function (err, order) {
    if(err){
        return res.send("server error")
    }
    else{
        return res.send({code:200 ,message:"order created", data : order})
    }
  });


};



const verify = async (req, res) => {
    let body = req.body.response.razorpay_order_id + "|" + req.body.response.razorpay_payment_id;

    var expectedSignature = crypto.createHmac('sha256', KEY_SECRET)
        .update(body.toString())
        .digest('hex');

    if (expectedSignature === req.body.response.razorpay_signature) {
        res.send({ code: 200, message: 'Sign Valid' });
    } else {

        res.send({ code: 500, message: 'Sign Invalid' });
    }
};

module.exports = { signup, admin,order,verify};