<template>
    <div class="watchultra">
        <div class="watchultra_landing child_wrap">
            <div class="watchultra_landing_logo img mg_au">
                <img src="../assets/logo_watch_ultra.png" alt="" />
            </div>
            <h2 data-animation="header">Adventure awaits.</h2>
            <p data-animation="header" class="mg_au">
                Meet the most rugged and capable Apple Watch ever. With a robust titanium case, precision dual-frequency GPS, up to 36 hours of
                battery life, the freedom of cellular, and three specialized bands made for athletes and adventurers of all kinds.
            </p>
            <div class="watchultra_landing_hero_img mg_au">
                <img data-scroll data-scroll-speed="-1" data-scroll-delay="1" src="../assets/hero_watch_ultra_large_2x.jpeg" alt="" />
            </div>
        </div>
        <div class="watchultra_dpd">
            <div class="watchultra_dpd_txt child_wrap">
                <p data-animation="header">Design</p>
                <h1 data-animation="header">Pioneering engineering.</h1>
            </div>
            <video
                data-scroll
                autoplay
                muted
                data-scroll-speed="-1"
                ref="dpd_vid"
                src="https://www.apple.com/105/media/us/apple-watch-ultra/2022/4d9e62e1-fe94-4bb9-abbe-0b8c9626a304/anim/light-pass/medium_2x.mp4"
            ></video>
        </div>
        <div class="watchultra_tolove child_wrap">
            <div class="watchultra_tolove_txt">
                <p data-animation="header">Even more to discover</p>
                <h1 data-animation="header">Everything to love about Apple Watch.</h1>
                <p data-animation="header" class="c_gray">
                    With features that help you stay healthy, safe, and connected, the watch that pushes limits is also one you can wear every day.
                </p>
            </div>
            <div data-scroll-speed="4" data-scroll class="img mg_au">
                <img src="../assets/everything_hero.jpeg" alt="" />
            </div>
        </div>
        <div class="watchultra_nightmode">
            <div class="watchultra_nightmode_wrap child_wrap">
                <p data-animation="fade">
                    The biggest and brightest Apple Watch display. The Always‑On Retina display is 2000 nits at its peak and twice as bright as any
                    other Apple Watch. The bigger display provides more room for workout metrics and detail‑packed watch faces. The Wayfinder face
                    lets you rotate the Digital Crown to activate
                    <span class="highlight">Night Mode for better viewing in low light situations</span>.
                </p>
                <video
                    ref="nightmode_vid"
                    muted
                    src="https://www.apple.com/105/media/us/apple-watch-ultra/2022/4d9e62e1-fe94-4bb9-abbe-0b8c9626a304/anim/endurance_face_light-dark/large_2x.webm"
                ></video>
            </div>
            <button ref="trigger_btn" class="dg">hdwjkefruiwdokijeuhfg</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { IO } from "../animation/observe";
const dpd_vid = ref(null);
const nightmode_vid = ref(null);
const trigger_btn = ref(null);
onMounted(() => {
    trigger_btn.value.click();
    IO(dpd_vid.value).then(() => {
        dpd_vid.value.play();
    });
    IO(nightmode_vid.value, { threshold: 0.6, rootMargin: "-20px" }).then(() => {
        document.querySelector(".watchultra_nightmode").classList.toggle("dark");
        nightmode_vid.value.play();
    });
});
</script>

<style lang="scss" scoped>
.dg {
    visibility: hidden;
    opacity: 0;
}
h1 {
    font-weight: 700;
    font-size: toRem(110);
    line-height: 7rem;
}
.dark {
    background-color: #000 !important;
    color: #86868b;
    .highlight {
        color: red;
        transition: color 2s cubic-bezier(0.2, 0, 0.8, 1) 1.2s;
    }
}
.watchultra {
    width: 100%;
    &_landing {
        padding-top: 3rem;
        text-align: center;
        overflow: hidden;
        @include flex_col(1rem);
        &_logo {
            width: toRem(197);
        }
        h2 {
            font-size: toRem(80);
            color: $watch_orange;
            margin-bottom: 1rem;
        }
        p {
            width: 61%;
            margin-bottom: 1.5rem;
            font-weight: 600;
            font-size: toRem(24);
            color: $blacktxt;
        }
        &_hero_img {
            width: 100%;
            margin-top: 4rem;
        }
    }
    &_dpd {
        background: $fadewhite;
        width: 100%;
        overflow: hidden;
        padding-top: 6rem;
        @include flex_col(8rem);
        &_txt {
            padding-top: 6rem;
            @include flex_col(1rem);
            p {
                font-size: toRem(28);
                font-weight: 700;
            }
        }
        video {
            width: 1070px;
        }
    }
    &_nightmode {
        background-color: $fadewhite;
        color: #86868b;
        transition: background-color 1s cubic-bezier(0.2, 0, 0.8, 1) 1.2s;
        padding-top: 9rem;
        &_wrap {
            @include flex_col(5.5rem);
            p {
                max-width: 50%;
                align-self: self-end;
                font-size: toRem(19);
            }
            video {
                width: 90%;
            }
        }
    }
    &_tolove {
        overflow: hidden;
        height: 77rem;
        padding-top: 12rem;
        @include flex_col(9rem);
        &_txt {
            @include flex_col(2rem);
            p {
                font-size: toRem(26);
                max-width: 55%;
            }
        }
        .img {
            width: 35rem;
        }
    }
}
</style>
