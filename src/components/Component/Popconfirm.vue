<!--  -->
<template>
<div class="containerLay">
    <h2>Popconfirm 气泡确认框</h2>
    <p>点击元素，弹出气泡确认框。</p>
    <h3>基础用法</h3>
    <p>Popconfirm 的属性与 Popover 很类似，因此对于重复属性，请参考 Popover 的文档，在此文档中不做详尽解释。</p>
    <div class="demo">
        <template>
        <el-popconfirm
        title="这是一段内容确定删除吗？"
        >
        <el-button slot="reference">删除</el-button>
        </el-popconfirm>
        </template>
    </div>
    <h3>自定义</h3>
    <p>可以在 Popconfirm 中自定义内容。</p>
    <div class="demo">
        <template>
        <el-popconfirm
        confirmButtonText='好的'
        cancelButtonText='不用了'
        icon="el-icon-info"
        iconColor="red"
        title="这是一段内容确定删除吗？"
        >
        <el-button slot="reference">删除</el-button>
        </el-popconfirm>
        </template>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
name:'Popconfirm',
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