<template>
    <div>
      <form @submit.prevent="login">
        <h3>登入</h3>

        <div class="form-group">
            <label>手機號碼</label>
            <input
                type="phone"
                class="form-control form-control-lg"
                v-model="user.phone"
            />
        </div>

        <div class="form-group">
            <label>密碼</label>
            <input
                type="password"
                class="form-control form-control-lg"
                v-model="user.password"
            />
        </div>

        <button type="submit" class="btn btn-dark btn-lg btn-block">
            登入
        </button>

        <button class="btn btn-dark btn-lg btn-block">
            <router-link to="/register">
                註冊
            </router-link>
        </button>

        <p class="forgot-password text-right mt-2 mb-4">
            <router-link to="/forgot-password">忘記密碼?</router-link>
        </p>

      </form>
    </div>
  </template>
  
  <script>
    import { firebaseAuth } from "@/config/firebaseConfig.js";

  export default {
    data() {
      return {
        user: {
            userphone: '',
            password: '',
        },
      };
    },

    methods: {
        userLogin() {
            firebaseAuth
                .signInWithEmailAndPassword(this.user.email, this.user.password)
                .then(() => {
                this.$router.push("/admin");
                })
            .catch((error) => {
                alert(error.message);
                });
        },
    },
};
  </script>