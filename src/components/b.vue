<template>
	<div>
		<button @click='btn'>向父组件传数据</button>
		父组件传过来的值：{{msg}}
	</div>
</template>

<script>
	export default{
		name:'b',
		props:['msg'],
		methods:{
			btn(){
				this.$emit('sendTo','我是子组件')
			}
		}
	}
</script>
<style>
</style>
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	<!--
	<template>
		<button @click="btn"></button>
	</template>
	<script>
		export default{
			name:'b',
			methods:{
				btn(){
					this.$emit('sendTo','我是子组件')
				}
			}
		}
		
	</script>
	<style>
		
	</style>
-->