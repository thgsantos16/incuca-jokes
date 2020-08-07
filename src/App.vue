<template>
  <div id="app"
       :class="$store.getters.MOOD"
       @click="setMood"
       :style="{ background: $store.getters.MOOD != 'neutral' ? '#111' : '#EEE' }">

    <!-- This Component renders some meta tags and title -->
    <vue-headful
        title="Scott Screen | Incuca test"
        description="My name is Scott Screen, I'm a cool App
          designed by Thiago Cruz, a.k.a. Dad, to help him get an awesome job at Incuca!
          Make yourself at home, try some clicks around and I hope you will have fun!"
        keywords="Scott, Screen, Incuca, test, Thiago, Cruz, App, Joke, jokes"
        image="assets/scott.png"
        lang="en"
    />

    <!-- This Div renders Scott's face -->
    <div class="container-fluid full">
      <div class="inner">
        <div class="face" :class="appear">
          <div class="eyes">
            <div class="eye" ref="lefty" :class="$store.getters.MOOD"></div>
            <div class="eye" ref="righty" :class="$store.getters.MOOD"></div>
          </div>
          <div class="mouth"
               :class="[ $store.getters.MOOD ]"></div>
        </div>
      </div>
    </div>

    <!-- The Router renders Scott's emotions -->
    <transition name="fade" appear mode="out-in">
      <router-view />
    </transition>

    <!-- This Component renders Scott's lines -->
    <transition name="fade" appear mode="out-in">
      <scott-voice :text="scottText"
                   v-if="$store.getters.SPEAKING"
                   @finished="stopSpeaking" />
    </transition>

    <!-- This Component renders User's lines -->
    <transition name="fade" appear mode="out-in">
      <user-voice :text="userText"
                   :close="manual"
                   v-if="$store.getters.USPEAKING"
                   @finished="stopUspeaking" />
    </transition>
  </div>
</template>

<script>

// Scott and User voices
import ScottVoice from './components/ScottVoice.vue';
import UserVoice from './components/UserVoice.vue';

// Importing multiple lines for random selection
import ScottPhrases from './phrases/scott.json';
import UserPhrases from './phrases/user.json';

export default {
  name: 'App',
  components: {
    ScottVoice,
    UserVoice,
  },
  data() {
    return {
      humor: true,
      scottText: [],
      userText: [],
      appear: 'not',
      started: false,
      step: 1,
      currentJoke: '',
      manual: false,
      happy: false,
    };
  },
  computed: {
    speaking() {
      return this.$store.getters.SPEAKING;
    },
    uspeaking() {
      return this.$store.getters.USPEAKING;
    },
  },
  beforeCreate() {
    // Make sure the APP will always start as neutral
    if (this.$route.path !== '/') this.$router.push('/');
  },
  mounted() {
    // This interval animates Scott's eyes
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

    // Makes Scott appears on the Screen
    setTimeout(() => {
      this.appear = 'appear';
    }, 1000);

    // Starts the greeting dialog
    setTimeout(() => {
      this.greeting();
    }, 4000);

    // Allows the user to interact with the screen only after the
    setTimeout(() => {
      this.started = true;
    }, 5000);
  },
  methods: {
    setMood() { // This method changes Scott's mood
      if (this.isChangeAllowed()) {
        if (this.$store.getters.MOOD === 'neutral') {
          this.$store.dispatch('setMood', 'bad');
          this.$router.push('/sad');

          this.SaySomethingBad();
        } else if (this.$store.getters.MOOD === 'bad') {
          this.askAboutJoke();
        }
      }
    },
    isChangeAllowed() { // This method prevent the mood to be changed depending on some requirements
      return !this.speaking
             && !this.uspeaking
             && this.started;
    },
    greeting() { // Start the greeting process
      this.happy = false;
      // Assign first phrase
      const phrase1 = ScottPhrases.greetings.indroducing[
        this.getRand(ScottPhrases.greetings.indroducing.length)
      ];
      const grt = [];

      if (!this.started) grt.push(phrase1);

      // Assign second phase, right now always chooses from neutral
      if (this.$store.getters.MOOD === 'neutral') {
        const phrase2 = ScottPhrases.greetings.neutral[
          this.getRand(ScottPhrases.greetings.neutral.length)
        ];
        grt.push(phrase2);
      }
      if (this.$store.getters.MOOD === 'bad') {
        const phrase2 = ScottPhrases.greetings.bad[
          this.getRand(ScottPhrases.greetings.bad.length)
        ];
        grt.push(phrase2);
      }
      if (this.$store.getters.MOOD === 'good') {
        const phrase2 = ScottPhrases.greetings.good[
          this.getRand(ScottPhrases.greetings.good.length)
        ];
        grt.push(phrase2);
      }

      this.scottText = grt;
      this.$store.dispatch('speaking'); // Dispatch Scoots dialog
    },
    stopSpeaking() {
      this.$store.dispatch('stopSpeaking');
      if (this.step === 1) {
        this.step = 2;
        const phrase1 = UserPhrases.greetings[
          this.getRand(UserPhrases.greetings.length)
        ];

        this.userText = [phrase1];
        this.$store.dispatch('uspeaking'); // Dispatch User's dialog
      }
      if (this.step === 4) {
        this.step = 5;
        this.tellJoke();
      }
    },
    stopUspeaking() {
      if (this.step !== 5) this.$store.dispatch('stopUspeaking'); // Ends User's dialog

      if (this.step === 3) {
        this.step = 4;
        const phrase1 = ScottPhrases.reacting[
          this.getRand(ScottPhrases.reacting.length)
        ];

        this.scottText = [phrase1];
        this.$store.dispatch('speaking'); // Dispatch Scoots dialog
      }

      if (this.step === 5) {
        if (this.happy) {
          this.step = 2;
          this.$store.dispatch('stopUspeaking'); // Ends User's dialog
          this.$router.push('/');
          this.$store.dispatch('setMood', 'neutral');
          this.greeting();
          this.happy = false;
        }
      }

      if (this.manual) this.manual = false;
    },
    getRand(val) {
      return Math.floor(Math.random() * val);
    },
    SaySomethingBad() {
      const phrase1 = ScottPhrases.darkening[
        this.getRand(ScottPhrases.darkening.length)
      ];
      this.scottText = [phrase1];
      this.$store.dispatch('speaking'); // Dispatch Scoots dialog
    },
    askAboutJoke() {
      this.step = 3;
      const phrase1 = UserPhrases.joking[
        this.getRand(UserPhrases.joking.length)
      ];
      this.userText = [phrase1];
      this.$store.dispatch('uspeaking'); // Dispatch User's dialog

      fetch('https://geek-jokes.sameerkumar.website/api?format=json')
        .then((response) => response.json())
        .then((result) => {
          this.currentJoke = result.joke;
        });
    },
    tellJoke() {
      this.manual = true;
      this.userText = [this.currentJoke];
      this.$store.dispatch('uspeaking'); // Dispatch User's dialog

      setTimeout(() => {
        this.$store.dispatch('setMood', 'good');
        this.$router.push('/happy');
        setTimeout(() => { this.happy = true; }, 20000);
      }, 3000);
    },
  },
};
</script>

<style lang="scss">

@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';

#app {
  transition: all 0.5s;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #EEE;
  height: 100%;
  position: absolute;
  width: 100%;
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
        transition: all 2s;
        width: 0;
        height: 0;
        margin: -10vh auto 0;
        border-radius: 50%;
        font-size: 0;

        &.appear {
          width: 38vw;
          height: 38vw;

          @include media-breakpoint-down('md') {
            width: 43vw;
            height: 43vw;
            margin: -20vh auto 0;
          }
        }

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

                &.bad, &.good {
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
            color: #444;

            &.bad {
              border-radius: 50%;
              margin-top: 10%;
              border-top: 0vw solid #FFF;
              box-shadow: 0px 1vh 0 0 inset #FFF;
              color: #FFF;
            }

            &.good {
              border-radius: 50%;
              margin-top: -4%;
              transform: rotateX(180deg);
              border-top: 0vw solid #FFF;
              box-shadow: 0px 2vh 0 0 inset #FFF;
              color: #FFF;
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
