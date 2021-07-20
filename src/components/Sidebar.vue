<template>
<div class="sidebar col-sm-2 bg-white">
  <h3 class="header"> Daskboard </h3>
  <ul class="sections nav flex-column text-center">
    <li
      :key="section"
      v-for="section in sections"
      :class="{ 'active': activeSection === section}"
      class="nav-item"
    >
      <a @click="handleClick(section)" class="nav-link">{{section}}</a>
    </li>
  </ul>
  <div class="logout">
    <router-link to="/login">Logout</router-link>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      sections: [
        'HOME',
        'PRODUCTS',
        'ITEMS',
        'ORDERS',
        'CUSTOMERS',
        'STATISTIC',
      ],
      activeSection: 'HOME',
    }
  },

  computed: {
    ...mapState({
        account: state => state.account,
        users: state => state.users.all
    })
  },

  created () {
    this.activeSection = this.sections.find(i => window.location.pathname.includes(i.toLowerCase()));
  },
  methods: {
    handleClick(section) {
      this.activeSection = section;
      this.$router.push(`/${section.toLowerCase()}`);
    },
  }
};
</script>
