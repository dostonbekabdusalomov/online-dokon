<template>
  <section class="section">
    <div class="brands">
      <div class="container">
        <div class="brands-wrapper">
          <div class="brands-wrapper-title">
            <h1>Более 1 000 проверенных брендов</h1>
            <nuxt-link>
              <p>Все бренды</p>
              <Icon name="right-arrow" />
            </nuxt-link>
          </div>
          <div class="brands-wrapper-cards">
            <div
              class="brands-wrapper-cards-inner"
              ref="track"
              @mousedown.prevent="onDown"
              @mousemove.prevent="onMove"
              @mouseup="onUp"
              @mouseleave="onUp"
            >
              <div
                class="brands-wrapper-cards-inner-card"
                v-for="index in 20"
                :key="index"
              >
                <img :src="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import img from '../assets/images/brand.png'

const track = ref(null)

let isDown = false
let startX = 0
let scrollLeft = 0
let rafId = null
const speed = 0.5

const onDown = e => {
  isDown = true
  startX = e.pageX
  scrollLeft = track.value.scrollLeft
}

const onMove = e => {
  if (!isDown) return
  const x = e.pageX
  const walk = (x - startX) * 1.5
  track.value.scrollLeft = scrollLeft - walk
}

const onUp = () => {
  isDown = false
}

const autoPlay = () => {
  if (!isDown) {
    track.value.scrollLeft += speed

    if (track.value.scrollLeft >= track.value.scrollWidth / 2) {
      track.value.scrollLeft = 0
    }
  }

  rafId = requestAnimationFrame(autoPlay)
}

onMounted(() => {
  track.value.scrollLeft = 0
  rafId = requestAnimationFrame(autoPlay)
})

onUnmounted(() => {
  cancelAnimationFrame(rafId)
})
</script>

<style scoped lang="scss">
.brands {
  &-wrapper {
    &-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 24px;
      a {
        border: 1px solid #00000033;
        border-radius: 8px;
        padding: 4px;
        display: flex;
        align-items: center;
        gap: 10px;
        justify-content: center;
        p {
          font-family: Inter;
          font-weight: 600;
          font-style: Semi Bold;
          font-size: 12px;

          line-height: 16px;
          letter-spacing: 0%;
          color: #22242a;
          margin: 0;
          padding-left: 12px;
        }
        img {
          background-color: #feeb27;
          border-radius: 8px;
        }
      }
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

      &-inner {
        display: flex;
        overflow-x: scroll;
        user-select: none;
        gap: 16px;
        scrollbar-width: none;

        &::-webkit-scrollbar {
          display: none;
        }
      }

      &-inner-card {
        flex-shrink: 0;
        width: 200px;
        border: 1px solid #00000033;
        cursor: pointer;
        border-radius: 8px;
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

@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
</style>
