/* eslint-disable no-unused-vars */
var express = require("express");
var router = express.Router();
var passport = require("passport");
const client = require("../config/mongoClient").client;

router.post("/register", function(req, res) {
    const isSuccess = true;
    res.send({ isSuccess });
});

router.post("/login", function(req, res, next) {
    console.log(req.sessionID);
    passport.authenticate("local", (err, user, info) => {
        if (info) {
            return res.send(info.message);
        }
        if (err) {
            return next(err);
        }
        req.login(user, err => {
            if (err) {
                return next(err);
            }
            return res.send("LOGGED IN - sessionId is saved within cookie");
        });
    })(req, res, next);
});

router.get("/logout", function(req, res) {
    req.logout();
    res.send("LOGGED OUT - sessionId is no longer valid");
});

router.get(
    "/login-with-spotify",
    passport.authenticate("spotify", {
        scope: ["user-read-email", "user-read-private"],
        failureRedirect: "http://localhost:8080/login"
        // showDialog: true
    })
);

router.get(
    "/callback",
    passport.authenticate("spotify", {
        failureRedirect: "http://localhost:8080/login"
    }),
    function(req, res) {
        // console.log(res.req.user);
        // console.log(res.req.user.emails[0].value);
        res.redirect("http://localhost:8080/home");
    }
);

router.get("/authrequired", (req, res) => {
    console.log(req.sessionID);
    if (req.isAuthenticated()) {
        res.send("you hit the authentication endpoint\n");
    } else {
        res.send("FAILED!");
    }
});

router.get("/user-valid", client.userExists);

router.get("/db", client.getAll);

router.post("/create-entry", client.createEntryInCollection);

router.post("/create-entries", client.createEntriesInCollection);

module.exports = router;
