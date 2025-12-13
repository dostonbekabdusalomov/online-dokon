import { defineStore } from 'pinia'

export const useWishlistStore = defineStore('wishlist', {
  state: () => ({
    wishlist: []
  }),

  getters: {
    wishListCount: state => state.wishlist.length,
    isInWishlist: state => id => state.wishlist.some(item => item.id === id)
  },

  actions: {
    toggleWishlist (item) {
      const index = this.wishlist.findIndex(i => i.id === item.id)

      if (index === -1) {
        this.wishlist.push(item)
      } else {
        this.wishlist.splice(index, 1)
      }
    }
  },

  persist: true
})
