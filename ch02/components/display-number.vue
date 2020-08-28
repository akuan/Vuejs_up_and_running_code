<template>
  <p>当前数字是{{number}}</p>    
</template>
<script>
export default {
  props:{
    number:{
      type:Number,
      required:true
    }
  }
}
</script>