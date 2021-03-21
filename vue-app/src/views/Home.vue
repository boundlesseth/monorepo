<template>
  <div class="home">
    <div class="content-container">
      
      <!-- 
        The top section of the homepage showing the most recently minted work
      -->
      <div class="home__recent gradient-border">
        <div class="home__recent__title flex-row flex-row--center ">
          <h3>Latest Generation</h3>
          <small>minted from block #12989234</small>
        </div>
        <div class="flex-row">
          <div class="home__recent__item">
            <a href="/token/1">
              <img class="hover-scale" src="../assets/art-1.png" />
            </a>
            <div class="home__recent__item__artist">
              <img class="hover-scale artist-image" src="../assets/artist-1.png" />
              <h4>
                Kate the Cursed
              </h4>
            </div>
          </div>
          <div class="home__recent__item">
            <a href="/token/2">
              <img class="hover-scale" src="../assets/art-2.png" />
            </a>
            <div class="home__recent__item__artist">
              <img class="hover-scale artist-image" src="../assets/artist-2.png" />
              <h4>
                Kate the Cursed
              </h4>
            </div>
          </div>
          <div class="home__recent__item">
            <a href="/token/3">
              <img class="hover-scale" src="../assets/art-3.png" />
            </a>
            <div class="home__recent__item__artist">
              <img class="hover-scale artist-image" src="../assets/artist-3.png" />
              <h4>
                Kate the Cursed
              </h4>
            </div>
          </div>
        </div>
      </div>

      <!-- 
        Previous Generations section
      -->
      <div class="home__prevgen">
        <h3>
          Previous Generations
        </h3>
        <div class="home__prevgen__container">

          <div class="home__prevgen__i gradient-border">
            <div class="home__prevgen__i__header">
              <h4>Gen #123789423</h4>
              <small>seeded 10/19/20</small>
            </div>
            <div class="home__prevgen__i__works flex-row">
              <img src="../assets/art-1.png" />
              <img src="../assets/art-2.png" />
              <img src="../assets/art-3.png" />
            </div>
          </div>

          <div class="home__prevgen__i gradient-border">
            <div class="home__prevgen__i__header">
              <h4>Gen #123789423</h4>
              <small>seeded 10/19/20</small>
            </div>
            <div class="home__prevgen__i__works flex-row">
              <img src="../assets/art-1.png" />
              <img src="../assets/art-2.png" />
              <img src="../assets/art-3.png" />
            </div>
          </div>

          <div class="home__prevgen__i gradient-border">
            <div class="home__prevgen__i__header">
              <h4>Gen #123789423</h4>
              <small>seeded 10/19/20</small>
            </div>
            <div class="home__prevgen__i__works flex-row">
              <img src="../assets/art-1.png" />
              <img src="../assets/art-2.png" />
              <img src="../assets/art-3.png" />
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .home {
    &__recent__title {
      background: white;
      position: relative;
      top: -0.8em;
      padding: 0 1em;
      box-sizing: content-box;
      left: -1em;
      margin-bottom: 2em;
    }
    &__recent {
      padding: 0 4em 2em;
      margin-top: 4em;
      &__item {
        flex: 1;
        &:not(:last-of-type) {
          margin-right: 2em;
        }
        > a {
          > img {
            width: 100%;
          }
        }
        &__artist {
          display: flex;
          align-items: center;
          margin: 0.8em 0;
          padding: 0.2em 0.5em;
          border-radius: 0.5em;
          h4 {
            padding-left: 1em;
          }
        }
      }
    }
    &__prevgen {
      text-align: center;
      padding: 8em 2em;
      h3 {
        margin-bottom: 3em;
      }
      &__container {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 8em;
        grid-auto-rows: minmax(100px, auto);
      }
      &__i {
        &__header {
          background: white;
          position: relative;
          top: -0.6em;
          width: 50%;
          margin: 0 auto;
        }
      }
      &__i__works {
        margin: 18% 0 30%;
        justify-content: space-evenly;
        img {
          display: inline-block;
          width: 25%;
        }
      }
    }
  }
</style>

<script lang="ts">
  import { defineComponent } from "vue";
  export default defineComponent({
    name: "Home"
  });
</script>
