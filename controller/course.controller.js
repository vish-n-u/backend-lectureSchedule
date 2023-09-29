const Course = require("../model/course.model")
const User = require("../model/user.model")

exports.createCourse = async (req,res)=>{
    console.log("req.body",req.body)
    let courseObj = {
        name:req.body.name,
        level:req.body.level,
        description:req.body.description,
        image:req.body.image,
        adminId:req.user._id
        
    }
    try{
        let newCourse = await Course.create(courseObj)
       await req.user.createdCourses.push(newCourse._id)
       await req.user.save()
       return res.status(201).send({message:newCourse})
    }
    catch(err){
        console.log(err)
        return res.status(500).send({message:err})
    }

}

exports.getAllCourses = async(req,res)=>{
    try{
        const courses = await Course.find()
        return res.status(200).send({message:courses})
    }
    catch(err){
        console.log(err)
        return res.status(500).send({message:err})
    }
}