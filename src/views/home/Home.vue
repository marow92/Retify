<template>
    <div class="home">
        <button @click="onLoginWithSpotifyButtonClick">
            Login with Spotify
        </button>
        <button @click="onRegisterButtonClick">Register]</button>
        <button @click="onLoginButtonClick">Login</button>
        <button @click="onLogoutButtonClick">Logout</button>
        <h1>This is an home page</h1>
    </div>
</template>

<script>
// @ is an alias to /src
import * as loginService from "../../api/loginService.js";

export default {
    name: "Home",
    components: {},
    methods: {
        onLoginWithSpotifyButtonClick() {
            loginService.loginWithSpotify();
            // fetch("http://localhost:8888/login-with-spotify", {
            //     method: "POST",
            //     redirect: "follow",
            //     headers: {
            //         origin: "*",
            //     },
            // }).then(async (response) => {
            //     const data = await response.json();
            //     console.log(data);
            //     window.location.href = data.url;
            //     // console.log(await response.json());
            // });
        },
        onRegisterButtonClick() {
            loginService.register("user", "password");
        },
        onLoginButtonClick() {
            loginService.login("user", "password");
        },
        onLogoutButtonClick() {
            loginService.logout();
        },
    },
};
</script>
