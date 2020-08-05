<template>
  <div class="rainbow">
    <span v-for="(color, i) in colors"
          :key="color"
          :class="color"
          :style="{ color: color, marginTop: (20 * i) + 'px'  }" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Rainbow extends Vue {
  colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet',
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.rainbow {
    position: fixed;
    width: 100%;
    height: 100%;
    overflow: hidden;
    opacity: .34;
    padding-top: 20vh;
    animation: appear 10s 1;
    filter: blur(10px);

    span {
      transition: all 10s;
      margin-top: 0;
      position: absolute;
      display: block;
      height: 150vh;
      width: 120vw;
      border-top: solid 34px;
      border-radius: 50%;
      margin-left: -10vw;
    }
}

@keyframes appear {
  from {
    transform: rotateZ(-180deg);
    margin: 70vh 0 0 -130vw;
    opacity: 0;
    filter: blur(120px);
  }
  to {
    transform: rotateZ(0deg);
    margin: 0;
    opacity: .34;
    filter: blur(10px);
  }
}

</style>
