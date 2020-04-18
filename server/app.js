const express = require("express");
const uuid = require("uuid/v4");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const bodyParser = require("body-parser");
const passport = require("passport");
const mongoClient = require("./config/mongoClient").default
const cors = require("cors");
// const bcrypt = require('bcrypt-nodejs');
require("./config/passport");
const indexRouter = require("./routes/index");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ credentials: true, origin: "http://localhost:8080" }));
app.use(
    session({
        genid: () => {
            return uuid();
        },
        store: new FileStore(),
        secret: "my secret string",
        resave: false,
        saveUninitialized: true
    })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/", indexRouter);
app.listen(8000, () => {
    console.log("Listening on localhost:8000");
});