const mongoose = require("mongoose");
const ScheduleModel = new mongoose.Schema({
    courseId:{
        type:mongoose.Schema.ObjectId,
        required:true,
        ref:"courses"
    },
    instructorId:{
        type:mongoose.Schema.ObjectId,
        required:true,
        ref:"users"
    },
    date:{
        type : Date,
        required:true
    }
    
})

module.exports = mongoose.model("schedules",ScheduleModel)