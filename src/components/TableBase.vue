<template>
  <div>
    <el-table
      row-key="id"
      v-loading="tableConfig.loading"
      :data="tableConfig.tableData"
      max-height="750"
      :default-sort="{prop: tableConfig.sortable_key, order: 'descending'}"
    >
      <template v-for="item in tableConfig.tableHead">
        <el-table-column
          v-if="item.children"
          :label="item.label"
          :key="item.key"
          align="center"
          show-overflow-tooltip
        >
          <template v-for="sub_item in item.children">
            <el-table-column :label="sub_item.label" :prop="sub_item.key" :key="sub_item.key" show-overflow-tooltip align="center"></el-table-column>
          </template>
        </el-table-column>

        <el-table-column
          v-else
          :fixed="item.fixed"
          :label="item.label"
          :key="item.key"
          :prop="item.key"
          show-overflow-tooltip
          align="center"
          :width="item.width"
          :sortable="item.sortable"
        >
          <template slot-scope="scope">
            <img
              v-if="item.type === 'image'"
              :src="scope.row[item.key]"
              alt="加载失败"
              style="height:32px;verticalAlign: middle;"
            />

            <span v-else>{{ scope.row[item.key] }}</span>
          </template>
        </el-table-column>
      </template>

      <el-table-column
        v-if="tableConfig.operation"
        fixed="right"
        align="center"
        label="操作"
        :width="tableConfig.operationWidth"
      >
        <template slot-scope="scope">
          <slot :value="scope.row"></slot>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      v-if="tableConfig.total > tableConfig.pageSize"
      background
      @current-change="handleCurrentChange"
      :current-page="tableConfig.currentPage"
      :page-size="tableConfig.pageSize"
      layout="total, prev, pager, next, jumper"
      :total="tableConfig.total"
    ></el-pagination>
  </div>
</template>

<script>
/*
 * 带 * 为必传参数
 * tableConfig Object *
 * tableConfig:{
 *  tableData 表格数据 Array *
 *  tableHead[ 表头 Array *
 *    {
 *      label: 字段名称 *
 *      key: 字段键值 *
 *      width: 单元格宽度
 *      type: 该字段显示数据类型 默认不传为 text, 图片 type 为 image
 *    }
 *  ]
 *  operation: 是否显示操作区域 Boolean
 *  operationWidth: 操作区域宽度 Number||String
 *  total: 数据总条数 Number
 *  pageSize: 每页显示多少条 Number
 *  currentPage: 当前页码
 *  sortable: 是否支持排序 Boolean
 *  sortable_key: 默认排序的key String
 * }
 */

export default {
  name: 'TableBase',

  props: {
    tableConfig: Object
  },

  methods: {
    handleCurrentChange(val) {
      this.$emit('getData', val)
    }
  }
}
</script>

