<template>
  <div class="token">
    <div class="content-container">
      <div class="nav nav--token">
        <div class="flex-row">
          <div class="nav--token__commerce">
            <h3>Price:</h3>
            <span class="big-number">
              1 ETH
            </span>
            <div class="nav--token__commerce__buttons">
              <button>Buy</button>
              <button>Trade</button>
            </div>
          </div>
          <div class="nav--token__meta">
            <div class="flex-row">
              <img class="artist-image" src="../assets/eth.png" />
              <div>
                <h3>Token</h3>
                <small>0x829bd82...d092293333a830</small>
                <br/>
                <small>Block #12900344</small>
              </div>
            </div>
            <div class="flex-row">
              <img class="artist-image" src="../assets/artist-1.png" />
              <div>
                <h3>Mondriaticia</h3>
                <small><a href="/artist/1">view artist page</a></small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="token__content">
        <img src="../assets/art-3.png" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .nav--token {
    &__logo img {
      height: 3em;
      padding-bottom: 3em;
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
