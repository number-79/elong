<template>
	<div class="te">
	  <div class="titlebox1">
	  	<h2><b><a href="">超值特价票</a></b></h2>
	  </div>
	  <div class="Plane_ticket">
	  	<div class="planetitle">
	  		<div class="feiji"></div>
	  		<span>机票</span>
	  		<ul class="feiji_ul1">
	   	 		<li v-for="item in list1" >
			  		{{item.name}}
			  	</li>
	   	 	</ul>
	   	 	<a href="">更多>></a>
	  	</div>
	  	<ul class="end1">
	  		<li>
	  		  <div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">北京</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">烟台</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.4折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">北京</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">呼和浩特</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.5折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">北京</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">大连</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.6折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">北京</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">包头</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.9折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">北京</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">厄尔多斯</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">2折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece1">
	  		  	<div class="piecebox">
	  		  		<span class="span1">北京</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">烟台</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.4折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		</li>
	  		<li>
	  		<div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">上海</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">烟台</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.4折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">上海</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">呼和浩特</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.5折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">上海</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">大连</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.6折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">上海</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">包头</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.9折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">上海</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">厄尔多斯</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">2折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece1">
	  		  	<div class="piecebox">
	  		  		<span class="span1">上海</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">烟台</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.4折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		</li>
	  		<li>
	  		 <div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">广州</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">烟台</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.4折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">广州</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">呼和浩特</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.5折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">广州</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">大连</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.6折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">广州</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">包头</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.9折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">广州</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">厄尔多斯</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">2折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece1">
	  		  	<div class="piecebox">
	  		  		<span class="span1">广州</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">烟台</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.4折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		</li>
	  		<li>
	  		  <div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">杭州</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">烟台</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.4折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">杭州</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">呼和浩特</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.5折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">杭州</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">大连</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.6折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">杭州</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">包头</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.9折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">杭州</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">厄尔多斯</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">2折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece1">
	  		  	<div class="piecebox">
	  		  		<span class="span1">杭州</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">烟台</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.4折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		</li>
	  		<li>
	  		 <div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">深圳</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">烟台</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.4折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">深圳</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">呼和浩特</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.5折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">深圳</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">大连</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.6折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">深圳</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">包头</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.9折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">深圳</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">厄尔多斯</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">2折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece1">
	  		  	<div class="piecebox">
	  		  		<span class="span1">深圳</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">烟台</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.4折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>	  			
	  		</li>
	  		<li>
	  		 <div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">成都</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">烟台</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.4折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">成都</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">呼和浩特</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.5折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">成都</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">大连</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.6折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">成都</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">包头</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.9折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">成都</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">厄尔多斯</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">2折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece1">
	  		  	<div class="piecebox">
	  		  		<span class="span1">成都</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">烟台</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.4折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		</li>
	  	</ul>
	  </div>
	  <div class="Plane_ticket">
	  	<div class="planetitle">
	  	  <div class="huoche"></div>
	  	  <span>火车票</span>
	  	  <ul class="feiji_ul2">
	   	 		<li v-for="item in tab1" >
			  		{{item.name}}
			  	</li>
	   	 	</ul>
	   	 	<a href="">更多>></a>
	  	</div>
	  	<ul class="end2">
	  		<li>
	  			<div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">北京</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">烟台</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.4折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">北京</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">呼和浩特</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.5折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">北京</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">大连</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.6折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">北京</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">包头</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.9折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">北京</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">厄尔多斯</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">2折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece1">
	  		  	<div class="piecebox">
	  		  		<span class="span1">北京</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">烟台</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.4折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		</li>
	  		<li>
	  		  <div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">上海</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">烟台</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.4折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">上海</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">呼和浩特</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.5折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">上海</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">大连</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.6折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">上海</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">包头</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.9折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">上海</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">厄尔多斯</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">2折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece1">
	  		  	<div class="piecebox">
	  		  		<span class="span1">上海</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">烟台</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.4折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		</li>
	  		<li>
	  		 <div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">广州</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">烟台</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.4折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">广州</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">呼和浩特</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.5折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">广州</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">大连</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.6折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">广州</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">包头</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.9折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">广州</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">厄尔多斯</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">2折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece1">
	  		  	<div class="piecebox">
	  		  		<span class="span1">广州</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">烟台</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.4折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		</li>
	  		<li>
	  		 <div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">深圳</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">烟台</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.4折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">深圳</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">呼和浩特</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.5折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">深圳</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">大连</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.6折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">深圳</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">包头</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.9折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">深圳</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">厄尔多斯</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">2折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece1">
	  		  	<div class="piecebox">
	  		  		<span class="span1">深圳</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">烟台</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.4折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		</li>
	  		<li>
	  		 <div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">天津</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">烟台</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.4折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">天津</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">呼和浩特</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.5折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">天津</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">大连</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.6折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">天津</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">包头</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.9折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">天津</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">厄尔多斯</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">2折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece1">
	  		  	<div class="piecebox">
	  		  		<span class="span1">天津</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">烟台</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.4折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>	
	  		</li>
	  		<li>
	  		 <div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">厦门</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">烟台</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.4折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">厦门</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">呼和浩特</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.5折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">厦门</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">大连</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.6折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">厦门</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">包头</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.9折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece">
	  		  	<div class="piecebox">
	  		  		<span class="span1">厦门</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">厄尔多斯</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">2折</div>
	  		  		<a href="">￥100</a>
	  		  	</div>
	  		  </div>
	  		  <div class="piece1">
	  		  	<div class="piecebox">
	  		  		<span class="span1">厦门</span>
	  		  		<div class='feiji'></div>
	  		  		<span class="span2">烟台</span>
	  		  		<span class="span3">2月16日</span>
	  		  		<div class="sale">1.4折</div>
	  		  		<a href="">￥100</a>
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
       	  $('.end1>li:not(:eq(0))').hide()
       	  $('.feiji_ul1>li').mouseover(function(){
       	  	  $(this).addClass('bg1').siblings().removeClass('bg1')
       	  	  var idx =$(this).index()
       	  	  $('.end1>li').eq(idx).show().siblings().hide();
       	  })
       })
		$(function(){
       	  $('.end2>li:not(:eq(0))').hide()
       	  $('.feiji_ul2>li').mouseover(function(){
       	  	  $(this).addClass('bg1').siblings().removeClass('bg1')
       	  	  var idx =$(this).index()
       	  	  $('.end2>li').eq(idx).show().siblings().hide();
       	  })
       })
     },
		data(){
			return{
			  list1:[
		          {'name':'北京出发'},
		          {'name':'上海出发'},
		          {'name':'广州出发'},
		          {'name':'杭州出发'},
		          {'name':'深圳出发'},
		          {'name':'成都出发'}
		      ],
			  tab1:[
			      {'name':'北京出发'},
		          {'name':'上海出发'},
		          {'name':'广州出发'},
		          {'name':'深圳出发'},
		          {'name':'天津出发'},
		          {'name':'厦门出发'},
			  ]
			}
		}
	}
</script>

<style>
	.te{
		width:1200px ;
		height:372px ;
		/*background: skyblue;*/
		margin: auto;
	}
	.titlebox1{
		width: 100%;
		height:46px ;
		border-bottom: 2px solid #49f;
		position: relative;
	}
	h2{
		line-height: 44px;
		left: 0;
		position: absolute;
	}
	.titlebox1 a{
		color: #49f;
	}
    .Plane_ticket{
    	width: 1200px;
    	height: 150px;
    	margin-top: 10px;
    	/*background: #FFFFFF;*/
    }
    .planetitle{
    	width: 100%;
    	height: 28px;
    	padding: 10px 0;
    	/*background: red;*/
    	line-height: 28px;
    }
    .feiji{
    	width:24px ;
    	height:24px ;
    	background: url(../assets/icon_index.png) no-repeat center;
    	background-position: -573px -191px;
    	line-height: 24px;
    	float: left;
    	margin-left: 10px;
    }
    .huoche{
    	width:24px ;
    	height:24px ;
    	background: url(../assets/icon_index.png) no-repeat center;
    	background-position:-575px -221px;
    	line-height: 24px;
    	float: left;
    }
   .planetitle span{
   	   font-size:18px ;
   	   color: #555;
   	   float: left;
   }
   .feiji_ul{
		float: left;
		margin-left: 30px;
	}
	.feiji_ul1 li{
		float: left;
		font-size: 14px;
		line-height: 24px;
		text-align: center;
		margin-left: 15px;
		padding: 0 10px;
	}
	.feiji_ul1 li:hover{
		border-radius:20px;
		border: 1px solid #49f;
	}
	.feiji_ul2 li{
		float: left;
		font-size: 14px;
		line-height: 24px;
		text-align: center;
		margin-left: 15px;
		padding: 0 10px;
	}
	.feiji_ul2 li:hover{
		border-radius:20px;
		border: 1px solid #49f;
	}
	.planetitle a{
		font-size: 14px;
		line-height: 28px;
		color: #555;
		float: right;
	}
	.planetitle a:hover{
		color: #ff6666;
	}
	.end1{
		width: 1200px;
		height:102px;
		/*background: blue;*/
	}
	.end2{
		width: 1200px;
		height:102px;
		/*background: blue;*/
	}
	.piece{
		width: 198px;
		height:100px;
		border-bottom: 1px solid #49f;
		border-top: 1px solid #49f;
		border-left: 1px solid #49f;
		float: left;
		background: #f4f9ff;
		overflow: hidden;
		box-sizing:border-box;
		text-align:center;
	}
	.piece1{
		width: 198px;
		height:100px;
		border-bottom: 1px solid #49f;
		border-top: 1px solid #49f;
		border-left: 1px solid #49f;
		border-right: 1px solid #49f;
		float: left;
		background: #f4f9ff;
		overflow: hidden;
		box-sizing:border-box;
	}
	.piecebox{
		width: 156px;
		height:76px;
        /*background: pink;*/
        margin: 18px 0px 20px 20px;
        box-sizing:border-box;
        box-sizing:border-box;
	}
	.piece:hover{
		box-sizing:border-box;
		border:2px solid blue;
	}
	.piece1:hover{
		box-sizing:border-box;
		border:2px solid blue;
	}
	.span1{
		width:50px;
		height: 30px;
		line-height:30px;
		float: left;
		font-size: 16px;
	}
	.span2{
		width:70px;
		height: 30px;
		line-height:30px;
		float: left;
		font-size: 16px;
	}
	.bg1{
		background: #49f;
		border-radius:20px;
	}
	.sale{
		float:left;
		border-radius: 20px;
		background: #09BB07;
		margin-top: 8px;
	}
	.span3{
		float:left;
		font-size: 14px;
		padding: 0 5px 0 5px;
	    margin-top: 8px;
	}
	.piecebox a{
		color: red;
		font-size: 14px;
		float:left;
		margin-top: 8px;
	}
</style>