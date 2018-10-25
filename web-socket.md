###Websocket
是一个持久化的协议
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

0: 表示正在连接
1: 表示连接成功，可以通信了
2: 表示连接正在关闭
3: 表示连接已经关闭，或者打开连接失败
我们可以利用当前状态来做一些事情，比如上面栗子中当WebSocket链接成功后，才允许客户端发送ping。

if (this.ws.readyState === 1) {
    // 检查ws为链接状态 才可发送
    this.ws.send('ping'); // 客户端发送ping
}


阮一峰教程：http://www.ruanyifeng.com/blog/2017/05/websocket.html
