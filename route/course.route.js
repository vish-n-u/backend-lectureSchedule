const courseController = require("../controller/course.controller")
const { verifyJwt } = require("../validation/jwt.validation")

const courseRoute = (app)=>{
    app.post("/lectureschedule/api/v1/course",[verifyJwt],courseController.createCourse)
    app.post("/lectureschedule/api/v1/courses",[verifyJwt],courseController.getAllCourses)
}

module.exports = courseRoute