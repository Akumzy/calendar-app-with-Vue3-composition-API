<template>
  <div class="p-10 w-full">
    <header class="flex justify-between h-12">
      <div>
        <button
          class="h-10 px-8 inline-flex items-center justify-center rounded-tl-md rounded-bl-md btn"
          :class="{ 'btn-active': view === 'week' }"
          @click="view = 'week'"
        >Week</button>
        <button
          class="h-10 px-8 inline-flex items-center justify-center rounded-tr-md rounded-br-md btn"
          :class="{ 'btn-active': view === 'month' }"
          @click="view = 'month'"
        >Month</button>
      </div>
      <div class="flex items-center">
        <button class="w-8 inline-flex justify-center items-center text-gray-500 h-6">
          <arrow-left-icon />
        </button>
        <span class="text-xl font-bold">June 2017</span>
        <button class="w-8 inline-flex justify-center items-center text-gray-500 h-6">
          <arrow-right-icon />
        </button>
      </div>
      <div>
        <input type="search" name id />
      </div>
    </header>
    <div class="w-full h-auto">
      <div class="border border-gray-600 w-full mt-8">
        <div class="flex h-16 w-full">
          <span
            class="w-7 h-full inline-flex items-center justify-center text-gray-500 uppercase"
            v-for="weekday in weekdays"
            :key="weekday"
          >{{ weekday.slice(0, 3) }}</span>
        </div>
        <div class="w-full">
          <div v-for="(week, i) in calendar" :key="i+'week'" class="flex w-full">
            <div class="w-7" v-for="(day, index) in week" :key="index">
              <div v-if="day">{{day.getDate()}}</div>
              <div v-else></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "@vue/composition-api";
import ArrowRightIcon from "../components/svg/ArrowRightIcon.vue";
import ArrowLeftIcon from "../components/svg/ArrowLeftIcon.vue";
import { weekdays, getCalendar } from "@/utils";

export default defineComponent({
  name: "Calendar",
  components: { ArrowLeftIcon, ArrowRightIcon },
  setup() {
    const view = ref<"week" | "month">("month");
    const currentDate = ref(new Date());
    const calendar = computed(() => {
      const month = currentDate.value.getMonth();
      const year = currentDate.value.getFullYear();
      return getCalendar(month, year);
    });
    return { view, weekdays, calendar };
  }
});
</script>
<style lang="scss">
.btn {
  outline-color: transparent !important;
}
.btn-active {
  background-color: #fff;
  border: 1px solid #ffffff;
  box-shadow: 0px 8px 16px rgba(243, 0, 0, 0.096892);
}
.w-7 {
  width: calc(100% / 7);
}
.display {
  width: calc(100% - 3rem);
}
</style>
