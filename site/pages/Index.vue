<template>
  <div class="index-page">
     <PageHeader></PageHeader>
     <PageMain></PageMain>
  </div>
</template>

<script>
import PageHeader from '../components/Header';
import PageMain from '../components/Main';

export default {
  components: {
    PageHeader,
    PageMain,
  },
};
</script>

<style lang="scss">
.index-page {
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: #fff;
  background-image: url(../styles/images/bg.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top right;

  header {
    background-color: transparent;

    .header-container {
      max-width: 1300px;
      margin: 0 auto;
      padding: 0 30px;
    }

    .logo {
      text-align: left;
    }
  }

  main {
    position: relative;
    max-width: 1300px;
    margin: 0 auto;
    padding: 65px 30px;
    height: 100%;
  }

  .introduce {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40%;
    height: 100%;

    .title {
      font-size: 64px;
      font-weight: bold;
      line-height: 1;

      span {
        color: #12C287;
      }
    }

    .description {
      margin-top: 30px;
      font-size: 18px;
      line-height: 1.5;
    }

    .navigation {
      margin-top: 100px;
      margin-bottom: 60px;

      button {
        float: left;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        background-color: #12C287;
        border: 0;
        color: #fff;
        font-size: 18px;
        border-radius: 25px;
        outline: none;
        margin-right: 15px;
        margin-bottom: 10px;
        padding: 0 30px;

        &:hover {
          background: #10AE79;
        }

        &.ghost {
          border: 1px solid #12C287;
          color: #12C287;
          background-color: #fff;

          &:hover {
            border-color: #10AE79;
            color: #10AE79;
          }
        }
      }
    }
  }

  .righter {
    float: right;
    width: 55%;
    height: 100%;
    position: relative;
  }

  .banner {
    float: right;
    position: relative;
    width: 100%;
    height: 100%;

    img {
      position: absolute;
      top: 50%;
      margin-top: -200px;
      width: 100%;
      animation: banner-move 60s infinite;
    }

    .woman {
      position: absolute;
      top: 212px;
      left: 264px;
      width: 56px;
      height: 33px;
      background-image: url(../styles/images/woman.png);
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      animation: woman-move 10s infinite;
    }

    .buoy {
      position: absolute;
      top: 234px;
      left: 284px;
      width: 26px;
      height: 22px;
      background-image: url(../styles/images/buoy.png);
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      animation: buoy-move 10s infinite;

      &.small {
        top: 218px;
        left: 240px;
        animation: small-buoy-move 6s infinite;
      }
    }
  }
}

// 二维码
.ui-dropdown {
  min-width: auto !important;
  line-height: 1;

  &-trigger-box {
    background: transparent;
  }
}

@keyframes banner-move {
  0% {
    transform: translate3d(0, 0, 0);
  }
  20% {
    transform: translate3d(-40px, -40px, 0);
  }
  40% {
    transform: translate3d(40px, -40px, 0);
  }
  60% {
    transform: translate3d(-40px, 40px, 0);
  }
  80% {
    transform: translate3d(40px, 40px, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes woman-move {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

@keyframes buoy-move {
  0% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(-4px, -4px, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes small-buoy-move {
  0% {
    transform: scale(0.6) translate3d(0, 0, 0);
  }
  50% {
    transform: scale(0.6) translate3d(-2px, -2px, 0);
  }
  100% {
    transform: scale(0.6) translate3d(0, 0, 0);
  }
}
</style>
