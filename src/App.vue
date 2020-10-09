<template>
  <v-app>
    <v-app-bar
      app
      color="transparent"
      dense
      flat
      :hide-on-scroll="true"
    >
      <div class="d-flex align-center">
        <v-img
          alt="Compass Logo"
          class="shrink mr-2"
          contain
          src="./assets/images/compass-logo.png"
          transition="scale-transition"
          width="150"
        />
      </div>

      <v-spacer></v-spacer>
      <v-btn
        outlined
        color="orange"
        @click="displayUserRepos = true; displayUserStarred = false"
      >
        Repositórios
      </v-btn>
      <span style="margin: 0 1%;">||</span>
      <v-btn
        depressed
        color="yellow"
        @click="displayUserStarred = true; displayUserRepos = false"
      >
        Starred
      </v-btn>
    </v-app-bar>

    <v-main>
      <GithubSearchComponent />
      <UserDisplayInfo 
        :setDisplayRepos="displayUserRepos"
        :setDisplayStarred="displayUserStarred"
      />
    </v-main>
  </v-app>
</template>

<script>
import GithubSearchComponent from "./components/GithubSearchComponent"
import UserDisplayInfo from "./components/UserDisplayInfo"

export default {
  name: "App",

  components: {
    GithubSearchComponent,UserDisplayInfo
  },

  data: () => ({
    displayUserRepos: false,
    displayUserStarred: false,
  }),
}
</script>
