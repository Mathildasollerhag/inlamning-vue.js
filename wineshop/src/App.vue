<template>
  <div>
    <Navbar />


    <div>
      <router-view/>
    </div>
    
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/navigation/Navbar'
import Footer from '@/components/navigation/Footer'

export default {
  name:  'App',
  components: {
    Navbar,
    Footer
  }
  
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');

html, body {
  font-family: 'Playfair Display', serif;
}

</style>
