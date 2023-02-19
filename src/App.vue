<script setup>
import { onMounted } from "@vue/runtime-core";
import LocomotiveScroll from "locomotive-scroll";
import Watch_ultra from "./components/watch_ultra.vue";

onMounted(() => {
    const scroll = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        lerp: 0.019,
    });

    setTimeout(() => {
        scroll.update();
    }, 500);
})
</script>



<template>
    <div class="apple_mashup" data-scroll-container>
        <Watch_ultra />
    </div>
</template>

<style scoped></style>
