<template>
  <div class="">
    <div class="nav">
      <div class="flex-row flex-row--center container">
        <div class="nav__logo">
          <a href="/">
            <img alt="Boundless" src="../assets/logo.png" />
          </a>
        </div>
        <div class="block-explorer flex-row">
          <div class="block-explorer__picker">
            <input value="Block #12478954" />
            <button>
              ◀
            </button>
            <button>
              ▶
            </button>
          </div>
          <div class="block-explorer__buttons">
            <button>shuffle</button>
            <button>latest</button>
          </div>
        </div>
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
