<template>
	<!-- Main content -->
	<div class="flex w-4/6 justify-between mx-auto ">


	    <nav class="left-navbar w-1/5 flex flex-col  ">
	      	<div class="">
	      		<ul class="h-screen fixed overflow-y-auto pr-12 pb-16">

				    <!--  Panel 1 [Label]  -->
		            <li class="" :key="1">
		                <router-link to="/templates/admin" class="flex block text-gray-600 hover:text-black p-2" @click.native="contentVisible === 1 ? contentVisible = false : contentVisible = 1">Admin</router-link>
		                <!-- <div class="" v-if='contentVisible === 1'>
			                <li class=""><a href="#label-1" class="flex block text-gray-600  hover:text-black pl-7 p-3">Label 1</a></li>
			                <li class=""><a href="#label-2" class="flex block text-gray-600  hover:text-black pl-7 p-3">Label 2</a></li>
			                <li class=""><a href="#label-3" class="flex block text-gray-600  hover:text-black pl-7 p-3">Label 3</a></li>
		                </div> -->
		            </li>

		            <!--  Panel 2 [Button]  -->
		            <li class="" :key="2">
		                <router-link to="/templates/simple-blog-page" class="flex block text-gray-600 hover:text-black p-2" @click.native="contentVisible === 2 ? contentVisible = false : contentVisible = 2">Simple Blog Page</router-link>
		            </li>
		        </ul>
	      	</div>
	    </nav>
	    <!-- End of Left nav -->


	    <div class="content w-4/5 p-4">
	        <router-view/>
	    </div>
	    <!-- End of content -->

	</div>
	<!-- End  of Main content -->
</template>