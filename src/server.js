const express = require("express") //1
const cors = require("cors") //8
const listEndPoints =require("express-list-endpoints") //10
const projectsRoutes = require("./services/projects") //5
const studentsRoutes = require("./services/students")
const { badRequestHandler } = require("./services/errorHandling")
const { notFoundHandler } = require("./services/errorHandling")
const { genericErrorHandler } = require("./services/errorHandling")

//const errorRoutes = require("./services/errorHandling")
const server = express() //2



const port = process.env.PORT || 3001 //3

server.use(cors()) //9
server.use(express.json()) //7

server.use("/projects", projectsRoutes) //6 grab
server.use("/students", studentsRoutes)
//server.use("/errorHandling", errorRoutes)

server.use(badRequestHandler)
server.use(notFoundHandler)
server.use(genericErrorHandler)

console.log(listEndPoints(server))


server.listen(port, () => { //4
    console.log("Server is running on port: ", port)
})