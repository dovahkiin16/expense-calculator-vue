<template>
    <v-container class="login-container">
        <v-row align="center" justify="center">
            <v-col cols="4">
                <v-card raised>
                    <v-card-title>Expense Calculator</v-card-title>
                    <v-divider/>
                    <v-card-text>
                        <v-alert v-if="error" type="error" text>{{error}}</v-alert>
                        <v-text-field label="Username" :value="username" @input="updateUsername"/>
                        <v-text-field label="Password" type="password" :value="password" @input="updatePassword"/>
                    </v-card-text>
                    <v-divider/>
                    <v-card-actions>
                        <v-btn color="primary" @click="login" :disabled="isLoggingIn">Login</v-btn>
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
    },
    methods: {
      ...mapMutations('login', ['updateUsername', 'updatePassword']),
      ...mapActions('login', ['login']),
    }
  }
</script>

<style scoped>
    .login-container {
        padding-top: 68px;
    }
</style>
