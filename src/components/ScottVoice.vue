<template>
  <div class="scott-voice">
    <div class="scott-pic"></div>
    <div class="text">
      <div class="scott-name">Scott Screen</div>
      <div class="scott-text" v-html="scottText" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ScottVoice extends Vue {
  scottText: string; // The var to display the text

  iSpeed = 70; // Letter displaying speed

  iIndex = 0; // Set start char

  iArrLength: number; // Var to capture the number of letters

  iTextPos = 0; // Set the cursor to the start

  sContents = ''; // Here we store the ready to display content

  iScrollAt = 10000; // In case we need to break the line, not the case here

  iRow = 0; // Start at the first phrase

  @Prop() private text!: Array<string>; // The passed dialog

  constructor() {
    super();

    this.scottText = '_';
    this.iArrLength = this.text[0].length;
  }

  created() {
    setTimeout(() => this.typewriter(), 100);
  }

  typewriter() { // This function adds a letter and repeats itself until all text is displayed!
    this.sContents = ' ';
    this.iRow = Math.max(0, this.iIndex - this.iScrollAt);

    while (this.iRow < this.iIndex) {
      this.sContents += `${this.text[this.iRow]}<br />`;
      this.iRow += 1;
    }

    this.scottText = `${this.sContents + this.text[this.iIndex].substring(0, this.iTextPos)}_`;
    this.iTextPos += 1;
    if (this.iTextPos === this.iArrLength + 1) {
      this.iTextPos = 0;
      this.iIndex += 1;

      if (this.iIndex !== this.text.length) {
        this.iArrLength = this.text[this.iIndex].length;
        setTimeout(() => this.typewriter(), 500);
      } else {
        this.scottText = this.scottText.substring(0, this.scottText.length - 1);
        setTimeout(() => this.$emit('finished'), 2000);
      }
    } else {
      setTimeout(() => this.typewriter(), this.iSpeed);
    }
  }
}
</script>

<style scoped lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap';

.scott-voice {
  transition: all 0.43s;
  background-color: #FFF;
  position: fixed;
  bottom: 10%;
  right: 10%;
  min-width: 30%;
  max-width: 40%;
  padding: 16px;
  box-shadow: 0 0 16px 0px #00000044;
  border-radius: 12px;
  font-size: 0;

  @include media-breakpoint-down('md') {
    max-width: 75%;
    min-width: 40%;
  }

  .scott-pic {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-image: url(../assets/scott.png);
    background-size: cover;
    vertical-align: top;
    display: inline-block;
  }

  .text {
    width: calc(100% - 40px);
    font-size: 0.9rem;
    display: inline-block;
    text-align: left;
    padding: 4px 16px;

    .scott-name {
      font-weight: 700;
      font-size: 1.1rem;
      margin-bottom: 7px;
    }
  }
}
</style>
