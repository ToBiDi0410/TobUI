<template>
    <div class="input bg-indigo-500 rounded-full flex-row pr-2 z-20">
        <input class="bg-transparent rounded-full outline-none focus:ring-2 focus:ring-sky-400 px-2 w-5/6" type="text">
        <GoogleIcon v-if="icon" class="w-8 text-xl ml-1">{{ icon }}</GoogleIcon>
    </div>
</template>

<script>
import GoogleIcon from "./GoogleIcon.vue";

export default {
    name: "Input",
    props: ["icon"],
    components: { GoogleIcon }
}
</script>