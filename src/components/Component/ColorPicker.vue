<!--  -->
<template>
<div class="containerLay">
    <h2>ColorPicker 颜色选择器</h2>
    <p>用于颜色选择，支持多种格式。</p>
    <h3>基础用法</h3>
    <div class="demo">
        <div class="block">
        <span class="demonstration">有默认值</span>
        <el-color-picker v-model="color1"></el-color-picker>
        </div>
        <div class="block">
        <span class="demonstration">无默认值</span>
        <el-color-picker v-model="color2"></el-color-picker>
        </div>

    </div>
    <h3>选择透明度</h3>
    <div class="demo">
        <el-color-picker v-model="color" show-alpha></el-color-picker>
    </div>
    <h3>预定义颜色</h3>
    <div class="demo">
        <el-color-picker
        v-model="color3"
        show-alpha
        :predefine="predefineColors">
        </el-color-picker>
    </div>
    <h3>不同尺寸</h3>
    <div class="demo">
        <el-color-picker v-model="color4"></el-color-picker>
        <el-color-picker v-model="color4" size="medium"></el-color-picker>
        <el-color-picker v-model="color4" size="small"></el-color-picker>
        <el-color-picker v-model="color4" size="mini"></el-color-picker>
    </div>
    
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
name:'ColorPicker',
components: {},
data() {
//这里存放数据
return {
    color1: '#409EFF',
    color2: null,
    color: 'rgba(19, 206, 102, 0.8)' ,
    color3: 'rgba(255, 69, 0, 0.68)',
    predefineColors: [
        '#ff4500',
        '#ff8c00',
        '#ffd700',
        '#90ee90',
        '#00ced1',
        '#1e90ff',
        '#c71585',
        'rgba(255, 69, 0, 0.68)',
        'rgb(255, 120, 0)',
        'hsv(51, 100, 98)',
        'hsva(120, 40, 94, 0.5)',
        'hsl(181, 100%, 37%)',
        'hsla(209, 100%, 56%, 0.73)',
        '#c7158577'
    ],
    color4: '#409EFF'   
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