<template>
    <div class="ipad">
        <div class="ipad_vid">
            <video
                autoplay
                muted
                loop
                src="https://www.apple.com/105/media/us/ipad-air/2022/5abf2ff6-ee5b-4a99-849c-a127722124cc/anim/features/large_2x.mp4"
            ></video>
            <div class="ipad_vid_animtext">
                <h1 class="qwe">
                    Light. Bright.<br />
                    Full of might.
                </h1>
                <h2 class="qwe">
                    Supercharged by the <br />
                    Apple M1 chip.
                </h2>
                <h2 class="qwe">Blazing-fast 5G.</h2>
                <h2 class="qwe">Five gorgeous colors.</h2>
            </div>
        </div>
    </div>
</template>

<!-- <script setup>
import { onMounted } from "@vue/runtime-core";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
    const item = gsap.utils.toArray(".ipad_vid_animtext .qwe");

    gsap.set(item, {
        autoAlpha: 0,
        y: 100,
    });
    gsap.to(item, {
        autoAlpha: 1,
        duration: 1,
        y: 0,
        stagger: 1,
        ease: "ease-in",
        scrollTrigger: {
            trigger: ".ipad_vid",
            start: "-=20",
            scrub: true,
            pin: "body",
            toggleActions: "play play reverse reverse",
            end: "+=500",
        },
        onComplete: () => {
            gsap.to(item, {
                y: -200,
                autoAlpha: 0,
            });
        },
    });
});
</script> -->

<style lang="scss" scoped>
.ipad {
    &_vid {
        position: relative;
        width: 100%;
        height: 100vh;
        video {
            width: 100%;
        }
        &_animtext {
            @include flex_col(3rem);
            position: absolute;
            width: 100%;
            top: 5rem;
            text-align: center;
            h1 {
                background-image: linear-gradient(129deg, #dc79ff, #256bfa);
                font-size: toRem(81);
                -webkit-text-fill-color: transparent;
                -webkit-background-clip: text;
            }
            h2 {
                color: $fadewhite;
                font-size: toRem(70);
                font-weight: 500;
            }
        }
    }
}
</style>
