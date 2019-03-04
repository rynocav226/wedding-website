const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const errorHandler = require("./handlers/error");
const authRoutes = require("./routes/auth");
const invitationRoutes = require("./routes/invitation");
const guestRoutes = require("./routes/guest");

const PORT = 8080;

app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use("/api/invitation", invitationRoutes);
app.use("/api/invitation/:id/guest", guestRoutes);

app.use(function(req, res, next) {
  let err = new Error("Route Not Found.");
  err.status = 404;
  next(err);
});

app.use(errorHandler);

app.listen(PORT, function() {
  console.log(`Server is starting on PORT ${PORT}`);
});
