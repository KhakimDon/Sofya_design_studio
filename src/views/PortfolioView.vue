<script lang="ts" setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import PortfolioSwiper from '../components/PortfolioSwiper.vue'
import { onMounted, ref } from 'vue'

const category = ref(1)
const styles = ref(1)
// window.scrollTo(0,0);

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

function handleScroll() {
    let a = document.querySelector(".horizontal-scroll")
    let first = document.querySelector(".horizontal-scroll-first")
    let second = document.querySelector(".horizontal-scroll-second")
    let third = document.querySelector(".horizontal-scroll-third")
    let fourth = document.querySelector(".horizontal-scroll-fourth")

    if (a.getBoundingClientRect().top < 500) {
        first.classList.add("active-horizontalscroll")
    } else {
        first.classList.remove("active-horizontalscroll")
    }

    if (a.getBoundingClientRect().top < 400) {
        second.classList.add("active-horizontalscroll")
    } else {
        second.classList.remove("active-horizontalscroll")
    }

    if (a.getBoundingClientRect().top < 300) {
        third.classList.add("active-horizontalscroll")
    } else {
        third.classList.remove("active-horizontalscroll")
    }

    if (a.getBoundingClientRect().top < 200) {
        fourth.classList.add("active-horizontalscroll")
    } else {
        fourth.classList.remove("active-horizontalscroll")
    }
}



import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});



</script>

<template>
    <Header class="bg-[#191D1D]" />
    <main class="bg-[#121616] pt-[150px]">
        <div class="max-w-[1200px] w-[100%] mx-auto min-h-[100vh]">
            <h3 data-aos="flip-up" data-aos-offset="150" data-aos-duration="1000" data-aos-once="false" class="uppercase font-[nunitoblack] text-[#00FFFF] text-[40px]">портфолио</h3>
            <div data-aos="zoom-out" data-aos-offset="150" data-aos-duration="1000" data-aos-once="false" class="flex gap-[20px] mt-[20px]">
                
                <div  @click="category = 1" :class="{ activeCategory: category == 1 }"
                    class="h-[61px] cursorbigRounded hover:bg-[#212828] duration-[.3s] cursor-pointer flex-1 rounded-[10px] bg-[#121616] border-[#00FFFF] border-[1px] p-[20px] flex items-center justify-between">
                    <span class="uppercase text-white font-[nunitomedium]">Коммерческие интерьеры</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor"
                        class="size-8 group-hover:text-black duration-[.3s] text-[#00FFFF] rotate-[-90deg]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
                    </svg>
                </div>

                <div  @click="category = 2" :class="{ activeCategory: category == 2 }"
                    class="h-[61px] cursorbigRounded hover:bg-[#212828] duration-[.3s]  cursor-pointer flex-1 rounded-[10px] bg-[#121616] border-[#00FFFF] border-[1px] p-[20px] flex items-center justify-between">
                    <span class="uppercase text-white font-[nunitomedium]">Коммерческие интерьеры</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor"
                        class="size-8 group-hover:text-black duration-[.3s] text-[#00FFFF] rotate-[-90deg]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
                    </svg>
                </div>

                <div  @click="category = 3" :class="{ activeCategory: category == 3 }"
                    class="h-[61px] cursorbigRounded hover:bg-[#212828] duration-[.3s]  cursor-pointer flex-1 rounded-[10px] bg-[#121616] border-[#00FFFF] border-[1px] p-[20px] flex items-center justify-between">
                    <span class="uppercase text-white font-[nunitomedium]">Коммерческие интерьеры</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor"
                        class="size-8 group-hover:text-black duration-[.3s] text-[#00FFFF] rotate-[-90deg]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
                    </svg>
                </div>

            </div>

            <div class="py-[50px] grid grid-cols-3 flex-wrap gap-[20px]">
                <figure data-aos="fade-up" data-aos-offset="150" data-aos-duration="1000" data-aos-once="false"  :class="{ 'col-[1/3]': item == 4, 'col-[2/4]': item == 7 }" v-for="item of 10" :key="item.id"
                    class="h-[430px] overflow-hidden group rounded-[10px]">
                    <img class="h-[100%] w-[100%] group-hover:scale-[1.1] duration-[1s] object-cover"
                        :src="`src/assets/portfolio/${item}.png`" alt="image">
                </figure>
            </div> 

        </div>
    </main>

    <section class="cont1 bg-[#191D1D] py-[100px] relative">
        <div class="max-w-[1200px] mx-auto mb-[50px]">
            <h3 data-aos="flip-up" data-aos-offset="150" data-aos-duration="1000" data-aos-once="false" class="content1 uppercase font-[nunitoblack] mb-[50px] text-[#00FFFF] text-[40px]">портфолио</h3>
            <div data-aos="zoom-in" data-aos-offset="150" data-aos-duration="1000" data-aos-once="false" class="content1 flex gap-[20px] mt-[20px]">

                <div @click="styles = 1" :class="{ activeCategory: styles == 1 }"
                    class="cursorbigRounded h-[61px] hover:bg-[#212828] duration-[.3s] cursor-pointer flex-1 rounded-[10px] bg-[#121616] border-[#00FFFF] border-[1px] p-[20px] flex items-center justify-between">
                    <span class="uppercase text-white font-[nunitomedium]">Коммерческие интерьеры</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor"
                        class="size-8 group-hover:text-black duration-[.3s] text-[#00FFFF] rotate-[-90deg]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
                    </svg>
                </div>
                <div @click="styles = 2" :class="{ activeCategory: styles == 2 }"
                    class="h-[61px] cursorbigRounded hover:bg-[#212828] duration-[.3s]  cursor-pointer flex-1 rounded-[10px] bg-[#121616] border-[#00FFFF] border-[1px] p-[20px] flex items-center justify-between">
                    <span class="uppercase text-white font-[nunitomedium]">Коммерческие интерьеры</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor"
                        class="size-8 group-hover:text-black duration-[.3s] text-[#00FFFF] rotate-[-90deg]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
                    </svg>
                </div>
                <div @click="styles = 3" :class="{ activeCategory: styles == 3 }"
                    class="h-[61px] cursorbigRounded hover:bg-[#212828] duration-[.3s]  cursor-pointer flex-1 rounded-[10px] bg-[#121616] border-[#00FFFF] border-[1px] p-[20px] flex items-center justify-between">
                    <span class="uppercase text-white font-[nunitomedium]">Коммерческие интерьеры</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor"
                        class="size-8 group-hover:text-black duration-[.3s] text-[#00FFFF] rotate-[-90deg]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
                    </svg>
                </div>

            </div>
            <div data-aos="zoom-in" data-aos-offset="150" data-aos-duration="1000" data-aos-once="false" class="flex gap-[20px] mt-[20px]">

                <div @click="styles = 4" :class="{ activeCategory: styles == 4 }"
                    class="h-[61px] cursorbigRounded hover:bg-[#212828] duration-[.3s] cursor-pointer flex-1 rounded-[10px] bg-[#121616] border-[#00FFFF] border-[1px] p-[20px] flex items-center justify-between">
                    <span class="uppercase text-white font-[nunitomedium]">Коммерческие интерьеры</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor"
                        class="size-8 group-hover:text-black duration-[.3s] text-[#00FFFF] rotate-[-90deg]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
                    </svg>
                </div>
                <div @click="styles = 5" :class="{ activeCategory: styles == 5 }"
                    class="h-[61px] cursorbigRounded hover:bg-[#212828] duration-[.3s]  cursor-pointer flex-1 rounded-[10px] bg-[#121616] border-[#00FFFF] border-[1px] p-[20px] flex items-center justify-between">
                    <span class="uppercase text-white font-[nunitomedium]">Коммерческие интерьеры</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor"
                        class="size-8 group-hover:text-black duration-[.3s] text-[#00FFFF] rotate-[-90deg]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
                    </svg>
                </div>
                <div @click="styles = 6" :class="{ activeCategory: styles == 6 }"
                    class="h-[61px] cursorbigRounded hover:bg-[#212828] duration-[.3s]  cursor-pointer flex-1 rounded-[10px] bg-[#121616] border-[#00FFFF] border-[1px] p-[20px] flex items-center justify-between">
                    <span class="uppercase text-white font-[nunitomedium]">Коммерческие интерьеры</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor"
                        class="size-8 group-hover:text-black duration-[.3s] text-[#00FFFF] rotate-[-90deg]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
                    </svg>
                </div>

            </div>
        </div>
        <div data-aos="fade-up" data-aos-offset="150" data-aos-duration="1000" data-aos-once="false" class="w-[100%]  max-w-[1920px] mx-auto overflow-hidden">
            <PortfolioSwiper />
        </div>
    </section>

    <section class="horizontal-scroll bg-[#121616] py-[100px]">
        <div class="max-w-[1200px] min-h-[562px] mx-auto w-[100%]">
            <h3 data-aos="flip-up" data-aos-offset="150" data-aos-duration="1000" data-aos-once="false" class="uppercase font-[nunitoblack] mb-[40px] text-[#00FFFF] text-[40px]">Этапы работы</h3>
            <div class="flex gap-[15px]">

                <div class="horizontal-scroll-first min-h-[50px]  flex-1">
                    <div class="flex items-center">
                        <div
                            class="h-[30px] w-[30px] border-[#00FFFF] font-[nunitomedium] opacity-0 horizontal-num duration-[.8s] mr-[15px] border-[1px] rounded-[50%] flex items-center justify-center text-[#00FFFF]">
                            1</div>
                        <div class="h-[1px] horizontal-line duration-[2.5s] max-w-[0px] flex-1 bg-[#00FFFF]"></div>
                    </div>
                    <div class="horizontal-scroll-text duration-[2s] delay-[.5s] opacity-0 translate-y-[50px]">
                        <span class="block mt-[15px] font-[nunitoblack] text-white">Договор</span>
                        <p class="font-[nunitoregular] text-white">Мы подписываем договор и вы вносите предоплату 30%
                        </p>
                    </div>
                </div>

                <div class="horizontal-scroll-second min-h-[50px] flex-1">
                    <div class="flex items-center">
                        <div
                            class="h-[30px] w-[30px] border-[#00FFFF] font-[nunitomedium] opacity-0 horizontal-num duration-[.8s] mr-[15px] border-[1px] rounded-[50%] flex items-center justify-center text-[#00FFFF]">
                            2</div>
                        <div class="h-[1px] horizontal-line duration-[2.5s] max-w-[0px] flex-1 bg-[#00FFFF]"></div>
                    </div>
                    <div class="horizontal-scroll-text duration-[2s] delay-[.5s] opacity-0 translate-y-[50px]">
                        <span class="block mt-[15px] font-[nunitoblack] text-white">Техническое задание</span>
                        <p class="font-[nunitoregular] text-white">Мы связываемся с замерщиками в вашем городе, они
                            делают
                            для нас фотографии и замеры помещения. Заполняем техническое задание на проект, где вы
                            записываете все свои пожелания. Подбираем аналоги интерьеров, которые вам нравятся.</p>
                    </div>
                </div>

                <div class="horizontal-scroll-third min-h-[50px] flex-1">
                    <div class="flex items-center">
                        <div
                            class="h-[30px] w-[30px] border-[#00FFFF] font-[nunitomedium] opacity-0 horizontal-num duration-[.8s] mr-[15px] border-[1px] rounded-[50%] flex items-center justify-center text-[#00FFFF]">
                            3</div>
                        <div class="h-[1px] horizontal-line duration-[2.5s] max-w-[0px] flex-1 bg-[#00FFFF]"></div>
                    </div>
                    <div class="horizontal-scroll-text duration-[2s] delay-[.5s] opacity-0 translate-y-[50px]">
                        <span class="block mt-[15px] font-[nunitoblack] text-white">Планирование и коллажи</span>
                        <p class="font-[nunitoregular] text-white">Создаем планировочное решение (2-3 варианта),
                            согласовываем лучший. Вы оплачиваете следующую часть платежа в размере 30% Созпаваемые
                            коллажи
                            отражают общую цветовую гамму, зонирование пространства и виды используемых отделочных
                            материалов, а таюже мебель и источники света (без указания конкретного производителя).</p>
                    </div>
                </div>

                <div class="horizontal-scroll-fourth min-h-[50px] flex-1">
                    <div class="flex items-center">
                        <div
                            class="h-[30px] w-[30px] border-[#00FFFF] font-[nunitomedium] opacity-0 horizontal-num duration-[.8s] mr-[15px] border-[1px] rounded-[50%] flex items-center justify-center text-[#00FFFF]">
                            4</div>
                        <div class="h-[1px] horizontal-line duration-[2.5s] max-w-[0px] flex-1 bg-[#00FFFF]"></div>
                    </div>
                    <div class="horizontal-scroll-text duration-[2s] delay-[.5s] opacity-0 translate-y-[50px]">
                        <span class="block mt-[15px] font-[nunitoblack] text-white">3d визуализация и
                            документация</span>
                        <p class="font-[nunitoregular] text-white">Вы оплачиваете следующую часть платежа в размере -
                            30%
                            Создаем фотореалистичные изображения интерьера, согласовываем все помещения. После
                            утверждения
                            всех 3D визуализаций вносится предоплата - 10% за этап документации, готовим чертежи и
                            спецификации. Представляем готовый дизайн-проект.</p>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <Footer />
</template>

<style>
.active-horizontalscroll {}

.active-horizontalscroll .horizontal-scroll-text {
    opacity: 1;
    transform: translateY(0px);
}

.active-horizontalscroll .horizontal-line {
    max-width: 100%;
}

.active-horizontalscroll .horizontal-num {
    opacity: 1;
}

.activeCategory:hover {
    background: white;
}

.activeCategory svg {
    color: black;
    transform: rotate(0deg);
}

.activeCategory {
    border-color: white;
    flex: 1.5;
    background: white;
}

.activeCategory span {
    color: black;
}
</style>