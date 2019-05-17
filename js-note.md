## 判断是否为微信浏览器的js代码：
```
function downloaded(){
            var ua = navigator.userAgent.toLowerCase();
            if(ua.match(/MicroMessenger/i)=="micromessenger") {
                alert("是");
            } else {
                alert('不是')
            }
        }
```
## 禁止页面滚动
```
function downloaded(){
                var ua = navigator.userAgent.toLowerCase();
                // text.innerHTML=ua
                if(ua.match(/MicroMessenger/i)=="micromessenger") {
                    text.classList.add("show")
                    bg0.classList.add('show')
                    bg0.addEventListener("touchstart",function(e){
                        e.stopPropagation();
                        e.preventDefault();
                    },false);
                } else {
                    text.innerHTML='我不是微信'
                }
            }

```
            
### 移动端rem
```
window.onload = function(){
    /*720代表设计师给的设计稿的宽度，你的设计稿是多少，就写多少;100代表换算比例，这里写100是
      为了以后好算,比如，你测量的一个宽度是100px,就可以写为1rem,以及1px=0.01rem等等*/
    getRem(720,100)
};
window.onresize = function(){
    getRem(720,100)
};
function getRem(pwidth,prem){
    var html = document.getElementsByTagName("html")[0];
    var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
    html.style.fontSize = oWidth/pwidth*prem + "px";
}
```
```
代码二： 小米官网的写法

!function(n){
    var  e=n.document,
         t=e.documentElement,
         i=720,
         d=i/100,
         o="orientationchange"in n?"orientationchange":"resize",
         a=function(){
             var n=t.clientWidth||320;n>720&&(n=720);
             t.style.fontSize=n/d+"px"
         };
         e.addEventListener&&(n.addEventListener(o,a,!1),e.addEventListener("DOMContentLoaded",a,!1))
}(window);
```


**原生js请求接口**
```
    ajax({
            url: "./TestXHR.aspx",              //请求地址
            type: "POST",                       //请求方式
            data: { name: "super", age: 20 },        //请求参数
            dataType: "json",
            success: function (response, xml) {
                // 此处放成功后执行的代码
            },
            fail: function (status) {
                // 此处放失败后执行的代码
            }
        });

    function ajax(options) {
        options = options || {};
        options.type = (options.type || "GET").toUpperCase();
        options.dataType = options.dataType || "json";
        var params = formatParams(options.data);

        //创建 - 非IE6 - 第一步
        if (window.XMLHttpRequest) {
            var xhr = new XMLHttpRequest();
        } else { //IE6及其以下版本浏览器
            var xhr = new ActiveXObject('Microsoft.XMLHTTP');
        }

        //接收 - 第三步
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                var status = xhr.status;
                if (status >= 200 && status < 300) {
                    options.success && options.success(xhr.responseText, xhr.responseXML);
                } else {
                    options.fail && options.fail(status);
                }
            }
        }

        //连接 和 发送 - 第二步
        if (options.type == "GET") {
            xhr.open("GET", options.url + "?" + params, true);
            xhr.send(null);
        } else if (options.type == "POST") {
            xhr.open("POST", options.url, true);
            //设置表单提交时的内容类型
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.send(params);
        }
    }
    //格式化参数
    function formatParams(data) {
        var arr = [];
        for (var name in data) {
            arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
        }
        arr.push(("v=" + Math.random()).replace(".",""));
        return arr.join("&");
    }
```

**js获取地址中的参数**

```
    functon GetUrlParam(paraName) {
　　　　var url = document.location.toString();
　　　　var arrObj = url.split("?");

　　　　if (arrObj.length > 1) {
　　　　　　var arrPara = arrObj[1].split("&");
　　　　　　var arr;

　　　　　　for (var i = 0; i < arrPara.length; i++) {
　　　　　　　　arr = arrPara[i].split("=");

　　　　　　　　if (arr != null && arr[0] == paraName) {
　　　　　　　　　　return arr[1];
　　　　　　　　}
　　　　　　}
　　　　　　return "";
　　　　}
　　　　else {
　　　　　　return "";
　　　　}
　　}
```

**js异步与解决Promise IE兼容问题**
iE不支持 Promise 解决办法（可搜索 polyfill）：

```
引入   <script src = "https://cdn.polyfill.io/v2/polyfill.min.js"></script>
或 <script type="text/javascript" src ="https://cdn.polyfill.io/v2/polyfill.min.js?features=es6"></script>
```
**判断是否为微信**
```
function downloaded() {
            var ua = navigator.userAgent.toLowerCase();
            // text.innerHTML=ua
            if (ua.match(/MicroMessenger/i) == "micromessenger") {
                text.classList.add("show")
                bg0.classList.add('show')
                bg0.addEventListener("touchstart", function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                }, false);
            } else {
                text.innerHTML = '我不是微信'
            }
        }
        ```
        
**将JavaScript对象转换为querystring查询字符串**

```
```
serialize = function(obj) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
 
}
 ```
 **hasOwnProperty()**
 hasOwnProperty() 方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性
 
 // 使用 hasOwnProperty 作为属性名
        // JavaScript 并没有保护 hasOwnProperty 属性名， 因此某个对象是有可能存在使用这个属性名的属性， 使用外部的 hasOwnProperty 获得正确的结果是需要的：
```
var foo = {
hasOwnProperty: function () {
    return false;
},
bar: 'Here be dragons'
};

foo.hasOwnProperty('bar'); // 始终返回 false

// 如果担心这种情况，可以直接使用原型链上真正的 hasOwnProperty 方法
({}).hasOwnProperty.call(foo, 'bar'); // true

// 也可以使用 Object 原型上的 hasOwnProperty 属性
Object.prototype.hasOwnProperty.call(foo, 'bar'); // true

```
 # utils.js:
```
function formatTime(date,one) {
  if (!date) {
    date = new Date();
  }
  else{
    date = new Date(date);
  }


  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds();

  return [year, month, day].map(formatNumber).join('.') 
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}
//倒计时,传入秒
function  countdown(time) {
  var days = Math.floor(time / 86400)
  time=time-days*86400
  var h = Math.floor(time / 3600) < 10 ? '0' + Math.floor(time / 3600) : Math.floor(time / 3600);
  var m = Math.floor((time / 60 % 60)) < 10 ? '0' + Math.floor((time / 60 % 60)) : Math.floor((time / 60 % 60));
  var s = Math.floor((time % 60)) < 10 ? '0' + Math.floor((time % 60)) : Math.floor((time % 60));
  return days+' 天 '+h+' 小时 '+m+' 分 '+s+' 秒'
}

function formatDistance(distance) {
  distance = +distance;
  return distance < 1000 ? Math.round(distance) + 'm' : (distance / 1000).toFixed(1) + 'km';
}

function isPlainObject(obj) {
  for (var name in obj) {
    return false;
  }
  return true;
}
function iszhongwen(num) {

  return /^[\u4E00-\u9FA5]+$/.test(num);
}

function isName(num) {
  return /^[\u4E00-\u9FA5A-Za-z]+$/.test(num);
}
function isPhoneNumber(num) {
  return /^1\d{10}$/.test(num);
}
function ValidatePhone(val) {
  var isPhone = /(^([0\*][0-9\*]{2,3}\s)?([2-9\*][0-9\*]{6,7})+(\-[0-9\*]{1,4})?$)|(^([0\*][0-9\*]{2,3})?([2-9\*][0-9\*]{6,7})+(\-[0-9\*]{1,4})?$)|(^([0\*][0-9\*]{2,3}[\-\*])?([2-9\*][0-9\*]{6,7})+(\-[0-9\*]{1,4})?$)|(^((\(\d{3}\))|(\d{3}\-))?([1\*][3456789\*][0-9\*]{9})$)/;//联系方式
 
  if (isPhone.test(val)) {
    return true;
  }
  else {
    return false;
  }
}
function isEmail(num) {
  return /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(num);
}
function isNumber(num) {
  return /^[0-9]*$/.test(num);
}
function isPassword(num) {
  return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/.test(num)
}
function isPhoneEmail(num) {
  return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/.test(num)
}

function time(time) {
  return (time && new Date(time).toLocaleDateString().replace(/\//g, '.')) || '';
}
function trim(str) {
  return str.replace(/(^\s*)|(\s*$)/g, "");
}

module.exports = {
  formatTime: formatTime,
  isPlainObject: isPlainObject,
  iszhongwen: iszhongwen,
  isName: isName,
  isPhoneNumber: isPhoneNumber,
  isEmail: isEmail,
  isNumber: isNumber,
  formatDistance: formatDistance,
  isPassword: isPassword,
  isPhoneEmail: isPhoneEmail,
  time: time,
  trim: trim,
  countdown: countdown,
  ValidatePhone: ValidatePhone
}


let regObj = {
  nameReg: /^[A-Za-z\u0391-\uFFE5]{2,}$/,
  phoneReg: /^1\d{2}[\*|\d]{4}\d{4}$/,
  taxpayeRnoReg: /^([A-Za-z\d]{15}|[A-Za-z\d]{18}|[A-Za-z\d]{20})$/,
  name: /^[\u0391-\uFFE5]{2,}$/
}

export {regObj};

export function checkFn(str,_type){
  switch (_type){
    case 'userName':
      return /^[A-Za-z\u0391-\uFFE5]{2,}$/.test(str);
    case 'mobile':
      return /^1\d{2}[\*|\d]{4}\d{4}$/.test(str);
    case 'number':
      return /^[0-9]$/.test(str);
    case 'name': 
      return /^[\u0391-\uFFE5]{2,}$/.test(str);
    case 'detailAds':
      return /.{5,}/.test(str);
    default:
      return true;
  }
}
export function isEmojiCharacter(substring) {
  for (var i = 0; i < substring.length; i++) {
    var hs = substring.charCodeAt(i);
    if (0xd800 <= hs && hs <= 0xdbff) {
      if (substring.length > 1) {
        var ls = substring.charCodeAt(i + 1);
        var uc = ((hs - 0xd800) * 0x400) + (ls - 0xdc00) + 0x10000;
        if (0x1d000 <= uc && uc <= 0x1f77f) {
          return true;
        }
      }
    } else if (substring.length > 1) {
      var ls = substring.charCodeAt(i + 1);
      if (ls == 0x20e3) {
        return true;
      }
    } else {
      if (0x2100 <= hs && hs <= 0x27ff) {
        return true;
      } else if (0x2B05 <= hs && hs <= 0x2b07) {
        return true;
      } else if (0x2934 <= hs && hs <= 0x2935) {
        return true;
      } else if (0x3297 <= hs && hs <= 0x3299) {
        return true;
      } else if (hs == 0xa9 || hs == 0xae || hs == 0x303d || hs == 0x3030
        || hs == 0x2b55 || hs == 0x2b1c || hs == 0x2b1b
        || hs == 0x2b50) {
        return true;
      }
    }
  }
}

// 获取当前页面
export function getCurrentPage() {
  let pages = getCurrentPages(),
      last = pages.length - 1;
  return pages[last];
};

// 格式化数据
export function formatData(data) {
  var dataStr = "";
  for (var key in data) {
    var value = data[key];
    if (typeof data[key] == "object") {
      value = JSON.stringify(value);
    }
    dataStr += "&" + key + "=" + value;
  }

  return dataStr.substr(1) == "" ? "" : "?" + dataStr.substr(1);
}

http://bonsaiden.github.io/JavaScript-Garden/zh/
```
# js秘密花园
删除属性  删除属性的唯一方法是使用 delete 操作符；设置属性为 undefined 或者 null 并不能真正的删除属性， 而仅仅是移除了属性和值的关联。

当检查对象上某个属性是否存在时，hasOwnProperty 是唯一可用的方法。 同时在使用 for in loop 遍历对象时，推荐总是使用 hasOwnProperty 方法， 这将会避免原型对象扩展带来的干扰。


es6新增 set  ES6提供了新的数据结构Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
向Set加入值的时候，不会发生类型转换，所以5和"5"是两个不同的值。Set内部判断两个值是否不同，使用的算法叫做“Same-value equality”，它类似于精确相等运算符（===），主要的区别是NaN等于自身，而精确相等运算符认为NaN不等于自身。在Set内部，两个NaN是相等。
Set实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）。下面先介绍四个操作方法。
```
add(value)：添加某个值，返回Set结构本身。
delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
has(value)：返回一个布尔值，表示该值是否为Set的成员。
clear()：清除所有成员，没有返回值。










```
拖放图片阻止浏览器默认行为：
```
 $('#J_preBox')[0].addEventListener("drop",function(e){  //拖离
                    e.preventDefault();
                    e.stopPropagation()
                })
                $('#J_preBox')[0].addEventListener("dragleave",function(e){  //拖后放
                    e.preventDefault();
                    e.stopPropagation()
                })
                $('#J_preBox')[0].addEventListener("dragenter",function(e){  //拖进
                    e.preventDefault();
                    e.stopPropagation()
                })
                $('#J_preBox')[0].addEventListener("dragover",function(e){  //拖来拖去
                    e.preventDefault();
                    e.stopPropagation()
                })
```
字符串转数字：
parseInt: 没有传入基数时，默认是传入的基数为 10 parseInt(num, 10)，如果你不知道 num 属性的类型，不要使用 parseInt 进行字符串转数字

  字符串中的负十六进制数字是一个特殊情况，如果你用 parseFloat 解析，结果是不正确的。为了避免程序出现 NaN 的情况，应该检查转化后的值。
parseFloat: 转换十六进制数时要小心，如果你不知道要转换对象的类型，不要使用 parseFloat。

按位非：用它确保输入中没有字符，仅用于整数。

Number
Number 与以上提及的转换方式一样存在这样的问题，解析时试图找出你给他的数字：

Number("023"); // returns 23
Number(023); // returns 19
注意：023 实际上是一个八进制数，无论你怎么做，都是返回 19；对于没有单引号或双引号的十六进制数一样。

Number 也是 JsPerf 中最慢的之一。

Number：几乎不用它


一元运算符
"1.23" * 1; // returns 1.23
"0xFF" - 0; // returns 255
"0xFF.jpg" / 1 + // returns NaN
    "023"; // returns 23
一元运算符与其它的解析方式不同，如果是一个 NaN 值，那么返回的也是 NaN
