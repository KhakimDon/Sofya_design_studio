<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios'

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
    image: "/IMG1-1.png",
    text: "Office"
  },
  {
    image: "/IMG1-2.png",
    text: "Office"
  },
  {
    image: "/IMG1-3.png",
    text: "Office"
  },
  {
    image: "/IMG1-4.png",
    text: "Office"
  },
  {
    image: "/IMG1-5.png",
    text: "Office"
  },
  {
    image: "/IMG1-6.png",
    text: "Office"
  },
  {
    image: "/IMG1-7.png",
    text: "Office"
  },
  {
    image: "/IMG1.png",
    text: "Office"
  },
])


const questions = ref([
  {
    question_ru: "Какие услуги включены в ремонт под ключ?",
    question_uz: "Ta'mirlashga qanday xizmatlar kiritilgan?",
    question_en: "What services are included in the turnkey repair?",
    answer_ru: "Ремонт под ключ включает в себя полный комплекс услуг по дизайну, демонтажу, подготовительным и монтажным работам, отделке, установке окон, дверей и сантехники, меблировке, подключению бытовой техники и финальной уборке.",
    answer_uz: "Ta'mirlash - dizayn, demontaj, tayyorgarlik va o'rnatish ishlari, pardozlash, deraza, eshik va sanitariya-tesisat o'rnatish, jihozlash, jihozlarni ulash va yakuniy tozalash bo'yicha to'liq xizmatlarni o'z ichiga oladi.",
    answer_en: "Turnkey repairs include a full range of services for design, dismantling, preparatory and installation work, finishing, installation of windows, doors and plumbing, furnishing, connection of household appliances and final cleaning.",
    open: true,
  },
  {
    question_ru: "Как часто я буду получать отчеты о ходе работ?",
    question_uz: "Ish jarayoni haqida hisobotlarni har qancha vaqtda olaman ?",
    question_en: "How often will I receive progress reports?",
    answer_uz: "Ta'mirlash ishlarining borishi to'g'risida hisobotlarni olish chastotasi siz bilan tuzilgan kelishuv bilan belgilanadi va kunlik, haftalik yoki bosqichma-bosqich bo'lishi mumkin.",
    answer_ru: "Частота получения отчетов о ходе ремонтных работ определяется договоренностью с подрядчиком и может быть ежедневной, еженедельной или поэтапной.",
    answer_en: "The frequency of receiving reports on the progress of repair work is determined by agreement with the contractor and can be daily, weekly or phased.",
    open: false,
  },
  {
    question_ru: "Как вы выбираете материалы и гарантируете их качество?",
    question_uz: "Qanday qilib materiallarni tanlaysiz va ularning sifatini kafolatlaysiz?",
    question_en: "How do you choose materials and guarantee their quality?",
    answer_ru: "Мы тщательно подбираем материалы у проверенных поставщиков и гарантируем их качество за счет строгого контроля на всех этапах поставок и использования.",
    answer_uz: "Biz ishonchli etkazib beruvchilardan materiallarni sinchkovlik bilan tanlaymiz va etkazib berish va foydalanishning barcha bosqichlarida qat'iy nazorat orqali ularning sifatini kafolatlaymiz.",
    answer_en: "We carefully select materials from trusted suppliers and guarantee their quality through strict control at all stages of supply and use.",
    open: false,
  },
  {
    question_ru: "Есть ли возможность рассрочки?",
    question_uz: "Bo'lib-bo'lib to'lash imkoniyati bormi?",
    question_en: "Is there a possibility of installments?",
    answer_ru: "Да, возможность рассрочки обсуждается при заключении договора.",
    answer_uz: "Ha, shartnomani tuzishda bo'lib-bo'lib to'lash imkoniyati muhokama qilinadi.",
    answer_en: "Yes, the possibility of installments is discussed at the conclusion of the contract.",
    open: false,
  },

])

const getprice = ref(true)

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



const namename = ref('')
const numbernumber = ref('')

function sender() {
  let fullmessage = `Имя клиента: ${namename.value} \n Телефон номер: ${numbernumber.value}`;

  let api = `https://api.telegram.org/bot7279314013:AAEJ4C0nkyHegNklpvm8ds6Yns5iEL_wCJw/sendMessage?chat_id=-1002175177949&text=${fullmessage}`

  axios.get(api)
  namename.value = ''
  numbernumber.value = ''
}


const price = ref(0)
const projectsButton = ref(1)
const pricemodel = ref(0)

setTimeout(() => {
  document.querySelector('.loading-image').classList.add('load')
  document.querySelector('.preloader-animation').classList.add('hid')
}, 3000);

</script>

<template>
  <Header />
  <main class="overflow-x-hidden">
    <section class="first m:max-h-[max-content] m:h-[max-content] max-h-[1000px] relative h-[100vh] w-[100%]">
      <div class="max-w-[1200px] sm:px-[0px] xl:px-[10px] h-[100%] mx-auto flex-col flex justify-between">
        <div class="sm:hidden h-[120px] m:h-[200px]"></div>
        <div class="xl:flex-col xl:items-center xl:mx-auto flex justify-center items-start gap-[30px]">
          <div class="flex justify-centerbg-[red] sm:h-[90vh] items-center">
            <div class="fixed preloader-animation h-[100%] w-[100%] bg-[black] left-0 top-0 z-[9999]">
              <div class="absolute h-[100%] w-[100%] z-[99999] bg-[#000000be]"></div>
            </div>
            <img
              class="loading-image m:translate-x-[0px] translate-x-[300px] duration-[1s] m:w-[80%] z-[99999] sm:block sm:mx-auto m:h-[initial] h-[200px]"
              src="/biglogo.png" alt="image">
          </div>
          <div class="w-[560px] activeshadow m:mt-[100px] m:w-[90%] sm:w-[100%]">
            <p class="text-white sm:text-[14px] mb-[10px] font-[nunitolight] text-[16px]">
              {{ $t('screen') }}</p>
            <button @click="$router.push('/about')"
              class="cursorbigRounded buttonAnimation border-[1px] border-[#6D7D7D] font-[nunitomedium] text-white rounded-[5px] px-[16px] py-[5px] uppercase">
              {{ $t('more') }}</button>
          </div>
        </div>
        <div class="pb-[50px] m:pt-[100px] activeshadows">
          <p class="w-[320px] mb-[20px] font-[nunitoregular] text-white">
            {{ $t('screenBottom') }}
          </p>
          <button onclick="my_modal_1.showModal()"
            class="cursorbigRounded buttonAnimation border-[1px] border-[#00FFFF] font-[nunitomedium] text-white rounded-[5px] px-[16px] py-[5px] uppercase">{{ $t('consult') }}</button>
          <dialog style="cursor:  auto !important;" id="my_modal_1"
            class="modal h-[100vh] flex items-center justify-center">
            <div style="cursor:  auto !important;"
              class="modal-box bg-[#191D1D] mt-[-220px] border-[aqua] border-[1px]">
              <h3 style="cursor:  auto !important;"
                class="text-lg font-bold text-white font-[nunitomedium] text-[24px]">{{ $t('dialog1') }}</h3>
              <div style="cursor:  pointer !important;" class="flex-col flex gap-[10px] mt-[20px]">
                <input v-model="namename" :placeholder="$t('dialog2')" style="cursor:  pointer !important;"
                  class="input text-white caret-white font-[nunitomedium] bg-[#191D1D] border-[white] border-[1px] focus:border-white"
                  type="text">
                <input v-model="numbernumber" :placeholder="$t('dialog3')" style="cursor:  pointer !important;"
                  class="input text-white caret-white font-[nunitomedium] bg-[#191D1D] border-[white] border-[1px] focus:border-white"
                  type="text">
              </div>
              <div style="cursor:  auto !important;" class="modal-action">
                <form method="dialog" class="flex gap-[10px]">
                  <!-- if there is a button in form, it will close the modal -->
                  <button style="cursor:  pointer !important;"
                    class="btn border-[aqua] border-[1px] text-white hover:bg-white hover:text-black bg-[#191D1D]">{{
                    $t('dialog4') }}</button>
                  <button @click="sender()" style="cursor:  pointer !important;"
                    class="btn bg-[aqua] border-[aqua] hover:bg-white hover:text-black">{{ $t('dialog5') }}</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </section>

    <section class="project-wrapper py-[100px] bg-[#191D1D]" data-wow-duration="2s" data-wow-delay="1s">
      <div class="max-w-[1200px] xl:max-w-[95%] h-[100%] mx-auto flex-col flex justify-between">
        <div>
          <h3 data-aos="flip-up" data-aos-offset="150" data-aos-delay="1" data-aos-duration="1000" data-aos-once="false"
            class="uppercase m:text-[27px] sm:text-[24px] font-[nunitoblack] text-[#00FFFF] text-[40px]">
            {{ $t('ourprojects') }}
          </h3>
          <p data-aos="flip-up" data-aos-offset="150" data-aos-delay="50" data-aos-duration="1000" data-aos-once="false"
            class="max-w-[500px] m:text-[14px] font-[nunitoregular] mt-[5px] text-white">
            {{ $t('ourprojectssubtitle') }}
          </p>

          <!-- <div class="flex mt-[10px] justify-end gap-[20px]">
            <div :class="{ 'active-projects': projectsButton == 1 }">
              <button @click="projectsButton = 1,projects = commercial" data-aos="zoom-out-up" data-aos-offset="150" data-aos-delay="150"
                data-aos-duration="1000" data-aos-once="false"
                class="cursorbigRounded duration-[.3s] border-[1px] border-[#00FFFF] font-[nunitomedium] text-white rounded-[5px] px-[16px] py-[5px] uppercase">Коммерческие
                интереры</button>
            </div>
            <div :class="{ 'active-projects': projectsButton == 2 }">
              <button @click="projectsButton = 2,projects = nocommercial" data-aos="zoom-out-up" data-aos-offset="150" data-aos-delay="150"
                data-aos-duration="1000" data-aos-once="false"
                class="cursorbigRounded duration-[.3s] border-[1px] border-[#00FFFF] font-[nunitomedium] text-white rounded-[5px] px-[16px] py-[5px] uppercase">Коммерческие
                интереры</button>
            </div>
          </div> -->

        </div>
        <div class="flex m:justify-center m:w-[100%] flex-wrap m:gap-[10px] gap-[20px] mt-[20px]">
          <div v-for="item of projects" :key="item.id"
            class="project m:w-[48%] m:h-[initial] opacity-0 translate-y-[150px] w-[269.84px] h-[429.52px]">
            <img class="h-[100%] w-[100%] object-cover" :src="item.image" :alt="item.text">
          </div>
        </div>
        <div class="flex justify-center mt-[40px]">
          <button @click="$router.push('/portfolio')"
            class="cursorbigRounded sm:text-[16px] buttonAnimation w-[max-content] border-[1px] border-[#00FFFF] text-[20px] font-[nunitomedium] text-white rounded-[5px] px-[16px] py-[10px] uppercase">
            {{ $t('knowmore') }}
          </button>
        </div>
      </div>
    </section>

    <section class="bg-[#121616] sm:overflow-hidden py-[100px]">
      <div class="max-w-[1200px] xl:max-w-[95%] h-[100%] mx-auto flex-col gap-[50px] flex justify-between">

        <h3 data-aos="flip-up" data-aos-offset="150" data-aos-duration="1000" data-aos-once="false"
          class="uppercase m:text-[27px] sm:text-[24px] font-[nunitoblack] text-[#00FFFF] text-[40px]">
          {{ $t('ourservices') }}
        </h3>

        <div class="flex flex-col items-center gap-[50px] sm:gap-[80px] sm:pt-[30px] w-[100%]">

          <div
            class="hovernum  cursor-pointer relative z-[1]  h-[318px] xl:h-[280px] rounded-t-[50px] rounded-l-[50px] translate-x-[-50%] max-w-[582px]  w-[100%]  xl:translate-x-[-150px] xl:max-w-[50%] m:max-w-[350px] m:w-[350px] m:h-[220px] sm:translate-x-[0px]">
            <div class="animation-vector"></div>
            <div data-aos="fade-left" data-aos-offset="150" data-aos-duration="1000" data-aos-once="false"
              class="p-[30px] w-[100%] absolute z-[2] h-[100%] bg-[#212828] rounded-t-[50px] rounded-l-[50px] m:p-[15px] m:rounded-t-[10px] m:rounded-l-[10px]">
              <h4 data-aos="zoom-in-right" data-aos-offset="150" data-aos-delay="50" data-aos-duration="1000"
                data-aos-once="false"
                class="text-[40px] xl:text-[30px] text-white font-[nunitoregular] mb-[10px] m:text-[19px] m:mb-[0px]">
                {{ $t('serivice1') }}</h4>
              <p class="text-[15px] xl:text-[14px] mb-[25px] text-white font-[nunitolight] m:text-[12px] m:mb-[10px]">
                {{ $t('serivice4') }}</p>
              <button onclick="my_modal_1.showModal()"
                class="cursorbigRounded  button-anim w-[max-content] border-[1px] border-[#00FFFF] text-[20px] font-[nunitomedium] text-white rounded-[5px] px-[16px] py-[10px] uppercase xl:text-[15px]  m:text-[13px]">{{ $t('moreinfo') }}</button>
            </div>

            <div
              class="leftnum nums z-[0] absolute right-[-45%] top-[50%] translate-y-[-50%] leading-[340px] uppercase font-[nunitomedium] font-[1000] text-[300px] text-[#0F3939] m:text-[200px] sm:right-[-30px] sm:top-[40px] pointer-events-none">
              01</div>
          </div>

          <div
            class="hovernum cursor-pointer relative z-[1]  h-[318px] translate-x-[50%] rounded-r-[50px] max-w-[582px] w-[100%] xl:translate-x-[150px] xl:max-w-[50%] xl:h-[280px] m:max-w-[350px] m:w-[350px] m:h-[220px] sm:translate-x-[0px]">
            <div data-aos="fade-right" data-aos-offset="150" data-aos-duration="1000" data-aos-once="false"
              class="p-[30px] w-[100%] absolute z-[2] h-[100%] bg-[#212828] rounded-r-[50px] m:rounded-r-[10px] m:p-[15px]">
              <h4 class="text-[40px] text-white font-[nunitoregular] mb-[10px] xl:text-[30px] m:text-[19px] m:mb-[0px]"
                data-aos="zoom-in-left" data-aos-offset="150" data-aos-delay="50" data-aos-duration="1000"
                data-aos-once="false">{{ $t('serivice2') }}
              </h4>
              <p class="m:text-[12px] m:mb-[10px] text-[15px] xl:text-[14px] mb-[25px] text-white font-[nunitolight]">
                {{ $t('serivice5') }}</p>
              <button onclick="my_modal_1.showModal()"
                class="cursorbigRounded button-anim w-[max-content] border-[1px] border-[#00FFFF] text-[20px] font-[nunitomedium] text-white rounded-[5px] px-[16px] py-[10px] uppercase xl:text-[15px] m:text-[13px]">{{ $t('moreinfo') }}</button>
            </div>
            <div
              class="rightnum nums z-[0] absolute left-[-55%] top-[50%] translate-y-[-50%] leading-[340px] uppercase font-[nunitomedium] font-[1000] text-[300px] text-[#0F3939] m:text-[200px] sm:left-[-30px] sm:top-[40px] pointer-events-none">
              02</div>
          </div>

          <div
            class="hovernum cursor-pointer relative z-[1]  h-[348px] translate-x-[-50%] max-w-[582px] w-[100%] xl:translate-x-[-150px] xl:max-w-[50%] xl:h-[280px] m:max-w-[350px] m:w-[350px] m:h-[260px] sm:translate-x-[0px]">
            <div data-aos="fade-left" data-aos-offset="150" data-aos-duration="1000" data-aos-once="false"
              class="p-[30px] w-[100%] absolute z-[2] h-[100%] bg-[#212828] rounded-b-[50px] rounded-l-[50px] m:p-[15px] m:rounded-b-[10px] m:rounded-l-[10px]">
              <h4 class="text-[40px] text-white font-[nunitoregular] mb-[10px] xl:text-[30px] m:text-[19px] m:mb-[0px]"
                data-aos="zoom-in-right" data-aos-offset="150" data-aos-delay="50" data-aos-duration="1000"
                data-aos-once="false ">{{ $t('serivice3') }}
              </h4>
              <p data-aos="flip-up" data-aos-offset="150" data-aos-duration="1000" data-aos-once="false"
                class="text-[15px] mb-[25px] text-white font-[nunitolight] xl:text-[14px] m:text-[12px] m:mb-[10px]">
                {{ $t('serivice6') }}</p>
              <button onclick="my_modal_1.showModal()"
                class="cursorbigRounded button-anim w-[max-content] border-[1px] border-[#00FFFF] text-[20px] font-[nunitomedium] m:text-[13px] text-white rounded-[5px] px-[16px] py-[10px] uppercase xl:text-[15px]">{{ $t('moreinfo') }}</button>
            </div>
            <div
              class="leftnum nums z-[0] absolute right-[-45%] top-[50%] translate-y-[-50%] leading-[340px] uppercase font-[nunitomedium] font-[1000] text-[300px] text-[#0F3939] m:text-[200px] sm:right-[-30px] sm:top-[40px] pointer-events-none">
              03</div>
          </div>

        </div>
      </div>
    </section>

    <section id="pricing" class="calculate bg-[#191D1D] relative z-[1] py-[100px]">
      <div class="absolute h-[100%] w-[100%] bg-[#191d1df3] z-[-2] top-0 left-0"></div>
      <div class="max-w-[1200px] xl:max-w-[95%] xl:w-[95%] h-[100%] mx-auto flex-col z-[2] flex justify-between">

        <h3 data-aos="flip-up" data-aos-offset="150" data-aos-duration="1000" data-aos-once="false"
          class="uppercase sm:text-[24px] font-[nunitoblack] sm:mb-[10px] text-[#00FFFF] mb-[17px] text-[40px]">
          {{ $t('calctitle') }}
        </h3>

        <p data-aos="flip-up" data-aos-offset="150" data-aos-delay="50" data-aos-duration="1000" data-aos-once="false"
          class="max-w-[500px] sm:text-[15px] font-[nunitoregular] text-white text-[20px]">{{ $t('calcsubtitle') }}</p>

        <div class="flex gap-[30px] sm:gap-[20px] mt-[37px] xl:mt-[15px] mb-[35px]">

          <button @click="getprice = true" :class="{ 'buttonAnimationActive': getprice }"
            class=" cursorbigRounded border-[1px] border-[#00FFFF] font-[nunitomedium] text-white rounded-[5px] px-[16px] py-[5px] uppercase sm:text-[13px]">{{
              $t('calchome') }}</button>

          <button @click="getprice = false" :class="{ 'buttonAnimationActive': !getprice }"
            class="buttonAnimation cursorbigRounded hover:scale-[1.1] border-[1px] border-[#00FFFF] font-[nunitomedium] text-white rounded-[5px] px-[16px] py-[5px] uppercase  sm:text-[13px]">{{
              $t('calccommercial') }}</button>

        </div>
        <p data-aos="fade-left" data-aos-offset="150" data-aos-delay="50" data-aos-duration="1000" data-aos-once="false"
          class="font-[nunitoregular] text-white text-[20px] sm:text-[16px]">{{ $t('calctext') }}</p>
        <div data-aos="fade-left" data-aos-offset="150" data-aos-delay="50" data-aos-duration="1000"
          data-aos-once="false" class="mt-[20px] sm:mt-[10px] mb-[10px] flex gap-[12px] items-end">
          <div class="flex items-end gap-[10px]">
            <input v-model="pricemodel"
              class="h-[40px] caret-[aqua] w-[132px] border-[1px] border-white rounded-[5px] bg-[transparent] pl-[5px] text-white font-[nunitomedium] text-[23px]"
              type="text">
            <span class="font-[nunitomedium] text-white text-[20px]">M<sup>2</sup></span>
          </div>
          <div>
            <span v-if="price != 0" class="font-[nunitomedium] text-white text-[20px]">= ${{ price }}</span>
          </div>
          <div>

          </div>
        </div>
        <p data-aos="fade-left" data-aos-offset="150" data-aos-delay="50" data-aos-duration="1000" data-aos-once="false"
          class="font-[nunitoregular] mb-[30px] sm:text-[13px] text-[#969696] text-[16px]">{{ $t('calc') }}</p>
        <div class="flex gap-[20px]">
          <button @click="price = pricemodel * 25" data-aos="fade-left" data-aos-offset="150" data-aos-delay="50"
            data-aos-duration="1000" data-aos-once="false"
            class="buttonAnimation sm:text-[13px] cursorbigRounded w-[max-content] border-[1px] border-[#00FFFF] font-[nunitomedium] text-white text-[20px] rounded-[5px] px-[16px] py-[12px] uppercase">{{
              $t('calcprice') }}</button>
        </div>
      </div>~
    </section>

    <section class="py-[100px] overflow-hidden w-[100%] bg-[#121616]">
      <div class="max-w-[1200px] overflow-hidden xl:max-w-[95%] xl:w-[95%] h-[100%] mx-auto">
        <h3 data-aos="flip-up" data-aos-offset="150" data-aos-delay="0" data-aos-duration="1000" data-aos-once="false"
          class="uppercase sm:text-[24px] mb-[50px] font-[nunitoblack] text-[#00FFFF] text-[40px]">
          {{ $t('question') }}
        </h3> 

        <div data-aos="fade-up" data-aos-offset="150" data-aos-delay="0" data-aos-duration="1000" data-aos-once="false"
          @click="item.open = !item.open" v-for="(item, index) of questions" :key="item.id">
          <div :class="{ questionActive: item.open }"
            class="sm:px-[12px] h-[85px] group hover:text-black hover:bg-[white] duration-[.3s] mb-[20px] w-[100%] px-[30px] cursor-pointer border-[1px] border-[#00FFFF] rounded-[10px]">
            <div class="h-[85px] flex justify-between items-center">
              <span class="text-[20px] sm:text-[14px] font-[nunitomedium] group-hover:text-black text-white">
                {{ item[$t('questionitem')] }}
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor"
                class="size-8 sm:size-5 group-hover:text-black duration-[.3s] text-white rotate-[-90deg]">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
              </svg>
            </div>

            <p :class="{ hiddenText: item.open }"
              class="opacity-[0] text-[17px] sm:text-[14px] translate-y-[-17px] font-[nunitolight] group-hover:text-black text-white">
              {{ item[$t('answeritem')] }}
            </p>

          </div>
        </div>

      </div>
    </section>



    <Footer />
  </main>
</template>

<style>
.load {
  transform: translateX(0px);
  z-index: 100;
}

.hid {
  opacity: 0;
  pointer-events: none;
  transition-duration: 1s;
}

.preloader-animation {
  background: black;
}


.active-projects :first-child {
  background: white;
  color: black;
  border-color: white;
}

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
  height: 150px;
  background: #232929;
}

@media screen and (max-width: 550px) {
  .questionActive {
    height: 180px;
    background: #232929;
  }
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


@media screen and (max-width: 500px) {
  .hovernum:hover .leftnum {
    top: 30px;
    right: -30px;
  }

  .hovernum:hover .rightnum {
    top: 30px;
    left: -30px;
  }
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
  background-image: url('/bg-first-screen.png');
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
}

.activeshadow {
  color: white;
}

.activeshadows {
  color: white;
}

@media screen and (max-width: 500px) {
  .activeshadow {
    background: linear-gradient(#191d1d00, #191d1dc7, #191D1D, #191D1D);
    width: 100%;
    padding: 100px 10px 10px 10px;

  }

  .activeshadows {
    padding: 100px 10px 10px 10px;
    background: #191D1D;
  }

  .first {
    background-image: url('https://images.unsplash.com/photo-1506377295352-e3154d43ea9e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    background-size: 500px !important;
    background-repeat: no-repeat;
    background-position: center top;
    background-attachment: fixed;
  }
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