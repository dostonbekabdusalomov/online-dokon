<template>
  <header class="header">
    <div class="top-info">
      Midseason Sale: 20% Off — Auto Applied at Checkout — Limited Time Only
    </div>

    <div class="mid-bar" :class="{ sticky: isSticky }">
      <div class="mid-inner-nav container-header">
        <div class="right">
          <div class="menu-bar">
            <ul class="menu">
              <li
                v-for="(item, index) in menuItems"
                :key="index"
                class="menu-item"
                @mouseenter="item.children ? openDropdown(index) : null"
                @mouseleave="closeDropdown"
              >
                <a v-if="!item.children" :href="item.link">{{ item.title }}</a>

                <div v-else class="dropdown-wrapper">
                  <span class="menu-title"
                    ><p>{{ item.title }}</p>
                    <Icon name="arrow-down"
                  /></span>
                  <ul v-show="openIndex === index" class="dropdown">
                    <li v-for="(child, i) in item.children" :key="i">
                      <a :href="child.link">{{ child.title }}</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="left">
          <div
            class="lang-drop"
            @mouseenter="langMouseEnter"
            @mouseleave="langMouseLeave"
          >
            <span>{{ selectedLang }}</span
            ><Icon name="arrow-down" />
            <ul v-show="openLang" class="dropdown">
              <li @click="selectLang('Uz')">Uz</li>
              <li @click="selectLang('Ru')">Ru</li>
              <li @click="selectLang('En')">En</li>
            </ul>
          </div>

          <div
            class="cur-drop"
            @mouseenter="curMouseEnter"
            @mouseleave="curMouseLeave"
          >
            <span>{{ selectedCur }}</span
            ><Icon name="arrow-down" />
            <ul v-show="openCur" class="dropdown">
              <li @click="selectCur('Сум')">Сум</li>
              <li @click="selectCur('USD')">USD</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mid-inner">
        <div class="container-header">
          <div class="left">
            <img src="../assets/images/logo.jpg" alt="logo" class="logo" />

            <button class="catalog-btn">
              <span class="icon"><Icon name="grid" /></span>
              <p>КАТАЛОГ</p>
            </button>
          </div>

          <div class="search-box">
            <input type="text" placeholder="Поиск по товарам" />
            <button class="search-btn"><Icon name="search" /></button>
          </div>

          <div class="right">
            <div class="icons">
              <div class="item">
                <Icon name="heart" />
                <span>Избранное</span
                ><span v-if="wishlist.wishListCount > 0" class="cart-wishlist">
                  {{ wishlist.wishListCount }}
                </span>
              </div>

              <div class="item">
                <Icon name="user" />
                <span>Войти</span>
              </div>

              <div class="item item-cart">
                <Icon name="cart" />
                <span>Корзина</span>

                <span v-if="cart.cartCount > 0" class="cart-badge">
                  {{ cart.cartCount }}
                </span>
              </div>
            </div>

            <!-- <button @click="addToCart">Add item to cart</button>
          <button @click="clearCart">Clear cart</button> -->
          </div>
        </div>
      </div>
    </div>

    <nav class="bottom-nav">
      <div class="nav-list container-header">
        <p v-for="(c, i) in categories" :key="i">{{ c }}</p>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useCartStore } from '../../stores/cart'
import { useWishlistStore } from '../../stores/wishlist.js'
import { useRouter } from 'vue-router'
import Icon from '../components/Icon.vue' // sizning Icon component pathingizga qarab

const menuItems = ref([
  { title: 'Про нас', link: '/' },
  { title: 'Блог', link: '/' },
  { title: 'Производителям', link: '/' },

  {
    title: 'Помощь и контакты',
    children: [
      { title: 'Производителям', link: '/' },
      { title: 'Блог', link: '/' }
    ]
  }
])

const isSticky = ref(false)

const handleScroll = () => {
  const topInfoHeight = document.querySelector('.top-info')?.offsetHeight || 0
  isSticky.value = window.scrollY > topInfoHeight
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const categories = ref([
  'Акции',
  'Новинки',
  'Продовольственные товары',
  'Промышленное сырьё',
  'Лёгкая промышленность',
  'Оборудование',
  'Медицинские товары',
  'IT и Электроника'
])

const cart = useCartStore()
const wishlist = useWishlistStore()

const openIndex = ref(null)
const openDropdown = index => (openIndex.value = index)
const closeDropdown = () => (openIndex.value = null)

const selectedLang = ref('Uz')
const selectedCur = ref('Сум')

const openLang = ref(false)
const openCur = ref(false)

let langTimeout = null
let curTimeout = null

const selectLang = lang => {
  selectedLang.value = lang
  openLang.value = false
}
const selectCur = cur => {
  selectedCur.value = cur
  openCur.value = false
}

const langMouseEnter = () => {
  clearTimeout(langTimeout)
  openLang.value = true
}
const langMouseLeave = () => {
  langTimeout = setTimeout(() => {
    openLang.value = false
  }, 300)
}

const curMouseEnter = () => {
  clearTimeout(curTimeout)
  openCur.value = true
}
const curMouseLeave = () => {
  curTimeout = setTimeout(() => {
    openCur.value = false
  }, 300)
}
</script>

<style lang="scss" scoped></style>
