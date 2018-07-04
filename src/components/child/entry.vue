<template>
	<div id="signin">
	 <div class="header"></div>	
	 <div class="logo-middle">
	 	<div class="pic"></div>
	 	<div class="message">
	 		<div class="info"></div>
	 	</div>
	 </div>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style>
	#signin{
		width: 100%;
		height: 626px;
		background: #e8eff6;
	}
	.header{
		width:100% ;
		height:100px ;
		/*background: red;*/
	}
	.logo-middle{
		width:1000px ;
		height: 350px;
		background: skyblue;
		margin: auto;
	}
	.pic{
		width: 620px;
		height: 350px;
		background: url(../../assets/tab/login_banner.jpg) no-repeat center;
		float: left;
	}
	.message{
		width:375px;
		height: 346px;
		/*background: green;*/
		float: right;
	}
	.info{
		width:285px ;
		height: 322px;
		margin-top: 24px;
		margin-left: 45px;
		background: red;
	}
</style>