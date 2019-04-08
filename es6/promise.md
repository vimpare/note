 promise的功能是可以将复杂的异步处理轻松地进行模式化，
 API:
 Promise类似于 XMLHttpRequest，从构造函数 Promise 来创建一个新建新promise对象作为接口。

要想创建一个promise对象、可以使用new来调用Promise的构造器来进行实例化。
```
var promise = new Promise(function(resolve, reject) {
    // 异步处理
    // 处理结束后、调用resolve 或 reject
});
```
对通过new生成的promise对象为了设置其值在 resolve(成功) / reject(失败)时调用的回调函数 可以使用promise.then() 实例方法:
`promise.then(onFulfilled, onRejected)`

resolve(成功)时
onFulfilled 会被调用

reject(失败)时
onRejected 会被调用

onFulfilled、onRejected 两个都为可选参数。

promise.then 成功和失败时都可以使用。 另外在只想对异常进行处理时可以采用 `promise.then(undefined, onRejected)` 这种方式，只指定reject时的回调函数即可。 不过这种情况下 `promise.catch(onRejected)` 应该是个更好的选择

workflow:工作流程
```
function asyncFunction() {
    (1)
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('荣荣荣荣');
        }, 16);
    });
}
(2)
asyncFunction().then(function (value) {
      // => 'Async Hello world'
}).catch(function (error) {
    console.log(error,222);
});
```

asyncFunction 这个函数会返回promise对象， 对于这个promise对象，我们调用它的 then 方法来设置resolve后的回调函数， catch 方法来设置发生错误时的回调函数。
等同：
```
asyncFunction().then(function (value) {
    console.log(value);
}, function (error) {
    console.log(error);
});
```
Promise的状态:
```auto"has-resolution" - Fulfilled
resolve(成功)时。此时会调用 onFulfilled

"has-rejection" - Rejected
reject(失败)时。此时会调用 onRejected

"unresolved" - Pending
既不是resolve也不是reject的状态。也就是promise对象刚被创建后的初始化状态等
```

用Promise来通过异步处理方式来获取XMLHttpRequest(XHR)的数据

静态方法Promise.resolve(value) 可以认为是 new Promise() 方法的快捷方式

比如 `Promise.resolve(42);` 可以认为是以下代码的语法糖。
```
new Promise(function(resolve){
    resolve(42);
});
```
```
Promise.resolve(42).then(function(value){
    console.log(value);
});
```



























