<script setup>
import { onMounted } from "@vue/runtime-core";
import LocomotiveScroll from "locomotive-scroll";
import Watch_ultra from "./components/watch_ultra.vue";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
    const scroll = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        lerp: 0.02,
    });

    scroll.on("scroll", (instance) => {
        ScrollTrigger.update();
        document.documentElement.setAttribute("data-scrolling", instance.direction);
    });

    ScrollTrigger.defaults({
        scroller: "[data-scroll-container]",
    });

    ScrollTrigger.scrollerProxy(scroll.el, {
        scrollTop(value) {
            return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
        },

        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            };
        },
        pinType: document.querySelector("[data-scroll-container]").style.transform ? "transform" : "fixed",
    });

    ScrollTrigger.addEventListener("refresh", () => scroll.update());
    ScrollTrigger.refresh();

    setTimeout(() => {
        scroll.update();
    }, 100);
});
</script>

<template>
    <div class="apple_mashup">
        <Watch_ultra />
    </div>
</template>

<style scoped></style>
