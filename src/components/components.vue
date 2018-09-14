<template>
    <section>
        <!-- <mu-content-block style="display:flex;">
            <Select v-model="activeUI" @change="handleTabChange" autoWidth>
                <Option title="Muse-UI" value="Muse-UI">
                </Option>
                <Option title="Mint-UI" value="Mint-UI">
                </Option>
                <Option title="iView-UI" value="iView-UI">
                </Option>
                <Option title="Element-UI" value="Element-UI">
                </Option>
                <Option title="通用" value="Common">
                </Option>
            </Select>
        </mu-content-block> -->
        <div v-if="activeUI === 'iView-UI'">
            <h3 style="width:100%;height:50px;line-height:50px;text-align:center;border-bottom:1px solid #ccc;">元素库</h3>
            <ul class="components-list iview-ui">
                <li draggable="true" @dragstart="dragStart" data-name="Button">
                    按钮
                </li>
                <li draggable="true" @dragstart="dragStart" data-name="Input">
                    输入框
                </li>
                <li draggable="true" @dragstart="dragStart" data-name="Radio">
                    单选框
                </li>
                <li draggable="true" @dragstart="dragStart" data-name="Checkbox">
                    多选框
                </li>
                <li draggable="true" @dragstart="dragStart" data-name="Select">
                    下拉框
                </li>
                <li draggable="true" @dragstart="dragStart" data-name="DatePicker">
                    日期控件
                </li>
                <li draggable="true" @dragstart="dragStart" data-name="TimePicker">
                    时间控件
                </li>
                <li draggable="true" @dragstart="dragStart" data-name="Upload">
                    文件上传
                </li>
                <!-- <li draggable="true" @dragstart="dragStart" data-name="ButtonGroup">
                    <iview-button-group />
                </li>
                <li draggable="true" @dragstart="dragStart" data-name="Icon">
                    <Icon type="happy-outline" :size="28" /> icon
                </li>
                <li draggable="true" @dragstart="dragStart" data-name="Input">
                        <Input placeholder="Input"></Input>
                </li>
                <li draggable="true" @dragstart="dragStart" data-name="Radio">
                    <Radio>Radio</Radio>
                </li>
                <li draggable="true" @dragstart="dragStart" data-name="RadioGroup">
                    <iview-radio-group />
                </li>
                <li draggable="true" @dragstart="dragStart" data-name="Checkbox">
                    <Checkbox>Checkbox</Checkbox>
                </li>
                <li draggable="true" @dragstart="dragStart" data-name="iSwitch">
                    <i-switch></i-switch>
                </li>
                <li draggable="true" @dragstart="dragStart" data-name="Select">
                    <iview-select />
                </li>
                <li draggable="true" @dragstart="dragStart" data-name="Slider">
                    Slider
                    <Slider :value="50" style="width:75%;display:inline-block;vertical-align:middle;" />
                </li>
                <li draggable="true" @dragstart="dragStart" data-name="DatePicker">
                    <Date-picker size="large" type="date" placeholder="Date Picker"></Date-picker>
                </li>
                <li draggable="true" @dragstart="dragStart" data-name="TimePicker">
                    <Time-picker size="large" type="time" placeholder="Time Picker"></Time-picker>
                </li>
                <li draggable="true" @dragstart="dragStart" data-name="InputNumber">
                   InputNumber <Input-number :max="10" :min="1" />
                </li>
                <li draggable="true" @dragstart="dragStart" data-name="Rate">
                    <Rate :value="5"/>
                </li>
                <li draggable="true" @dragstart="dragStart" data-name="Form">
                    <iview-form/>
                </li>
                <li draggable="true" @dragstart="dragStart" data-name="ColorPicker">
                    <ColorPicker value="#19be6b"/>
                </li>
                <li draggable="true" @dragstart="dragStart" data-name="Alert">
                    <Alert show-icon>Alert</Alert>
                </li>
                <li draggable="true" @dragstart="dragStart" data-name="Card">
                    <Card />
                </li> -->
            </ul>
        </div>
    </section>
</template>
<script>
import museUiList from './list/muse-ui'
import mintUiList from './list/mint-ui'
import iViewUiList from './list/iview-ui'
export default {
    name: 'components',
    data() {
        return {}
    },
    mounted() {

    },
    methods: {
        handleTabChange(val) {
            this.activeUI = val
        },
        getComponent(e) {
            if (!e)
                return
            if (e.localName !== 'li')
                return this.getComponent(e.parentElement)
            else
                return e
        },
        removeDom(e) {
            if (e && e.parentElement)
                e.parentElement.removeChild(e)
        },
        dragStart(e) {
            let componentName = e.target.getAttribute('data-name')
            let info = {
                name: componentName,
                ui: this.activeUI
            }
            e.dataTransfer.setData('info', JSON.stringify(info))
        }
    },
    computed: {
        activeUI: {
            get() {
                return this.$store.state.activeUI
            },
            set(val) {
                this.$store.commit('setState', {
                    activeUI: val
                })
            }
        }
    },
    components: {
        ...museUiList,
        ...mintUiList,
        ...iViewUiList
    }
}
</script>
<style lang="less" scoped>
.components-list {
    list-style: none;
    margin: 0;
    padding: 0;
}

.components-list * {
    cursor: move!important;
}

.components-list>li {
    min-height: 36px;
    font-size: 18px;
    -webkit-user-select: none;
    transform: scale(0.7)translateX(-15%);
    padding-bottom: 10px;
    transition: transform .2s;
    &:hover {
        transform: scale(1)translateX(5%);
    }
    i {
        vertical-align: middle;
    }
}

.components-list.iview-ui >li {
    width:100%;
    text-align: center;
    border-bottom:1px solid #ccc;
    height:80px;
    line-height:80px;
    transform: scale(1)translateX(0);
    &:hover {
        // transform: scale(1)translateX(0);
    }
}
</style>
