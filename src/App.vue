<script setup>
import { RouterView } from 'vue-router'
import mixpanel from 'mixpanel-browser'
mixpanel.identify(789)
// mixpanel.track('UserData', {
//   platform: 'Android',
//   language: 'ru',
//   theme: 'dark',
//   region: 'Tashkent',
//   sex: 'M',
//   age: 28
// })
mixpanel.time_event('Registered')
// mixpanel.track('Registered', { Gender: 'Male', Age: 21 })
// mixpanel.register({
//   Email: 'jdoe@example.com',
//   'Account Type': 'Free'
// })
</script>

<template>
  <RouterView />
</template>

<style lang="scss" scoped>
@import '@/assets/fonts/fonts';
@import '@/assets/reset.css';
</style>
