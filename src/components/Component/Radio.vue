<!--  -->
<template>
<div class="containerLay">
    <h2>Radio 单选框</h2>
    <p>在一组备选项中进行单选</p>
    <h3>基础用法</h3>
    <p>由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。</p>
    <div class="demo">
        <template>
        <el-radio v-model="radio" label="1">备选项</el-radio>
        <el-radio v-model="radio" label="2">备选项</el-radio>
        </template>
    </div>
    <h3>禁用状态</h3>
    <p>单选框不可用的状态。</p>
    <div class="demo">
        <template>
        <el-radio disabled v-model="radio" label="禁用">备选项</el-radio>
        <el-radio disabled v-model="radio" label="选中且禁用">备选项</el-radio>
        </template>
    </div>
    <h3>单选框组</h3>
    <p>适用于在多个互斥的选项中选择的场景</p>
    <div class="demo">
        <template>
        <el-radio-group v-model="radio2">
            <el-radio :label="3">备选项</el-radio>
            <el-radio :label="6">备选项</el-radio>
            <el-radio :label="9">备选项</el-radio>
        </el-radio-group>
        </template>
    </div>
    <h3>按钮样式</h3>
    <p>按钮样式的单选组合。</p>
    <div class="demo">
        <template>
        <div>
            <el-radio-group v-model="radio3">
            <el-radio-button label="上海"></el-radio-button>
            <el-radio-button label="北京"></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
        </div>
        <div style="margin-top: 20px">
            <el-radio-group v-model="radio4" size="medium">
            <el-radio-button label="上海" ></el-radio-button>
            <el-radio-button label="北京"></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
        </div>
        <div style="margin-top: 20px">
            <el-radio-group v-model="radio5" size="small">
            <el-radio-button label="上海"></el-radio-button>
            <el-radio-button label="北京" disabled ></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
        </div>
        <div style="margin-top: 20px">
            <el-radio-group v-model="radio6" disabled size="mini">
            <el-radio-button label="上海"></el-radio-button>
            <el-radio-button label="北京"></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
        </div>
        </template>
    </div>
    <h3>禁用状态</h3>
    <p>单选框不可用的状态。</p>
    <div class="demo">
        <template>
        <div>
            <el-radio v-model="radio7" label="1" border>备选项1</el-radio>
            <el-radio v-model="radio7" label="2" border>备选项2</el-radio>
        </div>
        <div style="margin-top: 20px">
            <el-radio v-model="radio8" label="1" border size="medium">备选项1</el-radio>
            <el-radio v-model="radio8" label="2" border size="medium">备选项2</el-radio>
        </div>
        <div style="margin-top: 20px">
            <el-radio-group v-model="radio9" size="small">
            <el-radio label="1" border>备选项1</el-radio>
            <el-radio label="2" border disabled>备选项2</el-radio>
            </el-radio-group>
        </div>
        <div style="margin-top: 20px">
            <el-radio-group v-model="radio10" size="mini" disabled>
            <el-radio label="1" border>备选项1</el-radio>
            <el-radio label="2" border>备选项2</el-radio>
            </el-radio-group>
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
name:'Radio',
components: {},
data() {
//这里存放数据
return {
radio: '1',
radio2: 3,
radio3: '上海',
radio4: '上海',
radio5: '上海',
radio6: '上海',
radio7: '1',
radio8: '1',
radio9: '1',
radio10: '1' 
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