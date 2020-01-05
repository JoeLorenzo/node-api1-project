// this imports express
const express = require("express")

const router = express.Router()

router.get("/api/users", (req,res) =>{
    res.send("hello from the users api")
})

// this syntax exports the module
module.exports = router