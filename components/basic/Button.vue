<template>
    <button :disabled="disabled" class="appearance-none button rounded-lg w-fit px-2 py-1 focus:ring-4 focus:ring-gray-200 z-20" :class="'twc-' + color">
        <slot></slot>
    </button>
</template>

<style scoped>
    button {
        background-color: var(--twc-current-500);
    }

    button:enabled:hover {
        background-color: var(--twc-current-600);
    }

    button:disabled {
        opacity: 0.5;
    }
</style>

<script>
export default {
    name: "Button",
    props: ["color", "disabled"]
}
</script>