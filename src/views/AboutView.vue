<script setup lang="ts">
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Swiper from '../components/Swiper.vue'
window.scrollTo(0,0);

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
  <main>
    <section class="h-[900px] m:h-[800px] w-[100%] bg-[#121616]">
      <div class="max-w-[1200px] xl:max-w-[95%] w-[100%] mx-auto pt-[130px]">
        <h3 data-aos="flip-up" data-aos-offset="150" data-aos-duration="1000" data-aos-once="false" class="uppercase m:text-[24px] font-[nunitoblack] text-[#00FFFF] text-[40px]">{{ $t('aboutus') }}</h3>
        <p data-aos="flip-up" data-aos-offset="150" data-aos-duration="1000" data-aos-once="false" class="max-w-[513px] text-white font-[nunitolight] m:text-[14px] m:mt-[0px] mt-[10px] mb-[44px]">
          {{ $t('aboutusText') }}
        </p>
      </div>
      <div class="w-[100%] max-w-[1920px] mx-auto overflow-hidden pl-[220px] sm:pl-0">
        <Swiper />
      </div>
    </section>
    <section class="bg-[#121616]">
      <div class="h-[641px] m:h-[230px] m:px-[20px] relative z-[2] bg-[#121616]">
        <iframe data-aos="fade-up" data-aos-offset="150" data-aos-duration="1000" data-aos-once="false" class="h-[100%] rounded-[20px] m:rounded-[10px] z-[2] max-w-[1140px] w-[100%] mx-auto"
          src="https://www.youtube.com/embed/ll5-uxVPdkI" title="Анимация интерьера в Unreal Engine 5 | Работа студента"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <div class="absolute left-0 bottom-[50%] m:h-[200px] translate-y-[50%] w-[100%] h-[336px] bg-[#126161] z-[-2]"></div>
      </div>
      <div class="max-w-[1021px] mt-[50px] pb-[50px] mx-auto">
        <p data-aos="fade-up" data-aos-offset="150" data-aos-duration="1000" data-aos-once="false" class="text-center text-white font-[nunitolight] text-[20px] m:text-[17px] m:text-left m:px-[10px]">
          {{ $t('aboutabout') }}
        </p>
      </div>
    </section>
  </main>
  <Footer />
</template>

<style scoped>
*{
  scroll-behavior: auto !important;
}
</style>
