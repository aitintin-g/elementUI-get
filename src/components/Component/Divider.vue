<!--  -->
<template>
<div class="containerLay">
    <h2>Divider 分割线</h2>
    <p>区隔内容的分割线。</p>
    <h3>基础用法</h3>
    <p>对不同章节的文本段落进行分割。</p>
    <div class="demo">
        <template>
        <div>
            <span>青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪</span>
            <el-divider></el-divider>
            <span>少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉</span>
        </div>
        </template>
    </div>
    <h3>设置文案</h3>
    <p>可以在分割线上自定义文案内容。</p>
    <div class="demo">
        <template>
        <div>
            <span>头上一片晴天，心中一个想念</span>
            <el-divider content-position="left">少年包青天</el-divider>
            <span>饿了别叫妈, 叫饿了么</span>
            <el-divider><i class="el-icon-mobile-phone"></i></el-divider>
            <span>为了无法计算的价值</span>
            <el-divider content-position="right">阿里云</el-divider>
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
name:'Divider1',
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