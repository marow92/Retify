import FriendItem from "./components/friendItem/FriendItem.vue";
import RateSong from "./components/rateSongItem/RateSong.vue";
import friends, { songs } from "./mockData";
export default {
    data: function() {
        return {
            titles: {
                friends: "Przyjaciele",
                rateSongs: "Oceń piosenki",
            },
            friendsList: friends,
            songs,
            avatar: true,
            flat: true,
            twoLine: true,
            musicNote: "♫ ",
            moreTitle: "Zobacz więcej",
            moreIcon: "$vuetify.icons.more",
        };
    },
    computed: {
        last3Friends: function() {
            return this.friendsList.slice(0, 3);
        },
    },
    components: {
        FriendItem,
        RateSong,
    },
};
