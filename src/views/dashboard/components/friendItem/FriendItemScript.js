export default {
    props: {
        friend: Object,
    },
    data() {
        return {
            musicNote: "♫ ",
        };
    },
    computed: {
        last3Friends: function() {
            return this.friendsList.slice(0, 3);
        },
    },
};
