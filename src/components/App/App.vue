<template>
  <v-app class="app">
    <!-- <div class="app"> -->
    <!-- <header>
      <h1 class="title">
        {{ title }}
      </h1>
      <nav>
        <ul>
          <li>
            <router-link :to="{name: 'Home' }">
              Home
            </router-link>
          </li>
        </ul>
      </nav>
    </header> -->
    <v-navigation-drawer app></v-navigation-drawer>
    <!-- <v-toolbar app></v-toolbar> -->
    <MenuBar />
    <v-content>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-content>
    <v-footer app></v-footer>
  <!-- </div> -->
  </v-app>
</template>

<script>
import MenuBar from '@Component/Navigation/MenuBar.vue';

export default {
  name: 'App',
  components: {
    MenuBar,
  },
  data() {
    return {
      title: 'Welcome to Sapphire!',
    };
  },
};
</script>
