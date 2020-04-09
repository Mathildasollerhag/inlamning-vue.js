import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
    products: [],
    product: null
  },
  mutations: {
    GET_PRODUCTS(state, data) {
      state.products = data
    },
    GET_PRODUCT_BYID(state, product) {
      state.product = product
    },
    ADD_TO_CART(state, {product, quantity}) {
      let exists = state.cart.find(item => { return item.product.id === product.id })
      if(exists) {
        exists.quantity += quantity
        return
      }
      state.cart.push({product, quantity})
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    DELETE_FROM_CART(state, id) {
      state.cart = state.cart.filter(item => { return item.product.id !== id})
      localStorage.setItem('cart', JSON.stringify(state.cart))
    }

  },
  actions: {
    getProducts({commit}) {
      axios.get('http://localhost:8888/api/products/getproducts')
      .then(res => {
        if(res.status === 200) {
          commit('GET_PRODUCTS', res.data)
        }
      })
    },
    getProductById({commit}, id) {
      axios.get('http://localhost:8888/api/products/' + id)
      .then(res => {
        if(res.status === 200) {
          commit('GET_PRODUCT_BYID', res.data)
        }
      })
    },
    addProductToCart({commit}, { product, quantity }) {
      commit('ADD_TO_CART', { product, quantity })
    },
    deleteProductFromCart({commit}, id) {
      commit('DELETE_FROM_CART', id)
    }
  },
  getters: {
    products: state => state.products,
    product: state => state.product,
    shoppingCart(state) {
      let cart = JSON.parse(sessionStorage.getItem('cart'))
      return state.cart
      // if(state.cart.length < 1){
      //   if(state.cart !== null) {
      //     state.cart = cart
      //   }
      // }
    },
    shoppingCartTotal(state) {
      let total = 0
      if(state.cart.length !== 0) {
        state.cart.forEach(item => {
          total += item.product.price * item.quantity
        })
      }    
      return total
    },
    shoppingCartItemCount(state) {
      let items = 0
      state.cart.forEach(item => {
        items += item.quantity
      }) 
      return items
    }, 
  }
})
