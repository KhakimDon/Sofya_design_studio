<script setup lang="ts">
import { onMounted, ref } from "vue";
import Cursor from '../components/Cursor.vue';
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  let adds = document.querySelectorAll('.cursorbig')
  for (let i of adds) {
    i.addEventListener("mouseenter", () => {
      let cursor = document.querySelector('.cursor')
      let b = document.querySelector('.circle')
      b.style.height = "70px"
      b.style.width = "70px"
      b.style.borderColor = "#0F3939"
      b.style.borderWidth = "40px"

      cursor.style.opacity = 0
    })
    i.addEventListener("mouseleave", () => {
      let cursor = document.querySelector('.cursor')
      let b = document.querySelector('.circle')
      b.style.height = "40px"
      b.style.width = "40px"
      b.style.borderColor = "white"
      b.style.borderWidth = "2px"

      cursor.style.opacity = 1
    })
  }

  let addsOthers = document.querySelectorAll('.cursorbigRounded')
  for (let i of addsOthers) {
    i.addEventListener("mouseenter", () => {
      let cursor = document.querySelector('.cursor')
      let b = document.querySelector('.circle')
      b.style.height = "70px"
      b.style.width = "70px"
      b.style.opacity = "0.6"
      b.style.borderWidth = "0.5px"

      cursor.style.opacity = 0
    })
    i.addEventListener("mouseleave", () => {
      let cursor = document.querySelector('.cursor')
      let b = document.querySelector('.circle')
      b.style.height = "40px"
      b.style.width = "40px"
      b.style.opacity = "1"
      b.style.borderWidth = "1px"

      cursor.style.opacity = 1
    })
  }



})

function handleScroll() {
  if (pageYOffset > 100 && window.location.pathname == '/') {
    document.querySelector(".header").classList.add('activeHeader')
  } else {
    document.querySelector(".header").classList.remove('activeHeader')
  }

}
const lang = ref(false)

</script>

<template>
  <header
    class="header fixed z-[9998] w-[100%] flex justify-center items-center h-[90px]  left-[50%] translate-x-[-50%]">
    <Cursor />
    <div class="z-[999] flex items-center w-[100%] justify-between max-w-[1200px]">
      <img @click="$router.push('/')" src="../assets/logo.png" alt="image">
      <ul class="flex items-center gap-[40px] text-white font-[nunitomedium] uppercase">
        <li class="cursorbig hover:scale-[1.1] duration-[.3s]" @click="$router.push('/')">Главное</li>
        <li class="cursorbig hover:scale-[1.1] duration-[.3s]" @click="$router.push('/about')">О нас</li>
        <li class="cursorbig hover:scale-[1.1] duration-[.3s]" @click="$router.push('/portfolio')">Портфолио</li>
        <li class="cursorbig hover:scale-[1.1] duration-[.3s]"><a class="cursorbig cursor-none"
            href="#contacts">Контакты</a></li> 

        <li @click="lang = !lang"
          class="cursorbig border-[1px] hover:bg-[white] hover:text-[black] hover:border-[black] duration-[.3s] relative flex gap-[4px] items-center border-[#00FFFF] px-[10px] py-[2px] cursorbig rounded-[6px]">
          <span class="duration-[.3s]">RU</span>
          <svg :class="{ 'rotate-[180deg]': lang }" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke-width="1.5" stroke="currentColor" class="size-3 duration-[.3s]">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
          <div :class="{ activelang: lang }"
            class="cursor-pointer pointer-events-none duration-[.5s] absolute h-[180px] hover:text-white flex flex-col gap-[10px] p-[8px] w-[200px] bg-[#212828] top-[80px] opacity-0  right-0 rounded-[10px]">
            <div style="cursor: pointer !important;"
              class="p-[10px] cursor-pointer flex group gap-[10px] justify-between hover:bg-[#00FFFF] hover:text-[black] border-[1px] border-[#00FFFF] rounded-[8px]">
              <span class="text-white group-hover:text-black">Узбекский</span>
              <img class="h-[20px] w-[40px]"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/1280px-Flag_of_Uzbekistan.svg.png"
                alt="uzbk">
            </div>
            <div style="cursor: pointer !important;"
              class="p-[10px] cursor-pointer flex group gap-[10px] justify-between hover:bg-[#00FFFF] hover:text-[black] border-[1px] border-[#00FFFF] rounded-[8px]">
              <span class="text-white group-hover:text-black">Русский</span>
              <img class="h-[20px] w-[40px]"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/1200px-Flag_of_Russia.svg.png"
                alt="uzbk">
            </div>
            <div style="cursor: pointer !important;"
              class="p-[10px] cursor-pointer flex group gap-[10px] justify-between hover:bg-[#00FFFF] hover:text-[black] border-[1px] border-[#00FFFF] rounded-[8px]">
              <span class="text-white group-hover:text-black">Английский</span>
              <img class="h-[20px] w-[40px]"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg/1200px-Flag_of_Great_Britain_%281707%E2%80%931800%29.svg.png"
                alt="uzbk">
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="headerBackground z-[998] duration-[1s] absolute top-0 bg-[#121616] h-[0%] w-[100%]"></div>
  </header>
</template>

<style>
.activelang {
  opacity: 1;
  pointer-events: fill !important;
  top: 40px;
}

.activeHeader .headerBackground {
  height: 100%;
}
</style>