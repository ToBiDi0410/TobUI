<template>
    <div class="image max-h-full max-w-full overflow-hidden z-10">
        <img class="max-h-full max-w-full h-full" :src="src">
    </div>
</template>

<script>
export default {
    name: "Image",
    props: ["src"]
}
</script>