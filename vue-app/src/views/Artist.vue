<template>
  <div class="artist">
    <div class="content-container">
      <div class="nav">
        <div class="nav__artist">
          <div class="nav__artist__title">
            <img class="artist-image" src="../assets/artist-1.png" />
            <h1>Montriaticia</h1>
          </div>
          <p>
            I’ve already accounted for the huge number of variables with Mondriatica, this one should be covered. I wrote up a whole index to visualize what variable goes where...
          </p>
        </div>
        <div class="nav__artist-picker">
            <img class="artist-image" src="../assets/artist-2.png" />
            <img class="artist-image" src="../assets/artist-3.png" />
        </div>
      </div>
      <div class="block-explorer">
        <div class="block-explorer__picker">
          <input value="Block #12478954" />
          <button>
            prev
          </button>
          <button>
            next
          </button>
        </div>
        <button>shuffle</button>
        <button>latest</button>
      </div>
      <div class="artist__content">
        <div class="artist__artworks">

          <img src="../assets/art-1.png" />
          <img src="../assets/art-1.png" />
          <img src="../assets/art-1.png" />
          <img src="../assets/art-1.png" />
          <img src="../assets/art-1.png" />
          <img src="../assets/art-1.png" />
          <img src="../assets/art-1.png" />
          <img src="../assets/art-1.png" />
          <img src="../assets/art-1.png" />
          <img src="../assets/art-1.png" />
          <img src="../assets/art-1.png" />
          <img src="../assets/art-1.png" />
          <img src="../assets/art-1.png" />

        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .artist {
    .nav {
      padding: 4em;
      background: #eee;
      &__artist {
        width: 40em;
      }
      &__artist-picker {
        text-align: right;
        img {
          margin-left: 1em;
        }
      }
      .nav__artist__title {
        display: flex;
        flex-direction: row;
        align-items: center;
        h1 {
          padding-left: 0.5em;
        }
      }
    }
    &__content {
      padding: 4em;
    } 
    &__artworks {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1em;
      grid-auto-rows: minmax(100px, auto);
    }
  }
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "artist",
  components: {

  }
});
</script>
