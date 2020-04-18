import { MoreButton } from '../../../../components';
import RateSong from '../rateSongItem/RateSong.vue';
export default {
  props: {
    songsList: Array,
  },
  data: function() {
    return {
      titles: {
        more: 'Zobacz więcej',
      },
    };
  },
  components: {
    RateSong,
    MoreButton,
  },
};
