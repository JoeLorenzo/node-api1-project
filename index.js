const express = require("express");
let db = require("./data/db");

// This creates an instance our express server.
const app = express();

// This parses the json body request.
app.use(express.json());

// This is where our routes are defined.
app.get("/", (req, res) => {
  // This logs the request's ip on the express server
  console.log("ip:", req.ip);

  // This will send a json message to the request
  res.json({ message: "Welcome to the api" });
});

// This is the port the server will run on
const port = 8080;
// This is the local host address
const host = "127.0.0.1"

app.listen(port, host, () => {
	console.log(`Server running at http://${host}:${port}`)
})