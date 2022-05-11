<template>
    <div class="navbar min-h-14 bg-indigo-800 flex flex-row p-1 text-white shadow-md flex-wrap bg-">
        <div class="logo w-fit p-1 h-14 left-0 right-0 m-auto">
            <slot name="logo" class="navbar-slot-logo"></slot>
        </div>

        <div class="links flex-grow flex flex-row flex-wrap items-center" :class="{ 'justify-center': centerLinks === true }">
            <slot name="links"></slot>
        </div>

        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<style scoped>
    /deep/ .links>* {
        padding: 0.25em 0.5em;
    }
</style>

<script>
export default {
    name: "Navbar",
    props: ["centerLinks", "search"],
}
</script>