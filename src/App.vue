<template>
  <v-app>
    <v-navigation-drawer
      app
      permanent
      width="200"
      hide-overlay
      persistent
      clipped
      :color="color"
      :expand-on-hover="expandOnHover"
      :mini-variant="Variantmini"
      :src="bg"
      absolute
      dark
    >
      <v-list dense nav class="py-0">
        <v-list-item two-line :class="miniVariant && 'px-0'">
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/men/81.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Zalogowano</v-list-item-title>
            <v-list-item-subtitle>Username</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-container fluid>
        <div id="app">
          <div id="nav"></div>
        </div>
      </v-container>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: "Strona główna", icon: "$vuetify.icons.dash", to: "/dash" },
        { title: "Najlepsze", icon: "$vuetify.icons.star", to: "/top" },
        { title: "Artyści", icon: "$vuetify.icons.artist", to: "/artists" },
        { title: "Piosenki", icon: "$vuetify.icons.music", to: "/songs" },
        { title: "Słuchaj", icon: "$vuetify.icons.play", to: "/playMusic" },
        { title: "Ustawienia", icon: "$vuetify.icons.prefs", to: "/settings" },
        { title: "Wyloguj się", icon: "$vuetify.icons.logout", to: "/logout" }
      ],
      color: "primary",
      colors: ["primary", "blue", "success", "red", "teal"],
      right: false,
      miniVariant: true,
      expandOnHover: true,
      background: true
    };
  },
  computed: {
    bg() {
      return this.background
        ? "https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
        : undefined;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
