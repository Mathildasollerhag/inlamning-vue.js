<template>
  <div class="row row-cols-1 row-cols-md-4 my-5 mx-5">
      <ProductCard v-for="product in products" :key="product._id" :product="product" />
     
  </div>
</template>

<script>
import ProductCard from './ProductCard'
import { mapGetters, mapActions } from 'vuex'

export default {
    components: {
        ProductCard
    },
    created() {
        this.getProducts()
    },
    methods: {
        ...mapActions(['getProducts'])
    },
    computed: {
        ...mapGetters(['products'])
    }
}
</script>
