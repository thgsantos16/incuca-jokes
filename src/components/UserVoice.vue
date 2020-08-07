<template>
  <div class="user-voice">
    <div class="user-pic"></div>
    <div class="text">
      <div class="user-name">
        Best User Ever (You)

        <button v-if="showClose" @click="closeDialog">x</button>
      </div>
      <div class="user-text" v-html="userText" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class UserVoice extends Vue {
  userText: string; // The var to display the text

  iSpeed = 70; // Letter displaying speed

  iIndex = 0; // Set start char

  iArrLength: number; // Var to capture the number of letters

  iTextPos = 0; // Set the cursor to the start

  sContents = ''; // Here we store the ready to display content

  iScrollAt = 10000; // In case we need to break the line, not the case here

  iRow = 0; // Start at the first phrase

  showClose = false;

  @Prop() private text!: Array<string>; // The passed dialog

  @Prop() private close!: boolean; // The close dialog

  constructor() {
    super();

    this.userText = '';
    this.iArrLength = this.text[0].length;
  }

  created() {
    setTimeout(() => this.typewriter(), 100);
  }

  typewriter() {
    this.sContents = ' ';
    this.iRow = Math.max(0, this.iIndex - this.iScrollAt);

    while (this.iRow < this.iIndex) {
      this.sContents += `${this.text[this.iRow]}<br />`;
      this.iRow += 1;
    }

    this.userText = `${this.sContents + this.text[this.iIndex].substring(0, this.iTextPos)}_`;
    this.iTextPos += 1;
    if (this.iTextPos === this.iArrLength + 1) {
      this.iTextPos = 0;
      this.iIndex += 1;

      if (this.iIndex !== this.text.length) {
        this.iArrLength = this.text[this.iIndex].length;
        setTimeout(() => this.typewriter(), 500);
      } else {
        this.userText = this.userText.substring(0, this.userText.length - 1);

        // Validates if the dialog closes itself or not
        if (!this.close) setTimeout(() => this.$emit('finished'), 2000);
        else this.showClose = true;
      }
    } else {
      setTimeout(() => this.typewriter(), this.iSpeed);
    }
  }

  closeDialog() {
    this.$emit('finished');
  }
}
</script>

<style scoped lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap';

.user-voice {
  transition: all 0.43s;
  background-color: #FFF;
  position: fixed;
  bottom: 10%;
  left: 10%;
  min-width: 30%;
  max-width: 40%;
  padding: 16px;
  box-shadow: 0 0 16px 0px #00000044;
  border-radius: 12px;
  font-size: 0;
  z-index: 2000;

  @include media-breakpoint-down('md') {
    max-width: 75%;
    min-width: 40%;
  }

  .user-pic {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-image: url(../assets/user.png);
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

    .user-name {
      font-weight: 700;
      font-size: 1.1rem;
      margin-bottom: 7px;

      button {
          float: right;
          border: 1px solid;
          border-radius: 50%;
          width: 30px;
          margin: -3px -7px 0 0;
          display: block;
          color: #777;
          background-color: #CCC;
          transition: all 0.43s;

          &:hover {
            background-color: rgb(204, 83, 83);
            color: #FFF;
          }
      }
    }
  }
}
</style>
