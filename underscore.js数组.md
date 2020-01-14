Underscore 是一个 JavaScript 工具库，它提供了一整套函数式编程的实用功能，但是没有扩展任何 JavaScript 内置对象
#### 数组函数（Array Functions）
##### first
_.first(array, [n]) 
别名： head, take
返回array（数组）的第一个元素。传递 n参数将返回数组中从第一个元素开始的n个元素
```
_.first([5, 4, 3, 2, 1]);
=> 5
```
源码：
```
 // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
_.first = _.head = _.take = function(array, n, guard) {
    if (array == null || array.length < 1) return n == null ? void 0 : [];
    if (n == null || guard) return array[0];
    return _.initial(array, array.length - n);
  };
```
##### initial
_.initial(array, [n])
返回数组中除了最后一个元素外的其他全部元素。 在arguments对象上特别有用。传递 n参数将从结果中排除从最后一个开始的n个元素

源码：
```
// Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };
```
```
_.initial([5, 4, 3, 2, 1]);
=> [5, 4, 3, 2]
```
##### last
_.last(array, [n])
返回array（数组）的最后一个元素。传递 n参数将返回数组中从最后一个元素开始的n个元素（注：返回数组里的后面的n个元素）。

源码：
```
_.last = function(array, n, guard) {
    if (array == null || array.length < 1) return n == null ? void 0 : [];
    if (n == null || guard) return array[array.length - 1];
    return _.rest(array, Math.max(0, array.length - n));
  };
```
##### rest
返回数组中除了第一个元素外的其他全部元素。传递 index 参数将返回从index开始的剩余所有元素
_.rest(array, [index]) 别名： tail, drop
源码：
```
// Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };
```
```
_.rest([5, 4, 3, 2, 1],3)
=> [2, 1]
```
##### compact
_.compact(array)
返回一个除去所有false值的 array副本。 
在javascript中, false, null, 0, "", undefined 和 NaN 都是false值。

源码：
```
// Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, Boolean);
  };
```
```
_.compact([0, 1, false, 2, '', 3]);
=> [1, 2, 3]
```
##### flatten
_.flatten(array, [shallow])
将一个嵌套多层的数组 array（数组） (嵌套可以是任何层数)转换为只有一层的数组。 如果你传递 shallow参数，数组将只减少一维的嵌套。
```
_.flatten([1, [2], [3, [[4]]]]);
=> [1, 2, 3, 4];

_.flatten([1, [2], [3, [[4]]]], true);
=> [1, 2, 3, [[4]]];
```
源码：
```
// Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, output) {
    output = output || [];
    var idx = output.length;
    for (var i = 0, length = getLength(input); i < length; i++) {
      var value = input[i];
      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
        // Flatten current level of array or arguments object.
        if (shallow) {
          var j = 0, len = value.length;
          while (j < len) output[idx++] = value[j++];
        } else {
          flatten(value, shallow, strict, output);
          idx = output.length;
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }
    return output;
  };

// Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false);
  };



```
##### without
_.without(array, *values)
返回一个删除所有values值后的 array副本
```
 // Return a version of the array that does not contain the specified value(s).
  _.without = restArguments(function(array, otherArrays) {
    return _.difference(array, otherArrays);
  });
```
```
_.without([1, 2, 1, 0, 3, 1, 4], 0, 1);
=> [2, 3, 4]
```










