css
---------------------------
##input##
改变光标颜色：caret-color
自动获取焦点：autofocus
##左右两个元素等高##
这两个元素的父元素设置：overflow：hidden<br>
左侧元素设置：padding-bottom:9000px;margin-bottom:-9000px;<br>，    
##英文单词换行##
word-wrap:break-word;
##filter滤镜
imgDiv.css({ filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)" });  
Microsoft.AlphaImageLoader是IE滤镜的一种，其主要作用就是对图片进行透明处理。

    filter : progid:DXImageTransform.Microsoft.AlphaImageLoader ( -enabled=bEnabled , sizingMethod=sSize , src=sURL )
    属性：
    enabled :　  可选项。布尔值(Boolean)。设置或检索滤镜是否激活。true | false
        true    :　  默认值。滤镜激活。
        false   :　  滤镜被禁止。
   - sizingMethod    :　  可选项。字符串(String)。设置或检索滤镜作用的对象的图片在对象容器边界内的显示方式。
        crop    :　  剪切图片以适应对象尺寸。
        image   :　  默认值。增大或减小对象的尺寸边界以适应图片的尺寸。
        scale   :　  缩放图片以适应对象的尺寸边界。
    -src :　  必选项。字符串(String)。使用绝对或相对 url 
        地址指定背景图像。假如忽略此参数，滤镜将不会作用。

**媒体查询**
```
@media screen and (max-width: 960px){
    body{
    background-color:#FF6699
    }
}
```