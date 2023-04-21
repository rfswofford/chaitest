const express = require("express");
const app = express();
const peopleRouter = require('./routes/people')

app.use(express.json());
app.use(express.static(__dirname + "/public"));


const people = [];

app.use ('/api/v1', peopleRouter)
//app.all("/api/v1/*", (req, res) => {
 // res.json({ error: "That route is not implemented." });
//});

const server = app.listen(3000, () => {
  console.log("listening on port 3000...");
});

module.exports = {app, server}