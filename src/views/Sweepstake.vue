<template>
  <div>
    <InputNumber v-model="num" :min="1"></InputNumber>
    <Button v-if="timer" type="warning" @click="stop">停止</Button>
    <Button v-else type="primary" @click="sweepstake">开始抽奖</Button>
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
      num: 1,
      employeeList:[],
      timer: null
    }
  },
  methods:{
    sweepstake(){
      let _this = this
      function getUser(){
        _this.$axios.get('/sweepstake',{
        params: {
          num: _this.num
        }
        }).then(res => {
          _this.employeeList=res.data
        })
      }
      this.timer = setInterval(getUser, 500)
    },
    stop(){
      if(this.timer){
        this.timer = clearInterval(this.timer)
      }
    }
  }
}
</script>


<style scoped>
button {
  margin: 10px;
}
</style>

