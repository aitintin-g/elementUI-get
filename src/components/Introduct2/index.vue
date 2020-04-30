<!--  -->
<template>
<div class=''>
   <div class="container">
        <div class="nav">
            <a href="">赞助商</a>
            <img src="@/assets/tree.svg" alt="">
            <router-link to="/introduct/introduct1" tag="a">设计原则</router-link>
            <router-link to="/introduct/introduct2" tag="a">导航</router-link>
        </div>
        <div class="content">
            <h2>导航</h2>
            <div class="block">
                <p>导航可以解决用户在访问页面时：在哪里，去哪里，怎样去的问题。一般导航会有「侧栏导航」和「顶部导航」2 种类型。</p>
            </div>
            <div class="block">
                <h3>选择合适的导航</h3>
                <p>选择合适的导航可以让用户在产品的使用过程中非常流畅，相反若是不合适就会引起用户操作不适（方向不明确），以下是「侧栏导航」和 「顶部导航」的区别。</p>
            </div>
            <div class="block">
                <h3>侧栏导航</h3>
                <div class="devide">
                    <p>可将导航栏固定在左侧，提高导航可见性，方便页面之间切换；顶部可放置常用工具，如搜索条、帮助按钮、通知按钮等。适用于中后台的管理型、工具型网站。</p>
                    <div>
                        <img src="@/assets/navbar_1.499e088.png" alt="">
                        <h5>一级类目</h5>
                        <p>适用于结构简单的网站：只有一级页面时，不需要使用面包屑。</p>
                        <img src="@/assets/navbar_2.59ecae2.png" alt="">
                        <h5>二级类目</h5>
                        <p>侧栏中最多可显示两级导航；当使用二级导航时，我们建议搭配使用面包屑，方便用户定位自己的位置和快速返回。</p>
                        <img src="@/assets/navbar_3.8dcec92.png" alt="">
                        <h5>三级类目</h5>
                        <p>适用于较复杂的工具型后台，左侧栏为一级导航，中间栏可显示其对应的二级导航，也可放置其他的工具型选项。</p>
                    </div>
                </div>
            </div>
            <div class="block">
                <h3>顶部导航</h3>
                <div class="devide">
                    <p>顺应了从上至下的正常浏览顺序，方便浏览信息；顶部宽度限制了导航的数量和文本长度。</p>
                    <div>
                       <img src="@/assets/navbar_0.b608f86.png" alt=""> 
                       <p>适用于导航较少，页面篇幅较长的网站。</p>
                    </div>
                </div>
            </div>
        </div>
    </div> 
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
name:'Introduct2',
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
.container{width:1140px; margin:0 auto; overflow:hidden; padding:55px 30px 95px 30px; box-sizing:border-box;}
.nav{width:20%; float:left; text-align:left;}
.content{width:80%; float:left; padding-left:25px; box-sizing:border-box;}
.nav a{display: block; text-align:left; line-height:40px; color:#333; font-weight:bold;}
.nav a:first-child{font-size:14px; color:#777; font-weight:normal;}
.nav .router-link-active{color:#409eff}
.nav img{width:42px; margin: -2px 12px 23px 0;}
.content h2{color:#1f2f3d; font-weight:normal; margin-bottom:10px;}
.content .block{margin-bottom:55px;}
.content .block h3{font-size:22px; color:#1f2d3d; margin-bottom:30px; font-weight:normal;}
.content .block p{font-size:14px; color:#5e6d82; margin-bottom:15px;}
.content .block .devide:after{clear:both}
.content .block .devide>p{width:37.5%; float:left;}
.content .block .devide div{width:62.5%; float:left;}
.content .block .devide div img{width:100%; padding:15px;}
.content .block .devide div h5{font-weight:normal;}
.content .block .devide div p{margin-bottom:50px;}
</style>