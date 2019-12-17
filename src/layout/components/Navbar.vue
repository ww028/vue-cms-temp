<template>
  <div class="navbar">
    <breadcrumb class="breadcrumb-container" />

    <div class="right-menu">
      <el-button @click="logout" size="mini">退出</el-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import { resetRouter } from '@/router'
import { removeToken } from '@/utils/auth'

export default {
  components: {
    Breadcrumb,
  },
 
  methods: {
    logout() {
      removeToken()
      resetRouter()
      // await this.$store.dispatch('user/logout')
      this.$router.push(`/login`)
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar{
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 0 20px;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,0.08);
}
</style>
