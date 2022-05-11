<template>
    <div class="absolute page w-screen h-screen flex flex-col overflow-x-hidden overflow-y-auto bg-zinc-100 text-black dark:text-white dark:bg-gray-900 z-0">
        
        <div clsas="pageNavbar z-40">
            <slot name="navbar"></slot>
        </div>

        <div class="flex flex-col md:flex-row flex-grow">
           <div clsas="pageSidebar z-40">
                <slot name="sidebar"></slot>
            </div>

            <div class="pageContent flex-grow flex-wrap">
                <slot></slot>
            </div> 
        </div>

        <div class="pageFooter">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "Page"
}
</script>