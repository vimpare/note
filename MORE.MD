输出数据表格
console.table() 可以用来输出数组或者对象列表，以一种合适的表格形式显示。

引用当前和前一个元素
如果你的“Elements”标签选择了一个元素，你可以用 $0 调用它。输入 $0.innerHTML 试试看

建议不再使用var命令，而是使用let命令取代。


在let和const之间，建议优先使用const，尤其是在全局环境，不应该设置变量，只应设置常量

静态字符串一律使用单引号或反引号，不使用双引号。动态字符串使用反引号。

使用数组成员对变量赋值时，优先使用解构赋值。
```
const arr = [1, 2, 3, 4];

// bad
const first = arr[0];
const second = arr[1];

// good
const [first, second] = arr;
```

函数的参数如果是对象的成员，优先使用解构赋值。
```
// bad
function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;
}

// good
function getFullName(obj) {
  const { firstName, lastName } = obj;
}

// best
function getFullName({ firstName, lastName }) {
}
```

对象尽量静态化，一旦定义，就不得随意添加新的属性。如果添加属性不可避免，要使用Object.assign方法。
```
// bad
const a = {};
a.x = 3;

// if reshape unavoidable
const a = {};
Object.assign(a, { x: 3 });

// good
const a = { x: null };
a.x = 3;

```
不要在函数体内使用 arguments 变量，使用 rest 运算符（...）代替。因为 rest 运算符显式表明你想要获取参数，而且 arguments 是一个类似数组的对象，而 rest 运算符可以提供一个真正的数组。
```
// bad
function concatenateAll() {
  const args = Array.prototype.slice.call(arguments);
  return args.join('');
}

// good
function concatenateAll(...args) {
  return args.join('');
}
```

首先，Module 语法是 JavaScript 模块的标准写法，坚持使用这种写法。使用import取代require。

// bad
const moduleA = require('moduleA');
const func1 = moduleA.func1;
const func2 = moduleA.func2;

// good
import { func1, func2 } from 'moduleA';

如果模块只有一个输出值，就使用export default，如果模块有多个输出值，就不使用export default，export default与普通的export不要同时使用。

不要在模块输入中使用通配符。因为这样可以确保你的模块之中，有一个默认输出（export default）。














