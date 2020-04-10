const express = require("express"); // Express web server framework
const request = require("request"); // "Request" library
const cors = require("cors");
const querystring = require("querystring");
const cookieParser = require("cookie-parser");

const client_id = "01577be964124996a91fb11fd24b7c56"; // Your client id
const client_secret = "8600089034414dbf9a292821c461f9e9"; // Your secret
const redirect_uri = "http://localhost:8000/callback"; // Your redirect uri

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
const generateRandomString = function(length) {
    let text = "";
    const possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};

const stateKey = "spotify_auth_state";

const app = express();

app.use(express.static(__dirname + "/public"))
    .use(cors())
    .use(cookieParser());

app.post("/login", function(req, res) {
    console.log(req);
    const accessToken = "123";
    const refreshToken = "456";
    res.send({ accessToken, refreshToken });
});

app.post("/register", function(req, res) {
    console.log(req);
    const isSuccess = true;
    res.send({ isSuccess });
});

app.post("/login-with-spotify", function(req, res) {
    const state = generateRandomString(16);
    res.cookie(stateKey, state);

    // your application requests authorization
    const scope = "user-read-private user-read-email";
    const url =
        "https://accounts.spotify.com/authorize?" +
        querystring.stringify({
            response_type: "code",
            client_id: client_id,
            scope: scope,
            redirect_uri: redirect_uri,
            state: state,
        });
    res.send({ url, state });
    // res.redirect(url);
});

app.get("/callback", function(req, res) {
    // your application requests refresh and access tokens
    // after checking the state parameter
    console.log("callback");
    const code = req.query.code || null;
    // const state = req.query.state || null;
    // const storedState = req.cookies ? req.cookies[stateKey] : null;

    // if (state === null || state !== storedState) {
    //     res.redirect(
    //         "http://localhost:8080/" +
    //             querystring.stringify({
    //                 error: "state_mismatch",
    //             })
    //     );
    // } else {
    // res.clearCookie(stateKey);
    const authOptions = {
        url: "https://accounts.spotify.com/api/token",
        form: {
            code: code,
            redirect_uri: redirect_uri,
            grant_type: "authorization_code",
        },
        headers: {
            Authorization:
                "Basic " +
                Buffer.from(client_id + ":" + client_secret).toString("base64"),
        },
        json: true,
    };

    request.post(authOptions, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            const access_token = body.access_token,
                refresh_token = body.refresh_token;

            const options = {
                url: "https://api.spotify.com/v1/me",
                headers: { Authorization: "Bearer " + access_token },
                json: true,
            };

            // use the access token to access the Spotify Web API
            request.get(options, function(error, response, body) {
                console.log(body);
            });

            // we can also pass the token to the browser to make requests from there
            res.redirect(
                "http://localhost:8080/" +
                    querystring.stringify({
                        access_token: access_token,
                        refresh_token: refresh_token,
                    })
            );
        } else {
            res.redirect(
                "http://localhost:8080/" +
                    querystring.stringify({
                        error: "invalid_token",
                    })
            );
        }
    });
    // }
});

app.get("/refresh-token", function(req, res) {
    // requesting access token from refresh token
    const refresh_token = req.query.refresh_token;
    const authOptions = {
        url: "https://accounts.spotify.com/api/token",
        headers: {
            Authorization:
                "Basic " +
                Buffer.from(client_id + ":" + client_secret).toString("base64"),
        },
        form: {
            grant_type: "refresh_token",
            refresh_token: refresh_token,
        },
        json: true,
    };

    request.post(authOptions, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            const access_token = body.access_token;
            res.send({
                access_token: access_token,
            });
        }
    });
});

console.log("Listening on 8000");
app.listen(8000);
