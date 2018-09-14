import { getTemplate, getSlotContent , getStringTypeAttr } from '@/components/template'

var handle = function(_attr, _slots) {
    //定义默认属性
    let attributes = {
            name:{
                type:'text',
                value:''
            },
            nativeValue:{
                type:'text',
                value:''
            },
            label:{
                type:'text',
                value:'Checkbox'
            },
            labelLeft:{
                type:'boolean',
                value:false
            },
            labelClass:{
                type:'text',
                value:''
            },
            disabled:{
                type:'boolean',
                value:false
            },
            uncheckIcon:{
                type:'icon',
                value:''
            },
            checkedIcon:{
                type:'icon',
                value:''
            },
            iconClass:{
                type:'itext',
                value:''
            },
            value:{
                type:'boolean',
                value:false,
                notBind:true
            }
        },
        slots = {
        }

    //覆盖默认属性
    Object.assign(slots, _slots)
    Object.assign(attributes, _attr)

    //根据组件不同需要做的不同操作


    //获取插槽模板内容
    var subContent = getSlotContent(slots)

    //设置当前组件的slot
    if (attributes.slot && attributes.slot!=='default') {
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
    let template = `<mu-radio 
                    ${stringAttr}>
                    ${subContent}
                </mu-radio>`


    return { template, attributes, slots }
}
export default handle
