<template>
    <v-container class="login-container">
        <v-row align="center" justify="center">
            <v-col cols="4">
                <v-card raised>
                    <v-card-title>Expense Calculator</v-card-title>
                    <v-divider/>
                    <v-card-text>
                        <v-text-field label="Username"/>
                        <v-text-field label="Password" type="password"/>
                    </v-card-text>
                    <v-divider/>
                    <v-card-actions>
                        <v-btn color="primary">Login</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
  export default {
    name: 'login',
  }
</script>

<style scoped>
    .login-container {
        padding-top: 68px;
    }
</style>
