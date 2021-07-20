<template>
<div class="app">
  <div class="bg-light d-flex">
    <Sidebar v-if="showSidebar"/>
    <router-view></router-view>
  </div>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Sidebar from './components/Sidebar.vue';

export default {
    name: 'app',
    components: {Sidebar},
    data() {
      return {
        showSidebar: true,
      }
    },
    computed: {
        ...mapState({
            alert: state => state.alert
        })
    },
    created() {
      this.init();
    },
    methods: {
        ...mapActions({
            clearAlert: 'alert/clear'
        }),
      init() {
        const { pathname } = window.location;

        if (pathname.includes('login') || pathname.includes('register')) {
          this.showSidebar = false;
        }
      }
    },
    watch: {
        $route (newVal){
            // clear alert on location change
            console.log(';hfaf', newVal);
          const { pathname } = window.location;

          if (pathname.includes('login') || pathname.includes('register')) {
            this.showSidebar = false;
          } else {
            this.showSidebar = true;
          }
          this.clearAlert();
        }
    },
};
</script>

<style lang="scss">
  @import './scss/app.scss';
</style>
