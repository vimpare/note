


项目中遇到加载列表数据一千多条，发现在小程序中渲染时间过慢，后采用分屏加载方法。
####IntersectionObserver 对象
IntersectionObserver 对象，用于推断某些节点是否可以被用户看见、有多大比例可以被用户看见。

**wx.createIntersectionObserver(Object this, Object options)**

https://developers.weixin.qq.com/miniprogram/dev/api/wx.createIntersectionObserver.html

方法
```
IntersectionObserver.relativeTo(string selector, Object margins)
使用选择器指定一个节点，作为参照区域之一。

IntersectionObserver.relativeToViewport(Object margins)
指定页面显示区域作为参照区域之一

IntersectionObserver.observe(string targetSelector, IntersectionObserver.observeCallback callback)
指定目标节点并开始监听相交状态变化情况
 callback监听相交状态变化的回调函数

IntersectionObserver.disconnect()
停止监听。回调函数将不再触发
```
用以组件进入可视区域的时候，就显示，否则隐藏；
主页面中：
wxml:
```
 <scroll-view scroll-y="true" style="height:{{scrollHeight}}px" scroll-into-view="{{scrollTopId!='#'?scrollTopId:'specal'}}" hidden="{{relShow}}">
      <Brand wx:for="{{brandlist}}" wx:for-item="item" item="{{item}}" wx:key="{{index}}" index="{{index}}" id="{{item.key!='#'?item.key:'specal'}}" len="{{item.list.length}}" bind:bindbrand="bindbrand"/>
    </scroll-view>
```
json中：
```
"usingComponents": {
    "Brand": "../../components/brandItem/index" 
  }
```
组件wxml：
```
<view class="observer" wx:if="{{ observer_status}}" style='height:{{len*90}}rpx;'></view>
<view class="selection select{{index}}" wx:else>
 <!-- 内容 -->
</view>
```
组件js:
```
let mixin = require('../../mixin/mixin')

Component({
  behaviors: [mixin],
  properties: {
    item: {
      type: Object,
      value: {}
    },
    index: {
      type: Number,
      value: 0
    },
    len: {
      type: Number,
      value: 0
    }
  },
  ready: function() {},
  methods: {
    bindbrand: function(e) {   
      <!-- con -->
    }
  }
})
```
其中mixin.js:
用到了组件behaviors
```
module.exports = Behavior({
  data: {
    observer_status: true
  },
  ready() {
    this.observer = this.createIntersectionObserver().relativeToViewport()
    this.observer.observe('.observer', (res) => {
      this.setData({
        observer_status: false
      })
      this.observer.disconnect()
      this.observer = null
    })
  },
  detached() {
    this.observer && this.observer.disconnect()
  },
})
```
**behaviors：**
* behaviors 是用于组件间代码共享的特性，类似于一些编程语言中的“mixins”或“traits”。
* 每个 behavior 可以包含一组属性、数据、生命周期函数和方法，组件引用它时，它的属性、数据和方法会被合并到组件中，生命周期函数也会在对应时机被调用。
* 每个组件可以引用多个 behavior 。 behavior 也可以引用其他 behavior 。
  
 behavior 需要使用 Behavior() 构造器定义。
 组件引用时，在 behaviors 定义段中将它们逐个列出即可
  `behaviors: [mixin]`
