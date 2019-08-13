<template>
  <div class="userBorrow">
    <borrowTitle :idx='0'></borrowTitle>
    <borrowList v-if='hasBorrow' :items='list'></borrowList>
    <pageError v-if='!hasBorrow' :msg='borrowMsg' :class='borrowCls'></pageError>
    <noMore v-if='!hasMore'></noMore>
  </div>
</template>
<script>

  export default {
    //这个组件定义的参数，要给template的参数
    data() {
      return {
        hasBorrow: true,	//开关-借款列表
        hasMore: true,	//开关-提示-->没有更多
        borrowMsg: '没有任何借款记录',
        borrowCls: 'error-txt',
        list: []
      }
    },
    //方法
    methods: {
      getData () {
        this.$http
          .get('http://localhost:8210/apply/list', {
            params: {
              userId: 1
            }
          }).then(this.getHomeInfoSucc)
      },
         getHomeInfoSucc (res) {
          res = res.data
          if (res.data) {    //判断ajax请求数据，并进行相应数据渲染（赋值）
            const data = res.data
            this.list = data.list
          }
        }
      },
    //钩子函数，渲染的时候触发
    mounted () {
      this.getData()
    }

}

</script>
