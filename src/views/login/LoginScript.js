import { register, login, loginWithSpotify } from "../../api/loginService";

export default {
    data() {
        return {
            rememberMe: false,

            form: {
                username: "",
                password: "",
            },
        };
    },
    methods: {
        onLogin() {
            login(this.form.username, this.form.password);
        },
        onLoginWithSpotify() {
            loginWithSpotify();
        },
        onRegister() {
            register(this.form.username, this.form.password);
        },
    },
};
