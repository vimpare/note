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

