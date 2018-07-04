<template>
	<div id="first">
       <headers></headers>
       <section>
           <router-view></router-view>
       </section>
	</div>
</template>

<script>
	import headers from "@/components/headers"
	export default{
		name:'contents',
		components:{
			"headers":headers
		},		
		data(){
			return {
	
			}
		},
	}
</script>

<style>
	#first{
		/*background: red;*/
		width: 100%;
		height:2560px;
		z-index: 5;
	}
</style>