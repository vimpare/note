### 管道符 ###
```
a + a:before {
content: "";
font-size: 0;
padding: 10px 3px 1px;
margin-left: 6px;
border-left: 1px solid gray;
}
```
```
<a href="">登录</a><a href="">注册</a>
```
* padding 百分比值无论是水平方向还是垂直方向均是相对于宽度计算的。`div { padding: 50%; }`就可以实现一个正方形
* 制作网页的时候很少使用原生的`<button>`按钮作为点击按钮，而是使用`<a>`标签来模拟。但是，在表单中，有时候按钮是自带交互行为的，这是`<a>`标签无法模拟的。我这里给大家推荐一个既语义良好行为保留，同时 UI效果棒兼容效果好的实现小技巧，那就是使用`<label>`元素
```
<button id="btn"></button>
<label for="btn">按钮</label>
button {
position: absolute;
clip: rect(0 0 0 0);
}
label {
display: inline-block;
line-height: 20px;
padding: 10px;
}
```

### background-clip 属性 ###

  规定背景的绘制区域：
  ```
  background-clip:content-box;
   background-clip: border-box|padding-box|content-box;
  ```

  >IE9+、Firefox、Opera、Chrome 以及 Safari 支持 background-clip 属性
 
 “三道杠”和双层圆点图形效果:
 ```
 .icon-menu {
display: inline-block;
width: 140px; height: 10px;
padding: 35px 0;
border-top: 10px solid;
border-bottom: 10px solid;
background-color: currentColor;
background-clip: content-box;
}
```
```
.icon-dot {
display: inline-block;
width: 100px; height: 100px;
padding: 10px;
border: 10px solid;
border-radius: 50%;
background-color: currentColor;
background-clip: content-box;
}
```
