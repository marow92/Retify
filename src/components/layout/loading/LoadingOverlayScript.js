import { mapState } from "vuex";
export default {
    computed: {
        ...mapState("commonStore", ["isLoading"]),
    },
    mounted() {
        console.log(this.isLoading);
        // this is only example how to display notification
        // needs to be removed later
        // setTimeout(
        //     () =>
        //         this.showNotification({
        //             message: "READ MESSAGE",
        //             type: "success",
        //         }),
        //     0
        // );
    },
};
