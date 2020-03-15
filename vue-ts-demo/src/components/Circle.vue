<template>
  <div class="circle" :style="styleObj">
    <slot name="icon"></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from "vue-property-decorator";

@Component
export default class Circle extends Vue {
  @Prop() private radius!: string;
  @Prop() private activeColor!: string;

  private styleObj = {
    background: this.activeColor || "#ffe78d",
    width: this.radius || "3rem",
    height: this.radius || "3rem"
  };

  @Watch("activeColor")
  private changeColor(val: string, old: string) {
    this.styleObj.background = val;
  }
}
</script>

<style scoped>
.circle {
  border: solid 2px black;
  border-radius: 50%;
  margin: 0;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
