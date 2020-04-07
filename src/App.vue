<template>
  <div id="app">
    <layout-vue />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import LayoutVue from "./components/Layout.vue";

export default defineComponent({
  components: { LayoutVue },
  name: "App",
  setup() {
    return {};
  }
});
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
