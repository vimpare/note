**外部样式类**
小程序组件使用外部样式，在Component 中用 externalClasses 定义段定义若干个外部样式类。这个特性从小程序基础库版本 1.9.90 开始支持。
代码实例：
```
Component({
  externalClasses: ['my-class']
})
```

```
<!-- 组件 custom-component.wxml -->
<custom-component class="my-class">
  这段文本的颜色由组件外的 class 决定
</custom-component>
```
**全局样式类**
使用外部样式类可以让组件使用指定的组件外样式类，如果希望组件外样式类能够完全影响组件内部，可以将组件构造器中的options.addGlobalClass字段置为true。这个特性从小程序基础库版本 2.2.3 开始支持。

当开放了全局样式类，存在外部样式污染组件样式的风险，请谨慎选择。

代码示例：

```
/* 组件 custom-component.js */
Component({
  options: {
    addGlobalClass: true,
  }
})
```
```
<!-- 组件 custom-component.wxml -->
<text class="red-text">这段文本的颜色由组件外的 class 决定</text>
/* 组件外的样式定义 */
.red-text {
  color: red;
}
```
父组件可以通过 ```this.selectComponent``` 方法获取子组件实例对象，这样就可以直接访问组件的任意数据和方法。




```
<!--components/message/index.wxml-->
<view class="dhz-class dhz-message {{ visible ? 'dhz-message-show' : '' }}">{{content}}</view>
```
```
// components/message/index.js
let timmer = null;
Component({
  /**
   * 组件的属性列表
   */
  externalClasses: ['dhz-class'],
  properties: {
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    visible: false,
    content: '',
    duration: 2
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleShow(options) {
      this.setData({
        ...options,
        visible: true
      });

      const d = this.data.duration * 1000;

      if (timmer) clearTimeout(timmer);
      if (d !== 0) {
        timmer = setTimeout(() => {
          this.handleHide();
          timmer = null;
        }, d);
      }
    },

    handleHide() {
      this.setData({
        visible: false,
        content: '',
        duration: 2
      });
    }
  }
})
```

在父组件中：
```
const { $Message } = require('../../components/base/base');

//函数调用时： 
$Message({
  content: _validateStr
});
      

```















