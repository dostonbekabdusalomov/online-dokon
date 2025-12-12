<template>
  <section class="section">
    <div class="category">
      <div class="container">
        <div class="category-inner">
          <div class="gl-title">
            <h1>Популярные категории</h1>
            <nuxt-link>
              <p>Все категории</p>
              <Icon name="right-arrow" />
            </nuxt-link>
          </div>
          <div class="category-inner-card">
            <nuxt-link v-for="(k, index) in categories" :key="index">
              <div class="category-card-img">
                <img :src="k.img" alt="" />
              </div>
              <div class="category-card-title">
                <p>{{ k.title }}</p>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import img from '../assets/images/category.png'

const categories = [
  {
    img: img,
    title: ' Сырьё'
  },
  {
    img: img,
    title: ' Сырьё'
  },
  {
    img: img,
    title: ' Сырьё'
  },
  {
    img: img,
    title: ' Сырьё'
  },
  {
    img: img,
    title: ' Сырьё'
  },
  {
    img: img,
    title: ' Сырьё'
  },
  {
    img: img,
    title: ' Сырьё'
  },
  {
    img: img,
    title: ' Сырьё'
  },
  {
    img: img,
    title: ' Сырьё'
  }
]
</script>

<style></style>
