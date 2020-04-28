<!--  -->
<template>
<div class='box'>
    <div class="container">
        <ul class="nav">
            <li v-for="item in optsDf.textList">{{item}}</li>
            <div></div>
        </ul>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
name:'Box',
components: {},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

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
.box{position:absolute; top:80px; right:50px; z-index:2019;}
.nav{background:#fff; box-shadow: 0 2px 12px 0 rgba(0,0,0,.1); width:93px; position:relative;}
.nav li{width:53px; height:36px; padding:0 20px; font-size:14px; line-height:36px; color:#606266;}
.nav div{position:absolute; border-bottom:6px #fff solid; border-left:6px transparent solid; border-right:6px transparent solid; top:-6px; left:50%; margin-left:-6px;}

</style>