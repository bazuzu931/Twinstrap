<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/" class="bg-blue-600">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <main class="flex flex-col ">

      <!-- Top nav -->
      <nav class="flex  border-b-2 border-teal-500  ">
        <div class="w-4/6 flex justify-between  mx-auto ">


          <div class="logo flex  self-center ">
            <router-link to="/" class="flex">
              <img src="./assets/logo.png" class="flex w-13 h-13" alt="Twinstrap">
            </router-link>
          </div>


          <div class="up-menu flex self-center">

            <div class="components p-4 font-bold text-xl">
              <router-link to="/components/label" class="block text-gray-600 hover:text-teal-600">Components</router-link>
            </div>
            <div class="templates ml-9 p-4 font-bold text-xl">
              <router-link to="/templates" class="block text-gray-600 hover:text-teal-600">Templates</router-link>
            </div>

          </div>
        </div>
      </nav>
      <!-- End of Top nav -->


      <router-view/>



    </main>

  </div>
</template>



<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
