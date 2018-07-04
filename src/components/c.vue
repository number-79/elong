<template>
	<div id="c">{{num}}
	   <button @click='toAview'>点击</button></div>
</template>

<script>
//	import eventBus from '../eventBus'
	export default{
		name:'c',
		data(){
			return{
				num:'0000'
			}
		},
		methods:{
			toAview(){
				this.$router.push({
					path:'./a'
				})
			}
		},
		destoryed(){
			this.Bus.$emit('sendDate',this.num)
		}
	}
</script>

<style>
</style>