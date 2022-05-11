<template>
    <div class="cardGroup flex flex-row items-stretch flex-wrap justify-center align-middle">
        <slot></slot>
    </div>
</template>

<style>
.cardGroup > * {
    height: unset !important;
}
</style>

<script>
export default {
    name: "CardGroup"
}
</script>