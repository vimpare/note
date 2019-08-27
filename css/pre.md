pre显示文本内容时是不会自动换行的，此时可以添加一些CSS来解决：
```
<pre>ourjs this is very very very very very very very very very very very very very very very logn contents.</pre>
```
.
```
pre {
    word-wrap: break-word;
    white-space: pre-wrap;

    padding: 9.5px;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
}
```
