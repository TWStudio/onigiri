<script setup lang="ts">
import { Notify } from 'vant';
import 'vant/es/notify/style';
console.warn('import.meta.env', import.meta.env);

const onSpringBtn = () => {
  Notify({ type: 'success', message: '春暖花开', duration: 1000 });
};
</script>

<template>
  <div class="spring">
    <div class="home">春</div>
    <van-button plain type="success" @click="onSpringBtn">面向大海</van-button>
  </div>
</template>

<style scoped lang="scss">
.spring {
  padding: 24px;
  .home {
    font-size: 28px;
    color: #07c160;
  }
}
</style>
