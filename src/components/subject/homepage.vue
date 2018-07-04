<template>
	<div id="homepage">
	  <div class="lunb"> 
		<div class="swiper-container">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide"><img src="../../assets/1.jpg"/></div>
		        <div class="swiper-slide"><img src="../../assets/2.jpg"/></div>
		        <div class="swiper-slide"><img src="../../assets/3.jpg"/></div>
		        <div class="swiper-slide"><img src="../../assets/4.jpg"/></div>
		        <div class="swiper-slide"><img src="../../assets/5.jpg" /></div>
		    </div>
		    <!-- 如果需要分页器 -->
		    <div class="swiper-pagination"></div> 
	    </div>
	    <div class="table">
	    	<div class="seach"></div>
	    </div>
	  </div>
	  <div class="lover">
	 	<div class="xin">
	 		<div class="xin-left">
	 			<div class="love"></div>
	 			<a href="">登录</a>
	 			<span>展示你的个性化内容</span>
	 		</div>
	 	</div>
	 </div>
	  <div class="shoufengqin">
	  	<accordion></accordion>
	  </div>
	  <div class="details">
	  	<detailsmiddle></detailsmiddle>
	  </div>
	  <div class="offer">
	  	<special></special>
	  </div>
	  <div class="tra">
	  	<trave></trave>
	  </div>
	  <div class="animate">
	  	<ul class="animate_middel">
	  		<li>
	  			<div class="ei1 ei"></div>
	  			<span>全国110万家酒店</span>
	  		</li>
	  		<li>
	  			<div class="ei2 ei"></div>
	  			<span>订酒店返现金高达20%</span>
	  		</li>
	  		<li>
	  		   <div class="ei3 ei"></div>
	  			<span>国际酒店8折起</span>
	  		</li>
	  		<li>
	  		   <div class="ei4 ei"></div>
	           <span>7×24小时服务</span>
	  		</li>
	  	</ul>
	  </div>
	  <div class="weibu">
	  	<footers></footers>
	  </div>
	  <div class="complete">
	  	<ul>
	  		<li></li>
	  	</ul>
	  </div>
	</div>
</template>

<script>

    import accordion from '@/components/accordion'
    import detailsmiddle from '@/components/detailsmiddle'
    import special from '@/components/special'
    import trave  from '@/components/trave'
    import footers  from '@/components/footers'
	export default{
		components:{
			"accordion":accordion,
			"detailsmiddle":detailsmiddle,
			"special":special,
			"trave":trave,
			"footers":footers
		},	
		mounted(){
			$(function(){
				var mySwiper = new Swiper ('.swiper-container', {
					effect:'fade',
					autoplay: {
						delay: 1000,
						disableOnInteraction: false,
				    },

				    direction: 'horizontal',
				    loop: true,
				   
				    
				    // 如果需要分页器
				    pagination: {
				      el: '.swiper-pagination',
				      clickable:true,
				    },
				    
				    // 如果需要前进后退按钮
				    navigation: {
				      nextEl: '.swiper-button-next',
				      prevEl: '.swiper-button-prev',
				    },
                })  
			})
		}
	}
</script>

<style>
	#homepage{
		width: 100%;
		height:100%;
	/*	font-size: 50px;*/
	}
	.lunb{
		width:100%;
		height:380px;
		position: relative;
	}
	.swiper-container {
	    width:100%;
	    height:380px;
	   
	} 
	.swiper-slide img{
		width: 100%;
		height: 100%;   
	}
	.table{
		width: 1200px;
		height: 300px;
		/*background: yellow;*/
		position: absolute;
		top:35px;
		left:76px ;
		z-index: 100;
	}
	.seach{
		width: 600px;
		height: 300px;
		background: #FFFFFF;
		float: left;
	}
	.lover{
		margin-top:20px ;
		width: 100%;
		height: 32px;
	/*	background: pink;*/
		line-height: 32px;
	}
	.xin{
		width: 1200px;
		height:32px;
		margin: 0 auto;
		/*background: skyblue;*/
	}
	.xin-left{
		width: 215px;
		height:32px;
		border-radius:20px;
		border:1px solid #555;
	}
	.love{
		width: 25px;
		height:25px ;
		background-image: url('../../assets/lover.png');	
		background-size: 100%;
		text-align: center;
		float: left;
		margin-left: 10px;
		margin-top: 5px;
	}
	.xin-left a{
		color: cornflowerblue;
		margin-left: 10px;
	}
	.xin-left a:hover{
		color: red;
	}
	.shoufengqin{
		width:100% ;
		height:260px ;
		margin-top: 20px;
		margin-bottom: 20px;
		/*background: blue;*/
	}
	.details{
		width: 100%;
		height:600px;
		/*background:pink ;*/
	}
	.offer{
		width: 100%;
		height: 372px;
		/*background: pink;*/
		float: left;
		margin-top: 15px;
	}
	.tra{
		width: 100%;
		height: 284px;
		/*background: pink;*/
		float: left;
		margin-top: 20px;
	}
    .animate{
    	width:100%;
    	height :100px;
    	/*background: pink;*/
    	float: left;
    	/*border-bottom: 1px solid #e5e5e5;*/
    	margin-bottom: 20px;
    }
    .animate_middel{
    	width: 1160px;
    	height: 60px;
    	background: #f7f7f7;
    	margin: auto;
    	padding:20px;
    	border-bottom: 1px solid #e5e5e5;
    }
    .animate_middel li{
    	width: 290px;
    	height: 60px;
    	float: left;  	
    }
    .ei{
    	width:60px;
    	height: 60px;
    	float: left;
    	/*margin: 0 10px 0 0;*/
    }
    .ei1{
    	background: url(../../assets/icon_index.png) no-repeat center;
    	background-position: -91px -4px;
    }
    .ei2{
    	/*width:150px ;*/
    	background: url(../../assets/icon_index.png) no-repeat center;
    	background-position: -159px -4px;
    }
    .ei3{
    	background: url(../../assets/icon_index.png) no-repeat center;
    	background-position: -228px -4px;
    }
    .ei4{
    	background: url(../../assets/icon_index.png) no-repeat center;
    	background-position: -295px -4px;
    }
    .animate_middel span{
    	width:180px ;
    	float:left;
        margin-left:70px ;
    	font-size: 16px;
    	color: #555;
    	margin-top: -40px;
    }
    .animate_middel li:hover .ei{				
						animation:haha 0.5s  infinite;
				}
	@keyframes haha{
		from{
			transform: rotate(0deg);
		}
		30%{
			transform: rotate(-10deg);
		}
		70%{
			transform: rotate(10deg);
		}
		to{
			transform: rotate(0deg);
		}
	}
	.weibu{
		width:100%;
		height:293px;
		float: left;
		margin-top: 10px;
		border-top: 1px solid #e5e5e5;
	}
    .complete{
    	width: 100%;
    	height:40px;
    	float: left;
    	background: #7c8fa2;
    }
</style>