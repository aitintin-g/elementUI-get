<!--  -->
<template>
<div class="containerLay">
    <h2>InputNumber 计数器</h2>
    <p>仅允许输入标准的数字值，可定义范围</p>
    <h3>基础用法</h3>
    <div class="demo">
        <template>
        <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
        </template>
    </div>
    <h3>禁用状态</h3>
    <div class="demo">
        <template>
        <el-input-number v-model="num" :disabled="true"></el-input-number>
        </template>
    </div>
    <h3>步数</h3>
    <p>允许定义递增递减的步数控制</p>
    <div class="demo">
        <template>
        <el-input-number v-model="num2" :step="2"></el-input-number>
        </template>
    </div>
    <h3>严格步数</h3>
    <p>允许定义递增递减的步数控制</p>
    <div class="demo">
        <template>
        <el-input-number v-model="num3" :step="2" step-strictly></el-input-number>
        </template>
    </div>
    <h3>精度</h3>
    <div class="demo">
        <template>
        <el-input-number v-model="num4" :precision="2" :step="0.1" :max="10"></el-input-number>
        </template>
    </div>
    <h3>尺寸</h3>
    <p>额外提供了 medium、small、mini 三种尺寸的数字输入框</p>
    <div class="demo">
        <template>
        <el-input-number v-model="num5"></el-input-number>
        <el-input-number size="medium" v-model="num6"></el-input-number>
        <el-input-number size="small" v-model="num7"></el-input-number>
        <el-input-number size="mini" v-model="num8"></el-input-number>
        </template>
    </div>
    <h3>按钮位置</h3>
    <div class="demo">
        <template>
        <el-input-number v-model="num9" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
        </template>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
name:'InputNumber',
components: {},
data() {
//这里存放数据
return {
    num: 1,
    num2: 5,
    num3: 5,
    num4: 5,
    num5: 1,
    num6: 1,
    num7: 1,
    num8: 1,
    num9: 1  
}
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    handleChange(value) {
        console.log(value);
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