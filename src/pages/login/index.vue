<template>
  <el-button @click="login">登陆</el-button>
</template>

<script>
export default {
  name: "Login",

  data() {
    return {
      redirect: undefined
    };
  },

  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect;
      },
      // 立即执行 handler
      immediate: true
    }
  },

  methods: {
    login() {
      this.$router.push({ path: this.redirect || '/' })
    }
  }
};
</script>