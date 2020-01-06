<template>
    <div class="app-container">
        <v-app-bar>
            <v-toolbar-title>Expense Calculator</v-toolbar-title>
        </v-app-bar>
        <nav-drawer/>
        <v-container>
            <router-view/>
        </v-container>
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
