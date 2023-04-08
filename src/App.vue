<template>
  <PcIndex v-if="flag" />
  <PmdIndex v-if="!flag" />
  <!-- <router-view></router-view> -->
</template>

<script>
import PcIndex from './view/PcIndex.vue';
import PmdIndex from './view/PmdIndex.vue';
import { onMounted, ref } from 'vue';
// import { useRouter } from 'vue-router'
export default {
  name: 'App',
  components: {
    PcIndex,
    PmdIndex,
  },
  setup() {
    let flag = ref(true);
    function checkUserAgent() {
      if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
        // router.push("/ys_pmd");
        flag.value = false;
        // alert('456')
        console.log(flag.value)
      } else {
        // router.push("/ys_pc");
        flag.value = true;
        // alert('123')
        console.log(flag.value)
      }
    }
    // const router = useRouter();
    onMounted(() => {
      checkUserAgent();
    });
    return { flag };
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}


img {
  position: absolute;
  -webkit-user-drag: none;
}

.music-control {
  position: absolute;
  top: 3%;
  right: 10vh;
  z-index: 3;
}

.pause {
  animation: rotate 5s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotateZ(0);
  }

  100% {
    transform: rotateZ(360deg);
  }
}
</style>