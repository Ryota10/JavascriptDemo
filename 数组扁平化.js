/*
 * @Author: Gatsby
 * @Date: 2021-06-24 16:06:12
 * @LastEditTime: 2021-06-24 16:33:30
 * @LastEditors: Gatsby
 * @Description: 数组扁平化方法
 * @FilePath: \JavaScriptDemo\数组扁平化.js
 * 可以输入预定的版权声明、个性签名、空行等
 */

var arr = [1, [2, [3]]];
// 1.使用 Array.prototype.flat 可以直接将多层数组拍平成一层：
var res_1= [1, [2, [3]]].flat(2)  // [1, 2, 3]
console.dir(res_1);

// 2.ES5 实现：递归。
function flatten(arr) {
    var result = [];
    for (var i = 0, len = arr.length; i < len; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flatten(arr[i]))
        } else {
            result.push(arr[i])
        }
    }
    return result;
}
console.dir(flatten(arr));


//3.ES6 实现：
function flatten(arr) {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}
console.dir(flatten(arr));
