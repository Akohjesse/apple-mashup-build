<template>
    <div class="ipad">
        <div class="ipad_vid" data-scroll-sticky data-scroll data-scroll-target=".ipad">
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
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from "@vue/runtime-core";
import gsap from "gsap";

onMounted(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                gsap.set(entry.target, {
                    autoAlpha: 0,
                    y: 500,
                });
                if (entry.isIntersecting) {
                    gsap.to(entry.target, {
                        y: 0,
                        autoAlpha: 1,
                        duration: 1,
                        stagger: 1,
                    });
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.5,
            rootMargin: "-40px",
        }
    );

    let texts = gsap.utils.toArray(" .qwe");
    texts.forEach((u) => {
        observer.observe(u);

        setTimeout(() => {
            gsap.to(u, {
                y: -300,
                autoAlpha: 0,
                duration: 1,
                onComplete: () => {
                    document.querySelector(".ipad_vid_animtext h1").style.display = "none";
                },
            });
        }, 2000);
        setTimeout(() => {
            document.querySelectorAll(".ipad_vid_animtext h2").forEach((e) => {
                e.style.display = "block";
            });
        }, 3000);
    });
});
</script>

<style lang="scss" scoped>
.ipad {
    &_vid {
        width: 100%;
        video {
            width: 100%;
        }
        &_animtext {
            position: absolute;
            width: 100%;
            top: 20rem;
            text-align: center;
            h1 {
                background-image: linear-gradient(129deg, #dc79ff, #256bfa);
                font-size: toRem(90);
                -webkit-text-fill-color: transparent;
                -webkit-background-clip: text;
            }
            h2 {
                color: $fadewhite;
                font-size: toRem(80);
                font-weight: 500;
                display: none;
            }
        }
    }
}
</style>
