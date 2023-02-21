<script setup>
import Watch_ultra from "./components/watch_ultra.vue";
import airpods2 from "./components/airpods2.vue";
import pencil from "./components/pencil.vue";
import SE from "./components/se.vue";
import Header from "./components/header.vue";
import ipad from "./components/ipad.vue";
import LocomotiveScroll from "locomotive-scroll";
import { onMounted } from "vue";
import { split } from "./animation/text";

onMounted(() => {
    split();
    const scroll = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        lerp: 0.07,
    });

    setTimeout(() => {
        scroll.update();
    }, 1000);
});
</script>

<template>
    <div class="apple_mashup">
        <Header />
        <ipad></ipad>

        <Watch_ultra />
        <airpods2></airpods2>
        <SE />
        <pencil></pencil>
    </div>
</template>

<style scoped></style>
