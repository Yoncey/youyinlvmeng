<template>
  <!-- 手机界面顶部 -->
  <div class="star-top">
    <!-- 音乐 -->
    <audio id="music" loop>
      <source src="../assets/music/GenshinImpactMainTheme.ogg" />
    </audio>
    <div class="music-control">
      <img v-if="flag" src="../assets/pmd/music1.png" @click="playMusic" />
      <img class="pause" v-if="!flag" src="../assets/pmd/music2.png" @click="puaseMusic" />
    </div>
  </div>
  <!-- 场景 -->
  <Scene01 v-if="scene == 1" />
  <!-- 手机界面底部旋转 -->
  <div class="star-bottom">
    <!-- 角色 -->
    <div v-if="role == 1" class="role"></div>
    <!-- 光盘 -->
    <img class="record-bg" src="../assets/pmd/record_bg.png" />
    <!-- 开始旅程 -->
    <Transition name="animate__animated animate__bounce" enter-active-class="animate__bounceIn"
      leave-active-class="animate__bounceOut">
      <img v-if="startBtn == 1" class="star-btn" src="../assets/pmd/begin_startBtn.png" @click="start">
    </Transition>
  </div>
</template>

<script>
import Scene01 from '../pages/Scene01.vue'
import { ref, onMounted, provide } from 'vue'
export default {
  name: 'PmdIndex',
  components: {
    Scene01
  },
  setup() {
    // 音乐播放暂停切换
    let flag = ref(true);
    // 人物和按钮延迟出现
    let startBtn = ref(0);
    let role = ref(0);
    // 场景切换
    let scene = ref(1);
    let go = ref(0);
    provide('go', go);

    // 音乐相关
    function playMusic() {
      const music = document.getElementById('music');
      flag.value = false;
      /*if (music.pause) {
        // music.pause = false;
        music.play();
      } else {
        music.pause = true;
        // music.play = false;
        music.pause();
      }*/
      music.play();
    }
    function puaseMusic() {
      let music = document.getElementById('music');
      flag.value = true;
      music.pause();
    }

    // 开始
    function start() {
      startBtn.value = 0;
      // 传入给Scene01时,初始页面消失,进入新的画面
      go.value = 1;
    }

    onMounted(() => {
      // toggleSound()
      setTimeout(() => {
        startBtn.value = 1
        role.value = 1
      }, 2000);
    });

    return {
      flag,
      playMusic,
      puaseMusic,
      startBtn,
      start,
      role,
      scene
    }
  },
}
</script>


<style scoped>
.star-bottom {
  position: relative;
  width: 100%;
  height: 100vh;
  /* bottom: 0; */
  /* z-index: 3; */
  overflow: hidden;
  z-index: 3;
}

.role {
  height: 7.65rem;
  width: 5.05rem;
  background-image: url('../assets/pmd/role.png');
  animation: role-moving .6s steps(6) infinite;
  position: absolute;
  bottom: 9rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
}

.record-bg {
  width: 25rem;
  bottom: -15.5rem;
  left: 50%;
  animation-name: Effect1, rotate-record;
  animation-duration: 3s, 5s;
  animation-timing-function: linear, linear;
  animation-delay: 0, 2s;
  animation-iteration-count: 1, infinite;
  /* animation-fill-mode:forwards, forwards;
  animation-direction:normal, alternate; */
  /* animation: rotate-record 5s linear infinite; */
}

.star-btn {
  width: 12rem;
  margin: auto;
  left: 0;
  right: 0;
  bottom: 3.5rem;
  /* left: 50%; */
  /* transform: translateX(-50%); */
  /* animation: bounceIn 1s 1s; */
}

@keyframes role-moving {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: 30.5rem 0;
  }
}

@keyframes rotate-record {
  0% {
    transform: translate(-50%, 0) rotate(360deg)
  }

  100% {
    transform: translate(-50%, 0) rotate(0deg)
  }
}

@keyframes Effect1 {
  0% {
    /* transform: translateY(-200px); */
    /* margin-top:20px; */
    opacity: 0;
  }

  100% {
    /* transform: translateY(200px); */
    /* margin-top:0px; */
    opacity: 1;
  }
}
</style>
