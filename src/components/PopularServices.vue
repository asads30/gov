<script setup>
import { reactive } from 'vue'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const breakpoints = reactive({
  200: {
    slidesPerView: 3.5
  },
  360: {
    slidesPerView: 4.3
  },
  450: {
    slidesPerView: 5
  },
  550: {
    slidesPerView: 6
  },
  650: {
    slidesPerView: 7
  },
  750: {
    slidesPerView: 8
  },
  850: {
    slidesPerView: 9
  }
})
</script>

<template>
  <section class="popular-services">
    <p class="title">Популярные услуги</p>
    <swiper
      :pagination="{
        clickable: true
      }"
      :breakpoints="breakpoints"
      :slidesPerView="4"
      :modules="[Pagination]"
    >
      <swiper-slide v-for="slide in 8" :key="slide">
        <div class="services">
          <div class="service-item">
            <img src="@/assets/icons/popular-services/bank.svg" alt="" />
            <p class="service-text">Определение ИНН</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<style lang="scss" scoped>
@import '../assets/styles/global';

.popular-services {
  margin-top: 15px;
  border-radius: 24px;
  background-color: #34353f;
  & p.title {
    padding: 14px 180px 16px 20px;
    white-space: nowrap;
    font-family: 'Golos Text', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: $gray-light;
  }
  & .services {
    display: flex;
    align-items: center;
    padding: 1px 20px 15px 20px;
  }
  & .service-item {
    row-gap: 5px;
    display: flex;
    width: 70px;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
    & img {
      display: flex;
      align-items: flex-start;
      padding: 7px;
      border-radius: 100px;
      background-color: rgba(87, 89, 101, 0.35);
    }
    & p.service-text {
      flex: 1 0 0;
      color: $gray_light;
      text-align: center;
      font-family: 'Golos Text', sans-serif;
      font-size: 10px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
}
@media screen and (max-width: 360px) {
  .popular-services {
    width: 380px;
  }
  popular-services {
    & .services {
      padding: 1px 15px 8px 20px;
      gap: 7px;
    }
  }
}
</style>
