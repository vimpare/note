###Websocket
HTTP 协议有一个缺陷：通信只能由客户端发起
"**轮询**"：每隔一段时候，就发出一个询问，了解服务器有没有新的信息

Websocket是一个持久化的协议
WebSocket 协议在2008年诞生，2011年成为国际标准。所有浏览器都已经支持了。
服务器可以主动向客户端推送信息，客户端也可以主动向服务器发送信息，是真正的双向平等对话，属于服务器推送技术的一种。
http://jsbin.com/muqamiqimu/edit?js,console
特点：

（1）建立在 TCP 协议之上，服务器端的实现比较容易。

（2）与 HTTP 协议有着良好的兼容性。默认端口也是80和443，并且握手阶段采用 HTTP 协议，因此握手时不容易屏蔽，能通过各种 HTTP 代理服务器。

（3）数据格式比较轻量，性能开销小，通信高效。

（4）可以发送文本，也可以发送二进制数据。

（5）没有同源限制，客户端可以与任意服务器通信。

（6）协议标识符是ws（如果加密，则为wss），服务器网址就是 URL。
```
function socketConnect(url) {
    // 客户端与服务器进行连接
    let ws = new WebSocket(url); // 返回`WebSocket`对象，赋值给变量ws
    // 连接成功回调
    ws.onopen = e => {
        console.log('连接成功', e)
        ws.send('我发送消息给服务端'); // 客户端与服务器端通信
    }
    // 监听服务器端返回的信息
    ws.onmessage = e => {
        console.log('服务器端返回：', e.data)
        // do something
    }
    return ws; // 返回websocket对象
}
let wsValue = socketConnect('ws://121.40.165.18:8800'); // websocket对象
```
webSocket并不稳定，在使用一段时间后，可能会断开连接
设置一个变量，在webSocket关闭/报错的回调中，判断是不是手动关闭的，如果不是的话，就重新连接，这样做的优缺点如下：

优点：请求较少(相对于心跳连接)，易设置。
缺点：可能会导致丢失数据,在断开重连的这段时间中，恰好双方正在通信
####心跳机制
// heartCheck() {
    //     // 心跳机制的时间可以自己与后端约定
    //     this.pingPong = 'ping'; // ws的心跳机制状态值
    //     this.pingInterval = setInterval(() => {
    //         if (this.ws.readyState === 1) {
    //             // 检查ws为链接状态 才可发送
    //             this.ws.send('ping'); // 客户端发送ping
    //         }
    //     }, 10000)
    //     this.pongInterval = setInterval(() => {
    //         this.pingPong = false;
    //         if (this.pingPong === 'ping') {
    //             this.closeHandle('pingPong没有改变为pong'); // 没有返回pong 重启webSocket
    //         }
    //         // 重置为ping 若下一次 ping 发送失败 或者pong返回失败(pingPong不会改成pong)，将重启
    //         console.log('返回pong')
    //         this.pingPong = 'ping'
    //     }, 20000)
    // }
    
    
   WebSocket的当前状态:WebSocket.readyState
下面是WebSocket.readyState的四个值(四种状态)：


CONNECTING：值为0，表示正在连接。
OPEN：值为1，表示连接成功，可以通信了。
CLOSING：值为2，表示连接正在关闭。
CLOSED：值为3，表示连接已经关闭，或者打开连接失败。
我们可以利用当前状态来做一些事情，比如上面栗子中当WebSocket链接成功后，才允许客户端发送ping。

if (this.ws.readyState === 1) {
    // 检查ws为链接状态 才可发送
    this.ws.send('ping'); // 客户端发送ping
}


阮一峰教程：http://www.ruanyifeng.com/blog/2017/05/websocket.html


####WebSocket 构造函数:
WebSocket 对象作为一个构造函数，用于新建 WebSocket 实例。


```
var ws = new WebSocket('ws://localhost:8080');

```
执行上面语句之后，客户端就会与服务器进行连接。

webSocket.onopen
实例对象的onopen属性，用于指定连接成功后的回调函数。


ws.onopen = function () {
  ws.send('Hello Server!');
}
如果要指定多个回调函数，可以使用addEventListener方法。


ws.addEventListener('open', function (event) {
  ws.send('Hello Server!');
});
webSocket.onclose
实例对象的onclose属性，用于指定连接关闭后的回调函数。


ws.onclose = function(event) {
  var code = event.code;
  var reason = event.reason;
  var wasClean = event.wasClean;
  // handle close event
};

ws.addEventListener("close", function(event) {
  var code = event.code;
  var reason = event.reason;
  var wasClean = event.wasClean;
  // handle close event
});

webSocket.onmessage
实例对象的onmessage属性，用于指定收到服务器数据后的回调函数。


ws.onmessage = function(event) {
  var data = event.data;
  // 处理数据
};

ws.addEventListener("message", function(event) {
  var data = event.data;
  // 处理数据
});
注意，服务器数据可能是文本，也可能是二进制数据（blob对象或Arraybuffer对象）。


ws.onmessage = function(event){
  if(typeof event.data === String) {
    console.log("Received data string");
  }

  if(event.data instanceof ArrayBuffer){
    var buffer = event.data;
    console.log("Received arraybuffer");
  }
}

webSocket.send()
实例对象的send()方法用于向服务器发送数据。

发送文本的例子。


ws.send('your message');
发送 Blob 对象的例子。


var file = document
  .querySelector('input[type="file"]')
  .files[0];
ws.send(file);

webSocket.bufferedAmount
实例对象的bufferedAmount属性，表示还有多少字节的二进制数据没有发送出去。它可以用来判断发送是否结束。


var data = new ArrayBuffer(10000000);
socket.send(data);

if (socket.bufferedAmount === 0) {
  // 发送完毕
} else {
  // 发送还没结束
}
4.8 webSocket.onerror
实例对象的onerror属性，用于指定报错时的回调函数。


socket.onerror = function(event) {
  // handle error event
};

socket.addEventListener("error", function(event) {
  // handle error event
});


http://www.52im.net/forum.php?mod=viewthread&tid=907
