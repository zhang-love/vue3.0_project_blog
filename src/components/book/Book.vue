<template>
    <div id = "particles" class="">
        <vue-particles
                color="#E8DFE8"
                :particleOpacity="0.7"
                :particlesNumber="80"
                shapeType="circle"
                :particleSize="4"
                linesColor="#133b88"
                :linesWidth="1"
                :lineLinked="true"
                :lineOpacity="0.4"
                :linesDistance="150"
                :moveSpeed="3"
                :hoverEffect="true"
                hoverMode="grab"
                :clickEffect="true"
                clickMode="push"
        >
        </vue-particles>
    </div>
</template>

<script>
    export default {
        name: "Book",
        data() {
            return {}
        },
        mounted(){
            /**
             * 粒子特效背景
             */

        },
    }
</script>

<style>

</style>