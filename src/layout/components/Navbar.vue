<template>
  <div class="navbar">
    <breadcrumb class="breadcrumb-container" />

    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img src="@/assets/images/user_icon2.png" class="user-avatar">
          <span>admin</span>
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link to="/">
            <el-dropdown-item>
              Home
            </el-dropdown-item>
          </router-link>
          <el-dropdown-item divided>
            <span style="display:block;" @click="logout">Log Out</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
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

  .avatar-wrapper{
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #303133;

    img{
      margin-right: 5px;
    }
  }

  .avatar-wrapper:hover{
    img{
      width: 40px;
      height: 40px;
      transform:rotate(1800deg);
      transition: 1.8s;
    }
  }

  .user-avatar{
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
}
</style>
