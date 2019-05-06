　navigator对象
 检测插件：
 navigator.plugins   对于非IE浏览器，可以使用plugins数组来达到这个目的。
 
 
 
 //检测IE中的插件
 function hasIEPlugin(name){ 
   try {        
     new ActiveXObject(name);       
     return true;   
   } 
   catch (ex){     
     return false;    
     }}
 //检测Flash
 alert(hasIEPlugin("ShockwaveFlash.ShockwaveFlash"));
 //检测QuickTime
 alert(hasIEPlugin("QuickTime.QuickTime"));
 
 
 
 
 # BOM浏览器对象模型

所有在全局作用域中声明的变量、函数都会变成window对象的属性和方法
全局变量不能通过delete操作符删除，而直接在window对象上的定义的属性可以


**查询字符串参数**
```
function getQueryStringArgs() { //取得查询字符串并去掉开头的问号    
    var qs = (location.search.length > 0 ? location.search.substring(1) : ""), //保存数据的对象    args = {},    //取得每一项   
        items = qs.length ? qs.split("&") : [],
        item = null,
        name = null,
        value = null, //在for循环中使用       
        i = 0,
        len = items.length; //逐个将每一项添加到args对象中    
    for (i = 0; i < len; i++) {
        item = items[i].split("=");
        name = decodeURIComponent(item[0]);
        value = decodeURIComponent(item[1]);
        if (name.length) {
            args[name] = value;
        }
    }
    return args;
}
```
**reload**
位于`reload()`调用之后的代码可能会也可能不会执行，这要取决于网络延迟或系统资源等因素。为此，最好将reload()放在代码的最后一行


**history** 给go()方法传递一个字符串参数，此时浏览器会跳转到历史记录中包含该字符串的第一个位置——可能后退，也可能前进，具体要看哪个位置最近。如果历史记录中不包含该字符串，那么这个方法什么也不做，例如：
```

//跳转到最近的wrox.com页面
history.go("wrox.com");
//跳转到最近的nczonline.net页面
history.go("nczonline.net");
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
