<!--  -->
<template>
<div class="containerLay">
    <h2>Rate 评分</h2>
    <p>评分组件</p>
    <h3>基础用法</h3>
    <div class="demo">
        <div class="block">
        <span class="demonstration">默认不区分颜色</span>
        <el-rate v-model="value1"></el-rate>
        </div>
        <div class="block">
        <span class="demonstration">区分颜色</span>
        <el-rate
            v-model="value2"
            :colors="colors">
        </el-rate>
        </div>
    </div>
    <h3>辅助文字</h3>
    <p>用辅助文字直接地表达对应分数</p>
    <div class="demo">
        <el-rate
        v-model="value3"
        show-text>
        </el-rate>
    </div>
    <h3>其它 icon</h3>
    <p>当有多层评价时，可以用不同类型的 icon 区分评分层级</p>
    <div class="demo">
        <el-rate
        v-model="value4"
        :icon-classes="iconClasses"
        void-icon-class="iconfont icon-shoucang"
        :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
        </el-rate>
    </div>
    <h3>只读</h3>
    <p>只读的评分用来展示分数，允许出现半星</p>
    <div class="demo">
        <el-rate
        v-model="value5"
        disabled
        show-score
        text-color="#ff9900"
        score-template="{value}">
        </el-rate>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
name:'Rate',
components: {},
data() {
//这里存放数据
return {
    value1: null,
    value2: null,
    colors: ['#99A9BF', '#F7BA2A', '#FF9900'],  // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }    
    value3: null,
    value4: null,
    iconClasses: ['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3'], // 等同于 { 2: 'icon-rate-face-1', 4: { value: 'icon-rate-face-2', excluded: true }, 5: 'icon-rate-face-3' }
    value5: 3.7
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