<template>
	<div class="container no-top">
		<loanBanner :tit='title' :des='content'>
			<img src="../../assets/img/loanBanner1.jpg" slot='banner'/>
		</loanBanner>
		<loanDetail uid='micro'>
			<span class="subBtn" slot="apply" @click="goFillData">加入资金池</span>
		</loanDetail>
	</div>
</template>
<script>
	export default {
	    data () {
	        return {
	            title:"相互资金池",
	            content:"百川汇海，你我同行"
	        }
	    },
	    methods :{
	        goFillData(){
	        	this.$router.push('/loan/dataMust');
	        	//填资料时，根据情况，跳到普通的资料汇总页面或分步骤的资料页面
	        	//this.$router.push('/loan/dataComm');
	        }
	    }
	}
</script>
