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

// this syntax exports the module
module.exports = router