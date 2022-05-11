<template>
    <div class="sidebar w-screen h-fit lg:h-full lg:w-fit bg-zinc-200 flex flex-col items-center p-4 text-dark dark:text-white dark:bg-green-900">
        <slot></slot>
    </div>
</template>

<style>
.sidebar > * + * {
    padding-top: 1rem;
}
</style>

<script>
export default {
    name: "Sidebar"
}
</script>