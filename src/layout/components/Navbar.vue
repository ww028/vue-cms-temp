<template>
  <div class="navbar">
    <breadcrumb class="breadcrumb-container" />

    <div class="right-menu">
      <el-button @click="logout">退出</el-button>
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
