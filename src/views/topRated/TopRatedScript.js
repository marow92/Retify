import { Card, MoreButton } from "../../components";
import { topSongs, topArtists } from "./mockData";
import TopSongList from "./topSongList/TopSongList.vue";
import TopArtistList from "./topArtistList/TopArtistList.vue";
import { getMyRatedSongs } from "./TopRatedController";

export default {
    components: {
        Card,
        MoreButton,
        TopSongList,
        TopArtistList,
    },
    data: function() {
        return {
            topSongs,
            topArtists,
            titles: {
                topSongs: "Top 50 piosenek",
                topArtists: "Top 50 artystów",
            },
        };
    },
    async mounted() {
        this.songs = await getMyRatedSongs();
    },
    computed: {},
    methods: {},
};
