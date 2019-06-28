<template>
  <div id="app" style="background-color: green" >
    <!-- <div id="nav">
      <router-link to="/" class="bg-blue-600">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <main class="flex flex-col ">

      <!-- Top nav -->
      <div id="header">
        <div class="flex w-full fixed top-0 bg-teal-700 z-50">
          <div class="w-full lg:w-5/6 xl:w-4/6 flex justify-between  mx-auto  py-2">

            <!-- Logo -->
            <div class="logo flex  self-center ml-6 lg:ml-0">
              <router-link to="/" class="flex">
                <img src="./assets/logo.png" class="hidden md:flex w-11 h-8" alt="Twinstrap">
                <span class="hidden md:flex self-center text-3xl pl-4 text-white font-bold ">Twinstrap</span>
              </router-link>
            </div>
            <!-- End of Logo -->

            <!-- Top menu items -->
            <div class="flex flex-col  sm:flex-row  h-screen sm:h-full justify-center self-center mr-6 lg:mr-0 "
            :style="[ menuStatus ? '' : {height: '60px'} ]" >

                <!-- responsive menu Icon -->
                <font-awesome-icon  class="sm:hidden absolute top-0 right-0 mt-6 mr-6 text-4xl text-white" @click="menuStatus = !menuStatus"
                icon="bars" />

                <div class=" px-2 xl:px-4 font-bold text-3xl sm:text-xl self-center">
                  <router-link to="/components/label" class="block text-white my-9 sm:my-0 "
                  :style="[ menuStatus ? '' : closeMenuStyle ]" >Components</router-link>
                </div>

                <div class="  ml-5 xl:ml-9  px-2 xl:px-4 font-bold text-3xl sm:text-xl self-center">
                  <router-link to="/templates/admin" class="block text-white my-9 sm:my-0 "
                  :style="[ menuStatus ? '' : closeMenuStyle ]" >Templates</router-link>
                </div>
            </div>
            <!-- End of top menu items -->

          </div>
        </div>
      </div>
      <!-- End of Top nav -->


      <div class="main-body mt-13 ">
        <router-view/>
      </div>



    </main>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        menuStatus: true,
        closeMenuStyle: {
          backgroundColor: 'transparent',
          display: 'hidden'
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
