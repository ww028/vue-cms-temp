<template>
  <el-button @click="login">登陆</el-button>
</template>

<script>
import { setToken } from "@/utils/auth"
export default {
  name: "login",

  methods: {
    login() {
      setTimeout(() => {
        setToken("my_token");
        this.$router.push({ path: this.redirect || "/" });
      });
    }
  }
};
</script>
