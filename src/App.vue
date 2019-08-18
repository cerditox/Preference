<template>
  <v-app id="inspire">
   
    <v-app-bar max-height="50px" app color="cyan" dark>
      <template v-if="user">
      <v-tooltip >
              <template   v-slot:activator="{ on }">
                <v-btn :href="source" icon large target="_blank" v-on="on">
                  <v-icon>mdi-plus-circle</v-icon>
                </v-btn>
              </template>
              <span>add new notes</span>
            </v-tooltip>         
              <v-spacer></v-spacer>
              <v-btn v-if="user" :href="source" icon large target="_blank" router-link to="/login">
                  <v-icon>mdi-logout</v-icon>
                </v-btn>
    </template>
    </v-app-bar>

    <v-content>
      
            <router-view></router-view>
       
     
    </v-content>

    <v-footer color="cyan" app>
      <v-spacer></v-spacer>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.authentication.user;
    },

}
}
</script>

  

