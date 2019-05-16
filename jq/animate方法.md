# jQuery 效果 - animate() 方法

标签（空格分隔）： jq

---
改变 "div" 元素的高度：
```
$(".btn1").click(function(){
  $("#box").animate({height:"300px"});
});
```
animate() 方法执行 CSS 属性集的自定义动画。

该方法通过CSS样式将元素从一个状态改变为另一个状态。CSS属性值是逐渐改变的，这样就可以创建动画效果。

只有数字值可创建动画（比如 "margin:30px"）。字符串值无法创建动画（比如 "background-color:red"）。

`$(selector).animate(styles,speed,easing,callback)`
`$(selector).animate(styles,options)`
