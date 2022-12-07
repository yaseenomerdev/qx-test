<template>
  <div
    class="flex cursor-pointer flex-col items-center justify-center gap-2 overflow-hidden rounded-[12px] border border-[#9297b729] p-3 duration-300 hover:bg-[#9297b729]"
    :class="{
      'border-2 border-[#9484F7] text-[#9484F7] ': getSelectedDate == date,
    }"
    @click="changeSelectedDate(date)"
  >
    <!-- use momment js to desplay day -->
    <span class="text-[14px] font-bold">{{
      isToday ? (getLocale == 'en' ? 'Today' : 'اليوم') : day()
    }}</span>

    <span
      class="rounded-12 rounded-[12px] bg-[#9297b729] px-3 py-1"
      :class="{ 'bg-[#9484F7] text-inverted': getSelectedDate == date }"
      >{{ dateNumber }}
    </span>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  props: {
    date: {
      type: Date,
      required: true,
    },
  },
  data() {
    return {
      activDate: '',
    }
  },
  computed: {
    ...mapGetters(['getLocale', 'getSelectedDate']),
    isArabic() {
      return this.getLocale === 'ar'
    },

    dateNumber() {
      return this.date.getDate()
    },

    isToday() {
      return this.date.getDate() === new Date().getDate()
    },
  },
  methods: {
    ...mapActions(['changeSelectedDate']),
    day() {
      return this.date.toLocaleString(this.getLocale, {
        weekday: 'long',
      })
    },
  },
}
</script>

<style></style>
