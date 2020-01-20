<template>
    <div id="app">
        <v-app>
            <app-navigation></app-navigation>
            <v-content transition="slide-x-transition">
                <router-view></router-view>
            </v-content>
        </v-app>
    </div>
</template>
<script>
import AppNavigation from '@/components/AppNavigation';
export default {
    name: 'App',
    components: {
        AppNavigation
    }
};
</script>
<style>
#app {
    margin: 0;
    padding: 0;
    position: relative;
}
</style>
