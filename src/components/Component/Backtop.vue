<!--  -->
<template>
<div class="containerLay">
    <h2>Backtop 回到顶部</h2>
    <p>返回页面顶部的操作按钮</p>
    <h3>基础用法</h3>
    <p>滑动页面即可看到右下方的按钮。</p>
    <div class="demo">
        <template>
        Scroll down to see the bottom-right button.
        <el-backtop target=".containerLay"></el-backtop>
        </template>
    </div>
    <h3>自定义显示内容</h3>
    <p>显示区域被固定为 40px * 40px 的区域, 其中的内容可支持自定义。</p>
    <div class="demo">
        <template>
        Scroll down to see the bottom-right button.
        <el-backtop target=".containerLay" :bottom="100">
            <div
            style="{
                height: 100%;
                width: 100%;
                background-color: #f2f5f6;
                box-shadow: 0 0 6px rgba(0,0,0, .12);
                text-align: center;
                line-height: 40px;
                color: #1989fa;
            }"
            >
            UP
            </div>
        </el-backtop>
        </template>
    </div>
    <div class="fill"></div>
    <div class="fill"></div>
    <div class="fill"></div>
    <div class="fill"></div>
    <div class="fill"></div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
name:'Backtop',
components: {},
data() {
//这里存放数据
return {
    
}
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
.container h2 {color: #1f2f3d;font-weight: 400;font-size: 28px;}
.container p {color: #5e6d82;font-size: 14px;line-height: 1.5em;margin: 14px 0;}
.container h3 {color: #1f2f3d;margin: 55px 0 20px; font-size:22px; font-weight:400;}
.container .demo {border: 1px #ebebeb solid;border-radius: 3px;box-sizing: border-box;padding:24px;}

.containerLay{height:650px; overflow:auto;}
.fill{height:300px;}


</style>