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
**toDateString()**

**微信小程序设置 hover-class，实现点击变色效果**
目前支持 hover-class 属性的组件有三个：view、button、navigator。

不支持 hover-class 属性的组件，同时也不支持 hover-stop-propagation、hover-start-time、hover-stay-time 这三个属性。

当 hover-class 的值为 none 时，组件上不会有任何点击态效果。



**利用”onPullDownRefresh”和”onReachBottom”方法实现小程序下拉刷新上拉加载**

设置window中属性enablePullDownRefresh为true
属性	类型	描述
enablePullDownRefresh	Boolean	是否开启下拉刷新，详见页面相关事件处理函数。
设置注册页面中Page中函数
属性	类型	描述
onPullDownRefresh	Function	页面相关事件处理函数–监听用户下拉动作
onReachBottom	Function	页面上拉触底事件的处理函数
onPullDownRefresh: 下拉刷新说明
监听用户下拉刷新事件。
需要在config的window选项中开启enablePullDownRefresh。
当处理完数据刷新后，wx.stopPullDownRefresh可以停止当前页面的下拉刷新。


min-height: calc(100vh);

**上传文件**
```
   wx.uploadFile({
        url: _url,
        filePath: imgSrc[0],
        name: 'file1',
        formData: _data,
        success: (res) => {
          console.log(res)
        },
        fail: (res) => {
          console.log(res)
        },
        complete: (res) => {
          console.log(res)
        },
      })
```

**因为微信小程序的wxml和js的内部实现机制是分开编译的。所以在wxml是没办法调用js的函数的。这会导致WXML缺少一个我们常用的功能，那就是没有办法在视图层对数据进行格式化处理。比如我们从后端获取到一个包含了时间戳数据的数组，然后需要在界面上把这些日期都格式化显示为2017-01-01这种格式的日期形式，在Vue, Angular之类的前端Web框架中，一般在视图层都提供了如filter之类相应比较好用的方案。vue是没有这些方法的。但是小程序推出了wxs类型文件就是解决这类问题的。**
wxs是不同于js文件的。所以很多js的api是不支持的。具体支持看官方文档。
例如本来获取日期，我们原本是调用new Date()的。在wxs是不支持的，但是小程序提供了一个全局函数getDate(）代替。
还有，wxs不支持任何ES6的语法。什么let，Map()都用不了；


**小程序uploadFile方法上传图片每次只能上传一张，要上传多张图片要递归**
```
upload: function(_url, src, i, _data) {
    console.log('file' + i, src)
    var newSrc = this.data.newSrc;
    console.log(newSrc)
    var that = this
    wx.uploadFile({
      url: _url,
      filePath: src,
      name: 'file' + i,
      // header: { "Content-Type": "multipart/form-data" },
      formData: _data,
      success: (res) => {
        console.log(res)
      },
      fail: (res) => {
        console.log(res)
      },
      complete: () => {
        i++;
        var src = newSrc[i];
        if (i == newSrc.length+1){
          that.setData({
            newSrc: []
          })
          
          console.log('完成')
        }else{
          console.log('我进来了')
          that.upload(_url, newSrc[i - 1], i, _data)
        }
        
      },

    })
  },

``` 

```
<wxs module="tool2">
      function _formatNum(n) {
        n = n.toString()
        return n[1] ? n : '0' + n
      }
      var formatTimeCom = function(number) {
      console.log(number)
        if (number) {
          var _date = getDate(number);
          var _year = _date.getFullYear(),
            _month = _date.getMonth() + 1,
            _day = _date.getDate(),
            _hour = _date.getHours(),
            _minute = _date.getMinutes(),
            _second = _date.getSeconds();
          return _year + '.' + _formatNum(_month) + '.' + _formatNum(_day) + ' ' + _formatNum(_hour) + ':' + _formatNum(_minute) + ':' + _formatNum(_second);
        }
      }




      module.exports = {
        formatTimeCom: formatTimeCom,
      };
</wxs>

```



