<template>
	<div id="headers">
	  <div class="header-top">
	  	<div class="logo"></div>
	  	<div class="header-top-right">
	  	     <ul class="branch-left-menu">
				<li v-for="item in $router.options.routes" class='item'>
				  {{item.alisa}}
				<span>{{item.asa}}</span>
				</li>
				<li>
				   <select name="" class="select">
				   	<option value='English' selected="true">English</option>
					 <option value="">简体版</option> 
					 <option value="">繁体版</option>
				   </select>
				</li>
			 </ul>
        <div class="header-top-program3">
         <div class="img3"></div>
         <span class="service">7×24 客服电话</span>
         <span class="number">
         	4009-333-333
         	<div class="triangle"></div>
         </span>
         <div class="hover3">
         	<div id="onphone">
         		<span class="china">国内:4000-333-33</span>
         		<span>香港:852-8131-8883</span>
         		<span class="kong">:852-8131-8983</span>
         		<span class="outside">海外:86-10-6432-9999</span>
         	</div>
         </div>
        </div>
        <div class="header-top-program2">

         <div class="img2"></div>
         <span>手机版</span>
         <span>专享五折起</span>	
         <div class="hover2">
         	<div class="code"></div>
         	<em class="em1">手机专享价</em>
         	<em class="em2">专享五折起</em>
         	<em class="em1">随时订，随时查</em>
         </div>
        </div>
        <div class="header-top-program1">

         <div class="img1"></div>
         <span>小程序</span>
         <span>体验更轻盈</span>
         <div class="hover1">
         	<div class="code"></div>
         	<em class="em1">体验小程序</em>
         	<em class="em2">预订更轻盈</em>
         </div>
        </div>
        </div>
	  </div>
	  <div class="header-bottom">
	  <div class="header-bottom-middle">
	  		<ul class='list'>
	  			<li v-for="(item,index) in $router.options.routes">
	  				<span class='child_route' v-for="child in item.children">
	  					<router-link :to="{path:item.path+'/'+child.path}">
	  					 {{ child.tabs }}
	  					</router-link>
	  				</span>
	  			</li>
	  		</ul>
	  		<div class="sign">
	  			<router-link to="/entry" target="_blank"> 
	  			   <span>登录</span>
	  			</router-link>
	  			 |
	  			 <span>注册</span>
	  		</div>
	  	</div>
	  </div>
	  <!--<router-view></router-view>-->
	</div>
</template>
<script>
	export default{
		name:'headers',
		components:{},
		return:{
		}
	}
</script>

<style>
	#headers{
		width: 100%;
		height: 115px;
		background: #FFFFFF;
	}
	.header-top{
		width: 1200px;
		margin: auto;
		padding-top:12px ;
		/*background: pink;*/
		height: 62px;
	}
	.logo{
		width:130px ;
		height: 48px;
		background-image: url('../assets/icon201706.png') ;	
		background-repeat: no-repeat;
		background-position: -658px 0px  ;
		float: left;
    }
    .header-top-right{
    	width:960px ;
    	height:42px;
    	/*background: skyblue;*/
    	float: right;
    	margin-top: 5px;
    }
    .branch-left-menu{
    	width:230px ;
    	height:21px ;
    	float: left;
    	margin-right: 10px;
    	font-size: 12px;
    	line-height: 20px;
    	/*background: red;*/
    	position: relative;
    }
    .item{
    	float:left;
    	margin-left:10px;
    	color:lightslategray ;	
    }
    .item span{
    	margin-left: 2px;
    	color:lightslategray ;
    }
    .item:hover{
    	color: red;
    }
    .select{
    	margin-left: -128px;
    	 border: 0;
    	 float:right;
    	 margin-top: 3px;
    }
    .select:hover{
    	border: 1px solid lightgray;
        color: red;
    }
    .header-top-program1{
    	width:150px ;
    	height:42px ;
    	/*background: yellow;*/
    	float: right;
    	margin-left: 14px;
    }
    .img1{
    	width:42px ;
    	height:42px ;
    	background-image:url('../assets/icon201706.png') ;
    	background-repeat: no-repeat;
		background-position: -127px -763px  ;
		float: left;
    }
    .header-top-program1 span{
    	float: left;
    	color: #09bb07;
    	font-size: 14px;
    	margin-top: 3px;
    }
    .header-top-program2{
    	width:150px ;
    	height:42px ;
    	/*background: yellow;*/
    	float: right;
    	margin-left: 14px;
    }
    .img2{
    	width:42px ;
    	height:42px ;
    	background-image:url('../assets/icon201706.png') ;
    	background-repeat: no-repeat;
		background-position:0 -762px ;
		float: left;
    }
    .header-top-program2 span{
    	float: left;
    	color: #ff6a6a;
    	font-size: 14px;
    	margin-top: 3px;
    }
    .header-top-program3{
    	width:150px ;
     	height:42px ;
    	/*background: yellow;*/
    	float: right;
    	margin-left: 14px;
    }
    .number{
    	font-size: 15px;
    	color: #2064c8;
    	float: left;
    }
    .img3{
    	width:42px ;
    	height:42px ;
    	background-image:url('../assets/icon201706.png') ;
    	background-repeat: no-repeat;
		background-position:-42px -762px ;
		float: left;
    }
    .service{
    	float: left;
    	color: #999;
    	font-size: 14px;
    	margin-top: 3px;
    	float: left;
    }
    .triangle{
    	width: 9px;
    	height:8px ;
    	background: url('../assets/icon201706.png');
    	background-repeat: no-repeat;
		background-position:-378px -772px;
		float:right;
		margin-top: 5px;
    }
    .hover1{
    	width: 240px;
    	height:115px ;
    	background: #FFFFFF;
    	-webkit-box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    	margin-top:50px;
    	display: none;
    	z-index:100;
    	position: relative;
    }
    .header-top-program1:hover .hover1{
    	display:block;
    }
    .hover2{
    	width: 240px;
    	height:115px ;
    	background: #FFFFFF;
    	-webkit-box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    	margin-top:50px;
    	display: none;
    	position: relative;
    	z-index: 10;
    }
    .header-top-program2:hover .hover2{
    	display:block;
    }
    .hover3{
    	width:180px;
    	height:92px ;
    	background: #FFFFFF;
    	-webkit-box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    	margin-top:50px;
    	display: none;
    	position: relative;
    	z-index: 10;
    	
    }
    .header-top-program3:hover .hover3{
    	display:block;
    }
    .code{
    	width:92px ;
    	height: 110px;
    	line-height:92px ;
    	background: url('../assets/icon201706.png') no-repeat ;
    	background-position: -399px -175px  ;
    	float: left;
    	z-index: 100px;
    }
    .em1{
    	font-size: 16px;
    	color:lightgray ;
    	float: left;
    	margin-top: 20px;
    	margin-left: 20px;
    }
    .em2{
    	font-size: 20px;
        color: #09bb07;
        float: left;
        margin-top: 10px;
        margin-left: 20px;
    }
    .header-bottom{
    	width:100%;
    	height:40px;
    	background:#2064cb ;
    	margin-top: 1px;
    }
    .header-bottom-middle{
    	width: 1200px;
    	height: 40px;
    	/*background: red;*/
    	margin: auto;
    }
    .list{
    	width: 483px;
    	height: 40px;
    	float: left;
    }
    .list li{
    	height:40px;
    	line-height: 40px;
    	font-size: 14px;
    	float: left;
    }
    .list li span:hover{
    	background: #003679;
    }
    .list li span{
    	display: inline-block;
    	margin-left: 0px;
    	padding: 0 12px;
    	border: 0.5px solid #lightgray;
    	float: left;
    }
    .list li span a{
    	color:#ffffff;
    }
    .sign{
    	width:120px ;
    	height:40px ;
    	background:  #003679;
    	float: right;
    	line-height: 40px;
    	font-size:14px ;
    	color: #FFFFFF;
    }
    .sign span{
    	margin-right: 10px;
    	margin-left: 16px;
    }
    .sign span:hover{
    	color: gold;
    }
    #onphone{
    	width: 160px;
    	 vertical-align: middle;
    	 text-align: center;
    	 font-size: 15px;
    	 color: gray;
    	 margin:auto;
    }
    #onphone span{
    	float: left;
    	margin-top: 3px;
    }
    .china{
    	border-bottom: 1px dotted gray;
    }
    .kong{
    	border-bottom: 1px dotted gray;
    	margin-left: 30px;
    }
   

    
</style>