<template>
  <footer class="footer-container">
    <div class="navigation-items">
      <img src="@/assets/icons/navigation/gos-uslugi.svg" alt="" />
      <p class="title">Главный</p>
    </div>
    <div class="navigation-items">
      <img src="@/assets/icons/navigation/quick-reference-all.svg" alt="" />
      <p class="title">Мои заявки</p>
    </div>
    <div class="navigation-items">
      <img src="@/assets/icons/navigation/quick-reference.svg" alt="" />
      <p class="title">Документы</p>
    </div>
  </footer>
</template>

<style lang="scss">
@import '@/assets/styles/global';

.footer-container {
  max-height: 70px;
  display: flex;
  border-top: 1px solid $stroke-night-primary-stroke-new;
  background-color: $color-styles-night;
  padding: 7px 7px 0;
  justify-content: center;
  align-items: center;
  & div.navigation-items {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    flex: 1 0 0;
  }
  & p.title {
    color: $gray;
    text-align: center;
    font-family: 'Golos Text', sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
  }
}
</style>
