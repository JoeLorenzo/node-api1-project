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

router.post("/api/users", (req, res) => {
    const user = req.body
    if (user.name && user.bio){
        console.log("-----------post-------------")
        // this console logs the request body 
        console.log(user)
        console.log("----------------------------")   
        res.status(201).json(user)
        }
    else {
    console.log("-----------post-------------")
    // this console logs a post error 
    console.log("missing name or bio")
    console.log("----------------------------")     
    res.status(400).json({message:"missing user name or bio"})
    // insert(user) 
}
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
    .catch(err => {
        console.log(err)
        res.status(500).json({message: "The user's information could not be retrieved"})
    })
})
// this syntax exports the module
module.exports = router