* jquery.uoloadPreview.js

工作中需要上传图片到服务器，一开始原生写的js,遇到了问题，在ie8下发现删除图片无法清空input=file 的value值，后来改变写法采用了jQuery的uploadPreview。因为要控制上传图片的大小，依靠源文件无法变更，自己手动更改了条件：
若是需要控制图片大小，则传入maxed为true，源文件便不再执行内部条件，须在外部js控制；之后发现，之所以不能清空value值，是因为用了$(this).value='',应该用原生js的input.value='';


##jquery效果:
delay((speed,queueName)),延迟执行队列中的下一项
speed   可选。规定延迟的速度。毫秒
queueName   可选。规定队列的名称。
默认是 "fx"，标准效果队列。
eg:$(this).delay().fadeOut()
##jquery事件
###one()
为每一个匹配元素的特定事件（像click）绑定一个一次性的事件处理函数。在每个对象上，这个事件处理函数只会被执行一次。

**jquery 表单上传ajaxSubmit：**
```
   $(".J_as_form").ajaxSubmit({
        forceSync: false,
        url: api.applySubmit,
        type: 'post',
        dataType:'json',
        success: function (response) {
          
        },
        error: function (e) {
          
        }

    })
    return false

```

* `$.ajax`读取文本内容：

   ```
   $.ajax({
         type: "get",
         url: "1.txt",
         dataType: "text",
         async: true
     }).done(function (data) {
         $("#one").html(data.replace(/\r\n/ig, '</br>'));//替换回车行成换行符
     });
   ```
