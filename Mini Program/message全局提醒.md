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
