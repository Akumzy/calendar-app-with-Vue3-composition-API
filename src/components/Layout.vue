<template>
  <div class="layout fixed w-full h-full flex">
    <aside class="h-full bg-white overflow-y-auto">
      <div class="py-10 text-center">
        <logo />
      </div>

      <div class="flex justify-center items-center">
        <img src="@/assets/user-avatar.png" alt />
      </div>
      <h3 class="font-thin py-4">Akuma Isaac</h3>
      <div class="w-full py-6">
        <router-link
          to="/"
          tag="a"
          class="border-l-4 border-red-500 h-10 w-full flex items-center px-4 text-red-500 text-sm font-bold"
        >
          <calendar-icon class="mr-4" />
          <span>Calendar</span>
        </router-link>
      </div>
    </aside>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import Logo from "./Logo.vue";
import CalendarIcon from "./svg/CalendarIcon.vue";

export default defineComponent({
  components: { Logo, CalendarIcon },
  name: "Layout",
  setup() {
    return {};
  }
});
</script>
<style lang="scss">
.layout {
  $sidebar-width: 240px;
  & > aside {
    width: $sidebar-width;
  }
  & > main {
    width: calc(100% - #{$sidebar-width});
    background-color: #f2f2f2;
  }
}
</style>
