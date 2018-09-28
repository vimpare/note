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
