<!--  -->
<template>
<div class='containerNav'>
    <div class="container">
        <ul class="main">
            <li class="sponsors">
                <ul>
                    <li>
                        <a href="">赞助商</a>
                    </li>
                    <li>
                        <img src="@/assets/tree.svg" alt="">
                    </li>
                </ul>
            </li>
            <li class="component">
                <h4>组件</h4>
                <ul>
                    <li v-for="(link,index) in linkList" :key="index">
                        <router-link :to="'/component/'+link.split(/\s/)[0].toLowerCase()">{{link}}</router-link>
                    </li>             
                </ul>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
name:'NavList',
components: {},
data() {
//这里存放数据
return {
    linkList:[
        'Layout 布局',
        'Container 布局容器',
        'Icon 图标',
        'Button 按钮',
        'Link 文字链接',
        'Radio 单选框',
        'Checkbox 多选框',
        'Input 输入框',
        'InputNumber 计数器',
        'Select 选择器',
        'Cascader 级联选择器',
        'Switch 开关',
        'Slider 滑块',
        'TimePicker 时间选择器',
        'DatePicker 日期选择器',
        'DateTimePicker 日期时间选择器',
        'Upload 上传',
        'Rate 评分',
        'ColorPicker 颜色选择器',
        'Transfer 穿梭框',
        'Form 表单',
        'Table 表格',
        'Tag 标签',
        'Progress 进度条',
        'Tree 树形控件',
        'Pagination 分页',
        'Badge 标记',
        'Avatar 头像',
        'Alert 警告',
        'Loading 加载',
        'Message 消息提示',
        'MessageBox 弹框',
        'Notification 通知',
        'NavMenu 导航菜单',
        'Tabs 标签页',
        'Breadcrumb 面包屑',
        'PageHeader 页头',
        'Dropdown 下拉菜单',
        'Steps 步骤条',
        'Dialog 对话框',
        'Tooltip 文字提示',
        'Popover 弹出框',
        'Popconfirm 气泡确认框',
        'Card 卡片',
        'Carousel 走马灯',
        'Collapse 折叠面板',
        'Timeline 时间线',
        'Divider 分割线',
        'Calendar 日历',
        'Image 图片',
        'Backtop 回到顶部',
        'InfiniteScroll 无限滚动',
        'Drawer 抽屉'
    ]
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
    // console.log(this.linkList[3].split(/\s/)[0].toLowerCase());
    // console.log('/component/'+this.linkList[3].split(/\s/)[0].toLowerCase())
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
.containerNav{overflow:hidden;width:240px; position:fixed; top:0; bottom:0; margin-top:80px;}
.container{display:block; height:100%; overflow:auto; padding:50px 0; box-sizing:border-box;}
.sponsors ul li a{color:#777; font-size:14px; font-weight:300px; height:40px; display:block; line-height:40px;}
.sponsors ul li img{width:42px;}
.component h4{color:#333;}
.component ul li a{height:40px; line-height:40px; overflow:hidden; white-space: nowrap; text-overflow:ellipsis; color:#444; font-size:14px;}
.component ul li .router-link-active{color:#409eff;}
</style>