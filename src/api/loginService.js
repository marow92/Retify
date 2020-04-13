// import store from "../store";
import axios from "axios";
const serverUrl = "http://localhost:8000";

export async function register(user) {
    axios(`${serverUrl}/register`, {
        method: "POST",
        data: { user },
        withCredentials: true
    }).then(response => {
        console.log(response.data);
    });
}

export async function login(username, password) {
    axios(`${serverUrl}/login`, {
        method: "POST",
        data: { username, password },
        withCredentials: true
    }).then(response => {
        console.log(response.data);
    });
}
export async function test() {
    axios(`${serverUrl}/authrequired`, {
        method: "GET",
        withCredentials: true
    }).then(response => {
        console.log(response.data);
    });
}

export async function logout() {
    axios(`${serverUrl}/logout`, {
        method: "GET",
        withCredentials: true
    }).then(response => {
        console.log(response.data);
    });
}
