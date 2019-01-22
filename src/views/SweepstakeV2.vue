<template>
  <div class="about">
    抽奖人数：<InputNumber :max="userListLength" :min="1" v-model="num"></InputNumber>
    <Button v-if="timer" type="warning" @click="destoryTimer">停止</Button>
    <Button v-else type="primary" @click="begin">开始</Button>
    <EmployeeList :employeeList="selectUserList"></EmployeeList>
  </div>
</template>

<script>
import EmployeeList from '../components/EmployeeList'
export default {
  name: 'SweepstakeV2',
  components: {
    EmployeeList
  },
  data(){
    return {
      userList:[],
      num: 1,
      selectIndexs:[],
      timer: null  
    }
  },
  created(){
    this.getUserList()
  },
  beforeDestroy(){
    this.stop()
  },
  computed: {
    selectUserList(){
      return this.selectIndexs.map((value)=>{
        return this.userList[value]
      })
    },
    userListLength(){
      return this.userList.length
    }
  },
  methods: {
    getUserList(){
      this.axios.get('/user').then(res=>{
        this.userList=res.data
        this.$Message.success(`共${res.data.length}用户签到成功`)
      })
    },
    getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    },
    begin(){
      let _this = this
      function sweeptake(){
        let temp = new Set()
        while(temp.size < _this.num){
          temp.add(_this.getRandomInt(_this.userListLength))
        }
        _this.selectIndexs = Array.from(temp)    
      }
      this.timer = setInterval(sweeptake, 50)
      sweeptake()
    },
    destoryTimer(){
      if(this.timer){
        this.timer = clearInterval(this.timer)
      }
    }
  }
}
</script>

<style scoped>
button{
  margin: 10px;
}
</style>
