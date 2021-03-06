const express = require("express");
const cors = require("cors");
bodyParser = require("body-parser");
const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Upgrad Movie booking application development.",
  });
});

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

require("./app/routes/artist.routes")(app);
require("./app/routes/genre.routes")(app);
require("./app/routes/movie.routes")(app);
require("./app/routes/user.routes")(app);

app.listen(3000, (req, res) => {
  console.log("Server Started");
});
