让高度自适应内容高度：
textarea也能跟prev一样保留内容格式，但是元素高度是固定的，并且无法用CSS来调整。此时可以借助scrollHeight这个属性。
```
var textarea = document.getElementsByTagName('textarea')[0];
textarea.setAttribute('style','height:'+(textarea.scrollHeight + 12)+'px');
```
这里加了12px的padding。
