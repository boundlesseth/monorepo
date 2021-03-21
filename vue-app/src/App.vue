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

$borderRadius: 1em;
$borderWidth: 0.1em;

body {
  padding: 0;
  margin: 0;
}

* {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
}

a {
  text-decoration: none;
  color: inherit;
}

h1{

}
h2 {

}
h3 {
  margin: 0;
  font-weight: bold;
}
h4 {
  margin: 0;
}

.nav {
  padding: 1em 0;
  background: #eee;
  &__logo img {
    height: 4em;
  }
}

.container {
  max-width: 80em;
  margin: 0 auto;
  position: relative;
}

.content-container {
  max-width: 80em;
  margin: 0 auto;
  position: relative;
  min-height: 100vh;
}

.flex-row {
  display: flex;
  flex-direction: row;
  width: 100%;
  &--center {
    justify-content: space-between;
    align-items: center;
  }
}

.block-explorer {
  padding: 3em 0;
  width: auto;
  &__picker {
    input {
      outline: none;
      border: none;
      font-size: 1.2em;
      width: 10em;
      height: 3rem;
      padding: 0.4rem 1rem;
      border-radius: 0.5rem 0 0 0.5rem;
    }
    button {
      background: white;
      border: none;
      height: 3rem;
      position: relative;
      bottom: 0.275em;
      &:last-of-type {
        border-radius: 0 0.5rem 0.5rem 0;
      }
    }
  }
  &__buttons {
    button {
      background: white;
      border: none;
      height: 3rem;
      border-radius: .5rem;
      margin-left: 0.5rem;
    }
  }
}

img.artist-image {
  border: 0.15em solid black;
  height: 3em;
  width: 3em;
  border-radius: 50%;
  object-fit: cover;
}

.hover-scale {
  transition: 150ms transform;
  &:hover {
    transform: scale(1.02)
  }
}

.gradient-border {
  border-radius: $borderRadius;
  border: 1px solid #bbb;

  /*
    z-index is messing things up the colorful borders
  */
  // position: relative;
  // background: linear-gradient(180deg, #736CC0 0%, #FFF38A 30%, rgba(153, 255, 237, 0.78) 46.88%, #b592ffb9 74.48%, #fd8bffc4 100%);
  // z-index: -2;
  // &::after {
  //   content: '';
  //   position: absolute;
  //   left: $borderWidth;
  //   right: $borderWidth;
  //   bottom: $borderWidth;
  //   top: $borderWidth;
  //   border-radius: $borderRadius - 0.1em;
  //   background: white;
  //   z-index: -1;
  // }
}

</style>
