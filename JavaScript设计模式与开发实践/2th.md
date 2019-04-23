```
var obj = {    myName: 'sven',    getName: function(){        return this.myName;    }};console.log( obj.getName() );    // 输出：'sven'var getName2 = obj.getName;console.log( getName2() );    // 输出：undefined
```


```
 <body>        <div id="div1">我是一个div</div>    </body>    <script>    var getId = document.getElementById;    getId( 'div1' );
```

Function.prototype.call和Function.prototype.apply都是非常常用的方法。它们的作用一模一样，区别仅在于传入参数形式的不同。



























