<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>
          <v-icon class="mr-2">book</v-icon>Booj Books
        </span>
      </v-toolbar-title>
    </v-toolbar>
    <v-content>
      <keep-alive include="Home">
        <router-view/>
      </keep-alive>
    </v-content>
  </v-app>
</template>

<script>
import Home from "./views/Home";

export default {
  name: "App",
  components: {
    Home
  },
  data() {
    return {};
  }
};
</script>


