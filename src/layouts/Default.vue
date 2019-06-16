<template>
  <div class=" font-sans  text-gray-800 leading-normal flex flex-col min-h-screen border-t-8  border-black">


    <header class="border border-green-700">
      <!-- <strong>
        <g-link to="/">{{ $static.metaData.siteName }}</g-link>
      </strong> -->
      <nav class="container mx-auto flex justify-between items-center py-8">

        <a href="/" class="font-bold text-2xl text-green-700">Twinstrap</a>

        <ul class="uppercase text-sm sm:text-lg  font-bold flex  ">
          <li class="mr-8"><a href="/compon" class=" hover:text-green-500">Components</a></li>
          <li class="mr-8"><a href="/templ" class=" hover:text-green-500">Templates</a></li>
        </ul>
        <!-- <g-link class="nav__link" to="/">Home</g-link> -->
        <!-- <g-link class="nav__link" to="/about">About</g-link> -->
      </nav>
    </header>


    <div class="flex-grow  ">
      <slot/>
    </div>


<!--     <footer class="bg-green-700 text-white">
      <div class="container mx-auto flex items-center justify-between py-3 sm:py-5 text-xs sm:text-lg">
        <div>Copyright 2019. All rights reserved</div>
        <ul class="flex items-center">

          <li class=" ">
            <a href="/">Twinstrap</a>
          </li>

        </ul>
      </div>
    </footer> -->


  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style src="../main.css" />