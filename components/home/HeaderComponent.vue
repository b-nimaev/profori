<template>
    <header>
        <swiper :slides-per-view="1" @swiper="onSwiper" @slideChange="onSlideChange">
            <swiper-slide>
                <HomeHeaderSlideComponent></HomeHeaderSlideComponent>
            </swiper-slide>
            <swiper-slide>
                <HomeHeaderSlideComponent></HomeHeaderSlideComponent>
            </swiper-slide>
            <swiper-slide>
                <HomeHeaderSlideComponent></HomeHeaderSlideComponent>
            </swiper-slide>
        </swiper>
    </header>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
        };
    },
};
</script>

<style lang="scss" scoped>
header {
    padding-bottom: 80px;
}
</style>