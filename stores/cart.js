import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),

  getters: {
    cartCount: state => state.items.length
  },

  actions: {
    addToCart (product) {
      this.items.push(product)
    }
  }
})
