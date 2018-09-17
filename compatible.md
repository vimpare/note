##兼容
* ie 8 下，input不设置line-height 文字不居中，其他浏览器正常；
* ie浏览器表单上传包括上传文件时，ie9以下无法使用formdata,使用iframe模拟提交，后端不能返回json数据格式的数据，需改为text
```
 var theUA = window.navigator.userAgent.toLowerCase();
    if ((theUA.match(/msie\s\d+/) && theUA.match(/msie\s\d+/)[0]) || (theUA.match(/trident\s?\d+/) && theUA.match(/trident\s?\d+/)[0])) {
        var ieVersion = theUA.match(/msie\s\d+/)[0].match(/\d+/)[0] || theUA.match(/trident\s?\d+/)[0];
        if (ieVersion<10) {
            // $(".J_as_form").attr("target","uf-frame")
            // $(".J_as_form").submit();
            // $('#uf-frame').on('load', function () {
            //     var response = $("#uf-frame").contents().find("body").html();
            //     console.log(response);
            //
            //
            // })
            // return false
        };
    }
```
**判断ie**
```
if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE8.0")
    {
        alert("IE 8.0");
        console.log('ie8')
    }
    else if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE9.0")
    {
        alert("IE 9.0");
        console.log('ie9')
    }

```

```
var theUA = window.navigator.userAgent.toLowerCase();
  if ((theUA.match(/msie\s\d+/) && theUA.match(/msie\s\d+/)[0]) || (theUA.match(/trident\s?\d+/) && theUA.match(/trident\s?\d+/)[0])) {
      var ieVersion = theUA.match(/msie\s\d+/)[0].match(/\d+/)[0] || theUA.match(/trident\s?\d+/)[0];
      if (ieVersion < 10) {
          alert('ie9以下')
      };
  }
```
真正意义上来讲IE在创建一个新的iframe时的onload方法需要使用attachEvent来绑定，而原来就存在的iframe的onload方法，则可以直接绑定。


**IE下表单提交按钮需要点击多次才触发Submit事件**
```
IE浏览器下请勿通过事件模拟用户对表单的操作，将**文件框之类的覆盖在按钮上并修改透明度**以获取用户的真实操作。
```

**怎么让input type="file" 不可编辑**
不上传文件时，使用表单提交发现仍然存在图片上传，要使用disabled

```
  <input type="file" disabled="false"/>
```