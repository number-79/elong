<template>
	<div id="a">{{num}}向B组件</div>
	
</template>

<script>
//	import eventBus from '../eventBus'
	export default{
		name:'a',
		data(){
			return{
				num:'1234'
			}
		},
		beforeCreate(){
			var that = this;
			this.Bus.$on('sentDate',function(msg){
				that.num = msg;
			})
		}
		
	}
</script>

<style>
</style>