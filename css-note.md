css
---------------------------
**input**
改变光标颜色：caret-color
自动获取焦点：autofocus
**左右两个元素等高**
```
这两个元素的父元素设置：
overflow：hidden<br>
左侧元素设置：
padding-bottom:9000px;margin-bottom:-9000px;<br>，    

```
##英文单词换行
```
word-wrap:break-word;
```
##filter滤镜
```
imgDiv.css({ filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)" });  

```
Microsoft.AlphaImageLoader是IE滤镜的一种，其主要作用就是对图片进行透明处理。

    filter : progid:DXImageTransform.Microsoft.AlphaImageLoader ( -enabled=bEnabled , sizingMethod=sSize , src=sURL )
column0 | column1
------- | -------
 | 属性：
 | enabled :　 | 可选项。布尔值(Boolean)。设置或检索滤镜是否激活。true | false
 | true | :　 | 默认值。滤镜激活。
 | false | :　 | 滤镜被禁止。
 | - sizingMethod | :　 | 可选项。字符串(String)。设置或检索滤镜作用的对象的图片在对象容器边界内的显示方式。
 | crop | :　 | 剪切图片以适应对象尺寸。
 | image | :　 | 默认值。增大或减小对象的尺寸边界以适应图片的尺寸。
 | scale | :　 | 缩放图片以适应对象的尺寸边界。
 | -src :　 | 必选项。字符串(String)。使用绝对或相对 url 
 | 地址指定背景图像。假如忽略此参数，滤镜将不会作用。

**媒体查询**
```
@media screen and (max-width: 960px){
    body{
    background-color:#FF6699
    }
}
```

**checkbox未选中时样式** 

```
checkbox .wx-checkbox-input{  
   /* 自定义样式.... */

  border-radius: 3rpx;

  height: 26rpx;

  width: 26rpx;

  margin-top: -4rpx;


}

```
**checkbox样式修改**

```
.wx-checkbox-input{
    display: none;
}
.ws-checkbox {
  display: inline-block;
  width: 30rpx;
  height: 30rpx;
  border-radius: 50%;
  background-image: url('');
  background-size: 60rpx 30rpx;
  background-position: 30rpx 0rpx;
}

.ws-checkbox[checked] {
  background-position: 0rpx 0rpx;
}
```
**vw**
这是一个新的系列单位，总共有四个vw, vh, vmin, vmax，分别表示视窗宽度，视窗高度，视窗宽高中的最小值，视窗宽高中的最大值。目前android 4.3- 不支持，ios支持良好，具体参考caniuse vw

1vw表示百分之一的视窗宽度，同理10vw就是百分之十。从这新单位的出现，也知道为了移动端的百分比我们的W3C组织也是操碎了心。

为了上面所说的四等分，那每个的宽度应该为25vw，而我们ul的list--xxx就是list--vw。

```
.list--vw{
  overflow: hidden;
}
.list--vw .item{
  float: left;
  width: 25vw;
  height: 25vw;
}
```

**rem**
原理就是js获取视窗宽度，然后设置html的font-size为视窗宽度的十分之一即百分之十，而rem单位表示相对于根元素html的大小，所以1rem即表示视窗宽度的十分之一。这样通过rem与html的font-size的关系，拐了个弯实现了一个相对于视窗宽度的百分比。

js设置html的font-size

```
  document.addEventListener("DOMContentLoaded", function(event) {
    document.documentElement.style.fontSize = window.innerWidth/10 + "px";
  });

```
css代码如下：

```
.list--rem{
  overflow: hidden;
}
.list--rem .item{
  float: left;
  width: 2.5rem;
  height: 2.5rem;
}
```

**图片高度占位**
跟pc的不一样，移动端的图片很多都不是固定的宽高的（icon图标与头像等一些小图还是固定大小的），所以就面临一个问题：不能设置一个具体的高度，于是就会出现加载过程其他内容随着图片的加载慢慢向下移动。

那如何解决这个问题呢？

给图片提供一个容器，设置高度为0，根据宽度按照图片的比例使用paddin-top得到一个高度值，然后图片绝对定位设置宽高为100%即可，如图片尺寸为200*100（则高度为宽度的二分之一）：

```
.img-wrap{
    position: relative;
    height: 0;
    padding-top: 50%；// 图片宽度的一半
}
.img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
```