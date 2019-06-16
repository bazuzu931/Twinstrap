<template>
  <div class="layout font-sans  text-gray-800 leading-normal">
    <header class="container  flex  flex-row-reverse  py-8">
      <!-- <strong>
        <g-link to="/">{{ $static.metaData.siteName }}</g-link>
      </strong> -->
      <!-- <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about">About</g-link>
      </nav> -->
      <ul class="uppercase tracking-wide  flex items-center">
        <li class=""><a href="/" class="text-gray-800 hover:text-gray-600 text-base">На главную</a></li>
        <!-- <li class="mr-8"><a href="/about" class="text-gray-800 hover:text-gray-600">About</a></li> -->
      </ul>

    </header>
    <div class="post-body pt-6">
      <div class="page-title text-2xl sm:text-3xl ">{{ $page.post.title }}</div>
      <slot />
    </div>
  </div>
</template>

<page-query>
  query {
    post {
      title
  }
}
</page-query>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style>

@import url('https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/3.0.1/github-markdown.min.css');

body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}

.markdown-body {
  font-size: 1.3rem;
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px;
}

@media (max-width: 767px) {
  .markdown-body {
    font-size: 1rem;
    padding: 15px;
  }
}
</style>
