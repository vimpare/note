**小程序:chooseimage成功会执行onHide和onShow**

    chooseImage的时候是进入了手机的原生组件阶段，小程序是会触发 onhide的生命周期，再次回到小程序的时候就触发 onshow的生命周期


**小程序实现图片放大预览功能**
实现方式：使用微信小程序图片预览接口
```
1.给图片添加一个点击事件(imgYu)
2. wx.previewImage({
  current: src, // 当前显示图片的http链接
  urls: imgList // 需要预览的图片http链接列表
 })
```