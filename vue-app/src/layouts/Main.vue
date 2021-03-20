<template>
  <div class="content-container">
    <div class="nav">
      <div class="nav__logo">
        <a href="/">
          <img alt="Boundless" src="../assets/logo.png" />
        </a>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainLayout"
});
</script>
