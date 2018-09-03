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





