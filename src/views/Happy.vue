<template>
  <div class="body happy">
    <transition name="slowfade" appear>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
    </transition>

    <clouds :nobg="true" />
    <rainbow />
    <div class="overlay"></div>
  </div>
</template>

<script>

import Home from './Home.vue';
import Rainbow from '../components/Rainbow.vue';

export default {
  components: {
    clouds: Home,
    rainbow: Rainbow,
  },
  name: 'Happy',
  data() {
    return {
    };
  },
};
</script>

<style lang="sass" scoped>

// n is number of stars required
@function multiple-box-shadow ($n)
  $value: '#{random(2000)}px #{random(2000)}px #FFF'
  @for $i from 2 through $n
    $value: '#{$value} , #{random(2000)}px #{random(2000)}px #FFF'

  @return unquote($value)

$shadows-small:  multiple-box-shadow(700)
$shadows-medium: multiple-box-shadow(200)
$shadows-big:    multiple-box-shadow(100)

.body
  height: 100%
  background: radial-gradient(ellipse at bottom, #de55c1 0%, #350c2a 100%)
  overflow: hidden

.overlay
  position: fixed
  width: 100%
  height: 100%
  top: 0
  left: 0
  background: #111
  opacity: 0
  animation: animBG 5s

#stars
  width: 1px
  height: 1px
  background: transparent
  box-shadow: $shadows-small
  animation: animStar 50s linear infinite

  &:after
    content: " "
    position: absolute
    top: 2000px
    width: 1px
    height: 1px
    background: transparent
    box-shadow: $shadows-small

#stars2
  width: 2px
  height: 2px
  background: transparent
  box-shadow: $shadows-medium
  animation: animStar 100s linear infinite

  &:after
    content: " "
    position: absolute
    top: 2000px
    width: 2px
    height: 2px
    background: transparent
    box-shadow: $shadows-medium

#stars3
  width: 3px
  height: 3px
  background: transparent
  box-shadow: $shadows-big
  animation: animStar 150s linear infinite

  &:after
    content: " "
    position: absolute
    top: 2000px
    width: 3px
    height: 3px
    background: transparent
    box-shadow: $shadows-big

@keyframes animStar
  from
    transform: translateY(0px)
  to
    transform: translateY(-2000px)

@keyframes animBG
  from
    opacity: 1
  to
    opacity: 0

</style>
