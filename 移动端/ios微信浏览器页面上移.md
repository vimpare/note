ios微信浏览器键盘拉起页面上移问题


解决办法

在输入框失去焦点时候
`window.scrollTo(0,0)`
```
iosInput:function(ele){
		if(!ele){
			ele = 'input';
		}
		$('body').on('blur',ele,function(){
			setTimeout(function(){
				$('body,html').scrollTop(1);
			},200)
			
		})
		
	}
 ```
