<template>
	<!-- Main content -->
	<div class="mt-6  flex w-4/6 justify-between mx-auto ">


	    <nav class="left-navbar  w-1/5 flex flex-col p-6 ">
	      	<ul>
			    <!--  Panel 1 [Label]  -->
	            <li class="">
	                <router-link to="/templates/admin" class="flex block text-gray-600 hover:text-black p-2">Admin</router-link>
	            </li>

	            <!--  Panel 2 [Button]  -->
	            <li class="">
	                <router-link to="/templates/simple-blog-page" class="flex block text-gray-600 hover:text-black p-2">Simple Blog page</router-link>
	            </li>

	        </ul>
	    </nav>
	    <!-- End of Left nav -->


	    <div class="content bg-red-500 w-4/5 p-4 ">
	        <router-view/>
	    </div>
	    <!-- End of content -->

	</div>
	<!-- End  of Main content -->
</template>