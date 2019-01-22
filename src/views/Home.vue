<template>
  <div class="hello">
    <Button type="primary" @click="go('test')">测试功能</Button>
    <Button type="primary" @click="register=true">签到</Button>
    <Button type="primary" @click="go('sweepstake')">抽奖</Button>
    <Button type="primary" @click="go('sweepstakev2')">抽奖2</Button>
    <Modal v-model="register" title="签到" :footer-hide="true">
      <RegisterForm @on-success='register=false'></RegisterForm>
    </Modal>
  </div>
</template>

<script>
import RegisterForm from '../components/RegisterForm'
export default {
  name: 'Home',
  components: {
    RegisterForm
  },
  data() {
    return {
      register: false
    }
  },
  methods: {
    go(path){
      this.$router.push({
        name: path
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  margin: 10px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
