<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <Navbar/>
    </v-navigation-drawer>

    <v-app-bar app class="black">
      <v-icon class="mr-4 white--text">mdi-home-account</v-icon>

      <v-toolbar-title class="white--text">Contas de Casa</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer class="black white--text">
      <v-col cols="12" class="text-center">
        Vila Velha/ES - Copyright &copy; {{new Date().getFullYear()}} 
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
  import Navbar from "./components/Navbar/index";

  export default {
    components:{
      Navbar
    },
    data: () => ({ drawer: null }),
  }
</script>
