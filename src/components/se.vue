<template>
    <div class="iPhoneSe">
        <div class="iPhoneSe_grk">
            <h1>
                iOS 16.
                <br />
                Personal is powerful
            </h1>
            <div class="iPhoneSe_grk_img mg_au">
                <img data-scroll data-scroll-speed="-2" src="../assets/se2.png" alt="" />
                <img data-scroll data-scroll-speed="1" src="../assets/se5.png" alt="" />
                <img data-scroll data-scroll-speed="-1" scroll-delay="-1" src="../assets/se3.png" alt="" />
                <img data-scroll data-scroll-speed="1" src="../assets/se1.png" alt="" />
                <img data-scroll data-scroll-speed="-2" scroll-delay="-2" src="../assets/se4.png" alt="" />
            </div>
        </div>
        <!-- <div class="iPhoneSe_rfy ta_center">
            <h1>Which iPhone is right for you?</h1>
            <div class="compare-section">
                <div data-scroll >
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
                <div data-scroll >
                    
                    <div class="img">
                        <img src="../assets/compare_iphone_14.jpeg" alt="" />
                    </div>
                    <div class="txt_content">
                        <h2>iPhone 14</h2>
                        <br />
                        <div class="purchase-gen">
                            <div class="label col-white">Buy</div>
                            <p class="col-blue">Learn more</p>
                        </div>
                    </div>
                </div>
                <div data-scroll >
                  
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
                <div data-scroll>
                    
                    <div class="img">
                        <img src="../assets/compare_iphone_se.jpeg" alt="" />
                    </div>
                    <div class="txt_content">
                        <h2>iPhone SE</h2>
                        <br />
                        <div class="purchase-gen">
                            <div class="label col-white">Buy</div>
                            <p class="col-blue">Learn more</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>

<style lang="scss" scoped>
.iPhoneSe {
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
            width: 77%;
            @include flex(center, start, 0.8rem);
            img {
                width: 14rem;
                &:nth-child(2) {
                    margin-top: 10rem;
                }
                &:nth-child(3) {
                    margin-top: 5rem;
                }
                &:nth-child(4) {
                    margin-top: 10rem;
                }
            }
        }
    }
}
</style>
