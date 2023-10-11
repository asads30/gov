<template>
  <div class="service-items-container">
    <div class="service-item">
      <div class="icon-service">
        <img src="@/assets/icons/popular-services/bank.svg" alt="" />
      </div>
      <div class="service-description">
        <p class="title">Справки</p>
        <p class="description">Адресная справка, сведения о начислении зарплаты и др.</p>
      </div>
      <div class="arrow-icon">
        <img src="@/assets/icons/icon-arrow-blue.svg" alt="" />
      </div>
    </div>
    <div class="service-item">
      <div class="icon-service">
        <img src="@/assets/icons/popular-services/bank.svg" alt="" />
      </div>
      <div class="service-description">
        <p class="title">Налоги</p>
        <p class="description">На транспорт и имущество для физлиц по реквизитам</p>
      </div>
      <div class="arrow-icon">
        <img src="@/assets/icons/icon-arrow-blue.svg" alt="" />
      </div>
    </div>
    <div class="service-item">
      <div class="icon-service">
        <img src="@/assets/icons/popular-services/bank.svg" alt="" />
      </div>
      <div class="service-description">
        <p class="title">Транспорт</p>
        <p class="description">Проверка страхового полиса, информация об автомобиле и др.</p>
      </div>
      <div class="arrow-icon">
        <img src="@/assets/icons/icon-arrow-blue.svg" alt="" />
      </div>
    </div>
    <div class="service-item">
      <div class="icon-service">
        <img src="@/assets/icons/popular-services/bank.svg" alt="" />
      </div>
      <div class="service-description">
        <p class="title">Семья и дети</p>
        <p class="description">Проверка очереди в детский садик и др.</p>
      </div>
      <div class="arrow-icon">
        <img src="@/assets/icons/icon-arrow-blue.svg" alt="" />
      </div>
    </div>
    <div class="service-item">
      <div class="icon-service">
        <img src="@/assets/icons/popular-services/bank.svg" alt="" />
      </div>
      <div class="service-description">
        <p class="title">БПИ (Бюро принудительного исполниния)</p>
        <p class="description">
          Данный сервис позволяет отслеживать задолженности по исполнительным документам.
        </p>
      </div>
      <div class="arrow-icon">
        <img src="@/assets/icons/icon-arrow-blue.svg" alt="" />
      </div>
    </div>
    <div class="service-item">
      <div class="icon-service">
        <img src="@/assets/icons/popular-services/bank.svg" alt="" />
      </div>
      <div class="service-description">
        <p class="title">Справки</p>
        <p class="description">Адресная справка, сведения о начислении зарплаты и др.</p>
      </div>
      <div class="arrow-icon">
        <img src="@/assets/icons/icon-arrow-blue.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/global';

.service-items-container {
  padding: 5px 20px 10px 20px;
  & .service-item {
    display: flex;
    padding: 10px;
    margin-bottom: 10px;
    align-items: flex-start;
    gap: 15px;
    border-radius: 10px;
    background-color: $object-night-primary-object-new;
    & .icon-service {
      padding: 8px;
      border-radius: 100px;
      background-color: rgba(87, 89, 101, 0.35);
      & img {
        width: 24px;
        height: 24px;
      }
    }
    & .service-description {
      & .title {
        color: $text-night-primary;
        font-family: 'Golos Text', sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 130%; /* 18.2px */
      }
      & .description {
        margin-top: 2px;
        color: $gray-light;
        font-family: 'Golos Text', sans-serif;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 130%; /* 15.6px */
      }
    }
    & .arrow-icon {
      display: flex;
      padding: 3px 6px;
      align-self: center;
      margin-left: auto;
    }
  }
}

@media screen and (max-width: 360px) {
  .service-items-container {
    width: 320px;
  }
}
</style>
