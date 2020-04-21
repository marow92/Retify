// import store from "../store";
import axios from "axios";
const serverUrl = "http://localhost:8000";

export async function register(user) {
    axios(`${serverUrl}/api/retify/register`, {
        method: "POST",
        data: { user },
        withCredentials: true,
    }).then((response) => {
        console.log(response.data);
    });
}

export async function login(username, password) {
    axios(`${serverUrl}/api/retify/login`, {
        method: "POST",
        data: { username, password },
        withCredentials: true,
    }).then((response) => {
        console.log(response.data);
    });
}

export async function loginWithSpotify() {
    window.location.href = `${serverUrl}/api/spotify/login`;
}

export async function logout() {
    axios(`${serverUrl}/api/retify/logout`, {
        method: "GET",
        withCredentials: true,
    }).then((response) => {
        console.log(response.data);
    });
}
