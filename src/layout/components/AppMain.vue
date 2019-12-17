<template>
  <section class="app-main">
    <transition>
      <router-view :key="key" />
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
.app-main{
  padding: 20px;
}

.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateY(0px);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.2s ease;
}

.v-move {
  transition: all 0.8s ease;
}
.v-leave-active {
  position: absolute;
}
</style>
