<template>
	  <!-- Main content -->
	  <div class="mt-6  flex w-4/6 justify-between mx-auto ">


	    <nav class="left-navbar  w-1/5 flex flex-col p-6 ">
	      	<ul>

			    <!--  Panel 1 [Label]  -->
	            <li class="" :key="1">
	                <router-link to="/components/label" class="flex block hover:border-teal-500 p-2" @click.native="contentVisible === 1 ? contentVisible = false : contentVisible = 1">Label</router-link>
	                <div class="" v-if='contentVisible === 1'>
		                <li class=""><a href="#" class="flex block text-gray-600  hover:text-black pl-8 p-2">Label 1</a></li>
		                <li class=""><a href="#" class="flex block text-gray-600  hover:text-black pl-8 p-2">Label 2</a></li>
		                <li class=""><a href="#" class="flex block text-gray-600  hover:text-black pl-8 p-2">Label 3</a></li>
	                </div>
	            </li>

	            <!--  Panel 2 [Button]  -->
	            <li class="" :key="2">
	                <router-link to="/components/button" class="flex block border-none hover:border-teal-500 p-2" @click.native="contentVisible === 2 ? contentVisible = false : contentVisible = 2">Button</router-link>
	                <div class="" v-if='contentVisible === 2'>
		                <li class=""><a href="#" class="block p-3 hover:text-black">Button 1</a></li>
		                <li class=""><a href="#" class="block p-3 hover:text-black">Button 2</a></li>
		                <li class=""><a href="#" class="block p-3 hover:text-black">Button 3</a></li>
	                </div>
	            </li>


	        </ul>

	      	<!--  Panel 2 [Button]  -->
			<!-- <div class="text-gray-600">
	            <input type="checkbox" name="panel" id="panel-2" class="hidden">
	            <label for="panel-2" class="relative block  border-b  hover:text-black hover:border-green-500">
	                <router-link to="/components/button" class="block border border-red-500" @click.native.prevent="active = !active">Buttons</router-link>
	            </label>
	            <div class="accordion__content" v-show="!active">
	              <ul class="accordion__body p-4" id="panel1">
	                  <li class=""><a href="#" class="block p-3 hover:text-black">Button 1</a></li>
	                  <li class=""><a href="#" class="block p-3 hover:text-black">Button 2</a></li>
	                  <li class=""><a href="#" class="block p-3 hover:text-black">Button 3</a></li>
	              </ul>
	            </div>
	        </div> -->

	    </nav>
	    <!-- End of Left nav -->


	    <div class="content bg-red-500 w-4/5 p-6 ">
	        <router-view/>
	    </div>
	    <!-- End of content -->

	  </div>
	  <!-- End  of Main content -->

</template>

<script>
export default {
	data() {
		return {
			contentVisible: false,
		}
	},

	methods: {

	}
}
</script>



<style lang="scss">
li>router-link {
	border-style: none;
}

</style>
