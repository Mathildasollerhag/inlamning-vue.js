<template>
<div class="height">
  <div class="container mt-5 py-5 z-depth-1">
    <section class="px-md-5 mx-md-5 dark-grey-text text-center text-lg-left">
      <div class="row">
        <div class="col-lg-6 mb-4 mb-lg-0 d-flex align-items-center justify-content-center">
          <img src="https://i.pinimg.com/474x/ef/3f/7b/ef3f7b6f767cea8d7fe0a5409a073022.jpg" class="img-fluid mr-5 rounded"/>
        </div>

        <div class="col-lg-6 mb-4 mb-lg-5">
          <h1 class="font-weight-bold text-dark">Welcome, winelover!</h1>

          <p class="font-weight-bold py-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, hic.</p>

          <p class="text-muted mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis provident architecto dolores atque veritatis ipsam quasi amet, distinctio iure sunt dolorem rem molestias exercitationem ea placeat, impedit modi neque totam alias earum aliquid! Distinctio dicta, tempore doloribus vel facilis amet necessitatibus, obcaecati minima incidunt tenetur sapiente, exercitationem voluptas porro velit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quo error quidem accusamus? Vitae, veritatis architecto? Expedita soluta saepe deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, magnam?</p>

          <router-link class="font-weight-bold pink-text h4" to="/products">Take me to the jesus juice<i class="fas fa-arrow-circle-right ml-2"></i></router-link>
        </div>
      </div>
    </section>
  </div>
</div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
.height {
  height: 76vh;
}
</style>

