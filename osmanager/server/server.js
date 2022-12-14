
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const logger = require("./src/utils/logger");
const config = require("./src/config");
const DB_connect = require("./src/utils/database.connection");

const app = express();
const PORT = config.SOCKET_PORT || 4000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

//NODE_ENV=PRODUCTION
if (process.env.NODE_ENV === "PRODUCTION") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/client/build", "index.html"));
  });
}

app.listen(PORT, () => {
  logger.info(`Server is up and running on port number: ${PORT}`);
  DB_connect().then(() => {
    logger.warn("MongoDB Connecting...");
  });
});


app.use("/student", require("./src/api/routes/Student.route"));
app.use("/auth", require("./src/api/routes/Authentication.route"));
app.use("/users", require("./src/api/routes/User.route"));
app.use("/posts", require("./src/api/routes/Post.route"));
app.use("/categories", require("./src/api/routes/Categories.route"));
app.use("/group", require("./src/api/routes/Group.route"));

app.use("/template", require("./src/api/routes/Template.route"));
app.use("/fileupload", require("./src/api/routes/FileUpload.route"));
app.use("/marking", require("./src/api/routes/Marking.route"));