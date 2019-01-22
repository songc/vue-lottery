<template>
  <div> 
    <EmployeeItem v-for="employee in employeeList" :key="employee.id" :employee=employee></EmployeeItem>
  </div>
</template>

<script>
import EmployeeItem from './EmployeeItem'
export default {
  name: 'EmployeeList',
  components: {
    EmployeeItem
  },
  props: {
    employeeList: Array
  }
}
</script>
