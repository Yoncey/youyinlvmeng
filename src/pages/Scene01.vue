<template>
    <div class="bg">
        <!-- 背景 -->
        <img src="../assets/pmd/scene_bg0.png">
        <!-- 云朵 -->
        <img class="cloud1" src="../assets/pmd/scene1_cloud0.png">
        <img class="cloud2" src="../assets/pmd/scene1_cloud1.png">
        <img class="cloud3" src="../assets/pmd/scene1_cloud2.png">
        <img class="cloud4" src="../assets/pmd/scene1_cloud3.png">

        <!-- 起始页 -->
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

        <!-- 场景一 -->
        <Transition name="animate__animated animate__bounce" leave-active-class="animate__bounceOut">
            <!-- 等于2时，消失进入场景二 -->
            <div v-if="windRoate != 2">
                <!-- 等于1的时候（由父组件provide），集体进入场景一 -->
                <div v-if="go == 1" style="position: relative; height: 100vh;">
                    <!-- 草地 -->
                    <Transition appear name="animate__animated animate__bounce" enter-active-class="animate__fadeIn">
                        <img class="ground" src="../assets/pmd/scene1_img0.png">
                    </Transition>
                    <TransitionGroup appear name="animate__animated animate__bounce" enter-active-class="animate__bounceIn">
                        <!-- 风车2 -->
                        <img class="windmill-4" src="../assets/pmd/scene2_img9_2.png" key="1">
                        <img v-if="windRoate == 0" class="windmill-3" src="../assets/pmd/scene2_img9_1.png" key="2">
                        <img v-if="windRoate == 1" class="windmill-3" src="../assets/pmd/scene2_img9_1.png"
                            style="animation: rotate 4s linear infinite;" key="2">
                        <!-- 城堡 -->
                        <img class="castle-1" src="../assets/pmd/scene1_img5.png" key="3">
                        <!-- 风车1 -->
                        <img v-if="windRoate == 0" class="windmill-2" src="../assets/pmd/scene1_img2_2.png" key="4">
                        <img v-if="windRoate == 0" class="windmill-1" src="../assets/pmd/scene1_img2_1.png" key="5"
                            @click="Roate">
                        <img v-if="windRoate == 1" class="windmill-2" src="../assets/pmd/scene2_img9_2.png" key="4">
                        <img v-if="windRoate == 1" class="windmill-1" src="../assets/pmd/scene2_img9_1.png"
                            style="animation: rotate 4s linear infinite;" key="5">
                        <!-- 风车3 -->
                        <img class="windmill-6" src="../assets/pmd/scene2_img9_2.png" key="6">
                        <img v-if="windRoate == 0" class="windmill-5" src="../assets/pmd/scene2_img9_1.png" key="7">
                        <img v-if="windRoate == 1" class="windmill-5" src="../assets/pmd/scene2_img9_1.png"
                            style="animation: rotate 4s linear infinite;" key="7">
                        <!-- 城堡 -->
                        <img class="castle-2" src="../assets/pmd/scene1_img2.png" key="8">
                        <!-- 树 -->
                        <img class="tree-1" src="../assets/pmd/scene1_img1_1.png" key="9">
                        <img class="tree-2" src="../assets/pmd/scene1_img1_0.png" key="10">
                        <img class="tree-3" src="../assets/pmd/scene1_img1_2.png" key="11">
                    </TransitionGroup>
                    <!-- 点击转动风车 -->
                    <div v-if="windRoate == 0">
                        <img v-if="Txt1 == 1" class="hintTxt" src="../assets/pmd/scene1_hintTxt.png">
                    </div>
                </div>
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
        let title = ref(0);
        let Txt1 = ref(0)
        // 变为1时，风车开始转动，按钮消失
        // 变为2时，进入场景二
        let windRoate = ref(0);

        function Roate() {
            windRoate.value = 1;
            setTimeout(() => {
                windRoate.value = 2;
            }, 2000);
        }

        onMounted(() => {
            setTimeout(() => {
                title.value = 1;
            }, 1000);
            setTimeout(() => {
                Txt1.value = 1;
            }, 2500);
        })
        return {
            title,
            go,
            windRoate,
            Roate,
            Txt1,
        }
    }
}
</script>
  
  
<style scoped>
/* 公用 */
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

/* 起始页 */
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

.windmill-1 {
    width: 10rem;
    left: 5rem;
    bottom: 22rem;
    animation-delay: 1s;
}

.windmill-2 {
    width: 3rem;
    left: 8.6rem;
    bottom: 20rem;
    animation-delay: 1s;
}

.windmill-3 {
    width: 8rem;
    left: 1rem;
    bottom: 20rem;
    animation-delay: 1.4s;
}

.windmill-4 {
    width: 3rem;
    left: 3.5rem;
    bottom: 17rem;
    animation-delay: 1.4s;
}

.windmill-5 {
    width: 7rem;
    right: 3.5rem;
    bottom: 21rem;
    animation-delay: 1.6s;
}

.windmill-6 {
    width: 3rem;
    right: 5.5rem;
    bottom: 18rem;
    animation-delay: 1.6s;
}

.castle-1 {
    width: 8rem;
    margin: 0 auto;
    left: 0;
    right: 0;
    bottom: 21rem;
    animation-delay: 1.8s;
}

.castle-2 {
    width: 26rem;
    margin: 0 auto;
    left: 0;
    right: 0;
    bottom: 10.5rem;
    animation-delay: .5s;
}

.tree-1 {
    width: 12rem;
    left: -1.5rem;
    bottom: 8rem;
    animation-delay: 1.1s;
}

.tree-2 {
    width: 8rem;
    left: -1rem;
    bottom: 2rem;
    animation-delay: 1.2s;
}

.tree-3 {
    width: 12rem;
    right: -1rem;
    bottom: 1rem;
    animation-delay: 1.5s;
}

.hintTxt {
    width: 10rem;
    left: 5rem;
    bottom: 33rem;
    animation-name: flash;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
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

@keyframes rotate {
    0% {
        transform: rotate(0deg)
    }

    100% {
        transform: rotate(360deg)
    }
}
</style>
  