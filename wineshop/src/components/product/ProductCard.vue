<template>
  
  <div class="col mb-4">

    <div class="card text-center">
        <div class="view overlay d-flex justify-content-center">
        <img class="card-img-top img-fluid img-size" :src="product.image" alt="Product Image">
        <router-link :to="{name: 'Product', params: {id: product._id}}">
          <div class="mask rgba-white-slight"></div>
        </router-link>
    </div>

        <div class="card-body">
            <h4 class="card-title">{{ product.name }}</h4>
                <p class="card-text">{{ product.short }}</p>
                <h6>{{ product.price }} SEK</h6>
            <router-link :to="{name: 'Product', params: {id: product._id}}" class="btn blue-grey darken-4 text-white">Show product</router-link>
        </div>

    </div>
  </div>
 </template>

<script>
export default {
    name: 'ProductCard',
    props: ['product']
}
</script>

<style scoped>
.img-size {
  width: 250px;
}
</style>
