<!--  -->
<template>
<div class="containerLay">
    <h2>Alert 警告</h2>
    <p>用于页面中展示重要的提示信息。</p>
    <h3>基础用法</h3>
    <p>页面中的非浮层元素，不会自动消失。</p>
    <div class="demo">
        <template>
        <el-alert
            title="成功提示的文案"
            type="success">
        </el-alert>
        <el-alert
            title="消息提示的文案"
            type="info">
        </el-alert>
        <el-alert
            title="警告提示的文案"
            type="warning">
        </el-alert>
        <el-alert
            title="错误提示的文案"
            type="error">
        </el-alert>
        </template>
    </div>
    <h3>主题</h3>
    <p>Alert 组件提供了两个不同的主题：light和dark。</p>
    <div class="demo">
        <template>
        <el-alert
            title="成功提示的文案"
            type="success"
            effect="dark">
        </el-alert>
        <el-alert
            title="消息提示的文案"
            type="info"
            effect="dark">
        </el-alert>
        <el-alert
            title="警告提示的文案"
            type="warning"
            effect="dark">
        </el-alert>
        <el-alert
            title="错误提示的文案"
            type="error"
            effect="dark">
        </el-alert>
        </template>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
name:'Alert1',
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
.container .demo {border: 1px #ebebeb solid;border-radius: 3px;box-sizing: border-box;padding: 24px;}


</style>