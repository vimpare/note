```
<ul class="ui-flex-row display-flex">
    <li class="ui-flex-col">
      <p class="placeholder">文字文字</p>
        <p class="placeholder">文字文字</p>
        <p class="placeholder">文字文字</p>
    </li>
    <li class="ui-flex-col box-flex">
      <p class="placeholder">主体内容</p>
      <p class="placeholder">主体内容</p>
      <p class="placeholder">主体内容</p>
      <p class="placeholder">主体内容</p>
      <p class="placeholder">主体内容</p>
    </li>
    <li class="ui-flex-col">
      <p class="placeholder">文字文字</p>
    </li>
  </ul>
```
```
*{
   margin: 0;
	padding: 0
}
ol,ul,dl,dt,dd {
	list-style: none;
 
}
.display-flex {
	display: -webkit-box;
	display: -moz-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
/*   	-webkit-box-align: flex-start;
	-ms-flex-align: flex-start; */
/* 	-webkit-align-items: flex-start; */
	align-items: flex-start
}
.box-flex {
	-webkit-box-flex: 1;
	-webkit-flex: 1;
	-ms-flex: 1;
	flex: 1;
	width: 100%;
	overflow: hidden;
}
.ui-flex-row .placeholder {
	padding: 0 10px;
	background-color: #ddd;
	font-size: 0.875rem;
	line-height: 2.4;
	text-align: center;
	color: #333;
}
.ui-flex-col {
	padding:5px;
  margin: 5px;
  background-color: #f30;
}
```
不设置`align-items: flex-start`三个子元素高度默认为父元素高度。
