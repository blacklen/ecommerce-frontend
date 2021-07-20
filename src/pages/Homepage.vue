<template>
  <div class="home col-sm-10">
    <h2 class="mt-5">Hello there, {{ user.email }}</h2>
    <h6>Here is some information we gathered about your store</h6>
  </div>

</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      sections: [
        'HOME',
        'PRODUCTS',
        'ORDERS',
        'CUSTOMERS',
        'STATISTIC',
      ],
      activeSection: 'HOME',
    }
  },

  computed: {
      ...mapState({
          user: state => state.account.user,
          users: state => state.users.all
      })
  },
  created () {
      console.log('abc', this.user)
  },
  methods: {
    ...mapActions('users', {
        getAllUsers: 'getAll',
        deleteUser: 'delete'
    }),
    handleClick(section) {
      this.$router.push('login');
      this.activeSection = section;
    },
  }
};
</script>
