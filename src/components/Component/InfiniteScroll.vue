<!--  -->
<template>
<div class="containerLay">
    <h2>InfiniteScroll 无限滚动</h2>
    <p>滚动至底部时，加载更多数据。</p>
    <h3>基础用法</h3>
    <p>在要实现滚动加载的列表上上添加v-infinite-scroll，并赋值相应的加载方法，可实现滚动到底部时自动执行加载方法。</p>
    <div class="demo">
        <template>
        <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
            <li v-for="i in count" class="infinite-list-item" :key="i">{{ i }}</li>
        </ul>
        </template>

    </div>
    <h3>禁用加载</h3>
    <div class="demo">
        <template>
        <div class="infinite-list-wrapper" style="overflow:auto">
            <ul
            class="list"
            v-infinite-scroll="load2"
            infinite-scroll-disabled="disabled">
            <li v-for="i in count2" class="list-item" :key="i">{{ i }}</li>
            </ul>
            <p v-if="loading">加载中...</p>
            <p v-if="noMore">没有更多了</p>
        </div>
        </template>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
name:'InfiniteScroll',
components: {},
data() {
//这里存放数据
return {
    count: 0,
    count2: 10,
    loading: false    
}
},
//监听属性 类似于data概念
computed: {
    noMore () {
        return this.count >= 20
      },
      disabled () {
        return this.loading || this.noMore
      }
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    load () {
        this.count += 2
      },
    load2 () {
        this.loading = true
        setTimeout(() => {
          this.count += 2
          this.loading = false
        }, 2000)
      }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.container h2 {color: #1f2f3d;font-weight: 400;font-size: 28px;}
.container p {color: #5e6d82;font-size: 14px;line-height: 1.5em;margin: 14px 0;}
.container h3 {color: #1f2f3d;margin: 55px 0 20px; font-size:22px; font-weight:400;}
.container .demo {border: 1px #ebebeb solid;border-radius: 3px;box-sizing: border-box;padding: 24px;}

.demo ul{  height:300px;}


</style>