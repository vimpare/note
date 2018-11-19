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
13.罗马数字转整数
```
var romanToInt = function (s) {
    var o = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }
    var sarr = s.split('');
    var newarr = 0
    for (let i = 0; i < sarr.length; i++) {
        var next = sarr[i + 1],
            now = sarr[i];
        if (o[next] > o[now]) {
            newarr += (o[next] - o[now])
            i++
        } else {
            newarr += (o[now])
        }

    }
   return newarr
};
```
14 最长公共前缀：
```
var longestCommonPrefix = function(strs) {
   var first = strs[0]
   if(!strs.length){
       return ''
   }
    var str = '';
    for (var i = 0; i < first.length; i++) {
        for (var j = 1; j < strs.length; j++) {
            if (first[i] != strs[j][i]) {
                return str;
            }
        }
        str += first[i];
    }
    return str 
};
```
38.报数
```
var countAndSay = function (n) {
    if (n === 1) {
        return '1'
    }
    var str = '11',
        num = 1,
        newstr = '';
    for (var i = 2; i < n; i++) {
        for (var j = 1; j < str.length; j++) {

            if (str[j] === str[j - 1]) {
                num++
            } else {

                newstr = newstr + num + str[j - 1]
                num = 1
            }
            if (j == str.length - 1) {
                newstr = newstr + num + str[j]
            }
        }
        num = 1;
        str = newstr;
        newstr = '';


    }

    return str
};

console.log(countAndSay(5))
```
58 最后一个单词的长度
```
var lengthOfLastWord = function(s) {
    var arr = s.trim().split(' ');
    return arr[arr.length - 1].length
};
```
125. 验证回文串
```
var isPalindrome = function(s) {
    var re=/[^\u4e00-\u9fa5a-zA-Z0-9]/g
    var str=s.toLowerCase().replace(re,'')
    for(var i=0;i<str.length;i++){
       if(str[i]!=str[str.length-1-i]){
           return false
       }
    }
    return true
};;
```
344.反转字符串
```
var reverseString = function(s) {
    return s.split('').reverse().join('')
};
```
383. 赎金信
```
152ms
var canConstruct = function(ransomNote, magazine) {
    var arr=magazine.split('');
    var len=arr.length;
    for(var i=0;i<ransomNote.length;i++){
        for(var j=0;j<arr.length;j++){
            if(arr[j]==ransomNote[i]){
                arr.splice(j,1)
                break
            }
        }
    }
    return ransomNote.length+arr.length==len
};
```
```
96ms
var canConstruct = function(r, m) {
    m=m.split("");
    for(var i=0; i< r.length; i++) {
        if(m.indexOf(r[i]) == -1) {
            return false;
        } else {
            m[m.indexOf(r[i])] = "fasdf";
        }
    }
    return true;
};
```
