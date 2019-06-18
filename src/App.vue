<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/" class="bg-blue-600">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <main class="flex flex-col h-screen ">

      <nav class="flex  border-b-2 border-teal-500 h-14 ">
        <div class="w-4/6 flex justify-between border- border-blue-600 mx-auto ">
          <div class="logo  self-center  p-4 ">
            <router-link to="/">
              <img src="./assets/logo.png" class="w-14 h-14" alt="Twinstrap">
            </router-link>
          </div>
          <div class="up-menu flex self-center">
            <div class="components p-4 font-bold text-xl">
              <a href="#" class="block text-gray-600 hover:text-teal-600">Components</a>
            </div>
            <div class="templates ml-9 p-4 font-bold text-xl">
              <a href="#" class="block text-gray-600 hover:text-teal-600">Templates</a>
            </div>
          </div>
        </div>
      </nav>

      <div class="mt-6  flex w-4/6 justify-between mx-auto">
        <nav class="left-navbar  w-1/5 flex p-6 ">
          <!--  Panel 1  -->
          <div class="text-gray-600">
            <input type="checkbox" name="panel" id="panel-1" class="hidden">
            <label for="panel-1" class="relative block  p-2  border-b  hover:text-black hover:border-green-500">
                <router-link to="/labels" class="block">Labels</router-link>
            </label>
            <div class="accordion__content overflow-hidden ">
              <ul class="accordion__body p-4" id="panel1">
                  <li class=""><a href="#" class="block p-3 hover:text-black">Label 1</a></li>
                  <li class=""><a href="#" class="block p-3 hover:text-black">Label 2</a></li>
                  <li class=""><a href="#" class="block p-3 hover:text-black">Label 3</a></li>
              </ul>
            </div>
          </div>

        </nav>


        <div class="content bg-red-500 w-4/5 p-6 h-screen">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium asperiores voluptatibus laborum molestias at aperiam et dolorum qui, quo quasi officia magni alias vitae nam delectus eos natus repudiandae cupiditate, non, laudantium maxime quidem saepe quia ea error! Excepturi debitis animi asperiores. Eveniet, quisquam. Impedit natus vel ipsam nisi soluta at, ad perferendis, earum consequuntur esse voluptate illo praesentium laborum hic veritatis aspernatur distinctio, ipsa dolorem asperiores, reprehenderit quidem dignissimos perspiciatis sapiente illum numquam. Nemo quis iusto et veritatis assumenda error nesciunt fugit fugiat incidunt, libero vero! Consequatur suscipit, tempora blanditiis repellat aspernatur minima incidunt dolor quos sint cum sit.</div>
      </div>

    </main>
    <router-view/>
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


.accordion__body>li>a {
  -webkit-transition:  .2s;
     -moz-transition:  .2s;
      -ms-transition:  .2s;
       -o-transition:  .2s;
          transition:  .2s;
}
.accordion__body>li>a:hover {
  padding-left: 15px;
  border-left: 2px solid #48bb78;

}
label {
  cursor: pointer;
}
label:after {
  content: '+';
  position: absolute;
  right: 1em;
  color: #fff;
}

input:checked + label:after {
  content: '-';
  line-height: .8em;
}

.accordion__content{
  max-height: 0em;
  transition: all 0.4s cubic-bezier(0.865, 0.14, 0.095, 0.87);
}
input[name='panel']:checked ~ .accordion__content {
  /* Get this as close to what height you expect */
  max-height: 50em;
}

</style>
