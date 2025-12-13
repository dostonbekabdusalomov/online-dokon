<template>
  <div class="card">
    <div class="card-image">
      <img :src="item.img" alt="" />
      <button class="wishlist-btn" @click.stop="wishlist.toggleWishlist(item)">
        <Icon
          :key="wishlist.isInWishlist(item.id)"
          :name="
            wishlist.isInWishlist(item.id) ? 'wishlist-active' : 'wishlist'
          "
          :class="{ active: wishlist.isInWishlist(item.id) }"
        />
      </button>
      <div class="card-image-tags">
        <span v-if="item.hit" class="badge hit">Хит продаж</span>
        <span v-if="item.bestPrice" class="badge best-price">Лучшая Цена</span>
        <span v-if="item.freeShipping" class="badge free-shipping"
          >Бесплатная доставка</span
        >
      </div>
    </div>

    <div class="card-info">
      <div class="card-discounts">
        <p v-if="item.minOrder">{{ item.minOrder }}</p>
        <p v-if="item.includes">{{ item.includes }}</p>
      </div>

      <div class="card-title">
        <h4>{{ item.title }}</h4>
      </div>

      <div class="card-price">
        <div class="card-prices">
          <div class="old-price">
            <span>{{ item.percentage }}</span>
            <p>{{ item.oldPrice }}</p>
          </div>
          <p class="new-price">{{ item.price }}</p>
        </div>
        <button @click="cart.addToCart(product)">
          <Icon name="cart1" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: { type: Object, required: true }
})
import { useCartStore } from '../../stores/cart.js'
import { useWishlistStore } from '../../stores/wishlist.js'

const cart = useCartStore()

const wishlist = useWishlistStore()
</script>

<style lang="scss" scoped>
.card {
  border-radius: 8px;
  overflow: hidden;
  max-width: 307px;
  cursor: pointer;
  transition: transform 0.5s ease;
  &:hover {
    box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.15);
    transform: scale(1.03);
    .card-info .card-price button {
      background: #feeb27;
    }
    .card-image {
      transform: scale(0.97);
      img {
        transform: scale(1.1);
      }
      .wishlist-btn {
        display: flex;
      }
    }
  }

  .card-image {
    position: relative;
    background: #0304050a;
    border-radius: 8px;
    transition: transform 0.5s ease;
    padding: 16px;
    .wishlist-btn {
      position: absolute;
      display: none;
      top: 10px;
      transition: all 0.5s ease;
      right: 10px;
      background: #fff;
      border: none;
      border-radius: 8px;
      width: 32px;
      height: 32px;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      svg {
        width: 18px;
        height: 18px;
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      transition: transform 0.5s ease;
    }
    &-tags {
      position: absolute;
      top: 10px;
      left: 10px;
      display: flex;
      align-items: start;
      flex-direction: column;
      gap: 8px;
      .badge {
        padding: 3px 8px;
        color: #fff;
        border-radius: 4px;
        font-family: Inter;
        font-weight: 600;
        font-style: Semi Bold;
        font-size: 11px;

        line-height: 16px;
        letter-spacing: -4%;
        text-transform: uppercase;
      }

      .hit {
        background-color: #6a3aa0;
        top: 10px;
        left: 10px;
      }

      .best-price {
        background-color: #feeb27;
        color: #22242a;
        left: 10px;
      }
      .free-shipping {
        background: #162342;
        color: #fff;
      }
    }
  }

  .card-info {
    padding: 10px;

    .card-title h4 {
      font-size: 16px;

      margin: 0 0 16px 0;
    }

    .card-discounts p {
      font-size: 12px;
      color: #555;
      margin: 2px 0;
    }

    .card-price {
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        font-weight: 600;
      }
      button {
        background: none;
        cursor: pointer;
        padding: 8px;
        border-radius: 8px;
        border: 3px solid #feeb27;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.5s ease;
      }
    }
  }
  &-discounts {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    gap: 4px;
    p {
      margin: 0;
      border: 1px solid #a5a5a5;
      padding: 4px;
      font-weight: 500;
      font-style: Medium;
      font-size: 11px;

      line-height: 16px;
      letter-spacing: 0%;
      color: #848688;
      border-radius: 4px;
    }
  }
  &-title {
    h4 {
      font-family: Inter;
      font-weight: 400;
      font-style: Regular;
      font-size: 14px;

      line-height: 20px;
      letter-spacing: 0%;
      color: #22242a;
    }
  }
  .card-prices {
    .old-price {
      display: flex;
      align-items: center;
      gap: 4px;
      margin-bottom: 4px;
      p {
        margin: 0;
        font-family: Inter;
        font-weight: 500;
        font-style: Medium;
        font-size: 12px;

        line-height: 16px;
        letter-spacing: 0%;
        text-decoration: line-through;
        color: #848688;
      }

      span {
        background-color: #dc0000;
        border-radius: 16px;
        font-family: Inter;
        font-weight: 600;
        font-style: Semi Bold;
        font-size: 11px;

        line-height: 16px;
        letter-spacing: -4%;
        text-transform: uppercase;
        padding: 0 4px;
        color: #fff;
        text-decoration: none;
      }
    }
    .new-price {
      font-family: Inter;
      font-weight: 600;
      font-style: Semi Bold;
      font-size: 16px;

      line-height: 20px;
      letter-spacing: -2%;

      color: #22242a;
      margin: 0;
    }
  }
}
</style>
