const express = require("express") //1
const cors = require ("cors") //8
const projectsRoutes = require("./services/projects") //5
const server = express() //2


const port = process.env.PORT || 3001 //3

server.use(cors()) //9
server.use(express.json()) //7

server.use("/projects", projectsRoutes) //6 grab


server.listen(port, () => { //4
    console.log("Server is running on port: ", port)
})