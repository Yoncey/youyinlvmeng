<template>
  <!-- 背景 -->
  <div class="bg">
    <!-- 树木 -->
    <img class="tree" src="../assets/pc/scene_dm.png">
    <!-- 太阳 -->
    <img class="sun" src="../assets/pc/scene_sun.png">
    <!-- 云朵 -->
    <img class="cloud-0" src="../assets/pc/scene_cloud0.png">
    <img class="cloud-1" src="../assets/pc/scene_cloud1.png">
    <img class="cloud-2" src="../assets/pc/scene_cloud2.png">
    <img class="cloud-3" src="../assets/pc/scene_cloud3.png">
    <!-- 人物 -->
    <img class="pm" src="../assets/pc/scene_mp.png">
    <img v-if="roleMovie == 1" class="roleMovie" src="../assets/pc/roleMovie1.png">
    <img v-if="roleMovie == 2" class="roleMovie" src="../assets/pc/roleMovie2.png">
    <img v-if="roleMovie == 3" class="roleMovie" src="../assets/pc/roleMovie3.png">
    <img v-if="roleMovie == 4" class="roleMovie" src="../assets/pc/roleMovie4.png">
    <img v-if="roleMovie == 5" class="roleMovie" src="../assets/pc/roleMovie5.png">
    <!-- 标题 -->
    <div class="title-bg">
      <img class="title" src="../assets/pc/scene_label.png">
      <img class="highlight-1" src="../assets/pc/scene_star0.png">
      <img class="highlight-2" src="../assets/pc/scene_star1.png">
      <img class="star-1" src="../assets/pc/scene_star2.png">
      <img class="star-2" src="../assets/pc/scene_star3.png">
      <img class="star-3" src="../assets/pc/scene_star4.png">
      <img class="star-4" src="../assets/pc/scene_star5.png">
      <!-- 电脑端提示 -->
      <img class="code" src="../assets/pc/scene_code.png">
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import 'animate.css'
export default {
  name: 'PcIndex',
  setup() {
    let roleMovie = ref(1)
    function addRoleMovie() {
      if (roleMovie.value >= 5) roleMovie.value = 0;
      roleMovie.value++;
      // console.log(roleMovie.value);
      setTimeout(() => {
        addRoleMovie();
      }, 200);
      // for (let i = 0; i < 5; i++) {
      //   roleMovie.value++
      //   console.log(roleMovie.value)
      // }

    }
    onMounted(() => {
      addRoleMovie()
    })
    return { roleMovie }
  },
}
</script>


<style scoped>
.bg {
  position: relative;
  height: 100vh;
  background-image: url('../assets/pc/scene_bg.png');
  background-size: cover;
  overflow: hidden;
}

img {
  position: absolute;
  -webkit-user-drag: none;
}

.tree {
  width: auto;
  height: auto;
  left: 50%;
  transform: translateX(-50%);
  bottom: -7%;
  /* background: url('../assets/pc/scene_dm.png.png') no-repeat;
  background-size: contain;
  background-position: bottom; */
  z-index: 1;
}

.sun {
  top: 0;
  left: 20%;
  animation: rotate 8s linear infinite;
  z-index: 1;
}

.cloud-0 {
  top: 5%;
  animation: move-1 25s linear infinite;
}

.cloud-1 {
  top: 20%;
  animation: move-1 30s linear infinite;
}

.cloud-2 {
  top: -5%;
  animation: move-1 20s linear infinite;
}

.cloud-3 {
  width: 102%;
  bottom: -8%;
  animation: move-2 1s linear alternate infinite;
}

.pm {
  left: 8%;
  bottom: 20%;
  z-index: 2;
  animation: move-3 .8s linear alternate infinite;
}

.roleMovie {
  left: 18%;
  bottom: 4%;
  z-index: 2;
}

.title-bg {
  height: 318px;
  top: 18%;
  left: 48%;
  position: relative;
}

.title {
  /* top: 18%;
  left: 48%; */
  z-index: 3;
}

.highlight-1 {
  top: 235px;
  left: 805px;
  animation: hightlight-scale-1 .5s linear alternate infinite;
}

.highlight-2 {
  top: 190px;
  left: 790px;
  animation: hightlight-scale-2 .5s .3s linear alternate infinite;
}

.star-1 {
  top: 70px;
  left: 200px;
  animation: hightlight-scale-3 .8s linear alternate infinite;
}

.star-2 {
  top: 50px;
  left: 180px;
  animation: hightlight-scale-3 .8s .3s linear alternate infinite;
}

.star-3 {
  top: 230px;
  left: 55px;
  animation: hightlight-scale-3 .8s .5s linear alternate infinite;
}

.star-4 {
  top: 200px;
  left: 30px;
  animation: hightlight-scale-3 1s .3s linear alternate infinite;
}

.code {
  top: 340px;
  left: 60px;
  z-index: 3;
}

@keyframes rotate {
  from {
    transform: rotateZ(0);
  }

  to {
    transform: rotateZ(360deg);
  }
}

@keyframes move-1 {
  0% {
    right: 0;
    transform: translateX(100%);
  }

  100% {
    right: 100%;
    transform: translateX(-100%);
  }
}

@keyframes move-2 {
  0% {
    transform: translateX(-2%);
  }

  100% {
    transform: translateX(-1%);
  }
}

@keyframes move-3 {
  0% {
    transform: translateY(-8%);
  }

  100% {
    transform: translateY(8%);
  }
}

@keyframes hightlight-scale-1 {
  0% {
    transform: scale(50%);
  }

  100% {
    left: 815px;
    transform: scale(100%)
  }
}

@keyframes hightlight-scale-2 {
  0% {
    transform: scale(50%);
  }

  100% {
    left: 810px;
    transform: scale(100%)
  }
}

@keyframes hightlight-scale-3 {
  0% {
    transform: scale(0);
  }

  100% {
    right: 6%;
    transform: scale(100%)
  }
}
</style>
