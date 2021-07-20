<template>
<div class="col-sm-10 orders">
  <div class="header d-flex mt-3">
    <h4 class="col-sm-10">Orders</h4>
  </div>
  <div class="loading" v-if="isLoading">
    <Spinner message="Loading..." />
  </div>
  <div class="justify-content-center d-flex" v-else>
     <div class="col-sm-11 table-responsive bg-white mt-4 mb-5">
      <table class="table m-0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.id">
            <td>{{order.id}}</td>
            <td>{{order.customer.name}}</td>
            <td>{{order.customer.email}}</td>
            <td>{{order.status}}</td>
            <td>{{order.totalprice}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import config from '../configs/app';

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
      orders: [],
      isLoading: true,
    }
  },

  computed: {
      ...mapState({
          user: state => state.account.user,
          users: state => state.users.all
      })
  },
  created () {
    this.init();
  },
  methods: {
    ...mapActions('users', {
        getAllUsers: 'getAll',
        deleteUser: 'delete'
    }),

    init() {
      fetch(`${config.apiUrl}/get_all_order`)
        .then(res => res.json())
        .then(res => {
          this.orders = res.data;
          this.isLoading = false;
        });
    },
    handleClick(section) {
      this.$router.push('login');
      this.activeSection = section;
    },
  }
};
</script>
