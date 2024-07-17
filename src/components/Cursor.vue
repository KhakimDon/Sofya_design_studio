<template>
    <div>
        <div class="cursor" :style="cursorStyle"></div>
        <div class="circle" :style="circleStyle"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, onUnmounted } from 'vue';

export default defineComponent({
    name: 'Cursor',
    setup() {
        const cursor = ref({ x: 0, y: 0 });
        const circle = ref({ x: 0, y: 0 });
        const delay = 0.1;

        const updateCursor = (event: MouseEvent) => {
            cursor.value = { x: event.clientX, y: event.clientY };
        };

        const updateCircle = () => {
            circle.value.x += (cursor.value.x - circle.value.x) * delay;
            circle.value.y += (cursor.value.y - circle.value.y) * delay;
            requestAnimationFrame(updateCircle);
        };

        onMounted(() => {
            document.addEventListener('mousemove', updateCursor);
            updateCircle();
        });

        onUnmounted(() => {
            document.removeEventListener('mousemove', updateCursor);
        });

        const cursorStyle = computed(() => ({
            left: `${cursor.value.x}px`,
            top: `${cursor.value.y}px`,
        }));

        const circleStyle = computed(() => ({
            left: `${circle.value.x}px`,
            top: `${circle.value.y}px`,
        }));

        return {
            cursorStyle,
            circleStyle,
        };
    },
});
</script>

<style scoped>
.cursor {
    position: fixed;
    width: 7px;
    height: 7px;
    background-color: white;
    border-radius: 50%;
    pointer-events: none;
    z-index: 1000;
    transform: translate(-50%, -50%);
    transition: opacity .3s;
}

.circle {
    position: fixed;
    width: 40px;
    /* задайте необходимый размер круга */
    height: 40px;
    border: 2px solid white;
    border-radius: 50%;
    pointer-events: none;
    z-index: 999;
    transform: translate(-50%, -50%);
    transition: height .3s, width .3s, border .3s;
}
</style>