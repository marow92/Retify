import store from "../store";

const serverUrl = "http://localhost:8000";

export async function register(user) {
    fetch(`${serverUrl}/register`, {
        method: "POST",
        body: { user },
    })
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((data) => {
            console.log(data);
        });
}

export async function login(username, password) {
    fetch(`${serverUrl}/login`, {
        method: "POST",
        body: { username, password },
    })
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((data) => {
            console.log(data);
        });
}

export async function loginWithSpotify() {
    fetch(`${serverUrl}/login-with-spotify`, {
        method: "POST",
        redirect: "follow",
    })
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((data) => {
            window.location.href = data.url;
            console.log(data);
        });
}

export async function logout() {
    store.dispatch("logout");
}
