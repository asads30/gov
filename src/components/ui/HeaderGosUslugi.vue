<script setup>
import mixpanel from 'mixpanel-browser'
import { defineProps } from 'vue'

const iconArrowClicked = () =>
  mixpanel.track('ButtonArrow', {
    Type: 'button',
    Paid: false
  })

const iconCancelClicked = () =>
  mixpanel.track('ButtonCancel', {
    Type: 'button',
    Paid: false
  })

defineProps({
  title: {
    type: String,
    default: 'Госуслуги'
  },
  left: {
    type: Boolean
  },
  right: {
    type: Boolean
  }
})
</script>

<template>
  <header>
    <div class="header-items">
      <img v-if="left" @click="iconArrowClicked" src="@/assets/icons/icon-arrow.svg" alt="" />
      <p v-if="title" class="header-text">{{ title }}</p>
      <img v-if="right" @click="iconCancelClicked" src="@/assets/icons/icon-cancel.svg" alt="" />
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/global';

header {
  max-height: 70px;

  & .header-items {
    padding: 44px 20px 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    & .header-text {
      font-family: 'Golos Text', sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      color: $text_color;
    }

    & img {
      cursor: pointer;
    }
  }
}
</style>
