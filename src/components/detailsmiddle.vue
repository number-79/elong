<template>
	<div class="details-middle">
	  <div class="titlebox">
	  	<h2><b><a href="">目的地指数</a></b></h2>
	  	<span> 覆盖全球75万家酒店，你想住的，我们都有</span>
	  </div>
	  <div class="domestic">

	   	 <div class="h-middle">
	   	 	<div class="house"></div>
	   	 	<span>国内</span>
	   	 	<ul class="nav">
	   	 		<li v-for="item in list" >
			  		{{item.name}}
			  	</li>
	   	 	</ul>
	   	 	<a href="">更多>></a>
	   	 </div>
	   	 	<ul class="tab-theme">

	   	 		<li>
	   	 			<div class="mountain">
	   	 				<img src="../assets/huangshan.jpg"/>
	   	 				<div class="introduce">
	   	 					<span>春意撩人 登高踏青赏春色</span>
	   	 				</div>
	   	 			</div>
	   	 		    <div class="mountain">
	   	 		    	<img src="../assets/emeishan.jpg"/>
	   	 		    	<div class="introduce">
	   	 					<span>阳春三月 闻着茶香去峨眉</span>
	   	 				</div>
	   	 		    </div>
	   	 		    <div class="mountain">
	   	 		    	<img src="../assets/wutaishan.jpg"/>
	   	 		    	<div class="introduce">
	   	 					<span>迎春 祈福 登五台</span>
	   	 				</div>
	   	 		    </div>
	   	 		    <div class="mountain">
	   	 		    	<img src="../assets/lushan.jpg"/>
	   	 		    	<div class="introduce">
	   	 					<span>亲近自然 春游庐山</span>
	   	 				</div>
	   	 		    </div>
	   	 		</li>
	   	 		<li>
                    <div class="mountain">
	   	 				<img src="../assets/hbtl-tianmuhu.jpg"/>
	   	 				<div class="introduce">
	   	 					<span>古树错落 帝王温泉</span>
	   	 			    </div>
	   	 			 </div>
	   	 		    <div class="mountain">
	   	 		    	<img src="../assets/hbtl-tianmuweihai.jpg"/>
	   	 		    	<div class="introduce">
	   	 					<span>森林温泉 草本养生</span>
	   	 				</div>
	   	 		    </div>
	   	 		    <div class="mountain">
	   	 		    	<img src="../assets/hbtl-zhongshan.jpg"/>
	   	 		    	<div class="introduce">
	   	 					<span>毗邻港澳 商务养生</span>
	   	 				</div>
	   	 		    </div>
	   	 		    <div class="mountain">
	   	 		    	<img src="../assets/hbtl-anbo.jpg"/>
	   	 		    	<div class="introduce">
	   	 					<span>延年益寿 名誉中外</span>
	   	 				</div>
	   	 		    </div></li>
	   	 		<li>
	   	 		   <div class="mountain">
	   	 				<img src="../assets/hbtl-lasa.jpg"/>
	   	 				<div class="introduce">
	   	 					<span>高原古城 圣山天湖 沁人心脾</span>
	   	 				</div>
	   	 			</div>
	   	 		    <div class="mountain">
	   	 		    	<img src="../assets/hbtl-dali.jpg"/>
	   	 		    	<div class="introduce">
	   	 					<span>文献名邦 彩云之南 空谷幽兰</span>
	   	 				</div>
	   	 		    </div>
	   	 		    <div class="mountain">
	   	 		    	<img src="../assets/hbtl-zhoushan.jpg"/>
	   	 		    	<div class="introduce">
	   	 					<span>东海翡翠 舟山群岛 气候宜人</span>
	   	 				</div>
	   	 		    </div>
	   	 		    <div class="mountain">
	   	 		    	<img src="../assets/hbtl-xiamen.jpg"/>
	   	 		    	<div class="introduce">
	   	 					<span>天风海涛 鼓浪岛屿 鸟语芬芳</span>
	   	 				</div>
	   	 		    </div>
	   	 		</li>
	   	 		<li>
	   	 			<div class="mountain">
	   	 				<img src="../assets/cysh-xlgl.jpg"/>
	   	 				<div class="introduce">
	   	 					<span>草原 牧民 小马驹</span>
	   	 				</div>
	   	 			</div>
	   	 		    <div class="mountain">
	   	 		    	<img src="../assets/cysh-bs.jpg"/>
	   	 		    	<div class="introduce">
	   	 					<span>帝都最近的草原</span>
	   	 				</div>
	   	 		    </div>
	   	 		    <div class="mountain">
	   	 		    	<img src="../assets/cysh-reg.jpg"/>
	   	 		    	<div class="introduce">
	   	 					<span>高原上的绿洲</span>
	   	 				</div>
	   	 		    </div>
	   	 		    <div class="mountain">
	   	 		    	<img src="../assets/cysh-qls.jpg"/>
	   	 		    	<div class="introduce">
	   	 					<span>风景如画 醉美祁连山</span>
	   	 				</div>
	   	 		    </div>
	   	 		</li>
	   	 		<li>
	   	 			<div class="mountain">
	   	 				<img src="../assets/termini_t3_xt.jpg"/>
	   	 				<div class="introduce">
	   	 					<span>烟雨长廊 景色好似宣纸画</span>
	   	 				</div>
	   	 			</div>
	   	 		    <div class="mountain">
	   	 		    	<img src="../assets/termini_t3_hs.jpg"/>
	   	 		    	<div class="introduce">
	   	 					<span>古风犹存 如诗如画</span>
	   	 				</div>
	   	 		    </div>
	   	 		    <div class="mountain">
	   	 		    	<img src="../assets/termini_t3_wz.jpg"/>
	   	 		    	<div class="introduce">
	   	 					<span>推窗见水 小桥人家</span>
	   	 				</div>
	   	 		    </div>
	   	 		    <div class="mountain">
	   	 		    	<img src="../assets/termini_t3_py.jpg"/>
	   	 		    	<div class="introduce">
	   	 					<span>晋商遗风 古城探幽</span>
	   	 				</div>
	   	 		    </div>
	   	 		</li>
	   	 		<li>
	   	 			<div class="mountain">
	   	 				<img src="../assets/termini_t4_xg.jpg"/>
	   	 				<div class="introduce">
	   	 					<span>只有想不到，没有找不到</span>
	   	 				</div>
	   	 			</div>
	   	 		    <div class="mountain">
	   	 		    	<img src="../assets/termini_t4_cd.jpg"/>
	   	 		    	<div class="introduce">
	   	 					<span>不只有火锅，吃是头等事</span>
	   	 				</div>
	   	 		    </div>
	   	 		    <div class="mountain">
	   	 		    	<img src="../assets/termini_t4_yz.jpg"/>
	   	 		    	<div class="introduce">
	   	 					<span>吴侬软语 淮味养人</span>
	   	 				</div>
	   	 		    </div>
	   	 		    <div class="mountain">
	   	 		    	<img src="../assets/termini_t4_cs.jpg"/>
	   	 		    	<div class="introduce">
	   	 					<span>美食怕不辣，湘味最十足</span>
	   	 				</div>
	   	 		    </div>
	   	 		</li>
	   	 	</ul>
       </div>
	  <div class="overseas">
	  	<div class="h-middle">
	   	 	<div class="tree"></div>
	   	 	<span>海外</span>
	   	 	<ul class="nava">
	   	 		<li v-for="item in tab" >
			  		{{item.name}}
			  	</li>
	   	 	</ul>
	   	 	<a href="">更多>></a>
	   	 </div>
	   	 <ul class="taba-theme">
	   	 		<li>
	   	 			<div class="mountain">
	   	 				<img src="../assets/termini_it1_ld.jpg"/>
	   	 				<div class="introduce">
	   	 					<span>风情英伦，帝国余韵</span>
	   	 				</div>
	   	 			</div>
	   	 		    <div class="mountain">
	   	 		    	<img src="../assets/termini_it1_qm.jpg"/>
	   	 		    	<div class="introduce">
	   	 					<span>泰北玫瑰，慢行古城</span>
	   	 				</div>
	   	 		    </div>
	   	 		    <div class="mountain">
	   	 		    	<img src="../assets/termini_it1_jzd.jpg"/>
	   	 		    	<div class="introduce">
	   	 					<span>最传统的浪漫，最神秘的自然</span>
	   	 				</div>
	   	 		    </div>
	   	 		    <div class="mountain">
	   	 		    	<img src="../assets/termini_it1_lm.jpg"/>
	   	 		    	<div class="introduce">
	   	 					<span>永恒之城，魅力无限</span>
	   	 				</div>
	   	 		    </div>
	   	 		</li>
	   	 		<li>
                    <div class="mountain">
	   	 				<img src="../assets/hbtl-tianmuhu.jpg"/>
	   	 				<div class="introduce">
	   	 					<span>古树错落 帝王温泉</span>
	   	 			    </div>
	   	 			 </div>
	   	 		    <div class="mountain">
	   	 		    	<img src="../assets/hbtl-tianmuweihai.jpg"/>
	   	 		    	<div class="introduce">
	   	 					<span>森林温泉 草本养生</span>
	   	 				</div>
	   	 		    </div>
	   	 		    <div class="mountain">
	   	 		    	<img src="../assets/hbtl-zhongshan.jpg"/>
	   	 		    	<div class="introduce">
	   	 					<span>毗邻港澳 商务养生</span>
	   	 				</div>
	   	 		    </div>
	   	 		    <div class="mountain">
	   	 		    	<img src="../assets/hbtl-anbo.jpg"/>
	   	 		    	<div class="introduce">
	   	 					<span>延年益寿 名誉中外</span>
	   	 				</div>
	   	 		    </div></li>
	   	 		<li>
	   	 		   <div class="mountain">
	   	 				<img src="../assets/hbtl-lasa.jpg"/>
	   	 				<div class="introduce">
	   	 					<span>高原古城 圣山天湖 沁人心脾</span>
	   	 				</div>
	   	 			</div>
	   	 		    <div class="mountain">
	   	 		    	<img src="../assets/hbtl-dali.jpg"/>
	   	 		    	<div class="introduce">
	   	 					<span>文献名邦 彩云之南 空谷幽兰</span>
	   	 				</div>
	   	 		    </div>
	   	 		    <div class="mountain">
	   	 		    	<img src="../assets/hbtl-zhoushan.jpg"/>
	   	 		    	<div class="introduce">
	   	 					<span>东海翡翠 舟山群岛 气候宜人</span>
	   	 				</div>
	   	 		    </div>
	   	 		    <div class="mountain">
	   	 		    	<img src="../assets/hbtl-xiamen.jpg"/>
	   	 		    	<div class="introduce">
	   	 					<span>天风海涛 鼓浪岛屿 鸟语芬芳</span>
	   	 				</div>
	   	 		    </div>
	   	 		</li>
	   	 		<li>
	   	 			<div class="mountain">
	   	 				<img src="../assets/cysh-xlgl.jpg"/>
	   	 				<div class="introduce">
	   	 					<span>草原 牧民 小马驹</span>
	   	 				</div>
	   	 			</div>
	   	 		    <div class="mountain">
	   	 		    	<img src="../assets/cysh-bs.jpg"/>
	   	 		    	<div class="introduce">
	   	 					<span>帝都最近的草原</span>
	   	 				</div>
	   	 		    </div>
	   	 		    <div class="mountain">
	   	 		    	<img src="../assets/cysh-reg.jpg"/>
	   	 		    	<div class="introduce">
	   	 					<span>高原上的绿洲</span>
	   	 				</div>
	   	 		    </div>
	   	 		    <div class="mountain">
	   	 		    	<img src="../assets/cysh-qls.jpg"/>
	   	 		    	<div class="introduce">
	   	 					<span>风景如画 醉美祁连山</span>
	   	 				</div>
	   	 		    </div>
	   	 		</li>
	   	 		<li>
	   	 			<div class="mountain">
	   	 				<img src="../assets/termini_t3_xt.jpg"/>
	   	 				<div class="introduce">
	   	 					<span>烟雨长廊 景色好似宣纸画</span>
	   	 				</div>
	   	 			</div>
	   	 		    <div class="mountain">
	   	 		    	<img src="../assets/termini_t3_hs.jpg"/>
	   	 		    	<div class="introduce">
	   	 					<span>古风犹存 如诗如画</span>
	   	 				</div>
	   	 		    </div>
	   	 		    <div class="mountain">
	   	 		    	<img src="../assets/termini_t3_wz.jpg"/>
	   	 		    	<div class="introduce">
	   	 					<span>推窗见水 小桥人家</span>
	   	 				</div>
	   	 		    </div>
	   	 		    <div class="mountain">
	   	 		    	<img src="../assets/termini_t3_py.jpg"/>
	   	 		    	<div class="introduce">
	   	 					<span>晋商遗风 古城探幽</span>
	   	 				</div>
	   	 		    </div>
	   	 		</li>
	   	 		<li>
	   	 			<div class="mountain">
	   	 				<img src="../assets/termini_t4_xg.jpg"/>
	   	 				<div class="introduce">
	   	 					<span>只有想不到，没有找不到</span>
	   	 				</div>
	   	 			</div>
	   	 		    <div class="mountain">
	   	 		    	<img src="../assets/termini_t4_cd.jpg"/>
	   	 		    	<div class="introduce">
	   	 					<span>不只有火锅，吃是头等事</span>
	   	 				</div>
	   	 		    </div>
	   	 		    <div class="mountain">
	   	 		    	<img src="../assets/termini_t4_yz.jpg"/>
	   	 		    	<div class="introduce">
	   	 					<span>吴侬软语 淮味养人</span>
	   	 				</div>
	   	 		    </div>
	   	 		    <div class="mountain">
	   	 		    	<img src="../assets/termini_t4_cs.jpg"/>
	   	 		    	<div class="introduce">
	   	 					<span>美食怕不辣，湘味最十足</span>
	   	 				</div>
	   	 		    </div>
	   	 		</li>
	   	 	</ul>
	  </div>
	</div>
</template>

<script>
	export default{
		mounted(){
		$(function(){
       	  $('.tab-theme>li:not(:eq(0))').hide()
       	  $('.nav>li').mouseover(function(){
       	  	  $(this).addClass('bg').siblings().removeClass('bg')
       	  	  var idx =$(this).index()
       	  	  $('.tab-theme>li').eq(idx).show().siblings().hide();
       	  })
       }),
       $(function(){
       	  $('.taba-theme>li:not(:eq(0))').hide()
       	  $('.nava>li').mouseover(function(){
       	  	  $(this).addClass('bg').siblings().removeClass('bg')
       	  	  var idx =$(this).index()
       	  	  $('.taba-theme>li').eq(idx).show().siblings().hide();
       	  })
       })
},
		data(){
			return{
			  list:[
		          {'name':'登高踏青'},
		          {'name':'小憩温泉'},
		          {'name':'天然氧吧'},
		          {'name':'草原撒欢'},
		          {'name':'小镇时光'},
		          {'name':'美食之城'}
		      ],
			  tab:[
			      {'name':'文艺清新'},
		          {'name':'面朝大海'},
		          {'name':'别样建筑'},
		          {'name':'浪漫主义'},
		          {'name':'魅力都市'}
			  ]
			}
		}
	}

</script>

<style>
	.details-middle{
		width: 1200px;
		height:566px ;
		margin: auto;
		margin-top: -20px;
	}
	.titlebox{
		width: 100%;
		height:46px ;
		border-bottom: 2px solid #ff5555;
		position: relative;
	}
	h2{
		line-height: 44px;
		left: 0;
		position: absolute;
	}
	.titlebox a{
		color: #ff6f84;
	}
	.titlebox span{
		font-size: 14px;
        color: #999;
        line-height: 44px;
        margin-left: 100px;
	}
	.domestic{
		width: 1200px;
		height: 250px;
		/*background: orange;*/
	}
	.h-middle{
		width: 100%;
		height: 48px;
		padding: 10px 0;
		/*background: red;*/
	}
	.h-middle span{
		line-height: 48px;
		font-size:20px;
		float: left;
		color: #000;
	}
	.house{
		width: 40px;
		height: 40px;
		line-height: 45px;
		margin-left: 10px;
		background: url(../assets/house.png) no-repeat center;
		background-size: 100%;
		float: left;
	}
	.nav{
		width: 640px;
		height: 48px;
		/*background: pink;*/
		float: left;
		margin-left: 30px;
	}
	.nav li{
		float: left;
		font-size: 14px;
		line-height: 24px;
		text-align: center;
		margin-left: 15px;
		
		padding: 0 10px;
		margin-top: 12px;
	}
	.nav li:hover{
		border-radius:20px;
		border: 1px solid #ff6666;
	}
	.h-middle a{
		font-size: 16px;
		line-height: 48px;
		color: #555;
		float: right;
	}
	.h-middle a:hover{
		color: #ff6666;
	}
	.tab-theme{
		width: 1200px;
		height: 202px;
		/*background: blue;*/
		overflow:hidden;
		position: absolute;
	}
	.bg{
		background: #FF5555;
		border-radius:20px;
	}
	.mountain{
		width:290px ;
		height: 202px;
		margin:0 10px 0 0;s
		background: gold;
		float: left;
	}
	.mountain img{
	 	width:290px ;
		height: 192px;
		position: relative;
	}
	.mountain img:hover{
		bottom:10px;
		transition: bottom 10s;
	}
	.introduce{
		width: 290px;
		height: 39px;
		background: #FFFFFF;
		float:left;
		z-index: 120;
		position: relative;
		bottom: 0;
		margin-top: -31px;
		border-bottom:2px solid #555;
	}
	.introduce:hover{
		border-bottom:2px solid #FF6666;
	}
	.introduce span{
		font-size: 16px;
		color: #757575;
		line-height: 39px;
		margin-left: 5px;
	}
	.overseas{
		width:1200px ;
		height: 250px;
		/*background: skyblue;*/
		float: left;
		margin-top: 20px;
	}
    .tree{
    	width: 40px;
		height: 40px;
		line-height: 45px;
		margin-left: 10px;
		background: url(../assets/icon_index.png) no-repeat center;
		background-position: -576px -131px;
		float: left;
		margin-top: 10px;
    }
    .nava{
		width: 640px;
		height: 48px;
		/*background: pink;*/
		float: left;
		margin-left: 30px;
	}
	.nava li{
		float: left;
		font-size: 14px;
		line-height: 24px;
		text-align: center;
		margin-left: 15px;
		
		padding: 0 10px;
		margin-top: 12px;
	}
	.nava li:hover{
		border-radius:20px;
		border: 1px solid #ff6666;
	}
    .taba-theme{
		width: 1200px;
		height: 202px;
		/*background: blue;*/
		overflow:hidden;
		position: absolute;
	}
</style>