多态最根本的作用就是通过把过程化的条件分支语句转化为对象的多态性，从而消除这些条件分支语句

原型模式选择了另外一种方式，我们不再关心对象的具体类型，而是找到一个对象，然后通过克隆来创建一个一模一样的对象。

原型模式的实现关键，是语言本身是否提供了clone方法。ECMAScript 5提供了Object.create方法，可以用来克隆对象。


在不支持Object.create方法的浏览器中，则可以使用以下代码：
```
Object.create = Object.create || function( obj ){    
    var F = function(){};    
    F.prototype = obj;    
    return new F();
}
```

当对象无法响应某个请求时，会把该请求委托给它自己的原型。
JavaScript中的根对象是Object.prototype对象

ECMAScript 6带来了新的Class语法。这让JavaScript看起来像是一门基于类的语言，但其背后仍是通过原型机制来创建对象
