const mongoose = require('mongoose')

const CourseModel = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    level:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:mongoose.SchemaTypes.Buffer,
        required:true
    },
    batch:{
        type:String,
        
    },
    adminId:{
        type:mongoose.SchemaTypes.ObjectId,
        required:true,
        ref:"users"
    }
})

module.exports =  mongoose.model("courses",CourseModel)