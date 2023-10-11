<script setup>
import { ref } from 'vue'

import HeaderGosUslugi from '@/components/ui/HeaderGosUslugi.vue'
import SearchText from '@/components/ui/SearchText.vue'
import HelpSection from '@/components/ui/HelpSection.vue'
import ServicesBlock from '@/components/ServicesBlock.vue'
import PopularServices from '@/components/PopularServices.vue'
import GosUslugiCard from '@/components/GosUslugiCard.vue'
import FooterNavigation from '@/components/FooterNavigation.vue'

const loading = ref(true)

setTimeout(() => {
  loading.value = false
}, 1000)
</script>

<template>
  <template v-if="loading">
    <div class="loader">
      <img src="@/assets/gif/loader.svg" alt="" />
    </div>
  </template>
  <template v-else>
    <HeaderGosUslugi right left :title="Госуслуги"></HeaderGosUslugi>
    <main>
      <SearchText icon></SearchText>
      <HelpSection></HelpSection>
      <ServicesBlock></ServicesBlock>
      <PopularServices></PopularServices>
      <GosUslugiCard></GosUslugiCard>
    </main>
    <FooterNavigation></FooterNavigation>
  </template>
</template>

<style lang="scss" scoped>
.loader {
  width: 100px;
  height: 100px;
  margin: 50vh auto;
}
main {
  overflow-x: hidden;
  overflow-y: auto;
  max-height: calc(100vh - 140px);
}
</style>
