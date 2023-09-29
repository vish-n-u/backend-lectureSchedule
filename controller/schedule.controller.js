const Schedule = require("../model/schedule.model")
const User = require("../model/user.model")

exports.createSchedule = async(req,res)=>{
    console.log("req.body: " + req.body.instructorId,req.body.date,req.body.courseId)

    try{
        let scheduleObj = {
            courseId:req.body.courseId,
            instructorId:req.body.instructorId,
            date:req.body.date
        }
        let newSchedule = await Schedule.create(scheduleObj)
        let instructor = await User.findById(req.body.instructorId)
        await instructor.assignedSchedules.push(newSchedule._id)
        await instructor.datesScheduled.push(req.body.date)
        await instructor.save()
        return res.status(201).send({message:newSchedule})
    }
    catch(err){
        console.log(err)
        return res.status(500).send({message:err})
    }
}