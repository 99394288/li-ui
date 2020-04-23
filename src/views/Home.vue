<template>
  <div>
    <div class="btn" @click="hanClick">点击</div>
    <div class="btn" @click="hanClick2">点击2</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    }
  },
  methods:{
    hanClick(){
      this.$toast('下标：0')
    },
    hanClick2(){
      this.$toast('下标：1')
    }
  }
}
</script>
<style lang="less">
  .btn {
    width: 50px;
    cursor: pointer;
  }
</style>