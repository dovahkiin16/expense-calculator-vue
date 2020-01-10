<template>
    <div class="app-container">
        <nav-drawer/>
        <v-app-bar
                app
                clipped-left
                color="primary"
        >
            <v-toolbar-title>Expense Calculator</v-toolbar-title>
        </v-app-bar>
        <v-content class="app-container">
            <v-container fluid>
                <router-view/>
            </v-container>
        </v-content>
    </div>
</template>

<script>
  import NavDrawer from '../components/nav-drawer'

  export default {
    name: 'home',
    components: {NavDrawer},
  }
</script>

<style scoped>
    .app-container {
        height: 100%;
    }
</style>
