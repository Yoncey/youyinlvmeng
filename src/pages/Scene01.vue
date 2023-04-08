<template>
    <div class="bg">
        <!-- 背景 -->
        <img src="../assets/pmd/scene_bg0.png">
        <!-- 云朵 -->
        <img class="cloud1" src="../assets/pmd/scene1_cloud0.png">
        <img class="cloud2" src="../assets/pmd/scene1_cloud1.png">
        <img class="cloud3" src="../assets/pmd/scene1_cloud2.png">
        <img class="cloud4" src="../assets/pmd/scene1_cloud3.png">

        <!-- 场景一 -->
        <Transition name="animate__animated animate__bounce" leave-active-class="animate__bounceOut">
            <div v-if="go == !1">
                <!-- 云 -->
                <img class="cloud" src="../assets/pmd/begin_cloud.png">
                <!-- 草地 -->
                <img class="cao" src="../assets/pmd/begin_down.png">
                <img class="grass" src="../assets/pmd/begin_cao.png">
                <img class="cao" src="../assets/pmd/begin_caoUp.png" style="z-index: 1;">
                <!-- 树 -->
                <TransitionGroup appear name="animate__animated animate__bounce" enter-active-class="animate__bounceIn">
                    <img class="tree4" src="../assets/pmd/begin_tree4.png" key="4">
                    <img class="tree3" src="../assets/pmd/begin_tree3.png" key="3">
                    <img class="tree2" src="../assets/pmd/begin_tree2.png" key="2">
                    <img class="tree1" src="../assets/pmd/begin_tree1.png" key="1">
                </TransitionGroup>
                <!-- 标题 -->
                <div class="title-bg">
                    <Transition name="animate__animated animate__bounce" enter-active-class="animate__bounceIn">
                        <img v-if="title == 1" class="title" src="../assets/pc/scene_label.png">
                    </Transition>
                    <div v-if="title == 1">
                        <img class="highlight-1" src="../assets/pc/scene_star0.png">
                        <img class="highlight-2" src="../assets/pc/scene_star1.png">
                        <img class="star-1" src="../assets/pc/scene_star2.png">
                        <img class="star-2" src="../assets/pc/scene_star3.png">
                        <img class="star-3" src="../assets/pc/scene_star4.png">
                        <img class="star-4" src="../assets/pc/scene_star5.png">
                    </div>
                </div>
            </div>
        </Transition>

        <!-- 场景二 -->
        <Transition name="animate__animated animate__bounce" leave-active-class="animate__bounceOut">
            <div  style="position: relative; height: 100vh;">
                <!-- 草地 -->
                <Transition name="animate__animated animate__bounce" enter-active-class="animate__fadeIn">
                    <img v-if="go == 1" class="ground" src="../assets/pmd/scene1_img0.png">
                </Transition>

            </div>
        </Transition>






    </div>
</template>
  
<script>
import { ref, onMounted, inject } from 'vue'
export default {
    name: 'Scene01',
    setup() {
        let go = inject('go');
        let goReturn = go;

        let title = ref(0);
        onMounted(() => {
            setTimeout(() => {
                title.value = 1;
            }, 1000);
        })
        return {
            title,
            go,
            goReturn
        }
    }
}
</script>
  
  
<style scoped>
.bg {
    position: absolute;
    height: 100vh;
    width: 100%;
    overflow: hidden;
}

.cloud {
    width: 110%;
    margin: 0 auto;
    left: 0;
    right: 0;
    bottom: 10rem;
    animation: cloud 1s alternate infinite;
}

.cloud1 {
    width: 9rem;
    top: -1rem;
    left: -.3rem;
    animation: cloud .8s alternate infinite;
}

.cloud2 {
    width: 9rem;
    top: 1rem;
    right: -5rem;
    animation: cloud .7s alternate infinite;
}

.cloud3 {
    width: 12rem;
    top: 1rem;
    right: 1rem;
    animation: cloud .4s alternate infinite;
}

.cloud4 {
    width: 9rem;
    top: 4rem;
    left: 2rem;
    animation: cloud .6s alternate infinite;
}

.cao {
    width: 100%;
    bottom: 0;
}

.grass {
    width: 100%;
    bottom: 6rem;
    animation: grass-wave 1s linear alternate infinite;
}

.tree1 {
    width: 15rem;
    bottom: 8rem;
    left: -2rem;
    animation-duration: .5s;
    animation-delay: .6s;
}

.tree2 {
    width: 15rem;
    bottom: 5rem;
    right: -12.5rem;
    animation-duration: .5s;
    animation-delay: .5s;
}

.tree3 {
    width: 10rem;
    bottom: 8.5rem;
    right: -3rem;
    animation-duration: .5s;
    animation-delay: .7s;
}

.tree4 {
    width: 12rem;
    bottom: 9rem;
    right: 1rem;
    animation-duration: .5s;
    animation-delay: .8s;
}

.title-bg {
    position: relative;
    margin: 0 auto;
    width: 80%;
    left: 0;
    right: 0;
    top: 13rem;
}

.title {
    height: 7.5rem;
    margin: 0 auto;
    left: 0;
    right: 0;
    z-index: 1;
}

.highlight-1 {
    width: 1.3rem;
    margin: 0 auto;
    top: 5.5rem;
    left: 19.5rem;
    right: 0;
    animation: hightlight-scale-1 .5s linear alternate infinite;
}

.highlight-2 {
    width: 2rem;
    margin: 0 auto;
    top: 4rem;
    left: 19.5rem;
    right: 0;
    animation: hightlight-scale-2 .5s .3s linear alternate infinite;
}

.star-1 {
    width: .5rem;
    margin: 0 auto;
    top: 1.5rem;
    left: 0;
    right: 10rem;
    animation: hightlight-scale-3 .8s linear alternate infinite;
}

.star-2 {
    width: .8rem;
    margin: 0 auto;
    top: 1rem;
    left: 0;
    right: 11rem;
    animation: hightlight-scale-3 .8s .3s linear alternate infinite;
}

.star-3 {
    width: .6rem;
    margin: 0 auto;
    top: 5rem;
    left: 0;
    right: 17rem;
    animation: hightlight-scale-3 .8s .5s linear alternate infinite;
}

.star-4 {
    width: .8rem;
    margin: 0 auto;
    top: 4.3rem;
    left: 0;
    right: 18rem;
    animation: hightlight-scale-3 1s .3s linear alternate infinite;
}

/* 场景一 */
.ground {
    /* position: absolute; */
    width: 100%;
    bottom: 0;
}

@keyframes cloud {
    0% {
        transform: translateX(-2%);
    }

    100% {
        transform: translateX(-1%);
    }
}

@keyframes grass-wave {
    0% {
        transform: skewX(10deg) skewY(0);
    }

    100% {
        transform: skewX(0) skewY(0);
    }
}

@keyframes hightlight-scale-1 {
    0% {
        transform: scale(50%);
    }

    100% {
        transform: scale(100%)
    }
}

@keyframes hightlight-scale-2 {
    0% {
        transform: scale(50%);
    }

    100% {
        transform: scale(100%)
    }
}

@keyframes hightlight-scale-3 {
    0% {
        transform: scale(0);
    }

    100% {
        transform: scale(100%)
    }
}
</style>
  