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


**加载转圈样式**
```
.i-btn-loading-inner {
  display: inline-block;
  margin-right: 12px;
  vertical-align: middle;
  width: 14px;
  height: 14px;
  background: 0 0;
  border-radius: 50%;
  border: 2px solid #fff;
  border-color: #fff #fff #fff transparent;
  animation: btn-spin 0.6s linear;
  animation-iteration-count: infinite;//动画加载次数
}

.i-btn-disabled {
  color: #bbbec4 !important;
  background: #f7f7f7 !important;
}

.i-btn-inline {
  display: inline-block;
}

@keyframes btn-spin {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}
```


reset.css：
```
.bgf {
  background: #fff;
}

image {
  width: 100%;
  /* height: 100%; */
}

.ccc {
  color: #ccc;
}

.tc {
  text-align: center;
}

swiper {
  height: 100%;
}

.pd10 {
  padding: 10px 0;
}

.pdrl20 {
  padding: 0px 20rpx;
}

.pd2030 {
  padding: 20rpx 30rpx;
}

.pd2020 {
  padding: 20rpx;
}

.pd20 {
  padding: 20rpx 0;
}

.pd3030 {
  padding: 30rpx 30rpx;
}

.pd60 {
  padding: 60rpx 0;
}

.pdt10 {
  padding-top: 10rpx;
}

.pdt20 {
  padding-top: 20rpx;
}

.pdb20 {
  padding-bottom: 20rpx;
}

.pdall210 {
  padding: 2rpx 8rpx;
}

.pdall510 {
  padding: 5rpx 10rpx;
}

.pdr20 {
  padding-right: 20rpx;
}

.pdr10 {
  padding-right: 10rpx;
}

.pdl20 {
  padding-left: 20rpx;
}

.pdl30 {
  padding-left: 30rpx;
}

.pdl40 {
  padding-left: 40rpx;
}

.pdlr16 {
  padding: 0 16rpx;
}

.pdlr30 {
  padding: 0 30rpx;
}

.mglr16 {
  margin: 0 16rpx;
}

.mglr30 {
  margin: 0 30rpx;
}

.iconwidth {
  width: 40rpx;
  height: 40rpx;
}

.fix {
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  z-index: 9999;
}

.flex {
  display: flex;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
}

.flexs {
  display: flex;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: flex-start;
}

.flexnowrap {
  display: flex;
  box-sizing: border-box;
  flex-wrap: nowrap;
  align-items: center;
}

.fg1 {
  flex-grow: 1;
}

.jcontent {
  justify-content: space-between;
}

.asfe {
  align-self: flex-end;
}

.asfs {
  align-self: flex-start;
}

.jcontentc {
  justify-content: center;
}

.jcontente {
  justify-content: flex-end;
}

.basicolor {
  color: #f03a58;
}

.basibg {
  background: #f03a58;
}

.basiborder {
  border: 1rpx solid #f03a58;
}

.wd100 {
  width: 100%;
}

.wd50 {
  width: 50%;
}

.wd33 {
  width: 33%;
}

.wd21 {
  width: 21%;
}

.h100 {
  height: 100%;
}

.cf {
  color: #fff;
}

.bold {
  font-weight: bold;
}

.mgr30 {
  margin-right: 30rpx;
}

.mgr10 {
  margin-right: 10rpx;
}

.mgr16 {
  margin-right: 16rpx;
}

.mgb10 {
  margin-bottom: 10rpx;
}

.mgt20 {
  margin-top: 20rpx;
}

.mgb20 {
  margin-bottom: 20rpx;
}

.c9 {
  color: #999;
}

.c8 {
  color: #888;
}
.f24 {
  font-size: 24rpx;
}

.f28 {
  font-size: 28rpx;
}

.f30 {
  font-size: 30rpx;
}

.f32 {
  font-size: 32rpx;
}

.f34 {
  font-size: 34rpx;
}

.f36 {
  font-size: 36rpx;
}

.f38 {
  font-size: 38rpx;
}

.f40 {
  font-size: 40rpx;
}

.f44 {
  font-size: 44rpx;
}

.f48 {
  font-size: 48rpx;
}

.min {
  font-size: 22rpx;
}

.minmin {
  font-size: 18rpx;
}

.bradius4 {
  border-radius: 4px;
}

.bradius2 {
  border-radius: 2px;
}

.ellipsis2 {
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
}

.ellipsis1 {
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  word-break: break-all;
}

.bb {
  border-bottom: 1rpx solid #ececec;
}

.bbt {
  border-top: 1rpx solid #ececec;
}

.ball {
  border: 1rpx solid #ececec;
}

.minicon {
  width: 20rpx;
  height: 20rpx;
}

.boxsizing {
  box-sizing: border-box;
}
```
