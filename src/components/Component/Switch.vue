<!--  -->
<template>
<div class="containerLay">
    <h2>Switch 开关</h2>
    <p>表示两种相互对立的状态间的切换，多用于触发「开/关」。</p>
    <h3>基础用法</h3>
    <div class="demo">
       <el-switch
        v-model="value"
        active-color="#13ce66"
        inactive-color="#ff4949">
        </el-switch>
    </div>
    <h3>文字描述</h3>
    <div class="demo">
        <el-switch
        v-model="value1"
        active-text="按月付费"
        inactive-text="按年付费">
        </el-switch>
        <el-switch
        style="display: block"
        v-model="value2"
        active-color="#13ce66"
        inactive-color="#ff4949"
        active-text="按月付费"
        inactive-text="按年付费">
        </el-switch>
    </div>
    <h3>扩展的 value 类型</h3>
    <div class="demo">
        <el-tooltip :content="'Switch value: ' + value3" placement="top">
        <el-switch
            v-model="value3"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-value="100"
            inactive-value="0">
        </el-switch>
        </el-tooltip>
    </div>
    <h3>扩展的 value 类型</h3>
    <div class="demo">
        <el-switch
        v-model="value4"
        disabled>
        </el-switch>
        <el-switch
        v-model="value5"
        disabled>
        </el-switch>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
name:'Switch1',
components: {},
data() {
//这里存放数据
return {
    value: true,
    value1: true,
    value2: true,
    value3: '100',
    value4: true,
    value5: false    
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