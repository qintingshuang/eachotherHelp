<template>
  <div class="container">
    <topComponent title='加入资金池' class='top-icon' :showLeft='false'>
      <span class="back" @click="goback" slot="left">返回</span>
      <i class="recom" @click="$router.push('/loan/loanRecom')" slot='right'></i>
    </topComponent>
    <ul class="formCom form-selectRight">
      <li class="icon-arrow">
        <span>存储资金</span>
        <p class="gray" :class='{ col6 : data.selectSaveMoney!="请选择" }'>{{data.selectSaveMoney | optionTxt(optionSaveMoney) }}</p>
        <select v-model='data.selectSaveMoney'>
          <option v-for="option of optionSaveMoney" :value='option.val'>{{option.txt}}</option>
        </select>
      </li>
      <li class="icon-arrow">
        <span>存储时间</span>
        <p class="gray" :class='{ col6 : data.selectSaveTime!="请选择" }'>{{data.selectSaveTime | optionTxt(optionSaveTime) }}</p>
        <select v-model='data.selectSaveTime'>
          <option v-for="option of optionSaveTime" :value='option.val'>{{option.txt}}</option>
        </select>
      </li>
      <li class="icon-arrow">
        <span>到期取现</span>
        <p class="gray" :class='{ col6 : data.selectSaveWay!="请选择" }'>{{data.selectSaveWay | optionTxt(optionSaveWay) }}</p>
        <select v-model='data.selectSaveWay'>
          <option v-for="option of optionSaveWay" :value='option.val'>{{option.txt}}</option>
        </select>
      </li>
      <!--<li @click="goDes">-->
        <!--<span>借款描述</span>-->
      <!--</li>-->
    </ul>
    <!--<ul class="formCom form-selectRight mt30">-->
      <!--<li class="icon-arrow">-->
        <!--<span>方便联系时间段</span>-->
        <!--<p class="gray" :class='{ col6 : data.selectTime!="请选择" }'>{{data.selectTime | optionTxt(optionTime) }}</p>-->
        <!--<select v-model='data.selectTime'>-->
          <!--<option v-for="option of optionTime" :value='option.val'>{{option.txt}}</option>-->
        <!--</select>-->
      <!--</li>-->
    <!--</ul>-->
    <div class="btnWarp">
      <span class="subBtn" @click='goApply'>支付</span>
    </div>
    <transition name="scale">
      <dialogPopup :class='diglogClass' :msg='diglogCont' v-show='diglogShow'></dialogPopup>
    </transition>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        defaultSelect:'请选择',
        data:{
          selectWay:'',					//select-还款方式
          selectAmount:'',				//select-借款金额
          selectLimit:'',					//select-借款期限
          selectTime:''	,				//select-时间段
          selectSaveMoney:'', //select -存储金钱
          selectSaveTime:'', //select -存储时间
          selectSaveWay:'' //select -存储到期还款方式

        },
        optionWay:[							//option-还款方式
          {val:"1",txt:"一次性还本付息"},
          {val:"2",txt:"还本付息"}],
        optionSaveMoney:[
          {val:"10",txt:"10元"},
          {val:"20",txt:"20元"},
          {val:"50",txt:"50元"},
          {val:"100",txt:"100元"}],
        optionSaveTime:[
          {val:"3",txt:"3个月"},
          {val:"6",txt:"6个月"},
          {val:"9",txt:"9个月"}],
        optionSaveWay:[
          {val:"1",txt:"自动续期"},
          {val:"2",txt:"赎回"}],
        optionAmount:[						//option-借款金额
          {val:'500',txt:'500元'},
          {val:'1000',txt:'1000元'}],
        optionLimit:[						//option-借款期限
          {val:'7',txt:'7天'},
          {val:'14',txt:'14天'},
          {val:'21',txt:'21天'}],
        optionTime:[						//option-时间段
          {val:'1',txt:'9:00-12:00'},
          {val:'2',txt:'12:00-14:00'},
          {val:'3',txt:'14:00-18:00'}],
        diglogShow:false,					//开关----显示diglog组件
      }
    },
    methods :{
      goApply(){
        if(this.data.selectSaveMoney == this.defaultSelect )			this.callDialog('请选择存储资金');
        else if(this.data.selectSaveTime == this.defaultSelect)	this.callDialog('请选择存储时间');
        else if(this.data.selectSaveWay == this.defaultSelect)	this.callDialog('请选择取现方式');
      // else if(this.$store.state['tempDesCont'] === '' )		this.callDialog('请填写描述内容');
      //  else if(this.data.selectTime == this.defaultSelect)		this.callDialog('请选择时间段');
        else 													this.$router.push('/loan/detailPool');
      },
      goDes(){
        this.$router.push('/loan/loanDes')
      },
      goback(){
        this.clearStore();
        this.$router.back();
      },
      clearStore(){
        this.$store.commit('uploadApplys',{name:'tempDesCont',val:''})
        this.$store.commit('uploadApplys',{name:'tempApplyOpt',val:''})
      },
      uploadStore(){
        this.$store.commit('uploadApplys',{name:'tempApplyOpt',val:JSON.stringify(this.data)});
      }
    },
    created(){
      //为下拉菜单设置默认值
      this.data = {
        selectWay : this.defaultSelect,
        selectAmount : this.defaultSelect,
        selectLimit : this.defaultSelect,
        selectTime : this.defaultSelect
      }
    },
    computed:{
      dataStr:function(){
        var str = '';
        for(var key in this.data){
          str += this.data[key]
        }
        return str;
      }
    },
    watch:{
      'dataStr':'uploadStore'
    },
    mounted:function(){
      var tempApplyOpt = this.$store.state['tempApplyOpt'];
      if(tempApplyOpt !== '') this.data = JSON.parse(tempApplyOpt);
    }
  }
</script>
