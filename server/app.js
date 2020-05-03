const express = require("express");
const uuid = require("uuid/v4");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");
require("./config/passport");
const retifyRouter = require("./routes/retifyApi");
const spotifyRouter = require("./routes/spotifyApi");
const PORT = process.env.PORT || 8000;

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
        saveUninitialized: true,
    })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/retify/", retifyRouter);
app.use("/api/spotify/", spotifyRouter);
app.listen(PORT, () => {
    console.log(`Listening on localhost: ${PORT}`);
});
