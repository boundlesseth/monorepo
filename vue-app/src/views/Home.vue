<template>
  <div class="home">
    <div class="content-container">
      <div class="home__content">
        <div class="flex-row flex-row--center">
          <h3>Block #12070422</h3>
          <small>next block in 13 sec </small>
        </div>
        <div class="home__artworks">
          <div class="home__artworks__item">
            <a href="/token/1">
              <img class="hover-scale" src="../assets/art-1.png" />
            </a>
            <div class="home__artworks__item__artist">
              <a href="/artist/1">
                <img class="hover-scale" src="../assets/artist-1.png" />
                <h4>
                  Kate the Cursed
                </h4>
              </a>
            </div>
          </div>
          <div class="home__artworks__item">
            <a href="/token/2">
              <img class="hover-scale" src="../assets/art-2.png" />
            </a>
            <div class="home__artworks__item__artist">
              <a href="/artist/2">
                <img class="hover-scale" src="../assets/artist-2.png" />
                <h4>
                  Kate the Cursed
                </h4>
              </a>
            </div>
          </div>
          <div class="home__artworks__item">
            <a href="/token/3">
              <img class="hover-scale" src="../assets/art-3.png" />
            </a>
            <div class="home__artworks__item__artist">
              <a href="/artist/3">
                <img class="hover-scale" src="../assets/artist-3.png" />
                <h4>
                  Kate the Cursed
                </h4>
              </a>
            </div>
          </div>
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
    </div>
  </div>
</template>

<style lang="scss">
  .home {
    &__content {
      padding: 4em;
    }
    &__artworks {
      display: flex;
      flex-direction: row;
      margin: 2em 0;
      &__item {
        flex: 1;
        &:not(:last-of-type) {
          margin-right: 2em;
        }
        a {
          > img {
            width: 100%;
          }
        }
        &__artist > a {
          display: flex;
          align-items: center;
          margin: 0.8em 0;
          padding: 0.2em 0.5em;
          border-radius: 0.5em;
          &:hover {
            background: #eee;
          }
          > img {
            border: 0.15em solid black;
            height: 3em;
            width: 3em;
            border-radius: 50%;
            object-fit: cover;
          }
          h4 {
            padding-left: 1em;
          }
        }
      }
    }
  }
  .block-explorer {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
</style>

<script lang="ts">
  import { defineComponent } from "vue";
  export default defineComponent({
    name: "Home"
});
</script>
