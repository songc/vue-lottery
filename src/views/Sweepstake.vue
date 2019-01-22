<template>
  <div>
    <Input type="number" v-model="num" />
    <Button type="primary" @click="sweepstake">开始抽奖</Button>
    <EmployeeList :employeeList = "employeeList"></EmployeeList>
  </div>
</template>

<script>
import EmployeeList from '../components/EmployeeList'
export default {
  name: 'Sweepstake',
  components: {
    EmployeeList
  },
  data() {
    return {
      num: 0,
      employeeList:[]
    }
  },
  methods:{
    sweepstake(){
      this.$axios.get('/sweepstake',{
        params: {
          num: this.num
        }
      }).then(res => {
        this.employeeList=res.data
      })
    }
  }
}
</script>
