<template>
	<!-- Main content -->
	<div class="mt-6  flex w-4/6 justify-between mx-auto ">


	    <nav class="left-navbar  w-1/5 flex flex-col p-6 ">
	      	<ul>

			    <!--  Panel 1 [Label]  -->
	            <li class="" :key="1">
	                <router-link to="/components/label" class="flex block text-gray-600 hover:text-black p-2" @click.native="contentVisible === 1 ? contentVisible = false : contentVisible = 1">Label</router-link>
	                <div class="" v-if='contentVisible === 1'>
		                <li class=""><a href="#" class="flex block text-gray-600  hover:text-black pl-7 p-3">Label 1</a></li>
		                <li class=""><a href="#" class="flex block text-gray-600  hover:text-black pl-7 p-3">Label 2</a></li>
		                <li class=""><a href="#" class="flex block text-gray-600  hover:text-black pl-7 p-3">Label 3</a></li>
	                </div>
	            </li>

	            <!--  Panel 2 [Button]  -->
	            <li class="" :key="2">
	                <router-link to="/components/button" class="flex block text-gray-600 hover:text-black  p-2" @click.native="contentVisible === 2 ? contentVisible = false : contentVisible = 2">Button</router-link>
	                <div class="" v-if='contentVisible === 2'>
		                <li class=""><a href="#" class="flex block text-gray-600  hover:text-black pl-7 p-3">Button 1</a></li>
		                <li class=""><a href="#" class="flex block text-gray-600  hover:text-black pl-7 p-3">Button 2</a></li>
		                <li class=""><a href="#" class="flex block text-gray-600  hover:text-black pl-7 p-3">Button 3</a></li>
	                </div>
	            </li>

	        </ul>
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

</style>
