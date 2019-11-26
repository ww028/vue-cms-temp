<template>
  <el-button @click="login">登陆</el-button>
</template>

<script>
export default {
  name: "login",

  methods: {
    login() {
      this.$router.push("/index");
    }
  }
};
</script>
