<template>
  <div>aside</div>
</template>

<script>
export default {
  name: 'Aside',
  mounted(){
    console.log(this.$router.options.routes)
  }
}
</script>