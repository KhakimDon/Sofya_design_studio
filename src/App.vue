<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import './style.css'
</script>

<template>
  <div>
    <RouterView />
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  caret-color: transparent;
  box-sizing: border-box;
  cursor: none !important;
}

body {
  cursor: none;
  background: #121616;
}

::-webkit-scrollbar {
  width: 40px;
  /* Ширина скроллбара */
}

::-webkit-scrollbar-track {
  background: #121616;
  /* Цвет трека (фона) скроллбара */
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(transparent, #00FFFF, transparent);
  /* Цвет ползунка скроллбара */
  border-radius: 0px;
  /* Закругление углов ползунка */
}

::-webkit-scrollbar-thumb:hover {
  background: #029e9e;
  /* Цвет ползунка при наведении */
}

@media screen and (max-width: 500px) {

  ::-webkit-scrollbar {
    width: 0px !important;
    /* Ширина скроллбара */
  }

  ::-webkit-scrollbar-track {
    background: #121616 !important;
    /* Цвет трека (фона) скроллбара */
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(transparent, #00FFFF, transparent) !important;
    /* Цвет ползунка скроллбара */
    border-radius: 0px !important;
    /* Закругление углов ползунка */
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #029e9e !important;
    /* Цвет ползунка при наведении */
  }
}
</style>
