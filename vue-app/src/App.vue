<template>
  <MainLayout></MainLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainLayout from "./layouts/Main.vue";

export default defineComponent({
  name: "App",
  components: { MainLayout }
});
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

h3 {
  margin: 0;
  font-weight: bold;
}

.nav {
  padding: 4em;
  background: #eee;
  &__logo img {
    height: 4em;
  }
}

.content-container {
  max-width: 70em;
  margin: 0 auto;
  position: relative;
  min-height: 100vh;
}

.block-explorer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 3em 0;
}

img.artist-image {
  border: 0.15em solid black;
  height: 3em;
  width: 3em;
  border-radius: 50%;
  object-fit: cover;
}
</style>
