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
