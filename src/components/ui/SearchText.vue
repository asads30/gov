<script setup>
import { defineProps } from 'vue'
defineProps({
  title: {
    type: String,
    default: 'Поиск госуслуг'
  },
  icon: {
    type: Boolean
  }
})
</script>

<template>
  <section class="search">
    <div>
      <img src="@/assets/icons/icon-search.svg" alt="" class="search-icon" />
      <input class="search-field" type="text" :placeholder="title" />
    </div>
    <div v-if="icon" class="notification_icon">
      <img class="notification-img" src="@/assets/icons/notification.svg" alt="" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.search {
  padding: 10px 20px 10px 20px;
  display: flex;
  gap: 60px;
  align-items: center;
  & .search-icon {
    position: absolute;
    padding: 10px;
    z-index: 1;
  }
  & .notification-img {
    border-radius: 10px;
    padding: 8px;
    background-color: #34353f;
  }
  & div {
    flex: 1;
  }
  & .notification_icon {
    flex: 0;
  }
}
.search-field {
  position: relative;
  height: 35px;
  border-radius: 10px;
  padding-left: 34px;
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: #34353f;
  &::placeholder {
    font-family: 'Golos Text', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: #b3b7ce;
    opacity: 1; /* Firefox */
  }
  &:focus {
    font-family: 'Golos Text', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: #b3b7ce;
    opacity: 1; /* Firefox */
  }
}
</style>
