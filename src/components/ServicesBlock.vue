<script setup>
import { reactive } from 'vue'

import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

const breakpoints = reactive({
  280: {
    slidesPerView: 1.25
  },
  290: {
    slidesPerView: 1.3
  },
  300: {
    slidesPerView: 1.35
  },
  310: {
    slidesPerView: 1.4
  },
  330: {
    slidesPerView: 1.45
  },
  345: {
    slidesPerView: 1.5
  },
  360: {
    slidesPerView: 1.55
  },
  370: {
    slidesPerView: 1.6
  },
  380: {
    slidesPerView: 1.65
  },
  390: {
    slidesPerView: 1.75
  },
  410: {
    slidesPerView: 1.78
  },
  420: {
    slidesPerView: 1.81
  },
  430: {
    slidesPerView: 1.85
  },
  440: {
    slidesPerView: 1.9
  },
  460: {
    slidesPerView: 2
  },
  480: {
    slidesPerView: 2.1
  },
  500: {
    slidesPerView: 2.2
  },
  520: {
    slidesPerView: 2.3
  },
  545: {
    slidesPerView: 2.4
  },
  570: {
    slidesPerView: 2.5
  },
  600: {
    slidesPerView: 2.6
  },
  630: {
    slidesPerView: 2.7
  },
  650: {
    slidesPerView: 2.8
  },
  680: {
    slidesPerView: 2.9
  },
  700: {
    slidesPerView: 3.0
  },
  730: {
    slidesPerView: 3.1
  },
  750: {
    slidesPerView: 3.2
  },
  768: {
    slidesPerView: 3.3
  },
  785: {
    slidesPerView: 3.4
  },
  800: {
    slidesPerView: 3.5
  },
  850: {
    slidesPerView: 3.7
  },
  900: {
    slidesPerView: 3.9
  },
  950: {
    slidesPerView: 4.1
  },
  1000: {
    slidesPerView: 4.3
  },
  1024: {
    slidesPerView: 4.4
  },
  1070: {
    slidesPerView: 4.6
  },
  1120: {
    slidesPerView: 4.8
  },
  1170: {
    slidesPerView: 5
  },
  1220: {
    slidesPerView: 5.2
  },
  1280: {
    slidesPerView: 5.4
  },
  1330: {
    slidesPerView: 5.6
  },
  1380: {
    slidesPerView: 5.8
  },
  1420: {
    slidesPerView: 6.0
  },
  1470: {
    slidesPerView: 6.1
  },
  1520: {
    slidesPerView: 6.3
  },
  1570: {
    slidesPerView: 6.5
  },
  1620: {
    slidesPerView: 6.8
  },
  1670: {
    slidesPerView: 7.0
  },
  1720: {
    slidesPerView: 7.2
  },
  1780: {
    slidesPerView: 7.5
  },
  1830: {
    slidesPerView: 7.7
  }
})
</script>

<template>
  <swiper :loop="true" :breakpoints="breakpoints" :slidesPerView="10" :space-between="10">
    <swiper-slide v-for="i in 10" :key="i">
      <section class="services-block">
        <div class="panel-services">
          <div>
            <div class="panel-service">
              <p class="service-title">Штрафы</p>
              <p class="service-description">Об оплате штрафов по административным делам</p>
            </div>
            <div class="img-service">
              <img src="@/assets/icons/help-cards/group23.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </swiper-slide>
  </swiper>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/global';

.services-block {
  padding-left: 19px;
  display: grid;
  grid-template-columns: 220px;
  grid-template-rows: repeat(1, 90px);
}
.panel-services {
  display: flex;
  border-radius: 24px;
  background-color: #19191e;
  & div {
    display: flex;
    justify-content: start;
    align-items: center;
    & .img-service {
      align-self: self-end;
      & img {
        width: 60px;
        height: 80px;
        flex-shrink: 0;
      }
    }
  }
}
div.panel-service {
  padding: 18px 12px 22px 15px;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;
  & .service-title {
    color: $text-night-primary;
    font-family: 'Golos Text', sans-serif;
    font-size: 14px;
    text-align: start;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  & .service-description {
    color: $gray-light;
    font-family: 'Golos Text', sans-serif;
    text-align: start;
    font-size: 10px;
    width: 116px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}
</style>
