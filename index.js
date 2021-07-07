const express = require("express");
let db = require("./data/db");
// This creates an instance our express server.
const app = express();

// This parses the json body request.
app.use(express.json());

// This is where our routes are defined.

// This route is for the / path
app.get("/", (req, res) => {
  // This logs the request's ip on the express server
  console.log("ip:", req.ip);

  // This will send a json message to the request
  res.json({ message: "API server is up and running" });
});

// This route is for /users route
// This route should display all users in db.js
app.get("/api/users", (req, res) => {
  // console.log("ip:", req.ip, Date.now());
  db.find()
    .then(users => {
      return res.status(200).json(users);
    })
    .catch(() => {
      return res.status(404).json({
        error: "Cannot retrieve user list"
      });
    });
});

// This is the port the server will run on
const port = 8080;
// This is the local host address
const host = "127.0.0.1";

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}, better go catch it`);
});
