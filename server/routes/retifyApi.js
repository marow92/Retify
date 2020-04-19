var express = require("express");
var router = express.Router();
var passport = require("passport");

router.post("/register", function(req, res) {
    const isSuccess = true;
    res.send({ isSuccess });
});

router.post("/login", function(req, res, next) {
    passport.authenticate("local", (err, user, info) => {
        if (info) {
            return res.send(info.message);
        }
        if (err) {
            return next(err);
        }
        req.login(user, (err) => {
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

module.exports = router;
