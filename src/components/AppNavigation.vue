<template>
    <div>
        <v-navigation-drawer v-model="drawer" class="brown lighten-2 burger-menu" dark disable-resize-watcher>
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-item :key="index">
                        <v-list-item-content>
                            {{ item.title }}
                        </v-list-item-content>
                    </v-list-item>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar color="brown darken-4" dark>
            <v-icon class="hidden-md-and-up" @click="drawer = !drawer">menu</v-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <router-link to="/">
                <v-toolbar-title to="/">
                    {{ appTitle }}
                </v-toolbar-title>
            </router-link>
            <v-btn text class="hidden-sm-and-down" to="/menu">
                Menu
            </v-btn>
            <router-link v-if="isAuthenticated" to="/about">
                <v-btn class="hidden-sm-and-down" to="/about">
                    About
                </v-btn>
            </router-link>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <div v-if="!isAuthenticated" class="hidden-sm-and-down">
                <v-btn text class="hidden-sm-and-down" to="/sign-in">
                    SIGN IN
                </v-btn>
                <v-btn color="brown lighten-3" class="hidden-sm-and-down" to="/join">
                    JOIN
                </v-btn>
            </div>
            <v-btn v-else outlined color="white" @click="logout">
                Logout
            </v-btn>
        </v-toolbar>
    </div>
</template>

<script>
export default {
    name: 'AppNavigation',
    data() {
        return {
            appTitle: 'Meal Prep',
            drawer: false,
            items: [{ title: 'Menu' }, { title: 'Sign In' }, { title: 'Join' }]
        };
    },
    computed: {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('userSignOut');
        }
    }
};
</script>

<style scoped>
.burger-menu {
    position: absolute;
    z-index: 100;
}
a {
    color: white;
    text-decoration: none;
}
</style>
