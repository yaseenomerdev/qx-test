<template>
  <client-only>
    <div class="container flex flex-col gap-10">
      <section
        class="flex items-center justify-between rounded-[12px] p-4 duration-300 hover:bg-[#9297b729]"
      >
        <div class="flex flex-col">
          <span class="text-xl font-bold lg:text-3xl">{{
            $t('upcoming-sessions')
          }}</span>
          <span>{{ $t('upcoming-date') }}</span>
        </div>
        <div class="mx-5">
          <spanroutate
            class="cursor-pointer rounded-[12px] p-2 text-2xl duration-300 hover:bg-white"
            >&#x2b;</spanroutate
          >
        </div>
      </section>
      <section>
        <slider />
      </section>

      <section
        class="md:grid-cols-2 grid grid-cols-1 gap-4 duration-500 lg:grid-cols-3"
      >
        <company-widget
          v-for="session in getSessions"
          :key="session.company_logo"
          :session="session"
        />
      </section>

      <!--  box center in screen -->
    </div>
  </client-only>
</template>

<script>
import { mapGetters } from 'vuex'
import CompanyWidget from '~/components/CompanyWidget.vue'
import Slider from '~/components/Slider.vue'

export default {
  components: {
    Slider,
    CompanyWidget,
  },
  props: {},
  head: {},
  computed: mapGetters(['getSessions']),
  watch: {},
  mounted() {},
  methods: {},
}
</script>
