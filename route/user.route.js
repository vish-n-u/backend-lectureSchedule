const userController = require('../controller/user.controller')
const {verifyJwt } = require("../validation/jwt.validation")


module.exports = (app)=>{
    app.post("/lectureschedule/api/v1/users",[verifyJwt],userController.getAllInstructor)
    app.post("/lectureschedule/api/v1/users/schedule",[verifyJwt],userController.getInstructorSchedule)
}