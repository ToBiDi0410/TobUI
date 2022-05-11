<template>
    <div class="googleIcon inline w-fit">
        <span class="inline icon material-symbols-outlined"><slot></slot></span>
    </div>
</template>

<style scoped>
@import url("https://fonts.sandbox.google.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0");

.icon {
    vertical-align: middle;
    font-size: inherit !important;
}
</style>

<script>
export default {
    name: "GoogleIcon"
}
</script>