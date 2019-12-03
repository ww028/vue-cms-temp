<template>
  <aside>
    <el-menu
      :default-active="aside_active"
      @select="handleSelect"
      :unique-opened="true"
      :router="true"
      :collapse="false"
    >
      <template v-for="item in aside_data">
        <el-submenu v-if="item.children" :index="item.route" :key="item.route">
          <template slot="title">
            {{ item.label }}
          </template>

          <el-menu-item
            v-for="child in item.children"
            :index="child.route"
            :key="child.route + '/' + child.path"
          >
            {{ child.label }}
          </el-menu-item>
        </el-submenu>

        <el-menu-item :key="item.route" v-else :index="item.route">
          {{ item.label }}
        </el-menu-item>
      </template>
    </el-menu>
  </aside>
</template>

<script>
export default {
  name: "Aside",
  data() {
    return {
      aside_active: "/home",
      aside_data: [
        { label: "主页", route: "/home" },
        { label: "拖动排序的表格", route: "/sortTable" },
        { label: "表单", route: "/editForm" },
      ]
    };
  },

  mounted() {
    this.aside_active = this.$route.fullPath
  },

  methods: {
    handleSelect() {}
  }
};
</script>
