/* eslint-disable no-unused-vars */
var express = require("express");
var router = express.Router();
var passport = require("passport");
const mongo = require("../config/mongoClient").client;

router.post("/register", function(req, res) {
    console.log("inside register");
    console.log(req.body);
    mongo.findUserByUserName(req.body["username"], function(err, user) {
        if (user) {
            res.status(409).send("User with given username already exists");
        } else {
            mongo.registerUser(
                req.body["username"],
                req.body["password"],
                function(err, inserted) {
                    if (!err) {
                        res.status(201).send(true);
                    } else {
                        res.status(500).send(false);
                    }
                }
            );
        }
    });
});

router.post("/login", function(req, res, next) {
    console.log("inside login");

    passport.authenticate("local", (err, user, info) => {
        if (info) {
            return res.status(401).send(info.message);
        }
        if (err) {
            return next(err);
        }
        req.login(user, (err) => {
            if (err) {
                return next(err);
            }
            return res
                .status(200)
                .send("LOGGED IN - sessionId is saved within cookie");
        });
    })(req, res, next);
});

router.get("/logout", function(req, res) {
    req.logout();
    res.send("LOGGED OUT - sessionId is no longer valid");
});

router.put("/rate/song", function(req, res) {
    console.log("inside rate song function");
    console.log(req.user);

    mongo.rateSong(
        req.body["songId"],
        req.user["username"],
        req.body["rate"],
        function(err, inserted) {
            if (!err) {
                res.status(200).send();
            } else {
                res.status(500).send();
            }
        }
    );
});

router.put("/rate/artist", function(req, res) {
    mongo.rateArtist(
        req.body["artistId"],
        req.user["username"],
        req.body["rate"],
        function(err, inserted) {
            if (!err) {
                res.status(200).send();
            } else {
                res.status(500).send();
            }
        }
    );
});

router.get("/rate/songs/:id", function(req, res) {
    console.log("get average song rate function");

    mongo.getAverageSongRate(req.params.id, function(err, extracted) {
        if (!err) {
            res.status(200).send(extracted);
        } else {
            res.status(500).send();
        }
    });
});

router.get("/rate/artists/:id", function(req, res) {
    console.log("get average artist rate function");

    mongo.getAverageArtistRate(req.params.id, function(err, extracted) {
        if (!err) {
            res.status(200).send(extracted);
        } else {
            res.status(500).send(err);
        }
    });
});

router.get("/my-rates/artists/:id", function(req, res) {
    console.log(
        `get song rate for user ${req.user["username"]} and artist ${req.query.artistId}`
    );

    mongo.getArtistRateForSpecificUser(
        req.params.id,
        req.user["username"],
        function(err, extracted) {
            if (!err) {
                res.status(200).send(extracted);
            } else {
                res.status(500).send(err);
            }
        }
    );
});

router.get("/my-rates/songs", function(req, res) {
    mongo.getAllSongsRatesForSpecificUser(req.user["username"], function(
        err,
        extracted
    ) {
        if (!err) {
            res.status(200).send(extracted);
        } else {
            res.status(200).send(err);
        }
    });
});

router.get("/my-rates/songs/:id", function(req, res) {
    console.log(
        `get song rate for user ${req.user["username"]} and song ${req.params.id}`
    );

    mongo.getSongRateForSpecificUser(
        req.params.id,
        req.user["username"],
        function(err, extracted) {
            if (!err) {
                res.status(200).send(extracted);
            } else {
                res.status(500).send(err);
            }
        }
    );
});

router.get("/my-rates/artists", function(req, res) {
    mongo.getAllArtistsRatesForSpecificUser(req.user["username"], function(
        err,
        extracted
    ) {
        if (!err) {
            res.status(200).send(extracted);
        } else {
            res.status(500).send(err);
        }
    });
});

router.get("/top/songs", function(req, res) {
    mongo.extractAllSongs(function(err, extracted) {
        if (err) {
            res.status(500).send(err);
        } else {
            let ids = extracted.map((obj) => obj.songId);
            let topSongs = new Map();

            ids.forEach((element) => {
                if (!topSongs.get(element)) {
                    topSongs.set(element, 1);
                } else {
                    topSongs.set(element, topSongs.get(element) + 1);
                }
            });
            const topN = Array.from(topSongs.entries())
                .sort((a, b) => b[1] - a[1])
                .map((element) => {
                    return {
                        songId: element[0],
                        count: element[1],
                    };
                })
                .slice(0, 50);
            res.status(200).send(topN);
        }
    });
});

module.exports = router;
