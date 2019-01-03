* CSS 这门语言本身并无逻辑可言，看重的是特性间的相
互联系和具象能力。
* CSS 世界的诞生就是为图文信息展示服务的。
* `<table>`比 CSS 还要老，也就是 CSS 正式诞生之前，`<table>`就已经出现了。
* 未定义行为：法律空白  web标准并没有详细描述此时的行为表现，而Chrome浏览器根据自己的理解或者规则去处理了。 https://www.zhangxinxu.com/wordpress/2015/04/understand-web-front-undefined-behavior/
* “块级元素”和“display 为 block 的元素”不是一个概念。`<li>`元素默认的 display 值是 list-item，`<table>`元素默认的 display 值是 table，但是它们
均是“块级元素”，因为它们都符合块级元素的基本特征，也就是一个水平流上只能单独显示一个元素，多个块级元素则换行显示。
* `display:inline-table`可以和文字在一行中显示的表格
* 按钮文字越多宽度越宽（内部尺寸特性），但如果文字足够多，则会在容器的
宽度处自动换行（自适应特性）
* 对于一个元素，如果其 display 属性值是 inline-block，那么即使其里面内容再多，只要是正常文本，宽度也不会超过容器。于是，图文混排的时候，我们只要关心内容，除非“首选最小宽度”比容器宽度还要大，否则我们完全不需要担心某个元素内容太多而破坏了布局
* **请问，如何使用一层 HTML 标签分别实现图 3-13 所示的“凹”和“凸”效果（注意要兼容 IE8）？**
```
.ao {
display: inline-block;
width: 0;
}
.ao:before {
content: "love 你 love";
outline: 2px solid #cd0000;
color: #fff;
}
```
`https://demo.cssworld.cn/3/2-6.php`
* 宽度分离
