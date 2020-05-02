import { loginWithSpotify } from "../../../api/loginService";
import { getCurrentUsername } from "../../../common/utils/utils";
export default {
    data() {
        return {
            drawer: true,
            items: [
                {
                    title: "Strona główna",
                    icon: "$vuetify.icons.dash",
                    to: "/dashboard",
                },
                {
                    title: "Najlepsze",
                    icon: "$vuetify.icons.star",
                    to: "/top-rated",
                },
                // {
                //     title: "Artyści",
                //     icon: "$vuetify.icons.artist",
                //     to: "/artists",
                // },
                {
                    title: "Piosenki",
                    icon: "$vuetify.icons.music",
                    to: "/browse-songs",
                },
                {
                    title: "Słuchaj",
                    icon: "$vuetify.icons.play",
                    to: "/play",
                },
                {
                    title: "Ustawienia",
                    icon: "$vuetify.icons.prefs",
                    to: "/settings",
                },
                {
                    title: "Wyloguj się",
                    icon: "$vuetify.icons.logout",
                    to: "/logout",
                },
            ],
            color: "primary",
            colors: ["primary", "blue", "success", "red", "teal"],
            right: false,
            miniVariant: true,
            expandOnHover: false,
            background: true,
            username: null,
        };
    },
    computed: {
        bg() {
            return this.background
                ? "https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
                : "";
        },
    },
    beforeMount() {
        this.username = getCurrentUsername();
    },
    methods: {
        loginWithSpotify() {
            loginWithSpotify();
        },
    },
};
