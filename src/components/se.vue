<template>
    <div class="iPhoneSe">
        <div class="iPhoneSe_grk">
            <h1>
                iOS 16.
                <br />
                Personal is powerful
            </h1>
            <div class="iPhoneSe_grk_img mg_au">
                <img src="../assets/se2.png" alt="" />
                <img src="../assets/se5.png" alt="" />
                <img src="../assets/se3.png" alt="" />
                <img src="../assets/se1.png" alt="" />
                <img src="../assets/se4.png" alt="" />
            </div>
        </div>
        <div class="iPhoneSe_rfy ta_center">
            <h1>Which iPhone is right for you?</h1>
            <div class="compare-section">
                <div data-scroll data-scroll-call="2" data-scroll-speed="9" data-scroll-direction="horizontal">
                    <div class="img">
                        <img src="../assets/compare_iphone_14_pro.jpeg" alt="" />
                    </div>
                    <div class="txt_content">
                        <h2>iPhone 14 Pro</h2>
                        <br />
                        <div class="purchase-gen">
                            <div class="label col-white">Buy</div>
                            <p class="col-blue">Learn more</p>
                        </div>
                    </div>
                </div>
                <div data-scroll-speed="-14" data-scroll data-scroll-direction="horizontal" data-scroll-call="3">
                    <div class="txt_content">
                        <h2>iPhone 14</h2>
                        <br />
                        <div class="purchase-gen">
                            <div class="label col-white">Buy</div>
                            <p class="col-blue">Learn more</p>
                        </div>
                    </div>
                    <div class="img">
                        <img src="../assets/compare_iphone_14.jpeg" alt="" />
                    </div>
                </div>
                <div data-scroll-speed="11" data-scroll data-scroll-direction="horizontal" data-scroll-call="Pro">
                    <div class="img">
                        <img src="../assets/compare_iphone_13.jpeg" alt="" />
                    </div>
                    <div class="txt_content">
                        <h2>iPhone 13</h2>
                        <br />
                        <div class="purchase-gen">
                            <div class="label col-white">Buy</div>
                            <p class="col-blue">Learn more</p>
                        </div>
                    </div>
                </div>
                <div data-scroll-speed="-10" data-scroll data-scroll-direction="horizontal" data-scroll-call="Max">
                    <div class="txt_content">
                        <h2>iPhone SE</h2>
                        <br />
                        <div class="purchase-gen">
                            <div class="label col-white">Buy</div>
                            <p class="col-blue">Learn more</p>
                        </div>
                    </div>
                    <div class="img">
                        <img src="../assets/compare_iphone_se.jpeg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.iPhoneSe {
    &_rfy {
        position: relative;
        @include flex_col(5rem);
        h1 {
            font-size: 3rem;
            font-weight: 500;
        }
        .compare-section {
            @include flex_col(5rem);
            > div {
                @include flex(center, center, 0 5rem);
                .txt_content {
                    h2 {
                        color: $blacktxt;
                        font-size: 3em;
                    }
                    p {
                        font-size: 1em;
                    }
                    .label {
                        @include label_btn() {
                            background: $blue;
                        }
                        color: white;
                    }
                }
            }
        }
    }
    &_grk {
        padding: 5rem 0;
        @include flex_col(2rem);
        h1 {
            text-align: center;
            color: $blacktxt;
            font-size: toRem(75);
            font-weight: 600;
        }
        &_img {
            width:77%;
            @include flex(center, start, .8rem);
            img {
                width: 14rem;
                &:nth-child(2){
                    margin-top: 10rem;
                }
                &:nth-child(3){
                    margin-top: 5rem;
                }
                &:nth-child(4){
                    margin-top: 10rem;
                }
            }
        }
    }
}
</style>
