<template>
  <div class="container">
    <topComponent title='支付详情'>
      <span class="save" @click="$router.push('/loan/cancelPool')" slot='right'>撤销</span>
    </topComponent>
    <div class="borrowInfoDetail">
      <p>资金池编号 <span>3708290030001897</span></p>
      <p>存储金额<span>50元</span></p>
      <p>续期方式<span>自动赎回</span></p>
    </div>

    <div class="btnWarp">
      <span class="subBtn" 	@click='goSubmit'>查看基金池</span>
    </div>
    <alertKnow v-if='knowShow' :title='knowTit' :content='knowCon' @goHide='knowShow = !knowShow'></alertKnow>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        knowShow:false,
      }
    },
    methods :{
      goSubmit(){
        this.$router.push('/loan/poolinfo');
      }

  }
  }
</script>
