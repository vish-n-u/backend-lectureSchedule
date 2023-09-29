const User = require("../model/user.model")

exports.getAllInstructor = async(req,res)=>{
    try{
        let allInstructors = await User.find({userType:"instructor"})
        return res.status(200).send({message:allInstructors})
    }
    catch(err){  console.log(err)
    return res.status(500).send({message:err})
}
}

exports.getInstructorSchedule = async(req,res)=>{
    try{
        let allSchedules = await req.user.populate("assignedSchedules")
        allSchedules.assignedSchedules = await Promise.all(
            allSchedules.assignedSchedules.map(async (schedule) => {
              await schedule.populate('courseId')
              return schedule;
            })
          );
        return res.status(200).send({message:allSchedules})
    }
    catch(err){  console.log(err)
        return res.status(500).send({message:err})
    }
}