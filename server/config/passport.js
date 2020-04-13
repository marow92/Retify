const passport = require("passport");
const SpotifyStrategy = require("passport-spotify").Strategy;
const LocalStrategy = require("passport-local").Strategy;

const cliendId = "01577be964124996a91fb11fd24b7c56";
const clientSecret = "8600089034414dbf9a292821c461f9e9";

// database needs to be implemented
const users = [
    { id: 0, username: "test@test.com", password: "password" },
    { id: 1, username: "test2@test.com", password: "password2" }
];

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    const user = users.find(obj => obj.id === id);
    done(null, user ? user : false);
});

passport.use(
    new SpotifyStrategy(
        {
            clientID: cliendId,
            clientSecret: clientSecret,
            callbackURL: "http://localhost:8000/callback"
        },
        function(accessToken, refreshToken, expires_in, profile, done) {
            // asynchronous verification, for effect...
            process.nextTick(function() {
                const email = profile.emails[0].value;
                const user = users.find(obj => obj.username === email);
                if (!user) {
                    const newUser = {
                        id: Math.max(...users.map(obj => obj.id)) + 1,
                        username: email,
                        spotify: true
                    };
                    users.push(newUser);
                    return done(null, newUser);
                }
                // TODO: logic must be different
                return done(null, user);
            });
        }
    )
);

passport.use(
    new LocalStrategy((username, password, done) => {
        const user = users.find(obj => obj.username === username);
        if (!user) {
            return done(null, false, {
                message: `Account with username "${username}" doesn't exist`
            });
        }
        if (user.password !== password) {
            return done(null, false, { message: "Wrong password" });
        }
        return done(null, user);
    })
);
