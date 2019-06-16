<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->



    <div class="container mx-auto  py-16">

      <div class="p-4 flex flex-col">
        <div class="about   p-8 text-2xl">
            <p><span class="text-green-500 font-bold">Twinstrap</span> is extended set of Tailwindcss framework components and templates.</p>
            <br>
            <p class="text-green-500 font-bold">What is Tailwindcss?</p>
            <p>Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.</p>
            <p><a href="https://tailwindcss.com" class="text-green-500 hover:underline font-bold">Read more</a></p>
        </div>
        <div class="installation p-8 mt-2">
          <p class="text-xl my-2">Installation:</p>
          <div class="text-yellow-500 text-lg tracking-normal  bg-codecolor p-4">npm install twinstrap</div>
        </div>
      </div>

        <!-- <ul class=" font-bold  w-3/5">
          <li class="hover:text-gray-600  text-lg sm:text-2xl  mb-10 " v-for="post in $page.posts.edges" :key="post.id">
            <g-link :to="post.node.path">
              {{ post.node.title }}
            </g-link>
          </li>
        </ul> -->

    </div>



<!--
    <p class="home-links">
      <a href="https://gridsome.org/docs" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p> -->

  </Layout>
</template>

<page-query>
query Posts {
  posts: allPost {
    edges {
      node {
        id
        title
        path
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

.installation {
  word-spacing: 5px;
}
</style>
