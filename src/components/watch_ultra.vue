<template>
    <div class="watchultra">
        <div class="watchultra_landing child_wrap">
            <div class="watchultra_landing_logo img mg_au">
                <img src="../assets/logo_watch_ultra.png" alt="" />
            </div>
            <h2>Adventure awaits.</h2>
            <p class="mg_au">
                Meet the most rugged and capable Apple Watch ever. With a robust titanium case, precision dual-frequency GPS, up to 36 hours of
                battery life, the freedom of cellular, and three specialized bands made for athletes and adventurers of all kinds.
            </p>
            <div class="links">
                <a href="">Watch the film</a>
                <a href="">Watch the event</a>
            </div>
            <div class="watchultra_landing_hero_img mg_au">
                <img src="../assets/hero_watch_ultra_large_2x.jpeg" alt="" />
            </div>
        </div>
        <div class="watchultra_dpd">
            <div class="watchultra_dpd_txt child_wrap">
                <p>Design</p>
                <h1>Pioneering engineering.</h1>
            </div>
            <video
                autoplay
                src="https://www.apple.com/105/media/us/apple-watch-ultra/2022/4d9e62e1-fe94-4bb9-abbe-0b8c9626a304/anim/light-pass/medium_2x.mp4"
            ></video>
        </div>
    </div>
</template>

<style lang="scss">
.watchultra {
    width: 100%;
    &_landing {
        padding-top: 3rem;
        text-align: center;
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
            font-weight: 600;
            font-size: toRem(24);
            line-height: 2rem;
            margin-bottom: 1.5rem;
        }
        .links {
            @include flex(center, center, 2rem);
            a {
                color: black;
                font-size: toRem(24);
                font-weight: 600;
            }
        }
        &_hero_img {
            width: 100%;
            margin-top: 4rem;
        }
    }
    &_dpd {
        background: #f7f7f7;
        width: 100%;
        padding-top: 3rem;
        &_txt {
        }
        video {
            width: 1020px;
        }
    }
}
</style>
