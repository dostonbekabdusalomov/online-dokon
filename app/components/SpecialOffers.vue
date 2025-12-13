<template>
  <section class="section">
    <div class="special-offer">
      <div class="container">
        <div class="special-offer-wrapper">
          <div class="special-offer-wrapper-title">
            <h1>Актуальные спецпредложения</h1>
            <div class="nav-buttons">
              <button @click="prevSlide" :disabled="currentPage === 0">
                ‹
              </button>
              <button
                @click="nextSlide"
                :disabled="currentPage >= totalPages - 1"
              >
                ›
              </button>
            </div>
          </div>

          <!-- Slider Items -->
          <div class="special-offer-wrapper-slide">
            <nuxt-link
              v-for="(item, index) in currentItems"
              :key="index"
              class="slide-item"
              :to="item.link || '#'"
            >
              <div class="slide-img">
                <img :src="item.img" :alt="item.title" />
              </div>
              <div class="slide-info">
                <p class="slide-title">{{ item.title }}</p>
                <span class="slide-desc">{{ item.desc }}</span>
                <div class="slide-link">
                  <p>Подробнее</p>
                  <Icon name="right-arrow" />
                </div>
              </div>
            </nuxt-link>
          </div>

          <!-- Dots -->
          <div class="slider-dots">
            <span
              v-for="page in totalPages"
              :key="page"
              :class="{ active: page - 1 === currentPage }"
              @click="currentPage = page - 1"
            ></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import img from '../assets/images/heroback.png'

const itemsPerPage = 3

const SpecialOffer = [
  {
    img: img,
    title: 'Супер скидка',
    desc: 'Только до конца месяца!'
  },
  {
    img: img,
    title: 'Новые поступления',
    desc: 'Смотрите наши новинки'
  },
  {
    img: img,
    title: 'Акция выходного дня',
    desc: 'Только 2 дня!'
  },
  { img: img, title: 'Лучшие цены', desc: 'Не пропустите!' },
  {
    img: img,
    title: 'Эксклюзивные предложения',
    desc: 'Только для вас!'
  }
]

const currentPage = ref(0)
const totalPages = computed(() => Math.ceil(SpecialOffer.length / itemsPerPage))

const currentItems = computed(() => {
  const start = currentPage.value * itemsPerPage
  return SpecialOffer.slice(start, start + itemsPerPage)
})

const nextSlide = () => {
  if (currentPage.value < totalPages.value - 1) currentPage.value++
}
const prevSlide = () => {
  if (currentPage.value > 0) currentPage.value--
}
</script>

<style lang="scss" scoped>
.special-offer-wrapper-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  h1 {
    font-family: 'Bounded', sans-serif;
    font-weight: 400;
    font-style: Regular;
    font-size: 32px;
    
    line-height: 120%;
    letter-spacing: 0%;
    color: #22242a;
    margin: 0;
  }
  display: flex;
  gap: 10px;

  .nav-buttons {
    display: flex;
    gap: 10px;

    button {
      background: #f6f7f8;
      border: none;
      padding: 3px 12.5px;
      cursor: pointer;
      font-size: 22px;
      border-radius: 8px;
      transition: 0.2s;
      &:last-child {
        background: #22242a;
        color: #fff;
      }
    }
  }
}

.special-offer-wrapper-slide {
  display: flex;
  gap: 16px;

  .slide-item {
    max-width: 523px;
    width: 100%;
    display: block;
    text-decoration: none;
    color: inherit;
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.2s;

    &:hover {
      transform: translateY(-5px);
    }

    .slide-img img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }

    .slide-info {
      padding: 24px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      background: #f4f5f6;

      .slide-title {
        font-family: 'Bounded', sans-serif;
        font-weight: 400;
        font-style: Regular;
        font-size: 18px;
        
        line-height: 120%;
        letter-spacing: 0%;
        color: #22242a;
        margin: 0;
      }

      .slide-desc {
        font-family: Inter;
        font-weight: 400;
        font-style: Regular;
        font-size: 14px;
        
        line-height: 20px;
        letter-spacing: 0%;
        color: #22242a;
        margin-bottom: 24px;
      }

      .slide-link {
        display: flex;
        align-items: center;
        gap: 10px;
        border: 1px solid #00000033;
        width: max-content;
        border-radius: 8px;
        padding: 4px 4px 4px 16px;
        p {
          font-family: Inter;
          font-weight: 600;
          font-style: Semi Bold;
          font-size: 12px;
          
          line-height: 16px;
          letter-spacing: 0%;
          color: #22242a;
          margin: 0;
        }
        img {
          background: #feeb27;
          border-radius: 8px;
        }
      }
    }
  }
}

.slider-dots {
  margin-top: 15px;
  display: flex;
  justify-content: center;
  gap: 8px;

  span {
    width: 10px;
    height: 10px;
    background: #ccc;
    border-radius: 50%;
    display: inline-block;
    cursor: pointer;
    transition: background 0.2s;

    &.active {
      background: #22242a;
    }
  }
}
</style>
