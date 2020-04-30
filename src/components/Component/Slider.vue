<!--  -->
<template>
<div class="containerLay">
    <h2>Slider 滑块</h2>
    <p>通过拖动滑块在一个固定区间内进行选择</p>
    <h3>基础用法</h3>
    <p>在拖动滑块时，显示当前值</p>
    <div class="demo">
        <template>
        <div class="block">
            <span class="demonstration">默认</span>
            <el-slider v-model="value1"></el-slider>
        </div>
        <div class="block">
            <span class="demonstration">自定义初始值</span>
            <el-slider v-model="value2"></el-slider>
        </div>
        <div class="block">
            <span class="demonstration">隐藏 Tooltip</span>
            <el-slider v-model="value3" :show-tooltip="false"></el-slider>
        </div>
        <div class="block">
            <span class="demonstration">格式化 Tooltip</span>
            <el-slider v-model="value4" :format-tooltip="formatTooltip"></el-slider>
        </div>
        <div class="block">
            <span class="demonstration">禁用</span>
            <el-slider v-model="value5" disabled></el-slider>
        </div>
        </template>
    </div>
    <h3>离散值</h3>
    <p>选项可以是离散的</p>
    <div class="demo">
        <template>
        <div class="block">
            <span class="demonstration">不显示间断点</span>
            <el-slider
            v-model="value1"
            :step="10">
            </el-slider>
        </div>
        <div class="block">
            <span class="demonstration">显示间断点</span>
            <el-slider
            v-model="value2"
            :step="10"
            show-stops>
            </el-slider>
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
name:'Slider',
components: {},
data() {
//这里存放数据
return {
    value1: 0,
    value2: 50,
    value3: 36,
    value4: 48,
    value5: 42    
}
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    formatTooltip(val) {
        return val / 100;
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


</style>