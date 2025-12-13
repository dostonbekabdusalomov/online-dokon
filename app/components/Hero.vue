<template>
  <section class="section hero">
    <div class="container">
      <ClientOnly>
        <div class="hero-wrapper">
          <div class="hero-wrapper-left">
            <Swiper
              :modules="[Autoplay, Pagination]"
              :loop="true"
              :slides-per-view="1"
              pagination
              class="hero-left-swiper"
            >
              <SwiperSlide v-for="(slide, index) in heroSlides" :key="index">
                <div class="hero-wrapper-banner">
                  <div class="hero-wrapper-banner-img">
                    <img :src="slide.img" :alt="slide.title" />
                  </div>
                  <div class="hero-wrapper-banner-info">
                    <h1>{{ slide.title }}</h1>
                    <p>{{ slide.desc }}</p>
                  </div>
                  <div class="hero-wrapper-banner-discount">
                    <small>до</small>
                    <span>{{ slide.discount }}</span>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div class="hero-wrapper-right">
            <Swiper
              :modules="[Autoplay, Navigation, Pagination]"
              :slides-per-view="1"
              space-between="20"
              pagination
              class="hero-right-swiper"
            >
              <SwiperSlide
                v-for="(card, index) in heroCards"
                :key="index"
                class="hero-wrapper-right-card"
              >
                <div class="hero-wrapper-card">
                  <p>Товары дня</p>

                  <div>
                    <div class="hero-wrapper-card-img">
                      <img :src="card.img" alt="" />
                    </div>
                    <div class="hero-wrapper-card-info">
                      <div class="hero-wrapper-card-orders">
                        <p>{{ card.minOrder }}</p>
                        <p>{{ card.includes }}</p>
                      </div>
                      <div class="hero-wrapper-card-title">
                        <h2>{{ card.title }}</h2>
                      </div>
                      <div class="hero-wrapper-card-prices">
                        <div class="old-price">
                          <span>{{ card.percentage }}</span>
                          <p>{{ card.oldPrice }}</p>
                        </div>
                        <p class="new-price">{{ card.newPrice }}</p>
                      </div>
                      <div class="hero-wrapper-card-button">
                        <button @click="cart.addToCart(product)">
                          <Icon name="cart1" /> Купить
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </ClientOnly>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useCartStore } from '../../stores/cart.js'

const cart = useCartStore()
import heroBack from '../assets/images/heroback.png'
import cardImg from '../assets/images/herocard.png'

import Icon from '~/components/Icon.vue'

const heroSlides = [
  {
    img: heroBack,
    title: 'Волна выгоды',
    desc: 'Большая распродажа электроники только до 12.08.2025',
    discount: '- 20%'
  },
  {
    img: heroBack,
    title: 'Супер скидки',
    desc: 'Только сегодня',
    discount: '- 15%'
  },
  {
    img: heroBack,
    title: 'Новинки',
    desc: 'Электроника 2025',
    discount: '- 10%'
  }
]

const heroCards = [
  {
    img: cardImg,
    minOrder: 'min. order 100 pcs',
    includes: 'includes VAT',
    title: 'Генератор бензиновый Denzel PS-33',
    oldPrice: ' 4 800 000 сум',
    percentage: '-10%',
    newPrice: '4 399 000 сум'
  },
  {
    img: cardImg,
    minOrder: 'min. order 50 pcs',
    includes: 'includes VAT',
    title: 'Бензопила Husqvarna 450',
    oldPrice: ' 1 200 000 сум',
    percentage: '-5%',
    newPrice: '1 140 000 сум'
  },
  {
    img: cardImg,
    minOrder: 'min. order 30 pcs',
    includes: 'includes VAT',
    title: 'Генератор бензиновый Denzel PS-50',
    oldPrice: ' 5 200 000 сум',
    newPrice: '4 840 000 сум',
    percentage: '-7%'
  }
]
</script>
