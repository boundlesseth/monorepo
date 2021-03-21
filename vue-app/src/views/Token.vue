<template>
  <div class="token">
    <div class="content-container">
      <div class="token__container gradient-border">
        <div class="token__title">
          <h1>Comp #128906786</h1>
        </div>
        <div class="flex-row">
          <div class="token__image">
            <img src="../assets/art-3.png" />
          </div>
          <div class="token__info">
            <div class="token__info__section">
              <h3>Block Number</h3>
              <p>#1204389042</p>
            </div>
            <div class="token__info__section">
              <h3>Block Hash</h3>
              <p>0x829bd82...d092293333a830</p>
            </div>
            <div class="token__info__section">
              <h3>Artist</h3>
              <p>Mondriaticia</p>
            </div>
            <div class="token__info__section">
              <h3>Value</h3>
              <div class="big-num">
                0.9488123 ETH
              </div>
              <p>
                purchased 01/20/21
              </p>
            </div>
            <button>
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .token {
    &__container {
      margin-top: 6em;
      padding-bottom: 1em;
    }
    &__title {
      padding: 0 4em;
      h1 {
        background: white;
        display: inline-block;
        position: relative;
        top: -0.7em;
        padding: 0 0.5em;
        left: -0.5em;
      }
    }
    &__image {
      width: 66.7%;
      padding: 2em 4em 2em 6em;
      img {
        width: 100%;
      }
    }
    &__info {
      margin: 2em 4em 2em 0;
      position: relative;
      width: 33%;
      &__section {
        padding-bottom: 3em;
      }
      button {
        position: absolute;
        bottom: 0;
        font-size: 2em;
        background: none;
        border: 1px solid black;
        width: 100%;
        padding: 1em;
      }
    }
  }
</style>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "home",
    components: {}
  });
</script>
