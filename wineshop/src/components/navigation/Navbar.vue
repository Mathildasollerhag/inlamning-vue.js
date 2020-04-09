<template>
  <!--Navbar -->
<nav class="py-3 px-5 navbar navbar-expand-lg navbar-dark blue-grey darken-4">
  <router-link class="navbar-brand" to="/"><i class="fas fa-wine-glass-alt fa-3x pink-text"></i></router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
    aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent-333">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item px-2 h5">
        <router-link class="nav-link" to="/products">Products</router-link>
      </li>

      <li class="nav-item px-2 h5">
        <router-link class="nav-link" to="/login">My Account</router-link>
      </li>

      <li class="nav-item px-2 h5">
        <router-link class="nav-link" to="/register">Register</router-link>
      </li>

    </ul>
    <ul class="navbar-nav ml-auto nav-flex-icons">
    
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
           {{shoppingCartItemCount}}<i class="fas fa-shopping-cart"></i>
        </a>
        <div class="dropdown-menu dropdown-menu-right z-depth-2 shopping-cart">
          <ShoppingCart />
        </div>
      </li>

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          <i class="fas fa-user"></i>
        </a>
        <div class="dropdown-menu dropdown-menu-right">
          <UserSettings />
        </div>
      </li>
    </ul>
  </div>
</nav>
<!--/.Navbar -->
</template>

<script>
import ShoppingCart from '../shoppingcart/ShoppingCart'
import UserSettings from '../user/UserSettings'
import { mapGetters } from 'vuex'

export default {
  name: 'Navbar', 
  components: {
    ShoppingCart,
    UserSettings
  },
  computed: {
    ...mapGetters(['shoppingCartItemCount'])
  }
}
</script>

<style scoped>
  .shopping-cart {
    min-width: 450px;
}
</style>