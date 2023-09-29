const {verifyJwt} = require("../validation/jwt.validation")
const scheduleController = require("../controller/schedule.controller")

module.exports =(app)=>{
    app.post("/lectureschedule/api/v1/schedule",[verifyJwt],scheduleController.createSchedule)
}