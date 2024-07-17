<template>
    <swiper @swiper="onSwiperInit" @slideChange="onSwiperInit" :slidesPerView="1" :initialSlide="3" :spaceBetween="0"
        :pagination="{
            clickable: true,
        }" class="mySwiper relative">
        <swiper-slide @click="slideClick()" :id="this.info.indexOf(item)" v-for="item of this.info" :key="item.id">
            <div class="h-[20px]"></div>
            <div class="bg-[#126161]">
                <img class="w-[100%] h-[330px] object-cover" :src="item.img" alt="image">
            </div>
            <div class="decor-prev"></div>
            <div class="infoblock h-[120px] bg-[#126161]">
                <div
                    class="z-[1] absolute h-[40px] w-[40px] bg-[#126161] rotate-[45deg] left-[50px] translate-y-[-50%]">
                </div>
                <div class="z-[2] absolute h-[100%] w-[100%] p-[20px]">
                    <span class="text-white font-[nunitomedium] text-[30px] leading-[23px]">Abdurahmonov Ilyos</span>
                    <br>
                    <span class="text-white font-[nunitolight] text-[17px] leading-[23px]">Интерьер дизайнер</span>
                    <svg fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor"
                        class="size-8 absolute group-hover:rotate-[0deg] right-[15px] bottom-[15px] group-hover:text-black duration-[.3s] text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
                    </svg>
                </div>
            </div>
        </swiper-slide>
    </swiper>
    <div
        class="w-[100%] z-[999] max-w-[1200px] left-[50%] flex justify-between items-center translate-x-[-50%] bottom-[75px] absolute h-[100px]">
        <button @click="ArrowSlide('left')" class="hover:bg-[#126161] hover:scale-[1.15] group duration-[.3s] text-white flex translate-y-[-100px] items-center justify-center h-[66px] w-[66px] bg-[transparent] border-[1px] border-[#126161] rounded-[4px]">
            <svg class="group-hover:stroke-white stroke-[#126161]" width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.9481 24.8962L0.999973 12.9481L12.9481 0.999946" stroke="current" stroke-width="1.12648"
                    stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        </button>
        <button @click="ArrowSlide()" class="text-white hover:scale-[1.15] hover:bg-[#126161] group duration-[.3s]  flex items-center translate-y-[-100px] justify-center h-[66px] w-[66px] bg-[transparent] border-[1px] border-[#126161] rounded-[4px]">
            <svg class="group-hover:stroke-white stroke-[#126161]" width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.05176 24.8962L12.9999 12.9481L1.05176 0.999946" stroke="current" stroke-width="1.12648"
                    stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </button>
    </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';

// import required modules

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            shows: [],
            info: [
                {
                    img: "src/assets/1.jpg",
                },
                {
                    img: "src/assets/2.png",
                },
                {
                    img: "src/assets/3.png",
                },
                {
                    img: "src/assets/4.jpg",
                },
                {
                    img: "src/assets/5.jpg",
                },
                {
                    img: "src/assets/6.jpg",
                },
                {
                    img: "src/assets/1.jpg",
                },

            ]
        }
    },
    setup() {
        return {
        };
    },
    mounted(){
    },
    methods: {
        ArrowSlide(side){
            let swiper = document.querySelector(".mySwiper").swiper
            side == 'left'? swiper.slidePrev() : swiper.slideNext()
            this.onSwiperInit(document.querySelector(".mySwiper").swiper)
        },
        slideClick() {
            let swiper = document.querySelector(".mySwiper").swiper
            swiper.slideTo(event.currentTarget.id)
        },
        onSwiperInit(swiper) {
            this.swiper = swiper;
            setTimeout(() => {
                let b = []
                for (let i of swiper.slides) {
                    i.classList.add('color')
                    let item = null
                    for (let classes of i.classList) {
                        if (classes == 'swiper-slide-active') {
                            item = i
                        }
                    }
                    if (item) {

                        b = []
                        swiper.slides[swiper.slides.indexOf(item) - 2] ? b.push(swiper.slides[swiper.slides.indexOf(item) - 2]) : false
                        swiper.slides[swiper.slides.indexOf(item) - 1] ? b.push(swiper.slides[swiper.slides.indexOf(item) - 1]) : false
                        swiper.slides[swiper.slides.indexOf(item)] ? b.push(swiper.slides[swiper.slides.indexOf(item)]) : false
                        swiper.slides[swiper.slides.indexOf(item) + 1] ? b.push(swiper.slides[swiper.slides.indexOf(item) + 1]) : false
                    }

                }
                this.shows = b
                for (let i of this.shows) {
                    i.classList.remove('color')
                }
            }, 100);
        }
    }
};
</script>
<style scoped>
.color img {
    opacity: 50% !important;
}

.swiper-slide-prev img {
    transition-delay: .3s;
    border-radius: 0px 150px 0px 0px;
}

.swiper-slide-next img {
    transition-delay: .3s;
    border-radius: 150px 0px 0px 0px;
}


.swiper {
    width: 285px;
    height: 450px;
    overflow: visible;
}

.swiper-slide img {
    filter: grayscale(1);
    transition-duration: 1s;
    border-radius: 0px !important;
}

.infoblock {
    opacity: 0;
    transition-duration: 1s;
    position: relative;
    transform: translateY(70px);
    border-radius: 0 0 10px 10px;
}

.swiper-slide-active {
    transform: translateY(-20px);
}

.swiper-slide-active {
    transition-duration: .3s;
}

.swiper-slide-active>div>img {
    filter: grayscale(0) !important;
}

.swiper-slide-active>.infoblock {
    opacity: 1;
    transform: translateY(0px);
}

.swiper-slide {
    cursor: none;
    transition-duration: .7s !important;
}
</style>