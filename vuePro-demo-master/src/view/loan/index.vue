<template>
	<div class="container">
		<topComponent title='相互借' :showLeft='false'></topComponent>
        <loanBanner>
          <img src="../../assets/img/loanBanner2.jpg" slot='banner' style="top:77px"/>
        </loanBanner>
	    <ul class="indexList mt20" style="margin-top: 95px">
	    	<li v-for='data in list' :class='data.cls' @click='$router.push(data.push)'><b>{{data.tit}}</b>{{data.con}}</li>
      </ul>
	    <footComponent :idx='0'></footComponent>
	</div>
</template>
<script>
	//引入banner组件
	import loanBanner from '../../components/loan/banner'
	
	export default {
		data(){
			return {
				list:[
					{cls:'',		tit:'资金池',		con:'每人10元钱，汇成千万资金池',	push:'/loan/micro'},
					{cls:'icon02',	tit:'小额借款',		con:'最高可贷5000元',		push:'/loan/samll'},
					{cls:'icon03',	tit:'资金池借款',		con:'最高可贷1500元，费率超低',			push:'/loan/large'}
				]
			}
		},
		// components:{
		// 	'loanBanner':loanBanner
		// },
	    mounted:function(){
	    	document.body.scrollTop = 0;
	    }
	}
</script>
