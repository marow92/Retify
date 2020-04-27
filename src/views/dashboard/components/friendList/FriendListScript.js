import { MoreButton } from "../../../../components";
import FriendItem from "../friendItem/FriendItem.vue";
export default {
    components: {
        FriendItem,
        MoreButton,
    },
    props: {
        friends: Array,
        onMoreFriends: Function,
    },
    data: function() {
        return {
            titles: {
                more: "Zobacz więcej",
            },
        };
    },
};
