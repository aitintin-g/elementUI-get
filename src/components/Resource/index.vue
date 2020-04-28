<!--  -->
<template>
<div class='containerRes'>
    <div class="container">
        <h2>资源</h2>
        <p>设计资源正在整理和完善中</p>
        <div class="cards">
            <ul>
                <li>
                    <div class="card">
                        <img src="@/assets/axure.svg" alt="">
                        <h3>Axure Components</h3>
                        <p>通过在 Axure 中导入 Element 组件库，可以在交互设计阶段方便地调用常用的组件</p>
                        <a href="###">下载</a>
                    </div>
                </li>
                <li>
                    <div class="card">
                        <img src="@/assets/sktch.svg" alt="">
                        <h3>Sketch Template</h3>
                        <p>从 Element Template 快速调用常用组件，在提升设计效率的同时，保证统一的视觉风格</p>
                        <a href="###">下载</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {

};
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
.containerRes{margin:0 auto 55px auto; width:1140px; padding-top:55px;}
.containerRes h2{font-size:28px; font-weight:400;}
.containerRes p{font-size:14px; color:#5e6d82; line-height:1.5em; margin:10px 0;}
.cards{margin:35px 0 110px;}
.cards ul{overflow:hidden;}
.cards ul li{width:33.3%; padding: 0 11px;box-sizing: border-box;float: left;list-style: none;}
.card{height: 394px;width: 100%;background: #fff;border: 1px solid #eaeefb;border-radius: 5px;box-sizing: border-box;text-align: center;position: relative;transition: bottom .3s;bottom: 0;}
.card img{height:87px; margin:75px 0 35px;}
.card h3{color:#1f2f3d; font-size:18px; font-weight:400; height:22px; margin:0 0 10px;}
.card p{color:#99a9bf; line-height:1.8; font-size:14px; padding:0 30px; word-break:break-all;}
.card a{display:inline-block; width:190px; height:42px; line-height:42px; background:#409eff; color:#fff; text-align:center; font-size:14px; border-radius:2px; cursor:pointer;}
</style>