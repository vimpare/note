判断是否为微信浏览器的js代码：

function downloaded(){
            var ua = navigator.userAgent.toLowerCase();
            if(ua.match(/MicroMessenger/i)=="micromessenger") {
                alert("是");
            } else {
                alert('不是')
            }
        }

//禁止页面滚动
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


            
//移动端rem
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



**原生js请求接口**

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