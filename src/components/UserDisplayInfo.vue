<template>
  <div class="github-card">
    <transition name="fade" mode="out-in">
      <div v-if="loading" key="loading">
        <v-skeleton-loader
          class="mx-auto"
          max-width="500"
          type="card"
        ></v-skeleton-loader>
      </div>
      <div v-else-if="user" key="user">
        <!-- <div class="background" :style="{backgroundImage: `url(${user.avatar_url})`}" /> -->
        <div class="content">
          <a class="avatar" :href="`https://github.com/${user.login}`" target="_blank">
            <img :src="user.avatar_url" :alt="user.login" />
          </a>
          <h1>{{user.name || user.login}}</h1>
          <ul class="status">
            <li>
              <a :href="`https://github.com/${user.login}?tab=repositories`" target="_blank">
                <strong>{{user.public_repos}}</strong>
                <span>Repos</span>
              </a>
            </li>
            <li>
              <a :href="`https://gist.github.com/${user.login}`" target="_blank">
                <strong>{{user.public_gists}}</strong>
                <span>Gists</span>
              </a>
            </li>
            <li>
              <a :href="`https://github.com/${user.login}/followers`" target="_blank">
                <strong>{{user.followers}}</strong>
                <span>Followers</span>
              </a>
            </li>
          </ul>
        </div>
        <div id="repos">
          <div id="repos-loader" v-if="loadingRepos">
            Carregando os repos
             <v-skeleton-loader
              class="mx-auto"
              max-width="500"
              type="card"
             ></v-skeleton-loader>
          </div>
          <div id="user-repos-list" v-else-if="!loadingRepos && repos && repos.length > 0">
            <h1 v-if="user && user.name">Lista de repositórios do {{ user.name }}</h1>
            <ul id="repos-listing" style="list-style: none;">
              <li class="repo-data" v-for="(repo, index) in repos" :key="index">
                 <v-card
                    class="mx-auto"
                    max-width="644"
                    outlined
                  >
                    <v-list-item three-line>
                      <v-list-item-content>
                        <h3 name="repo-name">Nome: {{ repo.name }}</h3>
                        <h4 name="repo-open-issues">Open issues: {{ repo.open_issues }}</h4>
                        <h5 name="repo-created_at">Data da criação: {{ new Date(repo.created_at).toLocaleString() }}</h5>
                        <p name="repo-description" v-if="repo.description">
                          Descrição: {{ repo.description }}
                        </p>
                        <p name="repo-forks">Forks: {{ repo.forks }}</p>
                        <p name="repo-watchers">Watchers: {{ repo.watchers }}</p>
                        <p name="repo-pushed_at">Último commit: {{ new Date(repo.pushed_at).toLocaleString() }}</p>
                      </v-list-item-content>
                    </v-list-item>
                  </v-card>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div v-else key="not-found">
        Nada para mostrar
      </div>
    </transition>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  name: 'user-display-info-component',
  props:{
    setDisplayRepos: Boolean
  },
  computed: mapState(['loading', 'loadingRepos', 'user', 'repos']),
  watch:{
    setDisplayRepos(n, o) {
      debugger
      if (n && !o) {
        this.displayUserRepos()
      }
    },
  },
  methods: {
    ...mapActions(['displayRepos']),
    displayUserRepos() { this.displayRepos() },
  },
};
</script>

<style>
.github-card {
  margin-top: 50px;
  padding: 20px;
  text-align: center;
  background: #fff;
  color: #000;
  position: relative;
}
.github-card h1 {
  margin: 16px 0 20px;
  line-height: 1;
  font-size: 24px;
  font-weight: 500;
}
.github-card .background {
  filter: blur(10px) opacity(50%);
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  background-color: #fff;
}
.github-card .content {
  position: relative;
  z-index: 2;
}
.github-card .content .avatar {
  display: inline-block;
  overflow: hidden;
  background: #fff;
  border-radius: 100%;
  text-decoration: none;
}
.github-card .content .avatar img {
  display: block;
  width: 80px;
  height: 80px;
}
.github-card .content .status {
  background: #fff;
}
.github-card .content ul {
  text-transform: uppercase;
  font-size: 12px;
  color: #808080;
  list-style-type: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid #d3d3d3;
  border-bottom: 1px solid #d3d3d3;
  zoom: 1;
}
.github-card .content ul:after {
  display: block;
  content: '';
  clear: both;
}
.github-card .content li {
  width: 33%;
  float: left;
  padding: 8px 0;
  box-shadow: 1px 0 0 #eee;
}
.github-card .content li:last-of-type {
  box-shadow: none;
}
.github-card .content strong {
  display: block;
  color: #292f33;
  font-size: 16px;
  line-height: 1.6;
}
.github-card .content a {
  color: #707070;
  text-decoration: none;
}
.github-card .content a:hover {
  color: #4183c4;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

</style>