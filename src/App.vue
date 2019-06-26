<template>
  <div id="app" >
    <!-- <div id="nav">
      <router-link to="/" class="bg-blue-600">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <main class="flex flex-col ">

      <!-- Top nav -->
      <div id="header">
        <div class="flex w-full fixed top-0 bg-teal-700 ">
          <div class="w-4/6 flex justify-between  mx-auto  py-2">


            <div class="logo flex  self-center ">
              <router-link to="/" class="flex">
                <img src="./assets/logo.png" class="flex w-15 h-9" alt="Twinstrap">
              </router-link>
            </div>


            <div class="up-menu flex self-center">

              <div class="components px-4 font-bold text-xl">
                <router-link to="/components/label" class="block text-white ">Components</router-link>
              </div>
              <div class="templates ml-9 px-4 font-bold text-xl">
                <router-link to="/templates/admin" class="block text-white ">Templates</router-link>
              </div>

            </div>
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


</style>
