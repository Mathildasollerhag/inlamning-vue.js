<template>
<div  v-if="product">
    <div class="container my-5 py-2 z-depth-1">


  <!--Section: Content-->
  <section class="text-center">

    <!-- Section heading -->
    <h2 class="font-weight-bold mt-5">Product Details</h2>

  	<div class="row">

      <!--Grid column-->
      <div class="col-md-12">
        <!--News card-->
        <div>
          <div class="card-body">
            <div class="row h-100 d-flex align-items-center">
              <div class="col-lg-6">
                <h3 class="ml-3 mb-5">{{ product.name }}</h3>
                <p class="text-muted font-weight-light ml-3 mb-5">{{ product.desc }}</p>
                
                <div class="d-flex justify-content-between ml-3">
                  <div class="text-center">
                    <h4 class="mb-2 ml-5">{{ product.price }} SEK</h4>
                  	<small class="grey-text ml-5">Free shipping</small>
                  </div>
                  <button type="button" class="btn blue-grey darken-4 mx-5 px-5 text-white" v-on:click="addProductToCart({product, quantity})">Purchase</button>
                </div>
              </div>
              <div class="col-lg-6">
                <!--Image Wrapper-->
                <div class="carousel slide carousel-thumbnails">

                  <div class="carousel-inner text-center text-md-left">
                    <div>
                      <img :src="product.image" alt="Product Image" class="img-fluid img-size ml-5">
                    </div>

                  </div>
                </div>
               </div>

            </div>
          </div>
        </div>
      </div>
      <!--Grid column-->
    </div>
  </section>
</div>
</div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Product',
  props: ['id'],
  data() {
    return {
      quantity: 1
    }
  },
  methods: {
    ...mapActions(['getProductById', 'addProductToCart'])
  },
  created() {
    this.getProductById(this.id)
  },
  computed: {
    ...mapGetters(['product'])
  }
}
</script>

<style scoped>
.img-size {
  width: 300px;
}
</style>


