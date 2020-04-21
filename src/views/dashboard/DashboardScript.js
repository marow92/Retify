import FriendsList from './components/friendsList/FriendsList.vue';
import RateSongsList from './components/rateSongsList/RateSongsList.vue';
import { Card, MoreButton } from '../../components';
import friends, { songs } from './mockData';
export default {
  data: function() {
    return {
      titles: {
        friends: 'Przyjaciele',
        rateSongs: 'Oceń piosenki',
        more: 'Zobacz więcej',
      },
      friends,
      songs,
      avatar: true,
      flat: true,
      twoLine: true,
      musicNote: '♫ ',
      moreTitle: 'Zobacz więcej',
      moreIcon: '$vuetify.icons.more',
    };
  },
  computed: {
    last3Friends: function() {
      return this.friendsList.slice(0, 3);
    },
  },
  methods: {
    onMoreFiends: () => {},
    onMoreSongs: () => {},
    onSongRated: () => {},
    onFriend: () => {},
  },
  components: {
    FriendsList,
    RateSongsList,
    Card,
    MoreButton,
  },
};
