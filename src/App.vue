<template>
  <div id="app" >
    <!-- <div id="nav">
      <router-link to="/" class="bg-blue-600">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <main class="flex flex-col ">




      <!-- Top nav -->
      <nav class="bg-solar-600 p-2 mt-0 fixed w-full z-10 top-0">
        <div class="container mx-auto flex flex-wrap items-center">

          <!-- Logo -->
          <div class="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
              <router-link to="/" class="flex">
                <img src="./assets/logo.png" class="hidden md:flex w-11 h-8" alt="Twinstrap">
                <span class="hidden md:flex self-center text-3xl pl-4 text-white font-bold ">Twinstrap</span>
              </router-link>
          </div>
          <!-- End of logo -->

        <!-- Top navbar items -->
        <div class="flex w-full sm:w-4/6 sm:m-auto pt-2 content-center justify-between md:w-1/2 md:justify-end">
          <ul class="list-reset flex justify-between flex-1 md:flex-none items-center">

            <li class="mr-3 sm:mr-10">
              <router-link to="/" class="block text-white my-3 sm:my-0 ">Home</router-link>
            </li>

            <li class="mr-3 sm:mr-10">
              <router-link to="/components/label" class="block text-white my-3 sm:my-0 ">Components</router-link>
            </li>

            <li class=" ">
              <router-link to="/templates" class="block text-white  my-3 sm:my-0 ">Template</router-link>
            </li>

          </ul>
        </div>
        <!-- End of top navbar items -->

      </div>
      </nav>
      <!-- End of Top nav -->


      <div class="main-body mt-13 " >
        <router-view/>
      </div>



    </main>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        menuStatus: false,
        closeMenuStyle: {
          backgroundColor: 'transparent',
          display: 'none'
        }
      }
    },

  }
</script>



<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;

}

// чтобы элементы не смещались при появлении общего вертикального скрола
::-webkit-scrollbar {
display: none;
}

.openMenu {
  color: red ;
}

.closeMenu {
  color: red ;
}

</style>
