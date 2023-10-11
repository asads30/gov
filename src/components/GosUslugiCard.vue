<template>
  <section class="gos-uslugi-card">
    <div class="gos-uslugi">
      <p class="title">Госуслуги</p>
      <button class="btn-all-services">
        Все услуги <img class="btn-icon" src="../assets/icons/icon-arrow-small.svg" alt="" />
      </button>
    </div>
    <div class="gos-uslugi-panels">
      <div class="panel-service-1">
        <p class="title">Транспорт</p>
        <img class="img-service" src="../assets/img/CarInsurance.svg" alt="" />
      </div>
      <div class="panel-service-2">
        <p class="title">Справки</p>
        <img class="img-service" src="../assets/img/InsuranceContract.svg" alt="" />
      </div>
      <div class="panel-service-3">
        <p class="title">Налоги</p>
        <img class="img-service" src="../assets/img/InsuranceCalculation.svg" alt="" />
      </div>
      <div class="panel-service-4">
        <p class="title">Семья и дети</p>
        <img class="img-service" src="../assets/img/HouseInsurance.svg" alt="" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/global';

.gos-uslugi-card {
  margin-top: 20px;
  height: 280px;
  border-radius: 24px 24px 0 0;
  background-color: $black_color;
  & .gos-uslugi {
    display: flex;
    height: 26px;
    padding: 20px;
    justify-content: space-between;
    align-items: center;
    & .title {
      color: $gray-light;
      text-align: center;
      font-family: 'Golos Text', sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    & button.btn-all-services {
      display: flex;
      border: none;
      gap: 5px;
      align-self: stretch;
      justify-content: center;
      align-items: center;
      height: 28px;
      padding: 4px 10px;
      border-radius: 222px;
      background-color: #34353f;
      font-family: 'Golos Text', sans-serif;
      font-size: 10px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      color: $text-night-primary;
      & img.btn-icon {
        flex: 1 0 0;
        align-self: stretch;
      }
    }
  }
}
.gos-uslugi-panels {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: repeat(2, minmax(0, 1fr));
  padding: 0 20px;
  grid-gap: 8px;
  & .title {
    font-family: 'Golos Text', sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-left: 10px;
    padding-top: 10px;
    color: $text-night-primary;
  }
  & .panel-service-1 {
    position: relative;
    grid-column: span 2 / span 2;
    height: 87px;
    border-radius: 12px;
    background: linear-gradient(270deg, #6d6e76 0%, #2c2d35 100%);
    & img {
      position: absolute;
      right: 10px;
      top: 6px;
      bottom: 6px;
      width: 115px;
      height: 75px;
    }
  }
  & .panel-service-2 {
    position: relative;
    grid-column: span 1 / span 1;
    height: 87px;
    border-radius: 12px;
    background: linear-gradient(270deg, #6d6e76 0%, #2c2d35 100%);
    & img {
      position: absolute;
      right: 5px;
      top: 6px;
      bottom: 6px;
      width: 62px;
      height: 75px;
    }
  }
  & .panel-service-3 {
    position: relative;
    grid-column: span 1 / span 1;
    height: 87px;
    flex-shrink: 0;
    border-radius: 12px;
    background: linear-gradient(270deg, #6d6e76 0%, #2c2d35 100%);
    & img {
      position: absolute;
      top: 6px;
      bottom: 6px;
      right: 5px;
      width: 62px;
      height: 75px;
    }
  }
  & .panel-service-4 {
    position: relative;
    grid-column: span 2 / span 2;
    height: 87px;
    border-radius: 12px;
    background: linear-gradient(270deg, #6d6e76 0%, #2c2d35 100%);
    & img {
      position: absolute;
      right: 8.84px;
      top: 6px;
      bottom: 6px;
      width: 87.162px;
      height: 75px;
    }
  }
}
@media screen and (max-width: 320px) {
  .panel-service-1 img.img-service {
    width: 45px;
    height: 95px;
  }
  .panel-service-4 img.img-service {
    width: 45px;
    height: 95px;
  }
}
@media screen and (max-width: 400px) {
  .panel-service-1 img.img-service {
    width: 90px;
    height: 90px;
  }
  .panel-service-4 img.img-service {
    width: 70px;
    height: 80px;
  }
}
@media screen and (max-width: 430px) {
  .panel-service-2 img.img-service {
    width: 45px;
    height: 95px;
  }
  .panel-service-3 img.img-service {
    width: 45px;
    height: 95px;
  }
}
</style>
