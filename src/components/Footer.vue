<script setup lang="ts">
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ref } from 'vue';
import axios from 'axios'
import router from '../router'

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

const namename = ref('')
const numbernumber = ref('')

function sender() {
  let fullmessage = `Имя клиента: ${namename.value} \n Телефон номер: ${numbernumber.value}`;

  let api = `https://api.telegram.org/bot7279314013:AAEJ4C0nkyHegNklpvm8ds6Yns5iEL_wCJw/sendMessage?chat_id=-1002175177949&text=${fullmessage}`

  axios.get(api)
  namename.value = ''
  numbernumber.value = ''
}
</script>

<template>
    <section class="bg-[#191D1D] py-[80px]">
        <div class="max-w-[1200px] xl:max-w-[95%] h-[100%] mx-auto">
            <h3  data-aos="flip-up" data-aos-offset="150" data-aos-duration="1000" data-aos-once="false" class="uppercase mb-[16px] sm:mb-[10px] xl:text-[24px] font-[nunitoblack] text-[#00FFFF] text-[40px]">
                {{ $t('contacwithus') }}
            </h3>
            <div class="flex items-end gap-[40px] sm:w-[100%] xl:flex-col xl:items-start">
                <div  data-aos="fade-up" data-aos-delay="0" data-aos-offset="150" data-aos-duration="1000" data-aos-once="false" class="sm:w-[100%] flex flex-col sm:gap-[5px] gap-[10px]">
                    <span class="text-[#969696] sm:text-[14px] font-[nunitolight] text-[20px]">{{ $t('name') }}</span>
                    <input v-model="namename"
                        class="h-[66px] text-white w-[354px] xl:w-[100%] pl-[20px] font-[nunitomedium] text-[20px] bg-[transparent] border-[#00FFFF] border-[1px] rounded-[5px]"
                        :placeholder="$t('namePlaceholder')" type="text">
                </div>
                <div  data-aos="fade-up" data-aos-delay="200" data-aos-offset="150" data-aos-duration="1000" data-aos-once="false" class="flex flex-col sm:w-[100%]  sm:gap-[5px]  gap-[10px]">
                    <span class="text-[#969696] sm:text-[14px]  font-[nunitolight] text-[20px]">{{ $t('number') }}</span>
                    <input v-model="numbernumber"
                        class="h-[66px] text-white w-[354px] xl:w-[100%] pl-[20px] font-[nunitomedium] text-[20px] bg-[transparent] border-[#00FFFF] border-[1px] rounded-[5px]"
                        placeholder="+998 77 777 77 77" type="text">
                </div>
                <button @click="sender()"  data-aos="fade-up" data-aos-delay="400" data-aos-offset="150" data-aos-duration="1000" data-aos-once="false"
                    class="buttonAnimation sm:text-[18px] sm:px-[30px] sm:w-[100%] cursorbigRounded w-[max-content] border-[1px] border-[#00FFFF] font-[nunitomedium] text-white text-[20px] rounded-[5px] px-[56px] py-[17px] uppercase">{{ $t('zayavka') }}</button>
            </div>
        </div>
    </section>
    <footer class="w-[100%] bg-[#121616] h-[max-content] py-[100px]">
        <div class="max-w-[1200px] xl:max-w-[95%] mx-auto">
            <h3 data-aos="flip-up" data-aos-offset="150" data-aos-duration="1000" data-aos-once="false" class="sm:text-[24px] uppercase mb-[30px] font-[nunitoblack] text-[#00FFFF] text-[40px]">
                {{ $t('socials') }}
            </h3>
            <div data-aos="fade-up" data-aos-offset="150" data-aos-duration="1000" data-aos-once="false" class="flex items-start gap-[20px] sm:gap-[10px] sm:flex-col">

                <a target="_blank" href="https://www.instagram.com/sofya_design_studio/"
                    class="block h-[345.45px] sm:h-[140px] sm:rounded-[10px] cursor-pointer group hover:bg-[white] hover:mr-[20px] duration-[.3s] w-[345.45px] sm:w-[100%] relative border-white p-[30px] sm:p-[20px] border-[1px] rounded-[20px]">
                    <span
                        class="uppercase duration-[.3s] group-hover:text-[black] font-[nunitomedium] sm:text-[19px] text-[30px] text-white">INSTAGRAM</span>
                    <svg width="198" height="190"
                        class="absolute sm:h-[80px] duration-[.3s] group-hover:fill-[black] fill-[#00FFFF] left-0 sm:left-[-10px] bottom-0"
                        viewBox="0 0 198 190" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.1"
                            d="M62.56 65.5318C24.3844 65.5318 -6.40817 96.3244 -6.40817 134.5C-6.40817 172.676 24.3844 203.468 62.56 203.468C100.736 203.468 131.528 172.676 131.528 134.5C131.528 96.3244 100.736 65.5318 62.56 65.5318ZM62.56 179.338C37.89 179.338 17.7217 159.23 17.7217 134.5C17.7217 109.77 37.8299 89.6617 62.56 89.6617C87.2902 89.6617 107.398 109.77 107.398 134.5C107.398 159.23 87.2301 179.338 62.56 179.338ZM150.436 62.7106C150.436 71.6543 143.233 78.7972 134.349 78.7972C125.406 78.7972 118.263 71.5943 118.263 62.7106C118.263 53.827 125.466 46.6241 134.349 46.6241C143.233 46.6241 150.436 53.827 150.436 62.7106ZM196.115 79.0373C195.094 57.4885 190.172 38.4007 174.386 22.6743C158.659 6.94784 139.572 2.02583 118.023 0.945387C95.8137 -0.315129 29.2464 -0.315129 7.03733 0.945387C-14.4515 1.9658 -33.5393 6.88782 -49.3257 22.6142C-65.1122 38.3407 -69.9742 57.4285 -71.0546 78.9773C-72.3151 101.186 -72.3151 167.754 -71.0546 189.963C-70.0342 211.511 -65.1122 230.599 -49.3257 246.326C-33.5393 262.052 -14.5115 266.974 7.03733 268.055C29.2464 269.315 95.8137 269.315 118.023 268.055C139.572 267.034 158.659 262.112 174.386 246.326C190.112 230.599 195.034 211.511 196.115 189.963C197.375 167.754 197.375 101.246 196.115 79.0373ZM167.423 213.792C162.741 225.557 153.677 234.621 141.852 239.363C124.145 246.386 82.1281 244.765 62.56 244.765C42.992 244.765 0.914825 246.326 -16.7324 239.363C-28.4972 234.681 -37.5609 225.617 -42.3029 213.792C-49.3257 196.085 -47.7051 154.068 -47.7051 134.5C-47.7051 114.932 -49.2657 72.8548 -42.3029 55.2076C-37.6209 43.4428 -28.5572 34.3791 -16.7324 29.6371C0.974846 22.6142 42.992 24.2349 62.56 24.2349C82.1281 24.2349 124.205 22.6743 141.852 29.6371C153.617 34.319 162.681 43.3827 167.423 55.2076C174.446 72.9148 172.825 114.932 172.825 134.5C172.825 154.068 174.446 196.145 167.423 213.792Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor"
                        class="size-8 absolute group-hover:rotate-[0deg] sm:right-[10px] sm:size-6 sm:bottom-[10px] right-[30px] bottom-[30px] group-hover:text-black duration-[.3s] text-white rotate-[-90deg]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
                    </svg>

                </a>

                <div class="h-[345.45px] sm:h-[180px] sm:w-[100%] flex-1 flex flex-col gap-[20px] sm:gap-[10px]">
                    <div class="h-[40%] w-[100%] flex sm:gap-[10px] gap-[20px]">
                        <a  href="https://t.me/Firdavs_dsg" target="_blank"
                            class=" w-[50%] sm:rounde/d-[10px]  cursor-pointer hover:w-[80%] duration-[.3s] group hover:bg-white relative border-white p-[30px] sm:p-[20px] border-[1px] justify-between rounded-[20px] h-[100%] flex items-center">
                            <span
                                class="uppercase duration-[.3s] group-hover:text-[black] font-[nunitomedium] sm:text-[19px] text-[30px] text-white">
                                Telegram
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor"
                                class="size-8 sm:size-5 group-hover:text-black group-hover:rotate-[0deg] duration-[.3s] text-white rotate-[-90deg]">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
                            </svg>
                            <svg width="103" height="86" viewBox="0 0 103 86" fill="none"
                                class="absolute sm:h-[50px] group-hover:fill-[black] fill-[#00FFFF] left-0 bottom-0"
                                xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.1"
                                    d="M97.0669 0.0673828C101.047 0.0673828 104.05 3.52754 102.444 9.96343L82.9607 100.966C81.599 107.436 77.6534 108.993 72.2065 105.983L25.7327 71.9694C25.5525 71.8413 25.4056 71.6725 25.3043 71.4769C25.203 71.2813 25.1502 71.0647 25.1502 70.8449C25.1502 70.6251 25.203 70.4084 25.3043 70.2129C25.4056 70.0173 25.5525 69.8485 25.7327 69.7203L79.3992 21.6934C81.8434 19.5481 78.8755 18.51 75.6632 20.4477L8.30938 62.5578C8.10511 62.6898 7.87318 62.774 7.6312 62.804C7.3892 62.834 7.1435 62.809 6.91272 62.7308L-21.6838 53.769C-28.0386 51.9351 -28.0386 47.6099 -20.2523 44.5304L94.1689 0.794016C95.0763 0.362607 96.0617 0.115544 97.0669 0.0673828Z"
                                    fill="current" />
                            </svg>

                        </a>
                        <a target="_blank"  href="https://wa.me/998901772299"
                            class="w-[50%] hover:w-[80%]  sm:p-[20px] overflow-hidden relative group hover:bg-white duration-[.3s] cursor-pointer flex items-center justify-between p-[30px] border-white border-[1px] rounded-[20px] sm:rounded-[10px] h-[100%]">
                            <span
                                class="uppercase duration-[.3s] group-hover:text-[black] font-[nunitomedium] sm:text-[19px] text-[30px] text-white">
                                WHATSUP
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor"
                                class="size-8 sm:size-5 group-hover:text-black group-hover:rotate-[0deg] duration-[.3s] text-white rotate-[-90deg]">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
                            </svg>
                            <svg width="92" height="87"
                                class="fill-[#00FFFF] sm:h-[50px] group-hover:fill-[black] absolute left-0 sm:left-[-20px] bottom-0"
                                viewBox="0 0 92 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.1"
                                    d="M52.6543 0.895381L49.7435 0.486847C40.9954 -0.77625 32.0685 0.473341 24.0035 4.08994C15.9385 7.70654 9.06767 13.5411 4.19201 20.9135C-0.995575 27.9606 -4.08802 36.3292 -4.72945 45.0563C-5.37088 53.7833 -3.53522 62.5141 0.566272 70.244C0.986027 71.0187 1.24736 71.8692 1.33503 72.746C1.42271 73.6227 1.33497 74.5082 1.07694 75.3507C-1.0168 82.5511 -2.95733 89.8026 -5 97.4115L-2.44666 96.6455C4.44734 94.8071 11.3414 92.9687 18.2354 91.2835C19.6905 90.981 21.2029 91.1233 22.576 91.692C28.7612 94.7107 35.5205 96.3714 42.4004 96.5627C49.2802 96.7541 56.1214 95.4716 62.4648 92.8013C68.8082 90.1311 74.507 86.1349 79.1789 81.0809C83.8507 76.027 87.3875 70.0322 89.5518 63.4988C91.7161 56.9655 92.4579 50.0448 91.7274 43.2011C90.9969 36.3575 88.8109 29.7493 85.3163 23.82C81.8217 17.8907 77.0992 12.7776 71.4658 8.82362C65.8324 4.86967 59.4184 2.16645 52.6543 0.895381ZM65.5231 67.8949C63.6672 69.5566 61.4039 70.6967 58.9639 71.199C56.524 71.7014 53.9944 71.548 51.633 70.7547C40.9323 67.7415 31.6486 61.0276 25.4358 51.8089C23.0626 48.5484 21.1548 44.9735 19.7674 41.187C19.0159 38.99 18.8804 36.6292 19.3755 34.3606C19.8707 32.092 20.9775 30.0023 22.576 28.3182C23.3542 27.325 24.4135 26.5893 25.6158 26.2067C26.8181 25.8241 28.1078 25.8125 29.3168 26.1734C30.3382 26.4287 31.0531 27.9097 31.9723 29.0331C32.7179 31.1422 33.5911 33.2053 34.5767 35.2122C35.3245 36.2361 35.6367 37.5143 35.4454 38.7677C35.254 40.021 34.5746 41.1478 33.5554 41.902C31.2574 43.9446 31.6148 45.6298 33.249 47.9278C36.8617 53.1324 41.8466 57.2334 47.6498 59.7753C49.2839 60.4902 50.5095 60.6435 51.5819 58.9582C52.0415 58.2944 52.6543 57.7326 53.165 57.1198C56.1269 53.392 55.2077 53.443 59.9058 55.4857C61.4021 56.1138 62.8523 56.8492 64.2465 57.6816C65.6253 58.4986 67.719 59.3668 68.0254 60.5924C68.3202 61.922 68.2426 63.3072 67.8012 64.5955C67.3597 65.8839 66.5714 67.0255 65.5231 67.8949Z"
                                    fill="CURRENT" />
                            </svg>
                        </a>
                    </div>
                    <a target="_blank" href="https://www.behance.net/sofya_design_studio"
                        class="h-[60%] sm:rounded-[10px]  hover:h-[80%] flex cursor-pointer hover:bg-[white] group duration-[.3s] overflow-hidden relative items-start p-[30px] justify-between w-[100%] border-white border-[1px] rounded-[20px]">
                        <span
                            class="uppercase duration-[.3s] group-hover:text-[black] font-[nunitomedium] sm:text-[19px] text-[30px] text-white">
                            BEHANCE
                        </span>
                        <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            class="size-8 sm:size-5 absolute group-hover:rotate-[0deg] right-[30px] sm:right-[10px] sm:bottom-[10px] bottom-[30px] group-hover:text-black duration-[.3s] text-white rotate-[-90deg]">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
                        </svg>
                        <svg class="h-[170px] sm:h-[100px] group-hover:fill-black  absolute opacity-[10%] fill-[#00FFFF] left-[-30px] sm:left-[10px ] bottom-[-30px]"
                            viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M2.5 19C1.67157 19 1 18.3284 1 17.5V6.5C1 5.67157 1.67157 5 2.5 5H8C13 5 13 11.5 10 11.5C13 11.5 14 19 8 19H2.5ZM4.5 11C4.22386 11 4 10.7761 4 10.5V7.5C4 7.22386 4.22386 7 4.5 7H7C7 7 9 7 9 9C9 11 7 11 7 11H4.5ZM4.5 13C4.22386 13 4 13.2239 4 13.5V16.5C4 16.7761 4.22386 17 4.5 17H8C8 17 9.5 17 9.5 15C9.5 13 8 13 8 13H4.5Z"
                                fill="current" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M21.499 14.0034C22.3279 14.0034 23.0212 13.3199 22.8522 12.5085C21.6065 6.52886 12.9128 7.08088 13 14.0034C13.0665 19.2762 20.4344 20.9671 22.6038 16.1898C22.9485 15.4308 22.1747 14.9997 21.5372 14.9997C20.9706 14.9997 20.5313 15.5223 20.1693 15.9582C19.1272 17.2132 15.9628 17.1221 15.5449 14.5142C15.5005 14.2375 15.7304 14.0034 16.0106 14.0034H21.499ZM15.8184 11.9997C15.671 11.9997 15.5758 11.8453 15.6545 11.7207C16.7141 10.0424 19.2614 10.0605 20.3398 11.7189C20.4207 11.8434 20.3257 11.9997 20.1772 11.9997H15.8184Z"
                                fill="current" />
                            <path
                                d="M16 6C15.4477 6 15 6.44772 15 7C15 7.55228 15.4477 8 16 8H20C20.5523 8 21 7.55228 21 7C21 6.44772 20.5523 6 20 6H16Z"
                                fill="current" />
                        </svg>

                    </a>
                </div>

            </div>

            <div id="contacts" class="flex mt-[100px] gap-[40px] sm:flex-col">
                <div class="w-[50%] sm:w-[100%] flex flex-col justify-between">
                    <div>
                        <h3 data-aos="flip-up" data-aos-offset="150" data-aos-duration="1000" data-aos-once="false" class="uppercase sm:text-[24px] mb-[30px] font-[nunitoblack] text-[#00FFFF] text-[40px]">
                            {{ $t('contact') }}
                        </h3>
                        <ul class="text-[20px] font-[nunitoblack] text-white uppercase mb-[5px]">
                            <li data-aos="zoom-in-up" data-aos-offset="150" data-aos-duration="1000" data-aos-once="false">{{ $t('phonen') }}</li>
                            <li data-aos="zoom-in-up" data-aos-offset="150" data-aos-duration="1000" data-aos-once="false" class="font-[nunitolight]"><a href="tel:+998901772299">+998 (90) 177-22-99</a></li>
                        </ul>
                        <ul class="text-[20px] mt-[44px] font-[nunitoblack] text-white uppercase mb-[5px]">
                            <li data-aos="zoom-in-up" data-aos-offset="150" data-aos-duration="1000" data-aos-once="false">{{ $t('addressTitle') }}</li>
                            <li data-aos="zoom-in-up" data-aos-offset="150" data-aos-duration="1000" data-aos-once="false" class="font-[nunitolight]">{{ $t('address') }}</li>
                        </ul>
                    </div>
                    <img data-aos="zoom-in-down" data-aos-offset="150" data-aos-duration="1000" data-aos-once="false" class="h-[96px] sm:h-[60px] self-end" src="/biglogo.png" alt="logo">
                </div>
                <div class="w-[50%] sm:w-[100%] sm:order-[-1] sm:h-[400px] h-[100%] border-[#00FFFF] border-b-[3px] border-r-[3px] pr-[15px] pb-[15px]">
                    <iframe data-aos="flip-down" data-aos-offset="150" data-aos-duration="1000" data-aos-once="false" class="w-[100%] h-[660px] sm:h-[380px] rounded-[20px]"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1478.1769439517384!2d69.28873202675614!3d41.36220950697538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef31b482c4b93%3A0x48e7a32c29cc3448!2sSofya%20Design%20%26%20Architecture!5e0!3m2!1sru!2s!4v1722525882609!5m2!1sru!2s"
                        style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

        </div>
    </footer>
</template>

<style></style>