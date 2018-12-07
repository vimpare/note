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
```
64ms 原来还可以这样写 6666
var canConstruct = function(ransomNote, magazine) {
    let code = new Array(26).fill(0);
    for (let i = 0; i < magazine.length; i++) {
        code[magazine[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    for (let i = 0; i < ransomNote.length; i++) {
        let index = ransomNote[i].charCodeAt(0) - 'a'.charCodeAt(0);
        code[index]--;
        if (code[index] < 0) {
            return false;
        }
    }
    return true;
};
```
387. 字符串中的第一个唯一字符
```
自己：
var firstUniqChar = function (s) {
    let code = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        code[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    for (let i = 0; i < s.length; i++) {
        let index = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
        if (code[index] == 1) {
            return i;
        }
    }
    return -1
};
```
indexOf 
stringObject.indexOf(searchvalue,fromindex)
```
他人
var firstUniqChar = function(s) {
   for(var i=0;i<s.length;i++){
       var c=s.charAt(i);
       if(s.indexOf(c)==i&&s.indexOf(c,i+1)==-1){
           return i;
       }
   }
    return -1;
};
```
657. 机器人能否返回原点
```
var judgeCircle = function (moves) {
    var o = {
        R: [1, 0],
        L: [-1, 0],
        U: [0, 1],
        D: [0, -1]
    }
    var num1 = 0,
        num2 = 0;
    for (var i = 0; i < moves.length; i++) {
        var letter = moves[i];
        num1 += o[letter][0];
        num2 += o[letter][1]
    }
    //不可连等
    return num1 == 0 && num2 == 0
};
```
```
他人
var judgeCircle = function(moves) {
    let x = 0;
    let y = 0;
    
    let actions = moves.split('');
    actions.forEach((act) => {
        switch(act) {
            case 'U': {
                y++;
                break;
            }
            case 'D': {
                y--;
                break;
            }
            case 'R': {
                x++;
                break;
            }
            case 'L': {
                x--;
                break;
            }
        }
    })
    
    return x == 0 && y == 0;
};
```
804. 唯一摩尔斯密码词
```
// a 97 ~ z 122
// 所以減去 96 就是在字母表的位置
var uniqueMorseRepresentations = function (words) {
    var mos = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]
    var mosArray = []

    for (let i = 0; i < words.length; i++) {
        var str = '';
        for (let j in words[i]) {
            var index = words[i].charCodeAt(j) - 96
            str += mos[index - 1]
        }
        if (mosArray.indexOf(str) == -1) {
            mosArray.push(str)
        }
      
    }
    return mosArray.length
};
```
// 557. 反转字符串中的单词 III
```
var reverseWords = function (s) {
    // 在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。
    var sArray = s.split(' ')
    var revArray = []
    sArray.map(function (item, i) {
        var newItem = item.split('').reverse().join('')+' '
        revArray.push(newItem)
    })
    return revArray.join('').replace(/(^\s*) | (\s*$)/g,'')

};
console.log(reverseWords("Let's take LeetCode contest"))
var reverseWords = function(s) {
    let words = s.split(' ');
    
    let newWords = []
    words.forEach((word) => {
        let str = '';
        for (let i=word.length-1; i>=0; --i) {
            str += word[i];
        }
        newWords.push(str);
    });
    
    return newWords.join(' ');
};
console.log(reverseWords("Let's take LeetCode contest"))
```
// 824. 山羊拉丁文
```
var toGoatLatin = function(S) {
    var sArray=S.split(' ')
    var oArray=['a', 'e', 'i', 'o', 'u','A','E','I','O','U']
    for(let i=0;i<sArray.length;i++){
        var item=sArray[i];
        if(oArray.indexOf(item[0])!=-1){
            sArray[i]+='ma'
        }else{
            sArray[i]=item.substring(1)+item[0]+'ma'
        }
        for(let j=0;j<=i;j++){
            sArray[i]+='a'
        }
    }
    return sArray.join(' ')
};
console.log(toGoatLatin("The quick brown fox jumped over the lazy dog"))
```
// 788. 旋转数字
```
var rotatedDigits = function(N) {
    var len = 0;
    for( let i = 1; i <= N; i++ ) {
        i += '';
        if ( !( /[347]/g.test(i) ) && i.replace(/[018]/g, '').length  ) len++;
    }
   return len;
};
console.log(rotatedDigits(857))
```
// 520. 检测大写字母
```
var detectCapitalUse = function(word) {
    if(word.toUpperCase()==word||word.toLowerCase()==word||word[0].toUpperCase()==word[0]&&word.substring(1).toLowerCase()==word.substring(1)){
        return true
    }
    return false
};
console.log(detectCapitalUse("ERa"))
// other
var detectCapitalUse = function(word) {
    return /(^[A-Z]+$)|(^[a-z]+$)|(^[A-Z][a-z]+$)/g.test(word);
};
```
// 819. 最常见的单词
```
var mostCommonWord = function (paragraph, banned) {
    var par = paragraph.toLowerCase().replace(/[!?',;.]/g, ' ').split(' ').sort();
    var o = {}
    var num = 0
    var last = ''
    par.map(function (item, i) {
        if (banned.indexOf(item) == -1) {
            o[item] = o[item] ? o[item] + 1 : 1
        }
    })
    for (j in o) {
        if (o[j] > num&&j) {
            num = o[j]
            last = j
        }
    }
    return last
};
```
// 349. 两个数组的交集
```
var intersection = function(nums1, nums2) {
    var arr=[];
    for(var i=0;i<nums1.length;i++){
        if(nums2.indexOf(nums1[i])!=-1&&arr.indexOf(nums1[i])==-1){     
            arr.push(nums1[i])
        }
    }
    return arr
    
};
console.log(intersection([4,9,5],[9,4,9,8,4]))
```
```
let intersection = function(nums1, nums2) {
    let set = new Set();
    let res = [];
    nums1.forEach(num => set.add(num));
    nums2.forEach(num => {
        if (set.has(num)) {
            res.push(num);
            set.delete(num);
        }
    })
    return res;
};
```
// 242. 有效的字母异位词
 ```
 
var isAnagram = function (s, t) {
    if (s.length != t.length) return false;
    for (var i = 0; i < s.length; i++) {
        var str = s[i]
        if (t.indexOf(str)!=-1) {
            t = t.replace(str, '')
        }
    }
    return t?false:true
};
```
// 434. 字符串中的单词数
```
var countSegments = function (s) {
    var arr = s.replace(/(^\s*)|(\s*$)/g, "").split(" ");
    arr=arr.filter(function (item, i) {   
        return item.replace(/(^\s*)|(\s*$)/g, "")
    })
    return arr.length
};
console.log(countSegments(", , , ,        a, eaefa"))
var countSegments = function(s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if ((i == 0 || s[i - 1] == " ") && s[i] != " ") {
            count++;
        }
    }
    return count;
};
```
// 551. 学生出勤纪录 
```
var checkRecord = function(s) {
    var t=s.replace(/A/g,'')
    return s.length-t.length<=1&&s.indexOf('LLL')==-1
};
```
// 832. 翻转图像
```
var flipAndInvertImage = function(A) {
    for(let i=0;i<A.length;i++){ 
        let b=A[i].reverse()
        for(let j=0;j<b.length;j++){
           A[i][j]=b[j]?0:1
        }

    }
    return A
};
flipAndInvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]);
```
// 867. 转置矩阵
```
var transpose = function (A) {
    var len = A[0].length,
        b = new Array(len);
    for (let i = 0; i < len; i++) {
        b[i] = []
        for (let j = 0; j < A.length; j++) {
            b[i].push(A[j][i])
        }
    }
   return b
};
transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
```
// 561. 数组拆分
```
var arrayPairSum = function (nums) {
    nums.sort(function (a, b) {
        return a - b
    })
    // 用来指定按某种顺序进行排列的函数。如果省略，元素按照转换为的字符串的各个字符的Unicode位点进行排序
    var count = 0
    for (var i = 0; i < nums.length; i++) {
        if (i % 2 == 0) {
            count += nums[i]
        }
    }
    return count
};
arrayPairSum([6214, -2290, 2833, -7908])
```
