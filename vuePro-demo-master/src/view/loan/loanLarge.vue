<template>
	<div class="container no-top">
		<loanBanner :tit='title' :des='content'>
			<img src="../../assets/img/loanBanner3.jpg" slot='banner'/>
		</loanBanner>
		<loanDetail uid='large'>
			<span class="subBtn" slot="apply" @click="goFillData">申请借款</span>
		</loanDetail>
	</div>
</template>
<script>
	export default {
	    data () {
	        return {
	            title:"资金池借款",
	            content:"资金池项目担保，费率超低"
	        }
	    },
	    methods :{
	        goFillData(){
	        	//this.$router.push('/loan/dataMust');
	        	//填资料时，根据情况，跳到普通的资料汇总页面或分步骤的资料页面
	        	this.$router.push('/loan/dataComm');
	        }
	    }
	}
</script>
