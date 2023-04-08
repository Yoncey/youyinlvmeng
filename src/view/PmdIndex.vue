<template>
  <img v-if="flag" src="../assets/pmd/music1.png" @click="toggleSound" />
  <img v-if="!flag" src="../assets/pmd/music2.png" @click="toggleSound2" />
  这里是移动端！！
  <!-- 音乐 -->
  <audio id="music" controls loop>
    <source src="../assets/music/GenshinImpactMainTheme.ogg" />
  </audio>
</template>

<script>
import { ref, onMounted } from 'vue'
export default {
  name: 'PmdIndex',
  setup() {
    let flag = ref(true);
    // alert('这里是移动端');
    function toggleSound() {
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
    function toggleSound2() {
      let music = document.getElementById('music');
      flag.value = true;
      music.pause();
    }
    onMounted(() => {
      // toggleSound()
    });
    return { flag, toggleSound, toggleSound2 }
  },
}
</script>


<style scoped></style>
