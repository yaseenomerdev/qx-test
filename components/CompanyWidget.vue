<template>
  <div>
    <div
      class="sh flex flex-col items-start gap-4 rounded-[12px] border border-[#9297b729] p-5 filter"
      :class="session.isNow ? 'bg-[#9484f714]' : ''"
      style="box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.04)"
    >
      <div class="flex items-center gap-4">
        <img
          :src="session.company_logo"
          class="h-16 w-16 rounded-[12px]"
          :alt="session.company_name"
        />

        <div class="flex flex-col">
          <span class="text-[14px] font-bold">{{ session.company_name }}</span>
          <span class="text-[14px]">{{ session.company_description }}</span>
        </div>
      </div>

      <div class="flex items-center gap-2 text-[#5B628A]">
        <span>{{ isArabic ? '&#x2190;' : '&#x2192;' }}</span>
        <span>
          {{ getTimeFromDateString(session.start_date) }}
        </span>
        <span>to</span>
        <span>{{ getTimeFromDateString(session.end_date) }}</span>
      </div>

      <div v-if="session.isNow" class="h-[1px] w-1/2 bg-[#9297b729]"></div>

      <div v-if="session.isNow">
        <a
          target="_blank"
          :href="session.zoom_link"
          class="rounded-[12px] bg-[#9484F7] p-2 text-white duration-300 hover:bg-[#8374e2] hover:text-white"
        >
          {{ $t('Join') }}
        </a>

        <button class="text-black rounded-[12px] p-2">
          {{ $t('Dismiss') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    session: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isArabic() {
      return this.$i18n.locale === 'ar'
    },
    getTimeNow() {
      return new Date().toLocaleTimeString()
    },
    getTimeNowPlusFiveMinutes() {
      return new Date().setMinutes(new Date().getMinutes() + 5)
    },

    getTimeNowPlusOneHour() {
      return new Date().setHours(new Date().getHours() + 1)
    },
  },
  methods: {
    getTimeFromDateString(date) {
      return new Date(date).toLocaleTimeString()
    },
  },
}
</script>

<style></style>
