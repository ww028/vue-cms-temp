<template>
  <main>
    <div>
      <el-input style="width: 200px" placeholder="id" v-model="sub_data.id"></el-input>
      <el-input style="width: 200px" placeholder="title"  v-model="sub_data.title"></el-input>
      <el-input style="width: 200px" placeholder="name"  v-model="sub_data.name"></el-input>
      <el-button plain type="success" size="mini" @click="search">搜索</el-button>
      <el-button plain type="success" size="mini" @click="reset">重置</el-button>
      <el-button plain type="success" size="mini" @click="edit">添加</el-button>
    </div>
    <TableBase :tableConfig="tableConfig" @getData="getData">
      <template slot-scope="scope">
        <el-button plain type="success" size="mini" @click="edit(scope.value)">编辑</el-button>
        <el-button plain type="danger" size="mini" @click="remove(scope.value)">删除</el-button>
      </template>
    </TableBase>

    <el-dialog title="编辑表格" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="title" :label-width="formLabelWidth">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="name" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">提 交</el-button>
      </div>
    </el-dialog>
  </main>
</template>

<script>
import { getList, listRemove, listEditAndAdd } from '@/api/index'
import TableBase from '@/components/TableBase'
export default {
  name: 'sortTable',
  components: {
    TableBase
  },
  data() {
    return {
      sub_data: {
        id: '',
        name: '',
        title: '',
      },
      tableConfig: {
        loading: false,
        tableData: [],
        tableHead: [
          { label: 'ID', key: 'id' },
          { label: 'title', key: 'title' },
          { label: 'name', key: 'name' }
        ],
        operation: true,
        operationWidth: '180px'
      },
      dialogFormVisible: false,
      form: {
        name: '',
        title: '',
      },
      formLabelWidth: '120px'
    }
  },

  mounted() {
    this.getData(this.sub_data)
  },

  methods: {
    async getData(data) {
      this.tableConfig.tableData = await getList(data)
    },

    search(){
      this.getData(this.sub_data)
    },

    reset(){
      this.sub_data.id = '';
      this.sub_data.title = '';
      this.sub_data.name = '';
      this.getData(this.sub_data) 
    },

    edit(val) {
      this.dialogFormVisible = true;
      if(val){
        this.form.id = val.id
        this.form.title = val.title
        this.form.name = val.name
      } else {
        this.form.id = ''
        this.form.title = ''
        this.form.name = ''
      }
    },

    async remove(val) {
      let data = await listRemove(val)
      if (data.status) {
        this.getData()
      }
    },

    async submit(){
      let data = await listEditAndAdd(this.form)
      console.log(data)
      if(data.status){
        this.getData()
        this.dialogFormVisible = false
      }
    }
  }
}
</script>