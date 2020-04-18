import { MoreButton } from '../../../../components';
import FriendItem from '../friendItem/FriendItem.vue';
export default {
  props: {
    friendsList: Array,
  },
  data: function() {
    return {
      titles: {
        more: 'Zobacz więcej',
      },
    };
  },
  components: {
    FriendItem,
    MoreButton,
  },
};
