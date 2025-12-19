<template>
  <section class="section">
    <div class="reviews">
      <div class="container">
        <div class="reviews-wrapper">
          <div class="reviews-wrapper-title">
            <h1>Статьи и обзоры</h1>
            <nuxt-link class="btn-gl">
              <p>Перейти в Блог</p>
              <Icon name="right-arrow" />
            </nuxt-link>
          </div>
          <div class="reviews-wrapper-cards">
            <div class="reviews-wrapper-cards-first">
              <div class="reviews-wrapper-cards-first-info">
                <div class="reviews-wrapper-cards-first-info-title">
                  <h3>Генератор бензиновый Denzel PS-33</h3>
                </div>
                <div class="reviews-wrapper-cards-first-info-subtitle">
                  <p>Генератор бензиновый Denzel PS-33</p>
                </div>
                <div class="reviews-wrapper-cards-first-info-about">
                  <nuxt-link class="btn-gl">
                    <p>Подробнее</p>
                    <Icon name="right-arrow" />
                  </nuxt-link>
                </div>
              </div>
            </div>
            <div class="reviews-wrapper-cards-inner">
              <div
                class="reviews-wrapper-cards-inner-card"
                v-for="index in 4"
                :key="index"
              >
                <div class="reviews-wrapper-cards-inner-card-img">
                  <img :src="img" />
                </div>
                <div class="reviews-wrapper-cards-inner-card-info">
                  <div class="reviews-wrapper-cards-inner-card-info-title">
                    <h3>Генератор бензиновый Denzel PS-33</h3>
                  </div>
                  <div class="reviews-wrapper-cards-inner-card-info-subtitle">
                    <p>Генератор бензиновый Denzel PS-33</p>
                  </div>
                  <div class="reviews-wrapper-cards-inner-card-info-about">
                    <nuxt-link class="btn-gl">
                      <p>Подробнее</p>
                      <Icon name="right-arrow" />
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import img from '../assets/images/review.png'
</script>

<style scoped lang="scss">
.reviews {
  &-wrapper {
    &-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 24px;

      h1 {
        font-family: Bounded;
        font-weight: 400;
        font-style: Regular;
        font-size: 32px;
        leading-trim: NONE;
        line-height: 120%;
        letter-spacing: 0%;
        margin: 0;
      }
    }
    &-cards {
      overflow: hidden;
      display: flex;
      gap: 16px;
      &-first {
        width: 33%;
        position: relative;
        max-height: 416px;
        border-radius: 12px;
        background: url('../assets/images/review.png');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;

        &-img {
          position: absolute;
          z-index: -1;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            border-radius: 12px;
          }
        }
        &-info {
          position: absolute;
          border-radius: 0 0 12px 12px;
          overflow: hidden;
          bottom: 0;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: start;
          color: #fff;
          left: 0;
          max-width: 480px;
          background: rgba(0, 0, 0, 0.4);

          backdrop-filter: blur(20px);
          padding: 24px;
          &-title {
            margin-bottom: 8px;
            h3 {
              font-family: Bounded;
              font-weight: 400;
              font-style: Regular;
              font-size: 18px;
              leading-trim: NONE;
              line-height: 120%;
              letter-spacing: 0%;
            }
          }
          &-subtitle {
            margin-bottom: 16px;
            p {
              font-family: Inter;
              font-weight: 400;
              font-style: Regular;
              font-size: 14px;
              leading-trim: NONE;
              line-height: 20px;
              letter-spacing: 0%;
            }
          }
          &-about {
            a {
              border: 1px solid #fff;
              p {
                color: #fff;
              }
            }
          }
        }
      }
      &-inner {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
        width: 100%;
        max-width: 65%;
        &::-webkit-scrollbar {
          display: none;
        }
      }

      &-inner-card {
        cursor: pointer;
        border-radius: 8px;
        display: flex;
        max-height: 200px;
        background: #f4f5f6;
        &-info {
          padding: 24px;
          &-title {
            margin-bottom: 8px;
            h3 {
              font-family: Bounded;
              font-weight: 400;
              font-style: Regular;
              font-size: 18px;
              leading-trim: NONE;
              line-height: 120%;
              letter-spacing: 0%;
              color: #22242a;
            }
          }
          &-subtitle {
            margin-bottom: 28px;
            p {
              font-family: Inter;
              font-weight: 400;
              font-style: Regular;
              font-size: 14px;
              leading-trim: NONE;
              line-height: 20px;
              letter-spacing: 0%;
              color: #22242a;
            }
          }
          &-about {
            display: flex;
            align-items: center;
            width: 100%;
            height: 100%;
            max-height: 32px;
          }
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 8px;
        }
      }
    }
  }
}
</style>
