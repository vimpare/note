

标签（空格分隔）： 小程序

---
小程序的一套脚本语言，结合 WXML，可以构建出页面的结构

WXS 的运行环境和其他 JavaScript 代码是隔离的，WXS 中不能调用其他 JavaScript 文件中定义的函数，也不能调用小程序提供的API

**页面渲染**
```
<!--wxml-->
<wxs module="m1">
var msg = "hello world";

module.exports.message = msg;
</wxs>

<view> {{m1.message}} </view>
```

**数据处理**
```
// page.js
Page({
  data: {
    array: [1, 2, 3, 4, 5, 1, 2, 3, 4]
  }
})
```
```
<!--wxml-->
<!-- 下面的 getMax 函数，接受一个数组，且返回数组中最大的元素的值 -->
<wxs module="m1">
var getMax = function(array) {
  var max = undefined;
  for (var i = 0; i < array.length; ++i) {
    max = max === undefined ?
      array[i] :
      (max >= array[i] ? max : array[i]);
  }
  return max;
}

module.exports.getMax = getMax;
</wxs>

<!-- 调用 wxs 里面的 getMax 函数，参数为 page.js 里面的 array -->
<view> {{m1.getMax(array)}} </view>
```

**WXS响应事件**


背景：一次 touchmove 的响应需要经过 2 次的逻辑层和渲染层的通信以及一次渲染，通信的耗时比较大。为了减少通信的次数，让事件在视图层（Webview）响应。

>使用 WXS 函数用来响应小程序事件，目前只能响应内置组件的事件，不支持自定义组件事件

WXS 函数的除了纯逻辑的运算，还可以通过封装好的ComponentDescriptor 实例来访问以及设置组件的 class 和样式，对于交互动画，设置 style 和 class 足够了

```
var wxsFunction = function(event, ownerInstance) {
    var instance = ownerInstance.selectComponent('.classSelector') // 返回组件的实例
    instance.setStyle({
        "font-size": "14px" // 支持rpx
    })
    instance.getDataset()
    instance.setClass(className)
    // ...
    return false // 不往上冒泡，相当于调用了同时调用了stopPropagation和preventDefault
}
```

其中入参 event 是小程序事件对象基础上多了 event.instance 来表示触发事件的组件的 ComponentDescriptor 实例。ownerInstance 表示的是触发事件的组件所在的组件的 ComponentDescriptor 实例，如果触发事件的组件是在页面内的，ownerInstance 表示的是页面实例。

方法 | 参数 | 描述
---|----|---
selectComponent | selector对象 | 返回组件的 ComponentDescriptor 实例。
selectAllComponents | selector对象数组 | 返回组件的 ComponentDescriptor 实例数组。
setStyle | Object/string | 设置组件样式，支持rpx。设置的样式优先级比组件 wxml 里面定义的样式高。不能设置最顶层页面的样式。
addClass/removeClass/ hasClass | string | 设置组件的 class。设置的 class 优先级比组件 wxml 里面定义的 class 高。不能设置最顶层页面的 class。
getDataset | 无 | 返回当前组件/页面的 dataset 对象
callMethod | (funcName:string, args:object) | 调用当前组件/页面在逻辑层（App Service）定义的函数。funcName表示函数名称，args表示函数的参数。
requestAnimationFrame | Function | 和原生 requestAnimationFrame 一样。用于设置动画。
getState | 无 | 返回一个object对象，当有局部变量需要存储起来后续使用的时候用这个方法。
triggerEvent | (eventName, detail) | 和组件的triggerEvent一致。

>WXS 运行在视图层（Webview），里面的逻辑毕竟能做的事件比较少，需要有一个机制和逻辑层（App Service）开发者的代码通信，上面的 `callMethod` 是 WXS 里面调用逻辑层（App Service）开发者的代码的方法

使用方法
WXML定义事件：
```
<wxs module="test" src="./test.wxs"></wxs>
<view change:prop="{{test.propObserver}}" prop="{{propValue}}" bindtouchmove="{{test.touchmove}}" class="movable"></view>
```

上面的change:prop（属性前面带change:前缀）是在 prop 属性被设置的时候触发 WXS 函数，值必须用{{}}括起来。类似 Component 定义的 properties 里面的 observer 属性，在setData({propValue: newValue})调用之后会触发。

注意：WXS函数必须用{{}}括起来。当 prop 的值被设置 WXS 函数就会触发，而不只是值发生改变，所以在页面初始化的时候会调用一次WxsPropObserver的函数。

WXS文件test.wxs里面定义并导出事件处理函数和属性改变触发的函数：
```
module.exports = {
    touchmove: function(event, instance) {
        console.log('log event', JSON.stringify(event))
    },
    propObserver: function(newValue, oldValue, ownerInstance, instance) {
        console.log('prop observer', newValue, oldValue)
    }
}
```


示例：


```
/* wxs文件 */
swipeDirection = 0; //是否触发水平滑动 0:未触发 1:触发水平滑动 2:触发垂直滑动
var touchstart = function(event, ownerInstance) {

  var ins = event.instance
  var st = ins.getState()
  st.isMoving = true

  st.startX = event.touches[0].clientX;
  st.startY = event.touches[0].clientY;

  var _data = event.currentTarget.dataset,
    _loc = _data.loc,
    _twoIndex = _data.index;

  st.index = _loc;
  st.twoIndex = _twoIndex;
}


var touchmove = function(event, ownerInstance) {
  var ins = event.instance
  var st = ins.getState()
  if (!st.isMoving) return

  if (event.touches.length == 1) {


    if (swipeDirection === 2) {
      return;
    }



    var pagex = event.touches[0].pageX - st.startX
    var movex = pagex > 0 ? Math.min(st.delBtnWidth, pagex) : Math.max(-st.delBtnWidth, pagex)


    // //已触发垂直滑动，由scroll-view处理滑动操作;
    // //手指起始点位置与移动期间的差值 
    var pagey = event.touches[0].pageY - st.startY;
    // //未触发滑动方向
    if (swipeDirection === 0) {

      //触发垂直操作
      if (Math.abs(pagey) > 20) {
        swipeDirection = 2;

        return;
      }
      //触发水平操作
      if (Math.abs(movex) > 4) {

        swipeDirection = 1;
        ownerInstance.callMethod('scrollYFn', {
          scrollY: false
        })
      } else {
        // return;
      }

    }
    // 往回滑动的情况
    var goods = ownerInstance.selectAllComponents('.good-con')
    goods.map(function(item) {
      var itemOut = item.getState().out
      if (itemOut) {
        item.setStyle({
          'transform': 'translateX(0px)',
          'transition': 'transform 0.4s'
        })
      }
    })

    if (st.out) {
      // 已经是划出来了，还要往左滑动，忽略
      if (movex < 0) return
      ins.setStyle({
        'transform': 'translateX(' + (st.transformx + movex) + 'px)',
        'transition': ''
      })

      return
    }

    if (movex > 0) movex = 0

    st.transformx = movex

    ins.setStyle({
      'transform': 'translateX(' + movex + 'px)',
      'transition': ''
    })

    ownerInstance.callMethod('wxsTouchmove')

    return
  }

}


var touchend = function(event, ownerInstance) {
  var ins = event.instance
  var st = ins.getState()
  if (!st.isMoving) return
  st.isMoving = false
 

  swipeDirection = 0;
  if (event.changedTouches.length == 1) {
    //手指移动结束后水平位置
    var endX = event.changedTouches[0].clientX;
    var endY = event.changedTouches[0].clientY;
    //触摸开始与结束，手指移动的距离
    var disX = st.startX - endX;
    var disY = st.startY - endY;
    var delBtnWidth = st.delBtnWidth;
    // if ((Math.abs(disY) > 10 && disX < delBtnWidth) || disX<0) {
    if (Math.abs(event.changedTouches[0].pageX - st.startX) < st.throttle || event.changedTouches[0].pageX - st.startX > 0) {
      st.out = false
      ins.setStyle({
        'transform': 'translateX(0px)',
        'transition': 'transform 0.4s'
      })
      ownerInstance.callMethod('scrollYFn', {
        scrollY: true
      })
      return;
    }


    //如果距离小于删除按钮的1/2，不显示删除按钮
    var txtStyle = disX > delBtnWidth / 2 ? "-" + delBtnWidth : "0";

    ins.setStyle({
      'transform': 'translateX(' + (txtStyle) + 'px)',
      'transition': 'transform 0.4s'
    })
    st.out = true;
    st.transformx = -Math.abs(txtStyle)
    if (disX <= delBtnWidth / 2) {
      ownerInstance.callMethod('scrollYFn', {
        scrollY: true
      })
    }
  }
  ownerInstance.callMethod('show')
}


var hideButton = function(event, ownerInstance) {
  var goods = ownerInstance.selectAllComponents('.good-con')

  goods.map(function(item) {
    if (item.hasClass('touchmove')) {
      item.setStyle({
        'transform': 'translateX(0px)',
        'transition': 'transform 500ms'
      })
    }
  })

  st.transformx = 0
  ownerInstance.callMethod('buttonTapByWxs', {
    id: event.currentTarget.dataset.id
  })
  return false
}

var delBtnWidthFn = function(newVal, oldVal, ownerInstance, ins) {
  var st = ins.getState()
  st.transformx = 0
  st.delBtnWidth = newVal;
  st.throttle = 40 // 固定值
}

module.exports = {
  touchstart: touchstart,
  touchmove: touchmove,
  touchend: touchend,
  hideButton: hideButton,
  delBtnWidthFn: delBtnWidthFn

}
```

```
//wxml
<wxs src="./../common/slideview.wxs" module="slideHander"></wxs>

//...
<view class="good-con flex"  bindtouchstart="{{slideHander.touchstart}}" bindtouchmove="{{slideHander.touchmove}}" bindtouchend="{{slideHander.touchend}}" delbtnwidth="{{delBtnWidth}}" change:delbtnwidth="{{slideHander.delBtnWidthFn}}"></view>
```
