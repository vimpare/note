```
var obj = {    myName: 'sven',    getName: function(){        return this.myName;    }};console.log( obj.getName() );    // 输出：'sven'var getName2 = obj.getName;console.log( getName2() );    // 输出：undefined
```
