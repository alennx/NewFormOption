import { getTemplate, getSlotContent, getStringTypeAttr } from '@/components/template'

var handle = function(_attr, _slots) {
    //定义默认属性
    let attributes = {
            type:{
                type:'selection',
                nameCN:"类型",
                items: ['text', 'password', 'textarea'],//url、email、date未加入
                value:''
            },
            value:{
                type:'text',
                nameCN: "内容",
                value:''
            },
            size:{
                type:'selection',
                nameCN: "大小",
                items: ['large', 'small', ''],//default
                value:''
            },
            placeholder:{
                type:'text',
                nameCN: "默认文本内容",
                value:''
            },
            clearable: {
                type: 'boolean',
                nameCN: "显示清空",
                value: false
            },
            disabled:{
                type:'boolean',
                nameCN: "设置禁用",
                value:false
            },
            readonly:{
                type:'boolean',
                nameCN: "设置只读",
                value:false
            },
            maxlength:{
                type:'number',
                nameCN: "最大输入长度",
                value:''
            },
            icon:{
                type:'ionicon',
                nameCN: "输入框尾部图标",
                value:''
            },
            rows:{
                type:'number',
                nameCN: "默认行数",
                value:''
            },
            autosize:{
                type:'boolean',
                nameCN: "自适应高度",
                value:false
            },
            number:{
                type:'boolean',
                nameCN: "转换数字了下",
                value:false
            },
            autofoucs:{
                type:'boolean',
                nameCN: "自动获取焦点",
                value:false
            }
        },
        slots = {
            prepend:[],
            append:[]
        }

    //覆盖默认属性
    Object.assign(slots, _slots)
    Object.assign(attributes, _attr)

    //根据组件不同需要做的不同操作


    //获取插槽模板内容
    var subContent = getSlotContent(slots)
    console.log(subContent);
        //设置当前组件的slot
    if (attributes.slot && attributes.slot !== 'default') {
        attributes.slot = {
            type: 'text',
            value: attributes.slot
        }
    } else {
        attributes.slot = {
            type: 'text',
            value: ''
        }
    }

    //字符串模板操作
    let stringAttr = getStringTypeAttr(attributes)
    let template = `<Input 
                        ${stringAttr}>
                        ${subContent}
                    </Input>`

    return { template, attributes, slots }
}
export default handle
