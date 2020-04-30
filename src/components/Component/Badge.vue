<!--  -->
<template>
<div class="containerLay">
    <h2>Badge 标记</h2>
    <p>出现在按钮、图标旁的数字或状态标记。</p>
    <h3>基础用法</h3>
    <p>展示新消息数量</p>
    <div class="demo">
        <el-badge :value="12" class="item">
        <el-button size="small">评论</el-button>
        </el-badge>
        <el-badge :value="3" class="item">
        <el-button size="small">回复</el-button>
        </el-badge>
        <el-badge :value="1" class="item" type="primary">
        <el-button size="small">评论</el-button>
        </el-badge>
        <el-badge :value="2" class="item" type="warning">
        <el-button size="small">回复</el-button>
        </el-badge>

        <el-dropdown trigger="click">
        <span class="el-dropdown-link">
            点我查看<i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item class="clearfix">
            评论
            <el-badge class="mark" :value="12" />
            </el-dropdown-item>
            <el-dropdown-item class="clearfix">
            回复
            <el-badge class="mark" :value="3" />
            </el-dropdown-item>
        </el-dropdown-menu>
        </el-dropdown>
    </div>
    <h3>最大值</h3>
    <p>可自定义最大值。</p>
    <div class="demo">
        <el-badge :value="200" :max="99" class="item">
        <el-button size="small">评论</el-button>
        </el-badge>
        <el-badge :value="100" :max="10" class="item">
        <el-button size="small">回复</el-button>
        </el-badge>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
name:'Badge',
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

.item {
  margin-top: 10px;
  margin-right: 40px;
}

</style>