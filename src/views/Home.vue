<template>
  <div class="home" :class="{ nobg: nobg }">
    <div id="Clouds">
    <div class="Cloud Foreground"></div>
    <div class="Cloud Background"></div>
    <div class="Cloud Foreground"></div>
    <div class="Cloud Background"></div>
    <div class="Cloud Foreground"></div>
    <div class="Cloud Background"></div>
    <div class="Cloud Background"></div>
    <div class="Cloud Foreground"></div>
    <div class="Cloud Background"></div>
    <div class="Cloud Background"></div>
  <!--  <svg viewBox="0 0 40 24" class="Cloud"><use xlink:href="#Cloud"></use></svg>-->
  </div>

  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    width="40px" height="24px" viewBox="0 0 40 24" enable- xml:space="preserve">
    <defs>
      <path id="Cloud" d="M33.85,14.388c-0.176,0-0.343,0.034-0.513,0.054c0.184-0.587,
      0.279-1.208,0.279-1.853c0-3.463-2.809-6.271-6.272-6.271
    c-0.38,0-0.752,0.039-1.113,0.104C24.874,2.677,21.293,0,
    17.083,0c-5.379,0-9.739,4.361-9.739,9.738
    c0,0.418,0.035,0.826,0.084,
    1.229c-0.375-0.069-0.761-0.11-1.155-0.11C2.811,10.856,0,13.665,0,17.126
    c0,3.467,2.811,6.275,6.272,6.275c0.214,0,27.156,
    0.109,27.577,0.109c2.519,0,4.56-2.043,4.56-4.562
    C38.409,16.43,36.368,14.388,33.85,14.388z"/>
    </defs>
  </svg>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: [
    'nobg',
  ],
};
</script>

<style lang="scss" scoped>

.home {
  height: 100%;
  position: fixed;
  width: 100%;
  background: #FFF;
  z-index: 0;
  opacity: .3;

  &.nobg {
    background: transparent;
  }
}

#Clouds {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 70%;
  overflow: hidden;
  -webkit-animation: FadeIn 3s ease-out;
          animation: FadeIn 3s ease-out;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
@-webkit-keyframes FadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes FadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.Cloud {
  position: absolute;
  width: 100%;
  background-repeat: no-repeat;
  background-size: auto 100%;
  height: 70px;
  -webkit-animation-duration: 120s;
          animation-duration: 120s;
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
  -webkit-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-name: Float, FadeFloat;
          animation-name: Float, FadeFloat;
  z-index: 1;
}
.Cloud.Foreground {
  height: 10%;
  min-height: 20px;
  z-index: 3;
}
.Cloud.Background {
  height: 9.09090909%;
  min-height: 8px;
  -webkit-animation-duration: 210s;
          animation-duration: 210s;
}
@-webkit-keyframes Float {
  from {
    -webkit-transform: translateX(100%) translateZ(0);
            transform: translateX(100%) translateZ(0);
  }
  to {
    -webkit-transform: translateX(-15%) translateZ(0);
            transform: translateX(-15%) translateZ(0);
  }
}
@keyframes Float {
  from {
    -webkit-transform: translateX(100%) translateZ(0);
            transform: translateX(100%) translateZ(0);
  }
  to {
    -webkit-transform: translateX(-15%) translateZ(0);
            transform: translateX(-15%) translateZ(0);
  }
}
/*
@keyframes Float {
  from { transform: translateX(100%) translateY(-100%) translateZ(0); }
  50% { transform: translateX(55%) translateY(0) translateZ(0); }
  to { transform: translateX(-5%) translateY(-100%) translateZ(0); }
}
*/
@-webkit-keyframes FadeFloat {
  0%,
  100% {
    opacity: 0;
  }
  5%,
  90% {
    opacity: 1;
  }
}
@keyframes FadeFloat {
  0%,
  100% {
    opacity: 0;
  }
  5%,
  90% {
    opacity: 1;
  }
}
.Cloud:nth-child(10) {
  -webkit-animation-delay: -184.61538462s;
          animation-delay: -184.61538462s;
  top: 60%;
}
.Cloud.Foreground:nth-child(10) {
  -webkit-animation-duration: 80s;
          animation-duration: 80s;
  height: 35%;
}
.Cloud.Background:nth-child(10) {
  -webkit-animation-duration: 110s;
          animation-duration: 110s;
  height: -3.40909091%;
}
.Cloud:nth-child(9) {
  -webkit-animation-delay: -166.15384615s;
          animation-delay: -166.15384615s;
  top: 54%;
}
.Cloud.Foreground:nth-child(9) {
  -webkit-animation-duration: 84s;
          animation-duration: 84s;
  height: 32.5%;
}
.Cloud.Background:nth-child(9) {
  -webkit-animation-duration: 114s;
          animation-duration: 114s;
  height: -2.15909091%;
}
.Cloud:nth-child(8) {
  -webkit-animation-delay: -147.69230769s;
          animation-delay: -147.69230769s;
  top: 48%;
}
.Cloud.Foreground:nth-child(8) {
  -webkit-animation-duration: 88s;
          animation-duration: 88s;
  height: 30%;
}
.Cloud.Background:nth-child(8) {
  -webkit-animation-duration: 118s;
          animation-duration: 118s;
  height: -0.90909091%;
}
.Cloud:nth-child(7) {
  -webkit-animation-delay: -129.23076923s;
          animation-delay: -129.23076923s;
  top: 42%;
}
.Cloud.Foreground:nth-child(7) {
  -webkit-animation-duration: 92s;
          animation-duration: 92s;
  height: 27.5%;
}
.Cloud.Background:nth-child(7) {
  -webkit-animation-duration: 122s;
          animation-duration: 122s;
  height: 0.34090909%;
}
.Cloud:nth-child(6) {
  -webkit-animation-delay: -110.76923077s;
          animation-delay: -110.76923077s;
  top: 36%;
}
.Cloud.Foreground:nth-child(6) {
  -webkit-animation-duration: 96s;
          animation-duration: 96s;
  height: 25%;
}
.Cloud.Background:nth-child(6) {
  -webkit-animation-duration: 126s;
          animation-duration: 126s;
  height: 1.59090909%;
}
.Cloud:nth-child(5) {
  -webkit-animation-delay: -92.30769231s;
          animation-delay: -92.30769231s;
  top: 30%;
}
.Cloud.Foreground:nth-child(5) {
  -webkit-animation-duration: 100s;
          animation-duration: 100s;
  height: 22.5%;
}
.Cloud.Background:nth-child(5) {
  -webkit-animation-duration: 130s;
          animation-duration: 130s;
  height: 2.84090909%;
}
.Cloud:nth-child(4) {
  -webkit-animation-delay: -73.84615385s;
          animation-delay: -73.84615385s;
  top: 24%;
}
.Cloud.Foreground:nth-child(4) {
  -webkit-animation-duration: 104s;
          animation-duration: 104s;
  height: 20%;
}
.Cloud.Background:nth-child(4) {
  -webkit-animation-duration: 134s;
          animation-duration: 134s;
  height: 4.09090909%;
}
.Cloud:nth-child(3) {
  -webkit-animation-delay: -55.38461538s;
          animation-delay: -55.38461538s;
  top: 18%;
}
.Cloud.Foreground:nth-child(3) {
  -webkit-animation-duration: 108s;
          animation-duration: 108s;
  height: 17.5%;
}
.Cloud.Background:nth-child(3) {
  -webkit-animation-duration: 138s;
          animation-duration: 138s;
  height: 5.34090909%;
}
.Cloud:nth-child(2) {
  -webkit-animation-delay: -36.92307692s;
          animation-delay: -36.92307692s;
  top: 12%;
}
.Cloud.Foreground:nth-child(2) {
  -webkit-animation-duration: 112s;
          animation-duration: 112s;
  height: 15%;
}
.Cloud.Background:nth-child(2) {
  -webkit-animation-duration: 142s;
          animation-duration: 142s;
  height: 6.59090909%;
}
.Cloud:nth-child(1) {
  -webkit-animation-delay: -18.46153846s;
          animation-delay: -18.46153846s;
  top: 6%;
}
.Cloud.Foreground:nth-child(1) {
  -webkit-animation-duration: 116s;
          animation-duration: 116s;
  height: 12.5%;
}
.Cloud.Background:nth-child(1) {
  -webkit-animation-duration: 146s;
          animation-duration: 146s;
  height: 7.84090909%;
}
.Cloud {
  background-image: url(../assets/bg-cloud.png);
}
.Cloud.Background {
  background-image: url(../assets/bg-cloud-small.png);
}
</style>
