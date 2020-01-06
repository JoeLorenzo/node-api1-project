// this imports express
const express = require("express")
const db = require("../data/db.js")
const router = express.Router()
router.use(express.json())

router.get("/api/users", (req,res) => { 
    console.log("------time of request-------")
    // this console logs the time of the request 
    console.log(Date())
    console.log("----------------------------")
    console.log("-------url of request-------")
    // this console logs the url of the request 
    console.log(req.url)
    console.log("----------------------------")
    db.find()
    .then(user => {
        console.log(user)
        res.status(200).json(user)
    })
})
router.get("/api/user/:id", (req, res) => {
    const id = req.params.id
    db.findById(id)
    .then( user => {
        if (user){
            console.log("-----------user-------------")
            // this console logs the user of the request 
            console.log(user)
            console.log("----------------------------")      
            res.status(200).json(user)
        }
        else {
            console.log("-----------user-------------")
            // this console the 404 message
            console.log(`user id ${id} not found` )
            console.log("----------------------------")
            res.status(404).json({errorMessage:"User not found"})
            }
    })
})
// this syntax exports the module
module.exports = router