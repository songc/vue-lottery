<template>
  <div>
    <Form ref="formRegister" 
      :model="employee"
      :rules="ruleInline" 
      :label-width="80" >
      <FormItem label="员工号：" prop="employeeId">
        <Input v-model="employee.employeeId"/>
      </FormItem>
      <FormItem label="姓名：" prop="name">
        <Input v-model="employee.name"/>
      </FormItem>
      <FormItem label="手机：" prop="phone">
        <Input v-model="employee.phone"/>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formRegister')">提交</Button>
      </FormItem>
    </Form>
  </div>
</template>:

<script>
export default {
  name: 'RegisterForm',
  data(){
    return {
      employee: {
        employeeId: '',
        name: '',
        phone: '',
      },
      ruleInline: {
        employeeId: [
          {required: true, message: '不能为空', trigger: 'blur'},
          {type: 'string', len:10, message: '员工号长度为10', trigger: 'blur'}
        ],
        name: [
          {required: true, message: '不能为空', trigger: 'blur'},
          {type: 'string', min:2, message: '不能小于2字符', trigger: 'blur'}
        ],
        phone: [
          {required: true, message: '不能为空', trigger: 'blur'},
          {type: 'string', len:11, message: '手机号长度为11', trigger: 'blur'}
        ]
      }
    }
  },
  methods:{
    handleSubmit(form){
      this.$refs[form].validate(valid=>{
        if(valid) {
          this.$axios.post('/user/register', this.employee).then(() => {
            this.$Message.success('提交成功')
            this.$emit('on-success')
          }).catch(() => {
            this.$Message.error('提交失败')
          })
        }
      })
    } 
  }
}
</script>

