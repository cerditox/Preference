<template>
  
  <v-content >
    <v-container v-for="(thing, index) in notes.items" :key="index" v-bind="thing">
     
      <div class="mx-lg-auto"  >
        
        <v-card
          class="md"
          flat="flat"
          :loading="loading"
          outlined="true"
          :elevation="elevation"
          raised="raised"
          :height="height"
          v-model="notes.items[index]"
        >
          <v-toolbar color="primary" dark flat max-height="60px">
            <v-tooltip >
              <template  v-slot:activator="{ on }">
                <v-btn :href="source" icon large target="_blank" v-on="on">
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </template>
              <span>Source</span>
            </v-tooltip>
              <v-tooltip >
              <template   v-slot:activator="{ on }">
                  
                <v-btn  icon large target="_blank" >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>
              <span>Source</span>
            </v-tooltip>
            
            
            <v-spacer ></v-spacer>
            <v-tooltip right>
              <template  v-slot:activator="{ on }">
                <v-btn
                  icon
                  large
                
                  target="_blank"
                  v-on:click="handleNotes(thing)"
                >
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </template>
              <span>Codepen</span>
            </v-tooltip>
          </v-toolbar>
          <v-card-title class="align-end fill-height">{{thing.titulo}}</v-card-title>

          <v-card-text>{{thing.contenido}}</v-card-text>
        </v-card>
      </div>
    </v-container>
  </v-content>
</template>
       


<script>
export default {
  computed: {
    user() {
      return this.$store.state.authentication.user;
    },

    notes() {
      return this.$store.state.users.all;
    }
  },
  created() {
    // this.$store.dispatch('users/getAll');
    this.$store.dispatch("users/getAllNotes");
    this.$store.disptach("users/getAll")
  },
    methods: {
        handleNotes (thing) {
            const { dispatch } = this.$store;
            dispatch('authentication/delete', thing.id);

        }
    }
};
</script>