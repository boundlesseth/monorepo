<template>
    <iframe ref="iframe" v-bind:src="genHashUrl2" />
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
    import objectHash from 'object-hash';

    export default defineComponent({
        name: "make-art-2",
        props: {
            src: String,
            seed: String
        },
        computed: {
            genHashUrl2() {
                const customSeed = objectHash(Math.random()) + objectHash(Math.random())
                return "/p5-artworks/albertron.html?seed=" +  customSeed.slice(0, 64)
            }
        },
        mounted() {
            window.setTimeout(() => {
                try {
                    const iframe = this.$refs.iframe
                    const img = iframe
                        .contentWindow.document
                        .getElementById('defaultCanvas0')
                        .toDataURL("image/png");
                    this.$refs.img.src = img
                } catch(e) {
                    console.log(e)
                }
            }, 2000)
        }
    });
</script>