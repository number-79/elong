<template>
	<div class="ave">
		<div class="titlebox2">
	  	<h2><b><a href="">旅游指南</a></b></h2>
	  </div>
	     <div class="skiing">
	     	<div class="show_right">
	     		<ul class="right">
	     		 <li>
	     		 	<span>京郊民宿 吃热腾腾的火锅盆</span>
	     		 </li>
	     		 <li>
	     		 	<span>盘点江浙沪亲子酒店</span>
	     		 </li>
	     		 <li>
	     		 	<span>泸沽湖客栈的正确打开方式</span>
	     		 </li>
	     		 <li>
	     		 	<span>这个冬天 去惠斯勒滑雪</span>
	     		 </li>
	     		</ul>
	     		<ul class="left">
	     				<li><img src="../assets/traves/17121251.jpg"/></li>
	     				<li><img src="../assets/traves/17121252.jpg"/></li>
	     				<li><img src="../assets/traves/17121253.jpg"/></li>
	     				<li><img src="../assets/traves/17121254.jpg"/></li>
	     			</ul>
	     	</div>
	     	<div class="show_left">
	     	  <div class="Christmas">
	     	  	<router-link to="/Philippines" target="_blank"> 
	     		<div class="fei1 fei">
	     			<img src="../assets/traves/17121256.jpg"/>
	     			<div class="cover">
	     				<span><a href="">菲律宾 9大岛屿梦幻佳期</a></span>
	     			</div>
	     		</div>
	     		</router-link>
	     		<div class="fei2 fei">
	     			<img src="../assets/traves/17121255.jpg"/>
	     			<div class="cover">
	     				<span><a href="">今冬北京 圣诞情浓</a></span>
	     			</div>
	     		</div>
	     	  </div>
	     	</div>
	     </div>
	</div>
</template>

<script>
	export default{
      mounted(){
		$(function(){
       	  $('.left>li').hide()
       	  $('.right>li').mouseover(function(){
       	  	  var idx =$(this).index()
       	  	  $('.left>li').eq(idx).show().siblings().hide();
       	  })
       })
	}
}
</script>

<style>
	.ave{
		width: 1200px;
		height: 284px;
		/*background: skyblue;*/
		margin: auto;
	}
	.titlebox2{
		width: 100%;
		height:46px ;
		border-bottom: 2px solid #77cc11;
		position: relative;
	}
	h2{
		line-height: 44px;
		left: 0;
		position: absolute;
	}
	.titlebox2 a{
		color:#77cc11;
	}
	.skiing{
		width: 100%;
		float: left;
		height:212px ;
		/*background: yellow;*/
		padding-top:10px ;
	}
	.show_right{
		width: 520px;
		height:212px ;
		float: left;
		position: absolute;
	}
	.right{
		width: 220px;
		height:212px;
		/*background: pink;*/
		float: left;
	}
	.right li{
		width: 200px;
		height:53px;
		/*background: skyblue;*/
		padding: 0 10px;
		line-height: 53px;
		float: left;
		font-size: 16px;
	}
	.right li:hover{
		background:#77cc11 ;
	}
	.left img{
		width:360px ;
		height: 212px;
		position: absolute;
		padding-right:20px;
	}
	.Christmas{
		width: 600px;
		height: 212px;
	/*	background: green;*/
		float: right;
	}
	.fei1{
		width:290px;
		height: 212px;
		overflow: hidden;
		float: left;
	}
	.fei1 img{
		width: 338px;
		height: 180px;
		/*background: skyblue;*/
		float: left;	
		background-size: 100%;
		padding-right: 10px;
	}
	.fei2{
		width:290px;
		height: 212px;
		overflow: hidden;
		float: right;
	}
	.fei2 img{
		width: 338px;
		height: 180px;
		background: skyblue;
		float: left;	
		background-size: 100%;
		padding-right: 10px;
	}
	.cover{
		width: 290px;
		height: 40px;
		padding: 0 0 0 3px;
		background: #FFFFFF;
		float: left;
		margin-top: -10px;
		border-bottom: 2px solid gray;
	}
	.cover span{
		line-height: 40px;
	}
	.cover a{
		color: #4499FF ;
		font-size: 14px;
	}
	.cover a:hover{
		color: #f55;
	}
	.fei .cover:hover{
		border-bottom: 2px solid #77cc11;
	}
	
</style>