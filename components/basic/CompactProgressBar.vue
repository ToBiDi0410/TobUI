<template>
    <div class="compactProgressBar progressBar w-full h-1 overflow-hidden z-20" :class="'twc-' + color">
        <div class="bar h-full" :style="{ width : value + '%'}" :class="indetermined ? 'indetermined' : ''"></div>
    </div>
</template>

<style scoped>
.progressBar {
    background-color: var(--twc-current-300);
}

.progressBar>.bar {
    background-color: var(--twc-current-500);
    transition: all 1s;
}

.progressBar>.bar.indetermined {
    animation: progressbar-indetermined 2s both infinite;
    width: 100% !important;
}

@keyframes progressbar-indetermined {
    0% {
        transform: translateX(100%);
    }
    30% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(100%);
    }
}
</style>

<script>
export default {
    name: "CompactProgressBar",
    props: ["value", "indetermined", "color"]
}
</script>