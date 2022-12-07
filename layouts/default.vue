<template>
  <div>
    <client-only>
      <div
        class="justify container mx-auto flex flex-col items-center gap-[40px] pt-[100px]"
      >
        <div
          class="mt-[50px] w-fit cursor-pointer rounded-[8px] bg-[#000] py-[6px] px-[11px] text-inverted hover:brightness-125"
          @click="changeLanguage"
        >
          {{ $t('language') }}
        </div>
        <div :dir="getLocale === 'en' ? 'ltr' : 'rtl'">
          <Nuxt />
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {},
  props: {},

  head: {},
  computed: {
    ...mapGetters(['getLocale']),
  },
  watch: {},
  created() {},
  methods: {
    ...mapActions(['changeLocale']),
    changeLanguage() {
      if (this.lang === 'ar') {
        this.lang = 'en'
        this.$i18n.locale = 'en'
        this.changeLocale('en')
      } else {
        this.lang = 'ar'
        this.$i18n.locale = 'ar'
        this.changeLocale('ar')
      }
    },
  },
}
</script>
<style></style>
