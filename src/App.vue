<template>
  <v-app>
    <v-app-bar
      app
      color="rgb(255, 70, 93)"
      dark
      class="perfect-center app-heading"
    >
    COVID CASES
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'App',

  data: () => ({
    //
  }),
  created() {
    this.GET_DAILY_REPORT_SUMMARY();
  },
  methods: {
    ...mapActions(['GET_DAILY_REPORT_SUMMARY']),
  },
};
</script>

<style scoped>
.app-heading {
  font-size: 1.5rem;
  font-family: Volkron-Black;
}
</style>
