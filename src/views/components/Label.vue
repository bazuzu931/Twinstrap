<template>
  <div class="pb-12 ">

  		<!-- Label 1 -->
  		<!-- Start of Block -->
		<div id="label-1" class="mb-9">
			<div class="text-lg pb-3">Label 1</div>
			<div class="border border-gray-500 bg-gray-100 rounded-lg">

				<!-- Start of Live box -->
				<div id="live-example" class="px-4 py-8">
					<div class="flex">
		            	<div class="w-1/4 flex justify-between bg-gray-400 ">
							<div class="w-3/4  px-4 flex flex-column items-center">Categories</div>
							<div class="w-1/4  flex flex-column items-center justify-center">12</div>
		            	</div>
						<a class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap  rounded text-base leading-normal no-underline text-white  text-xs bg-teal-600 hover:bg-teal-700  py-2 px-4 ml-2 leading-tight" href="#" role="button">Create Category</a>
	            	</div>
				</div>
				<!-- End of Live box -->

				<!-- Copy button container -->
				<div id="copyButtonContainer" class="m-0 p-0 flex flex-row-reverse">
					<a href="#" class="inline-block align-middle text-center select-none  font-normal whitespace-no-wrap py-1 px-2  text-base leading-normal no-underline text-white  bg-teal-600 hover:bg-teal-700 " v-clipboard:copy="label_1" @click="copyIt">{{ copyTextStatus }}</a>
				</div>
				<!-- End of Copy button container -->

				<!-- Code box -->
				<div id="code-example">
					<prism>{{ label_1 }}</prism>
				</div>
				<!-- End of Code box -->

			</div>
		</div>
		<!-- End of Block -->





  </div>
</template>

<script>
export default {
  data() {
    return {
    	copyTextStatus: 'Copy',


label_1: `<div class="flex">
	<div class="w-1/4 flex justify-between bg-gray-400 ">
		<div class="w-3/4  px-4 flex flex-column items-center">Categories</div>
		<div class="w-1/4  flex flex-column items-center justify-center">12</div>
	</div>

	<a class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap  rounded text-base leading-normal no-underline text-white  text-xs bg-blue-500 hover:bg-blue-700  py-2 px-4 ml-2 leading-tight" href="#" role="button">Create Category</a>
</div>`,

label_2: `<article>
  <h1 class="title">How to Use Prism in a Vue/Nuxt Project</h1>
  <p>Go to https://www.yasminzy.com/tutorial/prism.html</p>
</article>`,

label_3: `<article>
  <h1 class="title">How to Use Prism in a Vue/Nuxt Project</h1>
  <p>Go to https://www.yasminzy.com/tutorial/prism.html</p>
</article>`,
    };
  },
  // End of Data
  methods: {
	copyIt() {
		this.copyTextStatus = 'Copied!'
	}
  }
};
</script>

<style>
	.language-markup {
		margin: 0 !important;
		border-radius: 0 0 7px 7px;
	}
</style>