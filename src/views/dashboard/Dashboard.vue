<template>
  <div class="dash">
    <v-row>
      <v-hover v-slot:default="{ hover }">
        <v-card class="ml-8 card" :elevation="hover ? 8 : 2">
          <v-card-text class="font-weight-medium text-center title">{{titles.friends}}</v-card-text>
          <v-divider></v-divider>
          <v-list :two-line="twoLine" :flat="flat" :avatar="avatar">
            <v-list-item v-for="(friend, i) in last3Friends" :key="i" class="friend">
              <v-list-item-avatar>
                <v-img :src="friend.avatar"></v-img>
              </v-list-item-avatar>
              <v-list-item-content class="text-left">
                <v-list-item-title v-html="friend.name" />
                <v-list-item-subtitle
                  v-if="friend.nowListening"
                  v-html="musicNote + friend.nowListening"
                />
              </v-list-item-content>
            </v-list-item>
            <div :key="more" class="more">
              <div class="button-title">{{moreTitle}}</div>
            </div>
          </v-list>
        </v-card>
      </v-hover>

      <v-hover v-slot:default="{ hover }">
        <v-card class="mr-8 card" :elevation="hover ? 8 : 2">
          <v-card-text class="font-weight-medium text-center title">{{titles.rateSongs}}</v-card-text>
          <v-divider></v-divider>
        </v-card>
      </v-hover>
    </v-row>
  </div>
</template>
<script>
import friends from "./mockData";
export default {
  data: function() {
    return {
      titles: {
        friends: "Przyjaciele",
        rateSongs: "Oceń piosenki"
      },
      friendsList: friends,
      avatar: true,
      flat: true,
      twoLine: true,
      musicNote: "♫ ",
      moreTitle: "Zobacz więcej",
      moreIcon: "$vuetify.icons.more"
    };
  },
  computed: {
    last3Friends: function() {
      return this.friendsList.slice(0, 3);
    }
  }
};
</script>
<style src="./DashboardStyle.css" />
