<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
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


const projects = ref([
  {
    image: "../assets/IMG1-1.png",
    text: "Office"
  },
  {
    image: "src/assets/IMG1-2.png",
    text: "Office"
  },
  {
    image: "src/assets/IMG1-3.png",
    text: "Office"
  },
  {
    image: "src/assets/IMG1-4.png",
    text: "Office"
  },
  {
    image: "src/assets/IMG1-5.png",
    text: "Office"
  },
  {
    image: "src/assets/IMG1-6.png",
    text: "Office"
  },
  {
    image: "src/assets/IMG1-7.png",
    text: "Office"
  },
  {
    image: "src/assets/IMG1.png",
    text: "Office"
  },
])

const questions = ref([
  {
    question: "сколько стоит дизайн проект?",
    answer: "Средняя стоимость дизайна за 1 кв.м. = 30$, но в зависимости от площади обьекта, стоимость может снижаться",
    open: true,
  },
  {
    question: "сколько стоит дизайн проект?",
    answer: "Средняя стоимость дизайна за 1 кв.м. = 30$, но в зависимости от площади обьекта, стоимость может снижаться",
    open: false,
  },
  {
    question: "сколько стоит дизайн проект?",
    answer: "Средняя стоимость дизайна за 1 кв.м. = 30$, но в зависимости от площади обьекта, стоимость может снижаться",
    open: false,
  },
  {
    question: "сколько стоит дизайн проект?",
    answer: "Средняя стоимость дизайна за 1 кв.м. = 30$, но в зависимости от площади обьекта, стоимость может снижаться",
    open: false,
  },
  {
    question: "сколько стоит дизайн проект?",
    answer: "Средняя стоимость дизайна за 1 кв.м. = 30$, но в зависимости от площади обьекта, стоимость может снижаться",
    open: false,
  },
  {
    question: "сколько стоит дизайн проект?",
    answer: "Средняя стоимость дизайна за 1 кв.м. = 30$, но в зависимости от площади обьекта, стоимость может снижаться",
    open: false,
  },
])

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
})


function handleScroll() {
  let projectsWrapper = document.querySelector('.project-wrapper')
  let projects = document.querySelectorAll('.project')

  if (projectsWrapper.getBoundingClientRect().top < 250) {
    let c = 0
    for (let i of projects) {
      i.style.transitionDelay = `.${c++}s`
      i.classList.add("projectActive")
    }
  } else {
    for (let i of projects) {
      i.classList.remove("projectActive")
    }
  }

}



</script>

<template>
  <!-- <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="1" data-aos-duration="1000"
          data-aos-once="false" class="h-[400px] w-[300px] bg-[blue]"></div> -->
  <Header />
  <main>
    <!-- zoom-out-up -->
    <section class="first relative h-[100vh] w-[100%]">
      <div class="max-w-[1200px] h-[100%] mx-auto flex-col flex justify-between">
        <div class="h-[120px]"></div>
        <div class="flex justify-center items-start gap-[30px]">
          <img src="../assets/biglogo.png" alt="image">
          <div class="w-[560px]">
            <p class="text-white mb-[10px] font-[nunitolight] text-[16px]">Lorem ipsum dolor sit amet consectetur.
              Pharetra elit gravida orci ultrices diam scelerisque faucibus.
              Lectus suscipit enim est et vivamus eleifend montes velit. Vitae in pellentesque platea cursus. In
              sagittis volutpat aenean mattis quisque.Lorem ipsum dolor sit amet consectetur. Pharetra elit gravida orci
              ultrices diam scelerisque faucibus. Lectus suscipit enim est et vivamus eleifend montes velit. Lorem ipsum
              dolor sit amet consectetur. Pharetra elit gravida orci ultrices diam scelerisque faucibus. Lectus suscipit
              enim est et vivamus eleifend montes velit. </p>
            <button
            @click="$router.push('/about')"
              class="cursorbigRounded buttonAnimation border-[1px] border-[#6D7D7D] font-[nunitomedium] text-white rounded-[5px] px-[16px] py-[5px] uppercase">Подробно
              о нас </button>
          </div>
        </div>
        <div class="mb-[50px]">
          <p class="w-[320px] mb-[20px] font-[nunitoregular] text-white">
            Создадим грамотную планировку.
            Разработаем функциональный дизайн со вкусом и рассчитаем расходы на ремонт.
          </p>
          <button
            class="cursorbigRounded buttonAnimation border-[1px] border-[#00FFFF] font-[nunitomedium] text-white rounded-[5px] px-[16px] py-[5px] uppercase">получите
            консультацию</button>
        </div>
      </div>

    </section>

    <section class="project-wrapper min-h-[100vh] py-[100px] bg-[#191D1D]" data-wow-duration="2s" data-wow-delay="1s">
      <div class="max-w-[1200px] h-[100%] mx-auto flex-col flex justify-between">
        <div>
          <h3 data-aos="flip-up" data-aos-offset="150" data-aos-delay="1" data-aos-duration="1000" data-aos-once="false"
            class="uppercase font-[nunitoblack] text-[#00FFFF] text-[40px]">наши проекты</h3>
          <p data-aos="flip-up" data-aos-offset="150" data-aos-delay="50" data-aos-duration="1000" data-aos-once="false"
            class="max-w-[500px] font-[nunitoregular] mt-[5px] text-white">В портфолио мы собрали реализованные по
            нашим проектам объекты (дизайн-проект)</p>

          <div class="flex mt-[10px] justify-end gap-[20px]">
            <button data-aos="zoom-out-up" data-aos-offset="150" data-aos-delay="150" data-aos-duration="1000"
              data-aos-once="false"
              class="buttonAnimationActive cursorbigRounded border-[1px] border-[#00FFFF] font-[nunitomedium] text-white rounded-[5px] px-[16px] py-[5px] uppercase">Коммерческие
              интерьеры</button>
            <button data-aos="zoom-out-up" data-aos-offset="150" data-aos-delay="200" data-aos-duration="1000"
              data-aos-once="false"
              class="buttonAnimation cursorbigRounded border-[1px] border-[#00FFFF] font-[nunitomedium] text-white rounded-[5px] px-[16px] py-[5px] uppercase">Жилые
              интерьеры</button>
            <button data-aos="zoom-out-up" data-aos-offset="150" data-aos-delay="250" data-aos-duration="1000"
              data-aos-once="false"
              class="buttonAnimation cursorbigRounded border-[1px] border-[#00FFFF] font-[nunitomedium] text-white rounded-[5px] px-[16px] py-[5px] uppercase">Архитектура</button>
          </div>
        </div>
        <div class="flex flex-wrap gap-[20px] mt-[20px]">
          <div v-for="item of projects" :key="item.id"
            class="project opacity-0 translate-y-[150px] w-[269.84px] h-[429.52px]">
            <img class="h-[100%] w-[100%] object-cover" :src="item.image" :alt="item.text">
          </div>
        </div>
        <div class="flex justify-center mt-[40px]">
          <button
          @click="$router.push('/portfolio')"
            class="cursorbigRounded buttonAnimation w-[max-content] border-[1px] border-[#00FFFF] text-[20px] font-[nunitomedium] text-white rounded-[5px] px-[16px] py-[10px] uppercase">
            УЗНАТЬ БОЛЬШЕ !
          </button>
        </div>
      </div>
    </section>

    <section class="bg-[#121616] py-[100px]">
      <div class="max-w-[1200px] h-[100%] mx-auto flex-col gap-[50px] flex justify-between">

        <h3 data-aos="flip-up" data-aos-offset="150" data-aos-duration="1000" data-aos-once="false"
          class="uppercase font-[nunitoblack] text-[#00FFFF] text-[40px]">наши услуги</h3>

        <div class="flex flex-col items-center gap-[50px] w-[100%]">

          <div
            class="hovernum cursor-pointer relative z-[1]  h-[318px] rounded-t-[50px] rounded-l-[50px] translate-x-[-50%] max-w-[582px] w-[100%]">
            <div class="animation-vector"></div>
            <div data-aos="fade-left" data-aos-offset="150" data-aos-duration="1000" data-aos-once="false"
              class="p-[30px] w-[100%] absolute z-[2] h-[100%] bg-[#212828] rounded-t-[50px] rounded-l-[50px]">
              <h4  data-aos="zoom-in-right" data-aos-offset="150" data-aos-delay="50" data-aos-duration="1000" data-aos-once="false" class="text-[40px] text-white font-[nunitoregular] mb-[10px]">ПРОЕКТИРОВАНИЕ</h4>
              <p class="text-[15px] mb-[25px] text-white font-[nunitolight]">Разработаем планировку и дизайн для
                коммерческого помещения, исходя от его типа, локации, площади и
                многих других параметров.
                Разработаем планировку и дизайн для коммерческого помещения, исходя от его типа, локации, площади и
                многих других параметров.</p>
              <button
                class="cursorbigRounded button-anim w-[max-content] border-[1px] border-[#00FFFF] text-[20px] font-[nunitomedium] text-white rounded-[5px] px-[16px] py-[10px] uppercase">УЗНАТЬ
                БОЛЬШЕ !</button>
            </div>
            <div
              class="leftnum nums z-[0] absolute right-[-45%] top-[50%] translate-y-[-50%] leading-[340px] uppercase font-[nunitomedium] font-[1000] text-[300px] text-[#0F3939]">
              01</div>
          </div>
          <div class="lala"></div>

          <div
            class="hovernum cursor-pointer relative z-[1]  h-[318px] translate-x-[50%] rounded-r-[50px] max-w-[582px] w-[100%]">
            <div data-aos="fade-right" data-aos-offset="150" data-aos-duration="1000" data-aos-once="false"
              class="p-[30px] w-[100%] absolute z-[2] h-[100%] bg-[#212828] rounded-r-[50px]">
              <h4 class="text-[40px] text-white font-[nunitoregular] mb-[10px]" data-aos="zoom-in-left" data-aos-offset="150" data-aos-delay="50" data-aos-duration="1000" data-aos-once="false">ПРОЕКТИРОВАНИЕ</h4>
              <p class="text-[15px] mb-[25px] text-white font-[nunitolight]">Разработаем планировку и дизайн для
                коммерческого помещения, исходя от его типа, локации, площади и
                многих других параметров.
                Разработаем планировку и дизайн для коммерческого помещения, исходя от его типа, локации, площади и
                многих других параметров.</p>
              <button
                class="cursorbigRounded button-anim w-[max-content] border-[1px] border-[#00FFFF] text-[20px] font-[nunitomedium] text-white rounded-[5px] px-[16px] py-[10px] uppercase">УЗНАТЬ
                БОЛЬШЕ !</button>
            </div>
            <div
              class="rightnum nums z-[0] absolute left-[-55%] top-[50%] translate-y-[-50%] leading-[340px] uppercase font-[nunitomedium] font-[1000] text-[300px] text-[#0F3939]">
              02</div>
          </div>

          <div class="hovernum cursor-pointer relative z-[1]  h-[318px] translate-x-[-50%] max-w-[582px] w-[100%]">
            <div data-aos="fade-left" data-aos-offset="150" data-aos-duration="1000" data-aos-once="false"
              class="p-[30px] w-[100%] absolute z-[2] h-[100%] bg-[#212828] rounded-b-[50px] rounded-l-[50px]">
              <h4 class="text-[40px] text-white font-[nunitoregular] mb-[10px]" data-aos="zoom-in-right" data-aos-offset="150" data-aos-delay="50" data-aos-duration="1000" data-aos-once="false">ПРОЕКТИРОВАНИЕ</h4>
              <p data-aos="flip-up" data-aos-offset="150" data-aos-duration="1000" data-aos-once="false"
                class="text-[15px] mb-[25px] text-white font-[nunitolight]">Разработаем планировку и дизайн для
                коммерческого помещения, исходя от его типа, локации, площади и
                многих других параметров.
                Разработаем планировку и дизайн для коммерческого помещения, исходя от его типа, локации, площади и
                многих других параметров.</p>
              <button
                class="cursorbigRounded button-anim w-[max-content] border-[1px] border-[#00FFFF] text-[20px] font-[nunitomedium] text-white rounded-[5px] px-[16px] py-[10px] uppercase">УЗНАТЬ
                БОЛЬШЕ !</button>
            </div>
            <div
              class="leftnum nums z-[0] absolute right-[-45%] top-[50%] translate-y-[-50%] leading-[340px] uppercase font-[nunitomedium] font-[1000] text-[300px] text-[#0F3939]">
              03</div>
          </div>
        </div>
      </div>
    </section>

    <section class="calculate bg-[#191D1D] relative z-[1] py-[100px]">
      <div class="absolute h-[100%] w-[100%] bg-[#191d1df3] z-[-2] top-0 left-0"></div>
      <div class="max-w-[1200px] h-[100%] mx-auto flex-col z-[2] flex justify-between">
        <h3 data-aos="flip-up" data-aos-offset="150" data-aos-duration="1000" data-aos-once="false"
          class="uppercase font-[nunitoblack] text-[#00FFFF] mb-[17px] text-[40px]">КАЛЬКУЛЯТОР СТОИМОСТИ  <br>
          ДИЗАЙН-ПРОЕКТА
        </h3>
        <p data-aos="flip-up" data-aos-offset="150" data-aos-delay="50" data-aos-duration="1000" data-aos-once="false"
          class="max-w-[500px] font-[nunitoregular] text-white text-[20px]">Выберите, какой дизайн-проект
          вам необходим:</p>
        <div class="flex gap-[30px] mt-[37px] mb-[35px]">
          <button data-aos="fade-left" data-aos-offset="150" data-aos-delay="200" data-aos-duration="1000"
            data-aos-once="false"
            class="buttonAnimationActive cursorbigRounded border-[1px] border-[#00FFFF] font-[nunitomedium] text-white rounded-[5px] px-[16px] py-[5px] uppercase">дома</button>
          <button data-aos="fade-left" data-aos-offset="150" data-aos-delay="300" data-aos-duration="1000"
            data-aos-once="false"
            class="buttonAnimation cursorbigRounded border-[1px] border-[#00FFFF] font-[nunitomedium] text-white rounded-[5px] px-[16px] py-[5px] uppercase">квартиры</button>
          <button data-aos="fade-left" data-aos-offset="150" data-aos-delay="400" data-aos-duration="1000"
            data-aos-once="false"
            class="buttonAnimation cursorbigRounded hover:scale-[1.1] border-[1px] border-[#00FFFF] font-[nunitomedium] text-white rounded-[5px] px-[16px] py-[5px] uppercase">офиса</button>
          <button data-aos="fade-left" data-aos-offset="150" data-aos-delay="500" data-aos-duration="1000"
            data-aos-once="false"
            class="buttonAnimation cursorbigRounded hover:scale-[1.1] border-[1px] border-[#00FFFF] font-[nunitomedium] text-white rounded-[5px] px-[16px] py-[5px] uppercase">магазина</button>
          <button data-aos="fade-left" data-aos-offset="150" data-aos-delay="600" data-aos-duration="1000"
            data-aos-once="false"
            class="buttonAnimation cursorbigRounded hover:scale-[1.1] border-[1px] border-[#00FFFF] font-[nunitomedium] text-white rounded-[5px] px-[16px] py-[5px] uppercase">кафе/ресторана</button>
          <button data-aos="fade-left" data-aos-offset="150" data-aos-delay="700" data-aos-duration="1000"
            data-aos-once="false"
            class="buttonAnimation cursorbigRounded hover:scale-[1.1] border-[1px] border-[#00FFFF] font-[nunitomedium] text-white rounded-[5px] px-[16px] py-[5px] uppercase">салона</button>
        </div>
        <p data-aos="fade-left" data-aos-offset="150" data-aos-delay="50" data-aos-duration="1000" data-aos-once="false"
          class="font-[nunitoregular] text-white text-[20px]">Выберите, Укажите общую площадь м2, чтобы узнать
          стоимость проекта.</p>
        <div data-aos="fade-left" data-aos-offset="150" data-aos-delay="50" data-aos-duration="1000"
          data-aos-once="false" class="mt-[20px] mb-[10px] flex gap-[12px] items-end">
          <input
            class="h-[40px] caret-[aqua] w-[132px] border-[1px] border-white rounded-[5px] bg-[transparent] pl-[5px] text-white font-[nunitomedium] text-[23px]"
            type="text"><span class="font-[nunitomedium] text-white text-[20px]">M<sup>2</sup></span>
        </div>
        <p data-aos="fade-left" data-aos-offset="150" data-aos-delay="50" data-aos-duration="1000" data-aos-once="false"
          class="font-[nunitoregular] mb-[30px] text-[#969696] text-[16px]">введите размер м2</p>
        <button data-aos="fade-left" data-aos-offset="150" data-aos-delay="50" data-aos-duration="1000"
          data-aos-once="false"
          class="buttonAnimation cursorbigRounded w-[max-content] border-[1px] border-[#00FFFF] font-[nunitomedium] text-white text-[20px] rounded-[5px] px-[16px] py-[12px] uppercase">Узнать
          цену !</button>
      </div>
    </section>

    <section class="py-[100px] bg-[#121616]">
      <div class="max-w-[1200px] h-[100%] mx-auto">
        <h3 data-aos="flip-up" data-aos-offset="150" data-aos-delay="0" data-aos-duration="1000" data-aos-once="false"
          class="uppercase mb-[50px] font-[nunitoblack] text-[#00FFFF] text-[40px]">часто задаваемые вопросы:
        </h3>

        <div data-aos="zoom-out-up" data-aos-offset="150" data-aos-delay="0" data-aos-duration="1000"
        data-aos-once="false"  @click="item.open = !item.open" v-for="(item, index) of questions" :key="item.id">
          <div 
            :class="{ questionActive: item.open }"
            class="h-[85px] group hover:text-black hover:bg-[white] duration-[.3s] mb-[20px] w-[100%] px-[30px] cursor-pointer border-[1px] border-[#00FFFF] rounded-[10px]">

            <div  class="h-[85px] flex justify-between items-center">
              <span class="text-[20px] font-[nunitomedium] group-hover:text-black text-white">Cколько стоит дизайн
                проект?</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-8 group-hover:text-black duration-[.3s] text-white rotate-[-90deg]">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
              </svg>
            </div>

            <p :class="{ hiddenText: item.open }"
              class="opacity-[0] text-[17px] translate-y-[-17px] font-[nunitolight] group-hover:text-black text-white">
              Средняя стоимость дизайна за 1 кв.м. = 30$, но в зависимости от площади обьекта, стоимость может снижаться
            </p>

          </div>
        </div>

      </div>
    </section>



    <Footer />
  </main>
</template>

<style>
.projectActive {
  opacity: 1;
  transform: translateY(0);
}

.calculate {
  background-image: url('https://plus.unsplash.com/premium_photo-1674815329430-99edb323164e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
}

.questionActive {
  height: 120px;
  background: #232929;
}

.questionActive svg {
  transform: rotate(0);
}

.hiddenText {
  opacity: 1 !important;
}

.nums {
  user-select: none;
  transition-duration: .6s;
}

.hovernum {
  transition-duration: .3s;
  border-radius: 50px;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.192);

}

.hovernum:hover {
  box-shadow: -10px 20px 0px rgba(0, 0, 0, 0.146);
}

.hovernum:hover .leftnum {
  right: -48%;
}

.hovernum:hover .rightnum {
  left: -58%;
}


.button-anim {
  position: relative;
  overflow: hidden;
  z-index: 2;
  transition-duration: .3s;
}

.button-anim::after {
  content: '';
  z-index: -2;
  position: absolute;
  transition-duration: .3s;
  height: 100%;
  width: 100%;
  background: #126161;
  left: -100%;
  top: 0;
}

.hovernum:hover .button-anim {
  transform: scale(1.05);
}

.hovernum:hover .button-anim::after {
  left: -25px;
  border-radius: 0px 8px 8px 0px;
}



.coverSection {
  position: absolute;
  height: 100%;
  z-index: 999;
  width: 100%;
  background: #191D1D;
  opacity: 50%;
}

.first {
  background-image: url('../assets/bg-first-screen.png');
  background-size: cover;
  font-variant-position: center center;
  background-attachment: fixed;
}

.project {
  transition-duration: 2s;
}

.buttonAnimation {
  position: relative;
  overflow: hidden;
  z-index: 2;
  transition-duration: .3s;
}

.buttonAnimation::after {
  content: '';
  z-index: -2;
  position: absolute;
  transition-duration: .3s;
  height: 100%;
  width: 100%;
  background: #126161;
  left: -100%;
  top: 0;
}

.buttonAnimation:hover {
  transform: scale(1.05);
}

.buttonAnimation:hover::after {
  left: -25px;
  border-radius: 0px 8px 8px 0px;
}

.buttonAnimationActive {
  position: relative;
  color: black;
  border-color: white;
  background: white;
  overflow: hidden;
  z-index: 2;
  transition-duration: .3s;
}

.buttonAnimationActive::after {
  content: '';
  z-index: -2;
  position: absolute;
  transition-duration: .3s;
  height: 100%;
  width: 100%;
  background: rgb(231, 231, 231);
  left: -100%;
  top: 0;
}

.buttonAnimationActive:hover {
  transform: scale(1.05);
}

.buttonAnimationActive:hover::after {
  left: -25px;
  border-radius: 0px 8px 8px 0px;
}
</style>