<template>
  <div>
    生成用户数量：<InputNumber v-model="num" :min="1"></InputNumber>
    <br>
    <Button type="primary" @click="genUser">生成用户</Button>
    <Button type="primary" @click="deleteUser">删除所有用户</Button>
    <EmployeeList :employeeList=employeeList></EmployeeList>
  </div>
</template>

<script>
import EmployeeList from '../components/EmployeeList'
export default {
  name: 'Test',
  components:{
    EmployeeList
  },
  data() {
    return {
      num: 100,
      employeeList:[]
    }
  },
  methods: {
    genUser(){
      this.$axios.post('/test/register',{},{
        params: {
          num: this.num
        }
      }).then(res=>{
        this.employeeList = res.data
        this.$Message.success(`成功添加${res.data.length}位用户`)
      })
    },
    deleteUser(){
      this.$axios.delete('/test').then(()=>{
        this.$Message.success('成功删除所有用户')
      })
    }
  }
}
</script>

<style scoped>
button {
  margin: 10px;
}
</style>
