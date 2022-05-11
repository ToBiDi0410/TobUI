<template>
    <div class="dropdown relative">
        <Link :underlined="false" :icon="icon" @mouseover="linkHover(true)" @mouseleave="linkHover(false)">
            {{ title }}
            <GoogleIcon>expand_more</GoogleIcon>
        </Link>

        <div v-if="expanded" class="absolute entrys text-black w-48 text-sm z-50" @mouseover="entrysHover(true)" @mouseleave="entrysHover(false)">
            <div class="bg-white shadow-lg rounded py-1 px-2 flex flex-col overflow-hidden">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<style scoped>
.entrys {
    left: 50%;
    transform: translate(-50%, 0);
    max-width: 50vw;
    animation: scale-up-top 0.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both alternate;
}

.entrys > div {
    margin-top: 0.5em;
}

/deep/ .entrys > div > * {
    padding: 0.5em 0em;
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.411);
}

/deep/ .entrys > div > *:last-child {
    border-bottom: unset !important;
}

@keyframes scale-up-top {
    0% {
        transform: scale(0.5) translate(-50%, 0);
        transform-origin: 0% 0%;
    }
    100% {
        transform: scale(1) translate(-50%, 0);
        transform-origin: 0% 0%;
    }
}
</style>

<script>
import Link from "./Link.vue";
import GoogleIcon from "./GoogleIcon.vue";

export default {
    name: "Dropdown",
    props: ["title", "icon"],
    components: { Link, GoogleIcon },
    data: () => ({ linkHovering: false, entrysHovering: false, expanded: false, checkTimeout: null }),
    methods: {
        linkHover(val) {
            this.linkHovering = val;
            this.checkExpand();
        },
        entrysHover(val) {
            this.entrysHovering = val;
            this.checkExpand();
        },
        checkExpand() {
            if(this.checkTimeout) clearTimeout(this.checkTimeout);

            this.checkTimeout = setTimeout(() => {
                //console.log("Toggling Expand!\n", this.linkHovering, this.entrysHovering);
                this.expanded = this.linkHovering || this.entrysHovering;
            }, 50);
        }
    }
}
</script>