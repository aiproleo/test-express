const mongoose = require("mongoose");
const app = require("./app");
const PORT = process.env.PORT || 3001;

require("dotenv").config();

/* Connecting to the database and then starting the server. */
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(PORT, console.log("Server started on port 3001"));
  })
  .catch((err) => {
    console.log(err);
  });
