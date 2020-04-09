<template>
    <div class="container my-5 py-5 z-depth-1">

 
    <!--Section: Content-->
    <section class="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">


      <!--Grid row-->
      <div class="row d-flex justify-content-center mt-3">

        <!--Grid column-->
        <div class="col-md-6">

          <!-- Default form register -->
          <form class="text-center" action="#!">

            <p class="h4 mb-4 black-text">Sign up</p>

            <div class="form-row mb-4">
              <div class="col">
                <!-- First name -->
                <input type="text" id="defaultRegisterFormFirstName" class="form-control" placeholder="First name">
              </div>
              <div class="col">
                <!-- Last name -->
                <input type="text" id="defaultRegisterFormLastName" class="form-control" placeholder="Last name">
              </div>
            </div>

            <!-- E-mail -->
            <input type="email" id="defaultRegisterFormEmail" class="form-control mb-4" placeholder="E-mail">

            <!-- Password -->
            <input type="password" id="defaultRegisterFormPassword" class="form-control" placeholder="Password"
              aria-describedby="defaultRegisterFormPasswordHelpBlock">

            <!-- Newsletter -->
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="defaultRegisterFormNewsletter">
              <label class="custom-control-label" for="defaultRegisterFormNewsletter">Subscribe to our newsletter</label>
            </div>

            <!-- Sign up button -->
            <button class="btn blue-grey darken-3 white-text my-4 btn-block" type="submit">Sign in</button>

            <hr>

            <!-- Terms of service -->
            <p>By clicking</p>
              <em>'Sign up'</em> you agree to our
              <a href="" target="_blank">terms of service</a>

          </form>
          <!-- Default form register -->

        </div>
        <!--Grid column-->

      </div>
      <!--Grid row-->


    </section>
    <!--Section: Content-->


  </div>
</template>

<script>
export default {

}
</script>
