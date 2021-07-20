<template>
<div class="register bg-white d-flex justify-content-center align-items-center">
  <div class="col-sm-4 border bg-light p-5">
      <h2 class="mb-5 text-center">Register</h2>
      <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" v-model="user.name" v-validate="'required'" name="name" class="form-control" :class="{ 'is-invalid': submitted && errors.has('name') }" />
            <div v-if="submitted && errors.has('name')" class="invalid-feedback">{{ errors.first('name') }}</div>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" v-model="user.email" v-validate="'required'" name="email" class="form-control" :class="{ 'is-invalid': submitted && errors.has('email') }" />
            <div v-if="submitted && errors.has('email')" class="invalid-feedback">{{ errors.first('email') }}</div>
          </div>
          <div class="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" v-model="user.password" v-validate="{ required: true, min: 6 }" name="password" class="form-control" :class="{ 'is-invalid': submitted && errors.has('password') }" />
            <div v-if="submitted && errors.has('password')" class="invalid-feedback">{{ errors.first('password') }}</div>
          </div>
          <div class="form-group">
            <label for="role">Role</label>
            <select class="form-control" v-model="user.role">
              <option v-for="option in options" :value="option" :key="option">
                {{ option }}
              </option>
            </select>
          </div>
          <div class="form-group text-right mt-5">
              <button class="btn btn-primary" :disabled="status.registering">Register</button>
              <router-link to="/login" class="btn btn-link">Cancel</router-link>
          </div>
      </form>
  </div>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    data () {
        return {
          user: {
            name: '',
            email: '',
            password: '',
            role: ''
          },
          submitted: false,
          options: [
            "Customer",
            'WarehouseStaff',
            'SalesStaff',
            'OrderProcessStaff',
            'BusinessStaff'
          ]
        }
    },
    computed: {
        ...mapState('account', ['status'])
    },
    methods: {
        ...mapActions('account', ['register']),
        handleSubmit() {
            this.submitted = true;
            this.$validator.validate().then(valid => {
                if (valid) {
                    this.register(this.user);
                }
            });
        }
    }
};
</script>
