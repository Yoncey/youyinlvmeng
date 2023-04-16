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
                    <!-- <div v-if="windRoate == 0">
                        <Transition appear name="animate__animated animate__bounce" enter-active-class="animate__fadeIn">
                            <img class="hintTxt" src="../assets/pmd/scene1_hintTxt.png">
                        </Transition>
                    </div> -->
                    <div v-if="windRoate == 0">
                        <Transition appear name="animate__animated animate__bounce" enter-active-class="animate__fadeIn">
                            <img v-if="Txt1 == 1" class="hintTxt" src="../assets/pmd/scene1_hintTxt.png">
                        </Transition>
                    </div>
                </div>
            </div>
        </Transition>

        <!-- 场景二 -->
        <Transition name="animate__animated animate__bounce" leave-active-class="animate__bounceOut">
            <!-- 等于2时，消失进入场景三 -->
            <div v-if="keli != 2">
                <!-- 进入场景二：注意，整体往后推移3秒 -->
                <!-- <div style="position: relative; height: 100vh;"> 测试用，做完删掉，换下面的div -->
                <div v-if="windRoate == 2" style="position: relative; height: 100vh;">
                    <!-- 草地 -->
                    <Transition appear name="animate__animated animate__bounce" enter-active-class="animate__fadeIn">
                        <img class="ground" src="../assets/pmd/scene2_img0.png" style="animation-delay: 3s;">
                    </Transition>
                    <!-- 太阳 -->
                    <img class="sun" src="../assets/pmd/scene2_sun.png">
                    <!-- 其他 -->
                    <TransitionGroup appear name="animate__animated animate__bounce" enter-active-class="animate__bounceIn">
                        <!-- 云朵 -->
                        <img class="cloud-2" src="../assets/pmd/scene2_cloud.png" key="1">
                        <!-- 草丛 -->
                        <img class="grass-1" src="../assets/pmd/scene2_img3.png" key="2">
                        <img class="grass-2" src="../assets/pmd/scene2_img2.png" key="3">
                        <img class="grass-3" src="../assets/pmd/scene2_img6.png" key="4">
                        <img class="grass-4" src="../assets/pmd/scene2_img5.png" key="5">
                        <img class="grass-5" src="../assets/pmd/scene2_img4.png" key="6">
                    </TransitionGroup>
                    <!-- 中间建筑 -->
                    <div class="castlePosition">
                        <Transition appear name="animate__animated animate__bounce" enter-active-class="animate__bounceIn">
                            <!-- 风车 -->
                            <img class="windmill-7" src="../assets/pmd/scene2_img9_2.png">
                        </Transition>
                        <!-- 风车 -->
                        <div v-if="fengche == 0">
                            <Transition appear name="animate__animated animate__bounce"
                                enter-active-class="animate__bounceIn">
                                <!-- 风车 -->
                                <img class="windmill-8" src="../assets/pmd/scene2_img9_1.png">
                            </Transition>
                        </div>
                        <!-- 旋转风车 -->
                        <div v-if="fengche == 1">
                            <img class="windmill-8-1" src="../assets/pmd/scene2_img9_1.png">
                        </div>
                        <TransitionGroup appear name="animate__animated animate__bounce"
                            enter-active-class="animate__bounceIn">
                            <!-- 楼房 -->
                            <img class="build-1" src="../assets/pmd/scene2_img7.png" key="3">
                            <img class="build-2" src="../assets/pmd/scene2_img8.png" key="4">
                            <!-- 城堡 -->
                            <img class="castle-3" src="../assets/pmd/scene2_img1.png" key="5">
                            <!-- 点击敲击窗户 -->
                            <div v-if="keli != 1" key="6">
                                <img v-if="Txt2 == 1" class="hintTxt2" src="../assets/pmd/scene2_hintTxt.png">
                                <img v-if="Txt2 == 1" class="windowLight" src="../assets/pmd/scene2_hintImg.png"
                                    @click="keliShow">
                            </div>
                            <!-- 可莉 -->
                            <div v-if="keli == 1">
                                <img class="keli" src="../assets/pmd/scene2_role.png">
                            </div>
                        </TransitionGroup>
                    </div>
                </div>
            </div>
        </Transition>

        <!-- 场景三 -->
        <Transition name="animate__animated animate__bounce" leave-active-class="animate__bounceOut">
            <!-- 等于2时，消失进入场景四 -->
            <!-- <div v-if="keli != 2"> -->
            <!-- 进入场景三：注意，整体往后推移3秒 -->
            <!--<div style="position: relative; height: 100vh;">  测试用，做完删掉，换下面的div -->
            <div v-if="keli == 2" style="position: relative; height: 100vh;">
                <!-- 背景 -->
                <div v-if="scene3Bg == 0">
                    <Transition appear name="animate__animated animate__bounce" enter-active-class="animate__fadeIn">
                        <img class="ground-2" src="../assets/pmd/scene3_img0.png" style="animation-delay: 3s;">
                    </Transition>
                </div>
                <div v-if="scene3Bg == 1">
                    <img class="ground-2-2" src="../assets/pmd/scene3_img0.png">
                </div>
                <!-- 寒天之钉 -->
                <div v-if="hantianzhiding == 0">
                    <Transition appear name="animate__animated animate__bounce" enter-active-class="animate__bounceIn">
                        <img class="pillar" src="../assets/pmd/scene3_img1_up.png">
                    </Transition>
                </div>
                <!-- 寒天之钉：上下晃动 -->
                <img v-if="hantianzhiding == 1" class="pillar-2" src="../assets/pmd/scene3_img1_up.png">
                <!-- 雪山&雪地 -->
                <TransitionGroup appear name="animate__animated animate__bounce" enter-active-class="animate__backInUp">
                    <!-- 雪山 -->
                    <img class="snowberg" src="../assets/pmd/scene3_img1.png" key="1">
                    <!-- 雪地 -->
                    <img class="snowfield-1" src="../assets/pmd/scene3_img3.png" key="2">
                </TransitionGroup>
                <!-- 其他 -->
                <TransitionGroup appear name="animate__animated animate__bounce" enter-active-class="animate__bounceIn">
                    <!-- 右侧雪山平台 -->
                    <img class="platform" src="../assets/pmd/scene3_img2.png" key="1">
                    <!-- 阿贝多 -->
                    <img class="abeiduo" src="../assets/pmd/scene3_img5.png" key="2">
                </TransitionGroup>
                <!-- 树1 -->
                <div v-if="tree1 == 0">
                    <Transition appear name="animate__animated animate__bounce" enter-active-class="animate__bounceIn">
                        <img class="tree-4" src="../assets/pmd/scene3_img4.png">
                    </Transition>
                </div>
                <div v-if="tree1 == 1">
                    <img class="tree-4-2" src="../assets/pmd/scene3_img4.png">
                </div>
                <!-- 树2 -->
                <div v-if="tree2 == 0">
                    <Transition appear name="animate__animated animate__bounce" enter-active-class="animate__bounceIn">
                        <img class="tree-5" src="../assets/pmd/scene3_img7.png">
                    </Transition>
                </div>
                <div v-if="tree2 == 1">
                    <img class="tree-5-2" src="../assets/pmd/scene3_img7.png">
                </div>
                <!-- 点击查看画作 -->
                <div v-if="Txt3 == 1">
                    <img class="hintTxt3" src="../assets/pmd/scene3_hintTxt.png">
                    <img class="drawLight" src="../assets/pmd/scene3_hintImg.png" @click="finsih">
                </div>
                <!-- 树3 -->
                <div v-if="tree3 == 0">
                    <Transition appear name="animate__animated animate__bounce" enter-active-class="animate__bounceIn">
                        <img class="tree-6" src="../assets/pmd/scene3_img8.png">
                    </Transition>
                </div>
                <div v-if="tree3 == 1">
                    <img class="tree-6-2" src="../assets/pmd/scene3_img8.png">
                </div>
                <!-- 雪地 -->
                <Transition appear name="animate__animated animate__bounce" enter-active-class="animate__backInUp">
                    <img class="snowfield-2" src="../assets/pmd/scene3_img6.png">
                </Transition>
                <!-- 结束 -->
                <div v-if="over == 1">
                    <Transition appear name="animate__animated animate__bounce" enter-active-class="animate__fadeIn">
                        <div class="mask">
                            <img class="last" src="../assets/pmd/music3_frame.png">
                        </div>
                    </Transition>
                </div>
            </div>
            <!-- </div> -->
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
        let Txt1 = ref(0);
        let Txt2 = ref(0);
        let Txt3 = ref(0);
        // 变为1时，风车开始转动，按钮消失
        // 变为2时，进入场景二
        let windRoate = ref(0);
        // 变为1时，可莉出现，按钮消失
        // 变为2时，进入场景三
        let keli = ref(0);
        let fengche = ref(0);
        // 场景三，相关动画切换
        let scene3Bg = ref(0);
        let tree1 = ref(0);
        let tree2 = ref(0);
        let tree3 = ref(0);
        let hantianzhiding = ref(0);
        // 结束
        let over = ref(0);

        // 风车旋转
        function Roate() {
            windRoate.value = 1;
            // 2秒后进入场景二
            setTimeout(() => {
                windRoate.value = 2;
            }, 2000);
            // 6.6秒后，场景二的风车旋转
            setTimeout(() => {
                fengche.value = 1;
            }, 6500);
            // 7秒后“敲击窗户”出现
            setTimeout(() => {
                Txt2.value = 1;
            }, 7000);
        }
        // 可莉出现
        function keliShow() {
            keli.value = 1;
            // 2秒后进入场景三
            setTimeout(() => {
                keli.value = 2;
            }, 2000);
            // 7秒后“查看画作”出现
            setTimeout(() => {
                Txt3.value = 1;
            }, 7000);
            // ?秒后，场景三背景、寒天之钉、树进行交替
            setTimeout(() => {
                scene3Bg.value = 1;
            }, 6000);
            setTimeout(() => {
                tree1.value = 1;
            }, 6500);
            setTimeout(() => {
                tree2.value = 1;
            }, 6600);
            setTimeout(() => {
                tree3.value = 1;
            }, 6800);
            setTimeout(() => {
                hantianzhiding.value = 1;
            }, 7000);
        }

        function finsih() {
            over.value = 1;
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
            Txt2,
            keliShow,
            keli,
            fengche,
            Txt3,
            scene3Bg,
            tree1,
            tree2,
            tree3,
            hantianzhiding,
            finsih,
            over,
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
    animation-name: fadeIn;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    /* animation-delay: 2s; */
}

/* 场景二 */
.sun {
    width: 8rem;
    left: 4.5rem;
    top: 2.5rem;
    animation-name: fadeIn, rotate;
    animation-duration: 3s, 5s;
    animation-timing-function: linear, linear;
    animation-delay: 0, 3s;
    animation-iteration-count: 1, infinite;
}

.cloud-2 {
    margin: 0 auto;
    width: 100%;
    left: 0;
    right: 0;
    bottom: 11rem;
    animation-name: fadeIn, tension;
    animation-duration: 3s, .5s;
    animation-timing-function: linear, linear;
    animation-delay: 0, 3s;
    animation-iteration-count: 1, infinite;
    animation-direction: normal, alternate;
}

.castlePosition {
    position: absolute;
    /* background-color: tomato; */
    width: 30rem;
    height: 100vh;
    left: 50%;
    transform: translateX(-50%);
}

.windmill-7 {
    width: 5rem;
    left: 2rem;
    bottom: 13rem;
    animation-delay: 4.3s;
}

.windmill-8 {
    width: 10rem;
    left: -1rem;
    bottom: 20rem;
    animation-delay: 4.3s;
}

.windmill-8-1 {
    animation: rotate 5s linear infinite;
    width: 10rem;
    left: -1rem;
    bottom: 20rem;
    /* animation-delay: 4.3s; */
}


.build-1 {
    width: 6.5rem;
    right: 3rem;
    bottom: 25rem;
    animation-delay: 4.5s;
}

.build-2 {
    width: 5rem;
    left: 2rem;
    bottom: 9rem;
    animation-delay: 4.4s;
}

.castle-3 {
    width: 24rem;
    margin: 0 auto;
    left: 0;
    right: 0;
    bottom: 0;
    animation-delay: 4s;
}

.hintTxt2 {
    width: 10rem;
    left: 2.5rem;
    /* bottom: 20.5rem; */
    bottom: 25.2rem;
    animation-name: fadeIn;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    /* animation-delay: 5.8s; */
}

.windowLight {
    width: 3.3rem;
    left: 6rem;
    /* bottom: 16.8rem; */
    bottom: 21.5rem;
    /* animation-delay: 5.8s; */
}

.keli {
    width: 15rem;
    left: 3.5rem;
    /* bottom: 20.5rem; */
    bottom: 25.2rem;
    animation-name: bounceIn;
    animation-duration: 1s;
    /* animation-timing-function: linear; */
    animation-delay: .5s;
}

.grass-1 {
    width: 5.5rem;
    left: 0rem;
    bottom: 5rem;
    z-index: 1;
    animation-delay: 4.9s;
}

.grass-2 {
    width: 1.5rem;
    left: 0;
    bottom: 2rem;
    z-index: 1;
    animation-delay: 4.7s;
}

.grass-3 {
    width: 6rem;
    right: 0;
    bottom: 8rem;
    z-index: 1;
    animation-delay: 5.7s;
}

.grass-4 {
    width: 5rem;
    right: 4rem;
    bottom: 8rem;
    z-index: 1;
    animation-delay: 5.4s;
}

.grass-5 {
    width: 150%;
    right: 0;
    bottom: 2.8rem;
    z-index: 1;
    animation-delay: 5.3s;
}

/* 场景三 */
.ground-2 {
    width: 105%;
    bottom: 0;
}

.ground-2-2 {
    width: 105%;
    bottom: 0;
    animation: move-2 .8s linear alternate infinite;
}

.pillar {
    width: 7rem;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 3rem;
    animation-delay: 4s;
}

.pillar-2 {
    width: 7rem;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 3rem;
    animation: translation .8s linear alternate infinite;
}

.snowberg {
    width: 110%;
    bottom: 15rem;
    left: -5%;
    animation-delay: 3.2s;
}

.snowfield-1 {
    width: 100%;
    bottom: 0;
    animation-delay: 3.2s;
}

.snowfield-2 {
    width: 100%;
    bottom: -3rem;
    animation-delay: 3.6s;
}

.platform {
    width: 25rem;
    right: 0;
    bottom: 8rem;
    animation-delay: 3.4s;
}

.abeiduo {
    width: 12rem;
    right: 0;
    bottom: 2rem;
    animation-delay: 3.6s;
}

.tree-4 {
    left: 1rem;
    bottom: 2rem;
    animation-delay: 3.5s;
}

.tree-5 {
    width: 13rem;
    left: -2rem;
    bottom: 2rem;
    animation-delay: 3.6s;
}

.tree-6 {
    width: 11rem;
    right: -1rem;
    bottom: -5rem;
    animation-delay: 3.8s;
}

.tree-4-2 {
    bottom: 0;
    animation: shake .8s .1s linear alternate infinite;
}

.tree-5-2 {
    width: 13rem;
    left: -2rem;
    bottom: 2rem;
    animation: shake .8s .3s linear alternate infinite;
}

.tree-6-2 {
    width: 11rem;
    right: -1rem;
    bottom: -5rem;
    animation: shake .8s .2s linear alternate infinite;
}

.hintTxt3 {
    width: 12rem;
    right: 0;
    bottom: 23rem;
    animation-name: fadeIn;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    /* animation-delay: 2s; */
}

.drawLight {
    width: 12rem;
    right: 0;
    bottom: 2rem;
    /* animation-delay: 3.6s; */
}

.mask {
    position: relative;
    background-color: rgba(0, 0, 0, .5);
    height: 100vh;
    z-index: 3;
}

.last {
    width: 90%;
    left: 50%;
    top: 25%;
    transform: translateX(-50%) translateY(-25%);
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

@keyframes tension {
    0% {
        height: 28rem;
    }

    100% {
        height: 27rem;
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

@keyframes translation {
    0% {
        top: 2.8rem;
    }

    100% {
        top: 3.2rem;
    }
}

@keyframes shake {
    0% {
        transform: rotate(-2deg)
    }

    100% {
        transform: rotate(2deg)
    }
}
</style>
  