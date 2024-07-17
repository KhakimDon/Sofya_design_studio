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

body::-webkit-scrollbar {
  width: 4px;
  /* Ширина скроллбара */
}

body::-webkit-scrollbar-track {
  background: #121616;
  /* Цвет трека (фона) скроллбара */
}

body::-webkit-scrollbar-thumb {
  background: linear-gradient(transparent, #00FFFF, transparent);
  /* Цвет ползунка скроллбара */
  border-radius: 0px;
  /* Закругление углов ползунка */
}

body::-webkit-scrollbar-thumb:hover {
  background: #029e9e;
  /* Цвет ползунка при наведении */
}
</style>
