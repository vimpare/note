1.
```
  var twoSum = function(nums, target) {
      var result= [];
      nums.map(function(item,index){
         nums.map(function(item2,index2){        
             if(index!==index2){    
                 if(item2+item==target){
                  result= [index2,index]
                 return
                 }
             }      
           })
      })
      return result
   };
 ```
7. 反转整数
给定一个 32 位有符号整数，将整数中的数字进行反转。
注意:
假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−231,  231 − 1]。根据这个假设，如果反转后的整数溢出，则返回 0。
```
var reverse = function(x) {
    
    var str=x+'';
    var newArr='';
    var arr=str.split('')
    if(arr[0]=='-'){
        arr=['-'].concat(arr.splice(1,arr.length-1).reverse()).join('')
        console.log(arr)
        newArr= arr
    }else{
       newArr=arr.reverse().join('')
    }
    if(parseFloat(newArr)<=Math.pow(-2,31)||parseFloat(newArr)>=Math.pow(2,31)-1){
        newArr='0'
    }
    return parseFloat(newArr)
   
};
reverse(1534236469)
```
