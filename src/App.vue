<template>
  <div id="app"
       :class="$store.getters.MOOD"
       @click="setMood">
    <div class="container-fluid full">
      <div class="inner">
        <div class="face">
          <div class="eyes">
            <div class="eye" ref="lefty" :class="$store.getters.MOOD"></div>
            <div class="eye" ref="righty" :class="$store.getters.MOOD"></div>
          </div>
          <div class="mouth"
               :class="[ $store.getters.MOOD,
                       { speaking: $store.getters.SPEAKING }]"></div>
        </div>
      </div>
    </div>

    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      humor: true,
    };
  },
  computed: {
    speaking() {
      return this.$store.getters.SPEAKING;
    },
  },
  beforeCreate() {
    if (this.$route.path === '/sad') {
      this.$store.dispatch('setMood', 'bad');
    } else if (this.$route.path === '/happy') {
      this.$store.dispatch('setMood', 'good');
    }
  },
  mounted() {
    setInterval(() => {
      this.$refs.lefty.classList.toggle('blink');
      this.$refs.righty.classList.toggle('blink');

      // Blink Twice in a row
      if (Math.random() > 0.8) {
        setTimeout(() => {
          this.$refs.lefty.classList.toggle('blink');
          this.$refs.righty.classList.toggle('blink');

          setTimeout(() => {
            this.$refs.lefty.classList.toggle('blink');
            this.$refs.righty.classList.toggle('blink');

            setTimeout(() => {
              this.$refs.lefty.classList.toggle('blink');
              this.$refs.righty.classList.toggle('blink');
            }, 1000);
          }, 1000);
        }, 1000);
      } else {
        setTimeout(() => {
          this.$refs.lefty.classList.toggle('blink');
          this.$refs.righty.classList.toggle('blink');
        }, 1000);
      }
    }, 10000);
  },
  methods: {
    setMood() {
      if (this.isChangeAllowed()) {
        if (this.$store.getters.MOOD === 'neutral') {
          this.$store.dispatch('setMood', 'bad');
          this.$router.push('/sad');
        } else if (this.$store.getters.MOOD === 'bad') {
          this.$store.dispatch('setMood', 'good');
          this.$router.push('/happy');
        } else {
          this.$store.dispatch('setMood', 'neutral');
          this.$router.push('/');
        }
      }
    },
    isChangeAllowed() {
      return !this.speaking;
    },
  },
};
</script>

<style lang="scss">

@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #DDD;
}

.full {
  display: table;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 9;

  .inner {
    display: table-cell;
    vertical-align: middle;
    text-align: center;

    .face {
        width: 38vw;
        height: 38vw;
        margin: -10vh auto 0;
        border-radius: 50%;
        font-size: 0;

        .eyes {
            width: 50%;
            height: 56%;
            margin: 0 auto;
            padding-top: 26%;

            .eye {
                transition: all 0.7s;
                height: 100%;
                width: 30%;
                display: inline-block;
                background: #444;
                border-radius: 50%;
                margin-right: 40%;
                animation-delay: 1s;
                overflow: hidden;

                &.blink {
                  animation: blink .52s;
                }

                &.bad {
                  background-color: #FFF;
                }

                &:last-of-type {
                  margin-right: 0;
                }
            }
        }

        .mouth {
            transition: all 0.7s;
            width: 61%;
            margin: 13% auto 0;
            height: 30%;
            border-top: 2vw solid #444;
            border-radius: 12%;
            color: #444;

            &.bad {
              border-radius: 50%;
              margin-top: 10%;
              border-top: 2vw solid #FFF;
              color: #FFF;
            }

            &.good {
              border-radius: 50%;
              margin-top: -4%;
              transform: rotateX(180deg);
              border-top: 4vw solid #444;
            }

            &.speaking {
              animation: speaking .6s infinite;
            }
        }
    }
  }
}

@import "sass/animations";
</style>
