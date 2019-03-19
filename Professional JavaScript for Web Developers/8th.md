　navigator对象
 检测插件：
 navigator.plugins   对于非IE浏览器，可以使用plugins数组来达到这个目的。
 
 
 
 //检测IE中的插件
 function hasIEPlugin(name){ 
   try {        
     new ActiveXObject(name);       
     return true;   
   } 
   catch (ex){     
     return false;    
     }}
 //检测Flash
 alert(hasIEPlugin("ShockwaveFlash.ShockwaveFlash"));
 //检测QuickTime
 alert(hasIEPlugin("QuickTime.QuickTime"));
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
