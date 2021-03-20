<template>
  <div class="nav">
    <div class="nav__logo">
      <img alt="Vue logo" src="../assets/logo.png" />
    </div>
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainLayout"
});
</script>
