<template>
    <div class="link w-fit h-fit text-inherit hover:text-gray-400 items-center" :class="{ 'flex flex-row': !vertical, 'flex flex-col': vertical }" @click="clicked">
        <GoogleIcon class="text-lg pr-1" v-if="icon" :class="{ 'text-3xl': largeIcon }">{{ icon }}</GoogleIcon>
        <div class="content inline" :class="{ underline: this.underlined !== false, 'text-xs' : largeIcon }" ><slot></slot></div>
    </div>
</template>

<script>
import GoogleIcon from "./GoogleIcon.vue";

export default {
    name: "Link",
    emits: ["clicked"],
    props: ["href", "icon", "underlined", "vertical", "largeIcon"],
    components: { GoogleIcon },
    methods: {
        clicked() {
            if(this.href) window.location.href = this.href;
            this.$emit('clicked', this);
        }
    }
}
</script>