<template>
    <v-container class="login-container">
        <v-row align="center" justify="center">
            <v-col cols="4">
                <v-card raised>
                    <v-card-title>Expense Calculator</v-card-title>
                    <v-divider/>
                    <v-card-text>
                        <v-alert text type="error" v-if="error">{{error}}</v-alert>
                        <v-text-field :value="username" @input="updateUsername" label="Username"/>
                        <v-text-field :value="password" @input="updatePassword" label="Password" type="password"/>
                    </v-card-text>
                    <v-divider/>
                    <v-card-actions>
                        <v-btn :disabled="isLoggingIn" @click="clickLogin" color="primary">Login</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
  import {mapActions, mapMutations, mapState} from "vuex"

  export default {
    name: 'login',
    computed: {
      ...mapState('login', ['username', 'password', 'isLoggingIn', 'error']),
      ...mapState('user', ['id'])
    },
    methods: {
      ...mapMutations('login', ['updateUsername', 'updatePassword']),
      ...mapActions('login', ['sendLogin']),

      async clickLogin() {
        await this.sendLogin()

        if (this.id) {
          await this.$router.push('/')
        }
      }
    }
  }
</script>

<style scoped>
    .login-container {
        padding-top: 68px;
    }
</style>
