<!--  -->
<template>
<div class="containerLay">
    <h2>Avatar 头像</h2>
    <p>用图标、图片或者字符的形式展示用户或事物信息。</p>
    <h3>基本用法</h3>
    <p>通过 shape 和 size 设置头像的形状和大小。</p>
    <div class="demo">
        <template>
        <el-row class="demo-avatar demo-basic">
            <el-col :span="12">
            <div class="sub-title">circle</div>
            <div class="demo-basic--circle">
                <div class="block"><el-avatar :size="50" :src="circleUrl"></el-avatar></div>
                <div class="block" v-for="size in sizeList" :key="size">
                <el-avatar :size="size" :src="circleUrl"></el-avatar>
                </div>
            </div>
            </el-col>  
            <el-col :span="12">
            <div class="sub-title">square</div>
            <div class="demo-basic--circle">
                <div class="block"><el-avatar shape="square" :size="50" :src="squareUrl"></el-avatar></div>
                <div class="block" v-for="size in sizeList" :key="size">
                <el-avatar shape="square" :size="size" :src="squareUrl"></el-avatar>
                </div>
            </div>
            </el-col> 
        </el-row>
        </template>
    </div>
    <h3>展示类型</h3>
    <p>支持三种类型：图标、图片和字符</p>
    <div class="demo">
        <template>
        <div class="demo-type">
            <div>
            <el-avatar icon="el-icon-user-solid"></el-avatar>
            </div>
            <div>
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            </div>
            <div>
            <el-avatar> user </el-avatar>
            </div>
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
name:'Avatar',
components: {},
data() {
//这里存放数据
return {
    circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
        sizeList: ["large", "medium", "small"]    
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