<template>
  <div id="app">
    <main class="flex flex-col bg-gray-500 h-screen ">

      <nav class="flex  border-b border-green-500 h-10 ">
        <div class="w-4/6 flex justify-between border border-blue-600 mx-auto">
          <div class="logo">logo</div>
          <div class="up-menu flex border border-red-500">
            <div class="components">Components</div>
            <div class="templates">Templates</div>
          </div>
        </div>
      </nav>

      <div class="bg-green-200 mt-10 h-screen flex">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos nesciunt odit libero, accusamus animi minima eius dolores totam vitae, incidunt ducimus dolor numquam voluptatibus, voluptatem qui, consequatur itaque! Cumque veritatis inventore ullam obcaecati consequuntur explicabo alias! Ab totam laborum voluptas perferendis provident, culpa blanditiis ducimus, aliquam esse aperiam aut perspiciatis ipsam, eum molestias fugiat aspernatur. Dolor unde itaque, fuga quaerat eos quasi ex inventore, facere fugiat autem libero dolorum. Explicabo adipisci in, aspernatur. Saepe laborum delectus, explicabo a asperiores libero ullam beatae labore porro, sint magnam illo consequuntur officia ex quis sapiente deleniti facere possimus nostrum? Incidunt sapiente cupiditate, corporis!</div>

    </main>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import './assets/css/main.css'

export default {
  name: 'app',
  components: {
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
