<template>
<div class="col-sm-10 products">
  <div class="header d-flex mt-3">
    <h4 class="col-sm-10">Items</h4>
    <div class="utility col-sm-2">
      <button class="create-new btn btn-primary">Create item</button>
    </div>
  </div>
  <div class="loading" v-if="isLoading">
    <Spinner message="Loading..." />
  </div>
  <div class="justify-content-center d-flex" v-else>
    <div class="col-sm-11 justify-content-center d-flex table-responsive bg-white mt-4 mb-5">
      <table class="table m-0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td>{{item.itemid}}</td>
            <td><img :src="item.productid.image[0]" width="100" height="100"></td>
            <td>{{item.productid.name}}</td>
            <td>{{item.productid.category}}</td>
            <td>{{item.productid.amount}}</td>
            <td>{{item.price}}</td>
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
      items: [],
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
      fetch(`${config.apiUrl}/get_all_item`, {method: 'POST'})
        .then(res => res.json())
        .then(res => {
          this.items = res.data;
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
