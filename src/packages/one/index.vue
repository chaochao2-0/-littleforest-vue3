<template>
  <div class="little-forest-one">
    One
    <div class="little-forest-two">Two</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'One',
  setup() {},
})
</script>

<style>
.little-forest-one {
  color: red;
  width: 100px;
  height: 100px;
  display: block;
  background-color: pink;
}
.little-forest-two {
  color: blue;
  width: 200px;
  height: 200px;
  background-color: yellow;
}
</style>
