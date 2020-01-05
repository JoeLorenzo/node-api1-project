const express = require("express")
const server = express()

port = 5000
host = "127.0.0.1"
server.listen(port, ()=> console.log(`server running ${host}:${port}`))