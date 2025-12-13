<template>
  <section class="section">
    <div class="especially">
      <div class="container">
        <div class="especially-wrapper">
          <div class="especially-wrapper-title">
            <div class="especially-wrapper-title-items">
              <p>Специально для вас</p>

              <div class="tab-items">
                <div
                  v-for="tabKey in tabsArr"
                  :key="tabKey"
                  class="tab-item"
                  :class="{ active: activeTab === tabKey }"
                  @click="changeTab(tabKey)"
                >
                  <h1>{{ tabs[tabKey].label }}</h1>
                </div>
              </div>
            </div>

            <div class="especially-wrapper-title-pagination">
              <button
                @click="prevSlide"
                class="nav-btn"
                :disabled="currentPage === 0"
              >
                ‹
              </button>
              <button @click="nextSlide" class="nav-btn">›</button>
            </div>
          </div>

          <div class="especially-content">
            <Card
              v-for="(item, index) in currentSlideItems"
              :key="index"
              :item="item"
              @add-to-cart="addToCart"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import img from '../assets/images/herocard.png'

const itemsPerSlide = 5

const tabs = {
  popular: {
    label: 'Популярные',
    items: [
      {
        title: 'Генератор бензиновый Denzel PS-33',
        id: 1,
        price: '4 399 000 сум',
        img: img,
        minOrder: 'мин. заказ 100 шт',
        includes: 'включает НДС',
        hit: true,
        percentage: '-10 %',
        oldPrice: '4 800 000'
      },
      {
        title: 'Генератор бензиновый Denzel PS-33',
        id: 2,
        price: '4 399 000 сум',
        img: img,
        minOrder: 'мин. заказ 100 шт',
        includes: 'включает НДС',
        bestPrice: true
      },
      {
        title: 'Генератор бензиновый Denzel PS-33',
        id: 3,
        price: '4 399 000 сум',
        img: img,
        minOrder: 'мин. заказ 100 шт',
        includes: 'включает НДС',
        freeShipping: true,
        percentage: '-10 %',
        oldPrice: '4 800 000'
      },
      {
        title: 'Генератор бензиновый Denzel PS-33',
        id: 4,
        price: '4 399 000 сум',
        img: img,
        minOrder: 'мин. заказ 100 шт',
        includes: 'включает НДС',
        hit: true
      },
      {
        title: 'Генератор бензиновый Denzel PS-33',
        id: 5,
        price: '4 399 000 сум',
        img: img,
        minOrder: 'мин. заказ 100 шт',
        includes: 'включает НДС',
        hit: true
      },
      {
        title: 'Генератор бензиновый Denzel PS-33',
        id: 6,
        price: '4 399 000 сум',
        img: img,
        minOrder: 'мин. заказ 100 шт',
        includes: 'включает НДС',
        hit: true,
        percentage: '-10 %',
        oldPrice: '4 800 000'
      },
      {
        title: 'Генератор бензиновый Denzel PS-33',
        id: 7,
        price: '4 399 000 сум',
        img: img,
        minOrder: 'мин. заказ 100 шт',
        includes: 'включает НДС',
        hit: true
      }
    ]
  },
  new: {
    label: 'Новинки',
    items: [
      {
        title: 'Генератор бензиновый Denzel PS-33',
        id: 8,
        price: '4 399 000 сум',
        img: img,
        minOrder: 'мин. заказ 100 шт',
        includes: 'включает НДС',
        hit: true
      }
    ]
  }
}
const tabsArr = Object.keys(tabs)
const activeTab = ref('popular')
const activeSlide = ref(0)

const changeTab = key => {
  activeTab.value = key
  activeSlide.value = 0
}

const currentItems = computed(() => tabs[activeTab.value].items)

const currentSlideItems = computed(() => {
  const start = activeSlide.value * itemsPerSlide
  return currentItems.value.slice(start, start + itemsPerSlide)
})

const prevSlide = () => {
  if (activeSlide.value > 0) activeSlide.value--
}

const nextSlide = () => {
  if ((activeSlide.value + 1) * itemsPerSlide < currentItems.value.length)
    activeSlide.value++
}

const addToCart = item => {
  console.log('Add to cart:', item)
}
</script>

<style scoped lang="scss">
.especially {
  padding-top: 16px;
}
.especially-wrapper-title {
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding-bottom: 24px;
  &-items {
    display: flex;
    flex-direction: column;
    align-items: start;
    p {
      font-family: Inter;
      font-weight: 500;
      font-style: Medium;
      font-size: 13px;
      
      line-height: 16px;
      letter-spacing: -1%;
      color: #22242a;
      margin: 0 0 10px 0;
    }
  }
  .tab-items {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  .tab-item {
    cursor: pointer;
    color: #777;
    h1 {
      font-family: 'Bounded', sans-serif;
      font-weight: 400;
      font-style: Regular;
      font-size: 32px;
      
      line-height: 120%;
      letter-spacing: 0%;
      margin: 0;
    }

    &.active {
      color: #000;
      border-bottom: 2px solid #000;
    }
  }

  .especially-wrapper-title-pagination {
    display: flex;
    gap: 10px;

    .nav-btn {
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
.especially-content {
  display: flex;
  align-items: center;
  gap: 16px;
}
p {
  margin: 0;
}
</style>
