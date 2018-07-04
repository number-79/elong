<template>
	<div class="fei_ye">
	  <div class="fei-header">
	     <div class="fei-header-middle">
	        <div class="trave-logo"></div>
	        <ul class="compass">
	           <li class="blue">旅游指南</li>
	        	<li v-for="item in lis" >
	        		<span><img src="../../assets/trave-logo/line.jpg"/></span>
	        	  {{item.name}}	
	        	 
			  	</li> 
			  	
	        </ul>
	     </div>
	  </div>	
	  <div class="tu"></div>
	  <div class="section1">
	  	<div class="hotel f1">
	  		<div class="hotel_img">
	  			<img src="../../assets/trave-logo/1BE.jpg" alt="" />
	  		</div>
	  		<div class="div-box">
	  		 <div class="div-num">
	  			<p>Hotel</p>
	  			<i>1</i>
	  		 </div>
	  		</div>
	  	    <div class="hotel-titel">
	  	    	<i>薄荷岛海滩俱乐部酒店度假村</i>
	  	    </div>
	  	    <div class="wen">
	  	    	<span>
	  	    		住在这里，你一定能体验到薄荷岛的独特魅力。可以在岛上最受欢
	  	    		迎的景点，巧克力山下尝尝当地特产——花生巧克力；也
	  	    		可以去眼镜猴参观中心去看看这座岛上独有的小可爱；也可以在酒店私人海滩区，
	  	    		享受皮划艇和帆板等水上活动。
	  	    	</span>
	  	    </div>
	  	    <p class="p1">Bo. Bolod, Island of Panglao, Bohol, Philippines</p>
	  	    <i class="i1">薄荷岛海滩俱乐部 AlonaPalmBeachResort 阿罗娜海滩 </i>
	  	</div>
	  	<div class="hotel f1">
	  		<div class="hotel_img">
	  			<img src="../../assets/trave-logo/1lOb.jpg" alt="" />
	  		</div>
	  		<div class="div-box">
	  		 <div class="div-num">
	  			<p>Hotel</p>
	  			<i>2</i>
	  		 </div>
	  		</div>
	  	    <div class="hotel-titel">
	  	    	<i>薄荷岛海滩俱乐部酒店度假村</i>
	  	    </div>
	  	    <div class="wen">
	  	    	<span>
	  	    		住在这里，你一定能体验到薄荷岛的独特魅力。可以在岛上最受欢
	  	    		迎的景点，巧克力山下尝尝当地特产——花生巧克力；也
	  	    		可以去眼镜猴参观中心去看看这座岛上独有的小可爱；也可以在酒店私人海滩区，
	  	    		享受皮划艇和帆板等水上活动。
	  	    	</span>
	  	    </div>
	  	    <p class="p1">Bo. Bolod, Island of Panglao, Bohol, Philippines</p>
	  	    <i class="i1">薄荷岛海滩俱乐部 AlonaPalmBeachResort 阿罗娜海滩 </i>
	  	</div>
	  	<div class="f2">
	  		<div class="hotel_img">
	  			<img src="../../assets/trave-logo/1Cv.jpg" alt="" />
	  		</div>
	  		<div class="div-box">
	  		 <div class="div-num">
	  			<p>Hotel</p>
	  			<i>3</i>
	  		 </div>
	  		</div>
	  	    <div class="hotel-titel">
	  	    	<i>薄荷岛海滩俱乐部酒店度假村</i>
	  	    </div>
	  	    <div class="wen">
	  	    	<span>
	  	    		住在这里，你一定能体验到薄荷岛的独特魅力。可以在岛上最受欢
	  	    		迎的景点，巧克力山下尝尝当地特产——花生巧克力；也
	  	    		可以去眼镜猴参观中心去看看这座岛上独有的小可爱；也可以在酒店私人海滩区，
	  	    		享受皮划艇和帆板等水上活动。
	  	    	</span>
	  	    </div>
	  	    <p class="p1">Bo. Bolod, Island of Panglao, Bohol, Philippines</p>
	  	    <i class="i1">薄荷岛海滩俱乐部 AlonaPalmBeachResort 阿罗娜海滩 </i>
	  	</div>
	  	<div class="hotel f1">
	  		<div class="hotel_img">
	  			<img src="../../assets/trave-logo/1CP.jpg" alt="" />
	  		</div>
	  		<div class="div-box">
	  		 <div class="div-num">
	  			<p>Hotel</p>
	  			<i>4</i>
	  		 </div>
	  		</div>
	  	    <div class="hotel-titel">
	  	    	<i>薄荷岛海滩俱乐部酒店度假村</i>
	  	    </div>
	  	    <div class="wen">
	  	    	<span>
	  	    		住在这里，你一定能体验到薄荷岛的独特魅力。可以在岛上最受欢
	  	    		迎的景点，巧克力山下尝尝当地特产——花生巧克力；也
	  	    		可以去眼镜猴参观中心去看看这座岛上独有的小可爱；也可以在酒店私人海滩区，
	  	    		享受皮划艇和帆板等水上活动。
	  	    	</span>
	  	    </div>
	  	    <p class="p1">Bo. Bolod, Island of Panglao, Bohol, Philippines</p>
	  	    <i class="i1">薄荷岛海滩俱乐部 AlonaPalmBeachResort 阿罗娜海滩 </i>
	  	</div>
	  	<div class="hotel f1">
	  		<div class="hotel_img">
	  			<img src="../../assets/trave-logo/1CZ.jpg" alt="" />
	  		</div>
	  	    <div class="div-box">
	  		 <div class="div-num">
	  			<p>Hotel</p>
	  			<i>5</i>
	  		 </div>
	  		</div>
	  	    <div class="hotel-titel">
	  	    	<i>薄荷岛海滩俱乐部酒店度假村</i>
	  	    </div>
	  	    <div class="wen">
	  	    	<span>
	  	    		住在这里，你一定能体验到薄荷岛的独特魅力。可以在岛上最受欢
	  	    		迎的景点，巧克力山下尝尝当地特产——花生巧克力；也
	  	    		可以去眼镜猴参观中心去看看这座岛上独有的小可爱；也可以在酒店私人海滩区，
	  	    		享受皮划艇和帆板等水上活动。
	  	    	</span>
	  	    </div>
	  	    <p class="p1">Bo. Bolod, Island of Panglao, Bohol, Philippines</p>
	  	    <i class="i1">薄荷岛海滩俱乐部 AlonaPalmBeachResort 阿罗娜海滩 </i>
	  	</div>
	  	<div class="f2">
	  		<div class="hotel_img">
	  			<img src="../../assets/trave-logo/1Dn.jpg" alt="" />
	  		</div>
	  		<div class="div-box">
	  		 <div class="div-num">
	  			<p>Hotel</p>
	  			<i>6</i>
	  		 </div>
	  		</div>
	  	    <div class="hotel-titel">
	  	    	<i>薄荷岛海滩俱乐部酒店度假村</i>
	  	    </div>
	  	    <div class="wen">
	  	    	<span>
	  	    		住在这里，你一定能体验到薄荷岛的独特魅力。可以在岛上最受欢
	  	    		迎的景点，巧克力山下尝尝当地特产——花生巧克力；也
	  	    		可以去眼镜猴参观中心去看看这座岛上独有的小可爱；也可以在酒店私人海滩区，
	  	    		享受皮划艇和帆板等水上活动。
	  	    	</span>
	  	    </div>
	  	    <p class="p1">Bo. Bolod, Island of Panglao, Bohol, Philippines</p>
	  	    <i class="i1">薄荷岛海滩俱乐部 AlonaPalmBeachResort 阿罗娜海滩 </i>
	  	</div>
	  	<div class="hotel f1">
	  		<div class="hotel_img">
	  			<img src="../../assets/trave-logo/1Py.jpg" alt="" />
	  		</div>
	  		<div class="div-box">
	  		 <div class="div-num">
	  			<p>Hotel</p>
	  			<i>7</i>
	  		 </div>
	  		</div>
	  	    <div class="hotel-titel">
	  	    	<i>薄荷岛海滩俱乐部酒店度假村</i>
	  	    </div>
	  	    <div class="wen">
	  	    	<span>
	  	    		住在这里，你一定能体验到薄荷岛的独特魅力。可以在岛上最受欢
	  	    		迎的景点，巧克力山下尝尝当地特产——花生巧克力；也
	  	    		可以去眼镜猴参观中心去看看这座岛上独有的小可爱；也可以在酒店私人海滩区，
	  	    		享受皮划艇和帆板等水上活动。
	  	    	</span>
	  	    </div>
	  	    <p class="p1">Bo. Bolod, Island of Panglao, Bohol, Philippines</p>
	  	    <i class="i1">薄荷岛海滩俱乐部 AlonaPalmBeachResort 阿罗娜海滩 </i>
	  	</div>
	  	<div class="hotel f1">
	  		<div class="hotel_img">
	  			<img src="../../assets/trave-logo/1PK.jpg" alt="" />
	  		</div>
	  		<div class="div-box">
	  		 <div class="div-num">
	  			<p>Hotel</p>
	  			<i>8</i>
	  		 </div>
	  		</div>
	  	    <div class="hotel-titel">
	  	    	<i>薄荷岛海滩俱乐部酒店度假村</i>
	  	    </div>
	  	    <div class="wen">
	  	    	<span>
	  	    		住在这里，你一定能体验到薄荷岛的独特魅力。可以在岛上最受欢
	  	    		迎的景点，巧克力山下尝尝当地特产——花生巧克力；也
	  	    		可以去眼镜猴参观中心去看看这座岛上独有的小可爱；也可以在酒店私人海滩区，
	  	    		享受皮划艇和帆板等水上活动。
	  	    	</span>
	  	    </div>
	  	    <p class="p1">Bo. Bolod, Island of Panglao, Bohol, Philippines</p>
	  	    <i class="i1">薄荷岛海滩俱乐部 AlonaPalmBeachResort 阿罗娜海滩 </i>
	  	</div>
	  	<div class="f2">
	  		<div class="hotel_img">
	  			<img src="../../assets/trave-logo/1DV.jpg" alt="" />
	  		</div>
	  		<div class="div-box">
	  		 <div class="div-num">
	  			<p>Hotel</p>
	  			<i>9</i>
	  		 </div>
	  		</div>
	  	    <div class="hotel-titel">
	  	    	<i>薄荷岛海滩俱乐部酒店度假村</i>
	  	    </div>
	  	    <div class="wen">
	  	    	<span>
	  	    		住在这里，你一定能体验到薄荷岛的独特魅力。可以在岛上最受欢
	  	    		迎的景点，巧克力山下尝尝当地特产——花生巧克力；也
	  	    		可以去眼镜猴参观中心去看看这座岛上独有的小可爱；也可以在酒店私人海滩区，
	  	    		享受皮划艇和帆板等水上活动。
	  	    	</span>
	  	    </div>
	  	    <p class="p1">Bo. Bolod, Island of Panglao, Bohol, Philippines</p>
	  	    <i class="i1">薄荷岛海滩俱乐部 AlonaPalmBeachResort 阿罗娜海滩 </i>
	  	</div>
	  </div>
	  <div class="footer">
	  	<span> 
	  	1999 - 2016 eLong, Inc or its affiliates.
	  	 All Rights Reserved.京ICP证010011号 京公网安备11
	  	 0000000021号
	  	</span>
	  </div>
	</div>
</template>

<script>
	export default{
		name:'fei_ye',
		mounted(){},
		data(){
			return{
				lis:[
				{'name':'火车票'},
				{'name':'机票'},
				{'name':'限时抢'},
				{'name':'短租公寓'},
				{'name':'国际酒店'},
				{'name':'团购'},
				{'name':'国内酒店'},
				{'name':'首页'}
				]
			}
		}
	}
</script>

<style>
	.fei_ye{
		width: 100%;
		height:2462px;
		background:#d3e9f7;
	}
	.fei-header{
		width: 100%;
		height: 48px;
		background: url(../../assets/trave-logo/header.jpg) ;
	}
	.fei-header-middle{
		width: 1200px;
		height: 48px;
		margin: auto;
	}
	.trave-logo{
		width:171px ;
		height:47px ;
		background: url(../../assets/trave-logo/logo.jpg) no-repeat center;
		float: left;
	}
	.compass{
		width:524px ;
		height:35px ;
		float:right;
	}
	.compass li{
		float:right;
		line-height: 35px;
	    padding:8px 5px 0 8px;
	}
	.compass span{
		width: 2px;
		height:35px ;
		float:right;
		line-height: 35px;
		margin-top: 10px;
		margin-left:5px ;
		color: rgb(165, 165, 165);
	}
	.tu{
		width: 100%;
		height: 380px;
		background: url(../../assets/trave-logo/000bplQC.jpg) no-repeat center;
	}
	.blue{
		color:#67a0f7 ;
	}
    .section1{
     	width: 1200px;
     	height:1943px ;
     	margin: auto;
     	/*background: pink;*/
     }
    .hotel{	
		    width: 386px;
		    height:621px;
		    margin-top: 20px;
		    margin-right: 21px;
		    background: #fff;
		    border-radius: 8px;
		    position: relative;
	}
	.f1{
		    float: left;
    }
    .f2{
    	float: left;
    	 width: 386px;
		 height:621px;
		 margin-top: 20px;
		 /*background: #fff;*/
		 border-radius: 8px;
		 position: relative;
		 background: #fff;
    }
    .hotel_img{
    	width:386px ;
    	height:296px ;
    	overflow: hidden;
    	border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }
    .div-num{
    	width: 60px;
    	height: 50px;
    	border-radius: 50%;
    	background: #0a8c8f;
    	padding-top: 10px;
    	top: -30px;
        margin:auto;
        text-align: center;
        color: #fff;
        position: relative;
    }
    .div-box{
    	width:386px ;
    	height: 325px;
    	/*background: red;*/
    	position: absolute;
    }
    .div-num p{
    	font-size: 18px;
    }
    .div-num i{
    	font-size: 20px;
    }
    .hotel-titel{
    	width:312px ;
    	height:27px ;
    	text-align: center;
    	position: absolute;
    	margin: 40px 38px;
    	font-size: 24px;
    	 color:#0a8c8f;
    }
    .wen{
    	width: 346px;
    	height: 118px;
    	background:#fff;
    	position: absolute;
    	margin-top: 80px;
    	margin-left:20px ;
    	line-height: 26px;
    	color: #666666;
    }
    .p1{
    	margin-top: 230px;
    	position: absolute;
    	margin-left:50px ;
    	color:#adacac;
    }
    .i1{
    	margin-top: 260px;
    	position: absolute;
    	margin-left:50px ;
    	color:#adacac;
    }
    .footer{
    	width: 100%;
    	height: 61px;
    	background: #FFFFFF;
    	margin-top: 30px;
    	
    }
    .footer span{
    		display: block;
    		line-height: 61px;
    		text-align: center;
    		color: #999999;
    	}

    
</style>