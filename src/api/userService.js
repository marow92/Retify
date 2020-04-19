// import store from "../store";
import axios from "axios";
const serverUrl = "http://localhost:8000";

export async function getMyRecentlyPlayedTracks() {
    axios(`${serverUrl}/api/spotify/me/recently-played`, {
        method: "GET",
        withCredentials: true,
    }).then((response) => {
        console.log(response.data);
    });
}

export async function getMyData() {
    axios(`${serverUrl}/api/spotify/me`, {
        method: "GET",
        withCredentials: true,
    }).then((response) => {
        console.log(response.data);
    });
}
