<template>
  <div class="relative flex items-center justify-center">
    <div class="swiper mySwiper flex">
      <div class="swiper-wrapper">
        <div
          v-for="date in getDaysOfweek"
          :key="date.toLocaleString()"
          class="swiper-slide"
        >
          <date-widget :date="date" />
        </div>
      </div>
    </div>

    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>
<script>
// import Swiper JS
// add or remove unused modules
import { mapGetters, mapActions } from 'vuex'
import { Swiper, Navigation } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import DateWidget from './DateWidget.vue'
export default {
  components: { DateWidget },

  computed: {
    ...mapGetters(['getLocale', 'getDaysOfweek']),
  },
  mounted() {
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      // @see https://swiperjs.com/swiper-api#parameters
      dir: this.getLocale === 'en' ? 'ltr' : 'rtl',
      slidesPerView: 3,
      spaceBetween: 20,

      modules: [Navigation],
      breakpoints: {
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 7,
          spaceBetween: 20,
        },
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
    // you can use different options later
    swiper.on('activeIndexChange', (swiper) => {
      // console.log(swiper)
    })
  },

  created() {
    this.addDaysOfweek()
  },
  methods: {
    ...mapActions(['addDaysOfweek']),
  },
}
</script>

<style lang="css" scoped>
:root {
  --swiper-navigation-size: 26px !important;
  --swiper-theme-color: #5a4d4d !important;
}
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-button-prev,
.swiper-rtl .swiper-button-prev {
  left: -40px;
  right: auto;
}

.swiper-button-next,
.swiper-rtl .swiper-button-prev {
  right: -40px;
  left: auto;
}

.swiper-button-next:after,
.swiper-button-prev:after {
  font-size: 20px !important;
  color: black !important;
}
</style>
