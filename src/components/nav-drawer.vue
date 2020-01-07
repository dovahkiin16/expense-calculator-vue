<template>
    <v-navigation-drawer app clipped>
        <v-list
                dense
                nav
        >
            <v-list-item
                    :key="item.title"
                    :to="item.link"
                    color="secondary"
                    v-for="item in items"
            >
                <v-list-item-icon>
                    <v-icon>mdi-{{item.icon}}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>{{item.title}}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'nav-drawer',
    data() {
      return {
        items: [
          {title: 'Home', icon: 'home', link: '/'},
          {title: 'Expenses', icon: 'cash-multiple', link: '/expenses'},
        ]
      }
    },
  }
</script>
