<template>
  <div id="container">
    <Header />
    <content>
      <Aside />
      <router-view />
    </content>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Aside from "@/components/Aside";
export default {
  name: "index",
  components: {
    Header,
    Aside
  },

  data() {
    return {
    };
  },
};
</script>

<style lang="scss">
</style>
