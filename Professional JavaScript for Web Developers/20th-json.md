语法：

简单值：可以在JSON中表示字符串、数值、布尔值和null。但JSON不支持JavaScript中的特殊值undefined。
对象
数组

JSON字符串必须使用双引号（单引号会导致语法错误）。
JSON对象有两个方法：stringify()和parse()

JSON.stringify()还可以接收另外两个参数
第一个参数是个过滤器，可以是一个数组，也可以是一个函数；
第二个参数是一个选项，表示是否在JSON字符串中保留缩进。
