<template>
  <div>
    <div class="flex w-5/6 xl:w-3/6 justify-center mx-auto">
      <div class="content">
        <h1 class="text-5xl mb-10">What is <span class="text-teal-500">Twinstrap</span>?</h1>
        <p class="text-xl">Twinstrap is a collecton of components and templates based on Tailwindcss framework</p>
        <a href="https://tailwindcss.com" class="text-base text-teal-500">Learn about Tailwindcss</a>
      </div>
    </div>



<!--     <prism>{{ html }}</prism>

    <prism language="js">
    	const me = {
		  name: "Yasmin ZY",
		  country: "Indonesia"
		}
	</prism>

    <prism language="scss">
    	.grid {
		  display: grid;
		  @media (min-width: 576px) {
		    grid-template-columns: 1fr 1fr;
		  }
		}
	</prism> -->

  </div>
</template>

<script>
export default {
  data() {
    return {
      html: `<article>
  <h1 class="title">How to Use Prism in a Vue/Nuxt Project</h1>
  <p>Go to https://www.yasminzy.com/tutorial/prism.html</p>
</article>`,
    };
  }
};
</script>

<style lang="scss" scoped>
pre:not(:last-of-type) {
  margin-bottom: 2rem;
}
</style>