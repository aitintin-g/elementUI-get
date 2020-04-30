<!--  -->
<template>
<div class="containerLay">
    <h2>Tooltip 文字提示</h2>
    <p>常用于展示鼠标 hover 时的提示信息。</p>
    <h3>基础用法</h3>
    <p>在这里我们提供 9 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。</p>
    <div class="demo">
        <div class="box">
        <div class="top">
            <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
            <el-button>上左</el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
            <el-button>上边</el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Top Right 提示文字" placement="top-end">
            <el-button>上右</el-button>
            </el-tooltip>
        </div>
        <div class="left">
            <el-tooltip class="item" effect="dark" content="Left Top 提示文字" placement="left-start">
            <el-button>左上</el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Left Center 提示文字" placement="left">
            <el-button>左边</el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Left Bottom 提示文字" placement="left-end">
            <el-button>左下</el-button>
            </el-tooltip>
        </div>

        <div class="right">
            <el-tooltip class="item" effect="dark" content="Right Top 提示文字" placement="right-start">
            <el-button>右上</el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
            <el-button>右边</el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Right Bottom 提示文字" placement="right-end">
            <el-button>右下</el-button>
            </el-tooltip>
        </div>
        <div class="bottom">
            <el-tooltip class="item" effect="dark" content="Bottom Left 提示文字" placement="bottom-start">
            <el-button>下左</el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
            <el-button>下边</el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Bottom Right 提示文字" placement="bottom-end">
            <el-button>下右</el-button>
            </el-tooltip>
        </div>
        </div>
    </div>
    <h3>主题</h3>
    <p>Tooltip 组件提供了两个不同的主题：dark和light。</p>
    <div class="demo">
        <el-tooltip content="Top center" placement="top">
        <el-button>Dark</el-button>
        </el-tooltip>
        <el-tooltip content="Bottom center" placement="bottom" effect="light">
        <el-button>Light</el-button>
        </el-tooltip>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
name:'Tooltip',
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

.box {
    width: 400px;

    .top {
      text-align: center;
    }

    .left {
      float: left;
      width: 60px;
    }

    .right {
      float: right;
      width: 60px;
    }

    .bottom {
      clear: both;
      text-align: center;
    }

    .item {
      margin: 4px;
    }

    .left .el-tooltip__popper,
    .right .el-tooltip__popper {
      padding: 8px 10px;
    }
  }

</style>