const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema

const User = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  createdCourses:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'courses' 
    }
  ],
  assignedSchedules:[{
    type : Schema.Types.ObjectId,
    ref : "schedules"
  }],
  userType:{
    type: String,
    required: true,
    enum: ["instructor", 'admin'],
    default: 'instructor',
  },
  datesScheduled:{
    type: Array
  }
  
});
module.exports = mongoose.model("users", User);