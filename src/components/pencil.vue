<template>
    <div class="applePencil">
        <div class="applePencil_Jot">
            <div class="txt">
                <h2 data-animation="header">Dream it up. Jot it down.</h2>
                <p data-animation="paragraph">
                    Apple Pencil sets the standard for how drawing, note‑taking, and marking up documents should feel — intuitive, precise, and
                    magical. And on iPad Pro, Apple Pencil hover shows you exactly where your Apple Pencil will touch down on your display, so you can
                    write, sketch, and illustrate with even greater precision.
                </p>
            </div>
            <div class="img mg_au">
                <img data-scroll-speed="1" data-scroll-delay="1" data-scroll src="../assets/apple_pencil_hero.png" alt="" />
            </div>
        </div>
        <div class="applePencil_find">
            <div class="applePencil_find_wrap child_wrap">
                <h2 class="ta_center mg_au" data-animation="header">Find the right Apple Pencil for your iPad.</h2>
                <div class="applePencil_find_wrap_pencil_comp">
                    <div class="left">
                        <div class="sub">
                            <h3 data-animation="header">Apple pencil</h3>
                            ]

                            <p>2nd generation</p>
                            <p>$129</p>
                            <button>Buy</button>
                        </div>
                        <div class="pencil_pros">
                            <p data-animation="paragraph">Wireless pairing and charging</p>
                            <p data-animation="paragraph">Attaches magnetically</p>
                            <p data-animation="paragraph">Double-tap to change tools</p>
                            <p data-animation="paragraph">Pixel-perfect precision</p>
                            <p data-animation="paragraph">Tilt and pressure sensitivity</p>
                            <p data-animation="paragraph">Imperceptible lag</p>
                            <p data-animation="paragraph">Free engraving</p>
                        </div>
                        <div class="compat">
                            <p data-animation="header"><b>Compatible With</b></p>
                            <div class="compat_ipad" data-animation="fade">
                                <img src="../assets/icon_ipad_pro_family.png" alt="" />
                                <span>
                                    <b>iPad Pro 12.9-inch</b>
                                    <br />
                                    3rd, 4th, 5th, and 6th generation
                                </span>
                            </div>
                            <div class="compat_ipad" data-animation="fade">
                                <img src="../assets/icon_ipad_air.png" alt="" />
                                <span>
                                    <b>iPad Air</b>
                                    <br />
                                    4th and 5th generation
                                </span>
                            </div>
                            <div class="compat_ipad" data-animation="fade">
                                <img src="../assets/icon_ipad_mini.png" alt="" />
                                <span>
                                    <b>iPad mini</b>
                                    <br />
                                    6th generation
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="img">
                        <img
                            class="img_pen"
                            data-scroll
                            data-scroll-delay="1"
                            data-scroll-speed="3"
                            src="../assets/apple_pencil_2nd_gen.png"
                            alt=""
                        />
                        <div class="img_pointers">
                            <img class="abs qw" src="../assets/snipe_matte.png" alt="" />
                            <img class="abs qw" src="../assets/snipe_magnet.png" alt="" />
                            <img class="abs qw" src="../assets/snipe_tap.png" alt="" />
                            <img class="abs qw" src="../assets/snipe_pressure_sensitivity.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="applePencil_video">
            <div class="applePencil_video_txt child_wrap">
                <h3 data-animation="header">Apple Pencil hover</h3>
                <p data-animation="paragraph">
                    Apple Pencil hover shows you exactly where your Apple Pencil will touch down on your display. So you can write, sketch, and
                    illustrate with even greater precision. Watch apps and widgets expand on the Home Screen as you move over them. Preview your mark
                    before you make it. See how your watercolors mix before you paint. Apple Pencil hover makes everything you do with Apple Pencil
                    even more effortless.*
                </p>
            </div>
            <div class="applePencil_video_vid">
                <video
                    autoplay
                    muted
                    src="https://www.apple.com/105/media/us/apple-pencil/2022/eb402cc7-cda5-47cf-9375-06572de3fbb9/anim/hover/large_2x.mp4"
                ></video>
            </div>
        </div>
        <div class="applePencil_art">
            <img data-scroll data-scroll-speed="1" src="../assets/apps_hero__fl80ky4vt2qi_large_2x.jpg" alt="" />
            <img data-scroll data-scroll-speed="-2" data-scroll-delay="1" src="../assets/apple_pencil_1st_gen_art.jpeg" alt="" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.applePencil {
    &_Jot {
        background: #f5f5f7;
        padding-top: 6rem;
        .txt {
            text-align: center;
            @include flex_col(1.5rem);
            color: $blacktxt;
            h2 {
                font-size: toRem(70);
                font-weight: 600;
            }
            p {
                font-weight: 400;
                width: 50%;
                margin: 0 auto;
                font-size: toRem(20);
            }
        }
        .img {
            width: 95%;
            margin-top: 4.5rem;
        }
    }
    &_find {
        padding: 3rem 0;
        p {
            font-weight: 300;
            font-size: toRem(22);
        }
        &_wrap {
            @include flex_col(4rem);
            h2 {
                font-size: toRem(60);
                font-weight: 600;
                width: 70%;
            }
            &_pencil_comp {
                @include flex(space-between, center, 0);
                .left {
                    @include flex_col(2.5rem);
                    width: 50%;
                    .sub {
                        h3 {
                            font-size: toRem(48);
                            font-weight: 500;
                        }
                        @include flex_col(0.3rem);
                        button {
                            margin: 1rem 0;
                            width: 5rem;
                            padding: 0.7rem;
                            color: white;
                            background: $blue;
                            border-radius: 2rem;
                        }
                    }
                    .pencil_pros {
                        @include flex_col(1rem);
                    }
                    .compat {
                        @include flex_col(1.5rem);
                        &_ipad {
                            @include flex(left, center, 1rem);
                            img {
                                width: 4rem;
                            }
                        }
                    }
                }
                .img {
                    position: relative;
                    width: 50%;
                    background-repeat: no-repeat;
                    &_pen {
                        width: 12rem;
                    }
                    &_pointers {
                        img {
                            &:nth-child(1) {
                                top: 2rem;
                                left: 6rem;
                                width: 5.5rem;
                            }
                            &:nth-child(2) {
                                top: 40%;
                                width: 15rem;
                                left: 6rem;
                            }
                            &:nth-child(3) {
                                top: 67%;
                                width: 12rem;
                                left: 6rem;
                            }
                            &:nth-child(4) {
                                top: 85%;
                                width: 7rem;
                                left: 5rem;
                            }
                        }
                    }
                }
            }
        }
    }
    &_video {
        padding: 3rem;
        @include flex_col(3rem);
        &_txt {
            @include flex_col(1rem);
            text-align: center;
            h3 {
                color: $blacktxt;
                font-size: toRem(32);
                font-weight: 500;
            }
            p {
                font-weight: 300;
                font-size: toRem(18);
                line-height: 1.7rem;
                font-weight: 300;
                letter-spacing: -0.012em;
                width: 78%;
                margin: 0 auto;
            }
        }
        &_vid {
            width: 95%;
            margin: 0 auto;
            video {
                width: 100%;
                border-radius: 2rem;
            }
        }
    }
    &_art {
        padding-top: 3rem;
    }
}
</style>
