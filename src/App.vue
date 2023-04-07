<template>
  <PcIndex v-if="flag == 0" />
  <PmdIndex v-if="flag == 1" />
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
    let flag = ref(0);
    function checkUserAgent() {
      if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
        // router.push("/ys_pmd");
        flag.value = 1;
        // alert('456')
        console.log(flag.value)
      } else {
        // router.push("/ys_pc");
        flag.value = 0;
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
</style>