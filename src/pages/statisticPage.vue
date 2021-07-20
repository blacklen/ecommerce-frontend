<template>
<div class="col-sm-10 statistic">
  <h2 class="mt-5">STATISTIC</h2>
  <h6>Coming Soon!!</h6>
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
