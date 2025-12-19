<template>
  <section class="section" v-for="(section, i) in sections" :key="i">
    <div class="_section">
      <!-- TOP PART -->
      <div class="_section-wrapper">
        <div class="container">
          <div class="_section-wrapper-inner">
            <div class="_section-wrapper-inner-title">
              <h1>{{ section.title }}</h1>
              <p>{{ section.subtitle }}</p>
            </div>

            <img :src="section.banner" alt="" />

            <!-- Categories -->
            <div class="_section-wrapper-inner-category">
              <div class="_section-wrapper-inner-category-card">
                <nuxt-link
                  v-for="(k, index) in section.categories"
                  :key="index"
                >
                  <div class="_section-wrapper-inner-category-card-img">
                    <img :src="k.img" alt="" />
                  </div>

                  <div class="_section-wrapper-inner-category-card-title">
                    <p>{{ k.title }}</p>
                  </div>
                </nuxt-link>
              </div>

              <div class="_section-wrapper-inner-category-all">
                <nuxt-link>
                  <p>Все категории</p>
                  <Icon name="right-arrow" />
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- PRODUCTS -->
      <div class="container">
        <div class="_section-cards">
          <div>
            <Card
              v-for="(item, idx) in getProducts(section)"
              :key="idx"
              :item="item"
            />
          </div>

          <!-- Pagination -->
          <div class="pagination-wrapper">
            <button @click="prevSlide">
              <Icon name="left-arrow" />
            </button>

            <button @click="() => nextSlide(section)">
              <Icon name="right-arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import axios from '@/axios' // sizdagi axios.js yo'lini yozing

const sections = ref([])

const getSections = async () => {
  try {
    const res = await axios.get('/sections')
    sections.value = res.data
  } catch (e) {
    console.log('Error loading sections', e)
  }
}

await getSections()

// pagination uchun umumiy funksiya
const itemsPerPage = 5
const currentPage = ref(0)

const getProducts = section =>
  section.products.slice(
    currentPage.value * itemsPerPage,
    currentPage.value * itemsPerPage + itemsPerPage
  )

const nextSlide = section => {
  if (currentPage.value < Math.ceil(section.products.length / itemsPerPage) - 1)
    currentPage.value++
}

const prevSlide = () => {
  if (currentPage.value > 0) currentPage.value--
}
</script>

<style lang="scss" scoped>
// ._section {
//   &-wrapper {
//     background: #ddcdcd;
//     padding: 40px 0;
//     &-inner {
//       display: flex;
//       align-items: start;
//       justify-content: space-between;
//       position: relative;
//       &-title {
//         display: flex;
//         flex-direction: column;
//         z-index: 1;
//         position: relative;
//         max-width: 400px;
//         gap: 16px;
//         h1 {
//           font-family: 'Bounded', sans-serif;
//           font-weight: 400;
//           font-style: Regular;
//           font-size: 32px;

//           line-height: 120%;
//           letter-spacing: 0%;
//           color: #22242a;
//           margin: 0;
//         }
//         p {
//           font-family: Inter;
//           font-weight: 400;
//           font-style: Regular;
//           font-size: 14px;

//           line-height: 20px;
//           letter-spacing: 0%;
//           color: #22242a;
//           margin: 0;
//         }
//       }
//       & > img {
//         position: absolute;
//         left: 50%;
//         transform: translateX(-75%);
//         max-width: 280px;
//         z-index: 0;
//         bottom: -47px;
//       }
//       &-category {
//         position: relative;
//         z-index: 1;
//         &-card {
//           display: flex;
//           gap: 8px;
//           margin-bottom: 8px;
//           a {
//             display: flex;
//             flex-direction: column;
//             background: #fff;
//             border-radius: 8px;
//             align-items: center;
//             justify-content: center;
//             padding: 12px 8px;
//             cursor: pointer;
//             &:hover {
//               img {
//                 transform: scale(1.2);
//               }
//             }
//             img {
//               max-width: 88px;
//               padding: 12px;
//               transition: transform 0.5s ease;
//             }
//           }
//           &-title {
//             p {
//               font-family: Inter;
//               font-weight: 600;
//               font-style: Semi Bold;
//               font-size: 11px;

//               line-height: 16px;
//               letter-spacing: 2%;
//               text-align: center;
//               text-transform: uppercase;
//               margin: 0;
//             }
//           }
//         }
//         &-all {
//           border: 1px solid #00000033;
//           width: 100%;
//           border-radius: 8px;
//           a {
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             padding: 8px;
//             cursor: pointer;
//             p {
//               font-family: Inter;
//               font-weight: 600;
//               font-style: Semi Bold;
//               font-size: 12px;

//               line-height: 16px;
//               letter-spacing: 0%;
//               margin: 0;
//             }
//           }
//         }
//       }
//     }
//   }
//   &-cards {
//     margin-top: 24px;
//     & > div {
//       display: flex;
//       gap: 16px;
//     }
//     .pagination-wrapper {
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       gap: 10px;
//       margin: 24px 0;

//       button {
//         padding: 8px 12px;
//         border-radius: 4px;
//         background: #fff;
//         font-size: 24px;
//         border: none;
//         outline: none;
//         cursor: pointer;
//         img {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         &:disabled {
//           opacity: 0.5;
//           cursor: not-allowed;
//         }
//       }

//       .dots {
//         display: flex;
//         gap: 6px;

//         span {
//           width: 6px;
//           height: 6px;
//           border-radius: 50%;
//           background: #ccc;
//           cursor: pointer;

//           &.active {
//             background: #22242a;
//           }
//         }
//       }
//     }
//     &-all {
//       display: flex;
//       justify-content: center;

//       a {
//         border: 1px solid #22242a;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         gap: 8px;
//         cursor: pointer;
//         padding: 10px 24px;
//         width: max-content;
//         border-radius: 8px;
//         p {
//           font-family: Inter;
//           font-weight: 600;
//           font-style: Semi Bold;
//           font-size: 14px;

//           line-height: 20px;
//           letter-spacing: 0%;
//           margin: 0;
//           color: #22242a;
//         }
//       }
//     }
//   }
// }
//
</style>
