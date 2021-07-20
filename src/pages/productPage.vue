<template>
<div class="col-sm-10 products">
  <div class="header d-flex mt-3">
    <h4 class="col-sm-10">Products</h4>
    <div class="utility col-sm-2">
      <button class="create-new btn btn-primary">Create product</button>
    </div>
  </div>
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
