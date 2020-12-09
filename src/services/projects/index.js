const express = require("express") //1 3rd party module
const fs = require("fs")
const path = require("path")
const uniqid = require("uniqid")

const router = express.Router() //2

////NEW to read File
/* const readFile = fileName => {
    //const projectsFilePath = path.join(__dirname, "projects.json")//11
    const fileAsBuffer = fs.readFileSync(path.join(__dirname, fileName)); //12
    const fileAsString = fileAsBuffer.toString() //13bis
    //const fileAsJSObject = 
    return JSON.parse(fileAsString)
} */

////

router.get("/", (req, res) => {
    //console.log(req)

    const projectsFilePath = path.join(__dirname, "projects.json")//11
    const fileAsBuffer = fs.readFileSync(projectsFilePath);
    const fileAsString=fileAsBuffer.toString() 
    const fileAsJSObject = JSON.parse(fileAsString)
    res.send(fileAsJSObject) 

    //res.send("list of users route")
    
})





module.exports = router //3