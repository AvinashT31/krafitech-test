import express from "express"
import { adminlogin, adminregister, propertyregister, showproperty, studentlogin, studentregister } from "../Controller/UserController.js";

const route = express.Router()

//Admin
route.post("/adminregister", adminregister)
route.post("/adminlogin", adminlogin)

// Student
route.post("/studentregister", studentregister)
route.post("/studentlogin", studentlogin)

route.post("/propertyregister", propertyregister)

route.get("/showproperty", showproperty)


export default route;