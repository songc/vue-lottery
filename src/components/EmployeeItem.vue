<template>
  <div class="item">
    {{ employee.employeeId }}---{{ employee.name|hidePartName }}---{{ employee.phone|hidePartPhone }}
  </div>
</template>

<script>
export default {
  name: 'EmployeeItem',
  props: {
    employee: Object
  },
  filters: {
    hidePartName(name){
      return name.charAt(0) + '*'.repeat(name.length-1)
    },
    hidePartPhone(phone){
      return phone.slice(0,3) + '*'.repeat(4) + phone.slice(7)
    }
  }
}
</script>

<style scoped>
.item {
  margin: 10px;
  font-size: 18px;
}
</style>
