// imports express
const express = require("express")
// import our routers
const userRouter = require("./routers/userRouter")
// initiates an instance of express
const server = express()

// this will test our root path with a message
server.use("/", userRouter)
server.get("/", (req, res) => {
    res.send("Hello, Welcome to the root")
})
port = 5000
host = "127.0.0.1"
server.listen(port, ()=> console.log(`server running ${host}:${port}`))