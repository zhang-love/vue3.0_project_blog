<template>
    <div style="width:100%;height:100%;">
        <div class="carousel_wrap">
            <el-carousel >
                <el-carousel-item v-for="item in carouselImg" :key="item">
                    <img :src="item" width="100%" height="300px" />
                    <!--<img :src="s" height="300" width="100%"/>-->
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Recommend",
        data() {
            return {
                //动态添加图片的三种方式，使用require，或者用绝对路径，将图片放在static目录下,或者使用import
                carouselImg:[require("../../assets/img/1.jpeg"),require("../../assets/img/3.jpg"),require("../../assets/img/login.jpg")],
                s:require("../../assets/img/1.jpeg"),
            }
        }
    }
</script>

<style>
</style>