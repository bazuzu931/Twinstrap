<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/" class="bg-blue-600">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <main class="flex flex-col h-screen ">

      <!-- Top nav -->
      <nav class="flex  border-b-2 border-teal-500 h-13 ">
        <div class="w-4/6 flex justify-between border- border-blue-600 mx-auto ">


          <div class="logo  self-center  p-4 ">
            <router-link to="/">
              <img src="./assets/logo.png" class="w-14 h-14" alt="Twinstrap">
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
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>
