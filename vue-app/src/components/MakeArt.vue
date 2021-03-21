<template>
    <iframe v-bind:src="src" ref="iframe" />
    <img class="hover-scale" ref="img" />
</template>
<style>
    iframe {
        height: 0;
        border: 0;
    }
</style>
<script>
    import { defineComponent } from "vue";
    export default defineComponent({
        name: "make-art",
        props: {
            src: String
        },
        mounted() {
            window.setTimeout(() => {
                const iframe = this.$refs.iframe
                const img = iframe
                    .contentWindow.document
                    .getElementById('defaultCanvas0')
                    .toDataURL("image/png");
                this.$refs.img.src = img
            }, 1000)
        }
    });
</script>