import { rateSong } from "../../../../api";
export default {
    props: {
        song: Object,
    },
    data() {
        return {
            rate: null,
        };
    },
    async created() {
        // const rate = await getSongRate(this.song.id)
        // if(rate)
    },
    methods: {
        onRate(rate) {
            rateSong(this.song.id, rate);
            // console.log(song);
        },
    },
};
