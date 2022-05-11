<template>
    <div class="relative card bg-white dark:bg-gray-800 w-fit h-fit shadow-lg m-2 rounded-lg p-4 inline-block z-10">
        <div class="text-lg font-bold w-100 pb-2" v-html="title" v-if="title"></div>
        <div class="content w-100 relative">
            <slot></slot>
        </div>
        <div class="footer w-100 text-xs font-semibold text-gray-600 pt-2 dark:text-gray-400" v-if="$slots.footer">
            <slot name="footer"></slot>
        </div>
        <NotificationDot v-if="notificationDot"></NotificationDot>
    </div>
</template>

<script>
import NotificationDot from "./NotificationBadge.vue";

export default {
    name: "Card",
    props: ["title", "notificationDot"],
    components: { NotificationDot }
}
</script>