<template>
  <div id="app">
    <v-app id="inspire">
      <v-content>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <v-card class="elevation-12">
                <v-toolbar color="primary" dark flat>
                  <v-toolbar-title>Login form</v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                  <form @submit.prevent="handleSubmit">
                    <v-text-field
                      input type="text"
                      v-model="username"
                      label="username"
                      name="username"
                      prepend-icon="$vuetify.icons.person"
                      class="form-group"
                    ></v-text-field>

                    <v-text-field
                      id="password"
                      v-model="password"
                      label="Password"
                      class="form-group"
                      name="password"
                      prepend-icon="$vuetify.icons.lock"
                      input type="password"
                    ></v-text-field>
                  
                
               
                  <v-btn color="primary" type="submit"  clas="form-group"
                  
                  >Login</v-btn>
               
                   </form>
              </v-card-text>
            
              </v-card>
            
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>
<script>
export default {
    data () {
        return {
            username: '',
            password: '',
            submitted: false
        }
    },
    computed: {
        loggingIn () {
            return this.$store.state.authentication.status.loggingIn;
        }
    },
    created () {
        // reset login status
        this.$store.dispatch('authentication/logout');
    },
    methods: {
        handleSubmit (e) {
            this.submitted = true;
            console.log("pasando..");
            const { username, password } = this;
            const { dispatch } = this.$store;
            if (username && password) {
                dispatch('authentication/login', { username, password });
            }
        }
    }
};
</script>