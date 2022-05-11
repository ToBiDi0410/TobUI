<template>
    <div class="qoute p-2 rounded-r-md text-sm font-semibold" :class="'twc-' + color">
        <slot></slot>
    </div>
</template>

<style scoped>
    .qoute {
        background-color: rgba(0, 0, 0, 0.116);
        box-shadow: -0.25em 0px 2px -1px var(--twc-current-500);
    }
</style>

<script>

export default {
    name: "Quote",
    props: ["color"]
}
</script>