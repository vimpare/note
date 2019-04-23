```
var obj = {    myName: 'sven',    getName: function(){        return this.myName;    }};console.log( obj.getName() );    // 输出：'sven'var getName2 = obj.getName;console.log( getName2() );    // 输出：undefined
```


```
 <body>        <div id="div1">我是一个div</div>    </body>    <script>    var getId = document.getElementById;    getId( 'div1' );
```

Function.prototype.call和Function.prototype.apply都是非常常用的方法。它们的作用一模一样，区别仅在于传入参数形式的不同。

Array.prototype.push实际上是一个属性复制的过程，把参数按照下标依次添加到被push的对象上面，顺便修改了这个对象的length属性。至于被修改的对象是谁，到底是数组还是类数组对象，这一点并不重要。



























