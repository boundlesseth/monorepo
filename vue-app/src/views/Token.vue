<template>
  <div class="token">
    <div class="content-container">
      <div class="token__container gradient-border">
        <div class="token__title">
          <h1>Comp #128906786</h1>
        </div>
        <div class="flex-row">
          <div class="token__image">
            <MakeArt
              src="/p5-artworks/mondriaticia.html?seed=795e71a1d79c54e9b0c7b836b80971feeb8377af123d4b6b329b4599a6ec7936"
            />
          </div>
          <div class="token__info">
            <div class="token__info__section">
              <h2>Block Number</h2>
              <h4>#1204389042</h4>
            </div>
            <div class="token__info__section">
              <h2>Block Hash</h2>
              <h4>0x829bd82...d092293333a830</h4>
            </div>
            <div class="token__info__section">
              <h2>Artist</h2>
              <h4>Mondriaticia</h4>
            </div>
            <div class="token__info__section">
              <h2>Value</h2>
              <div class="big-num">
                0.9488123 ETH
              </div>
              <h4>
                purchased 01/20/21
              </h4>
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
    padding: 0 6em;
    h1 {
      background: var(--white);
      display: inline-block;
      position: relative;
      top: -0.7em;
      padding: 0 0.5em;
      left: -0.5em;
    }
  }
  &__image {
    width: 66.7%;
    padding: 0 4em 2em 6em;
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
      border: 1px solid var(--black);
      width: 100%;
      padding: 1em;
    }
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import MakeArt from "../components/MakeArt.vue";

export default defineComponent({
  name: "home",
  components: {
    MakeArt
  },
  mounted() {
    console.log(this.$route.params.token)
  }
});
</script>
