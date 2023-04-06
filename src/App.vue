<template>
  <router-view></router-view>
</template>

<script>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router'
export default {
  name: 'App',
  setup() {
    const router = useRouter();
    onMounted(() => {
      if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
        router.push("/ys_pmd");
      } else {
        router.push("/ys_pc");
      }
    });
  }
}
</script>