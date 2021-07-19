/**
 * @Author       : Gatsby
 * @Date         : 2021-07-19 09:44:50
 * @LastEditTime : 2021-07-19 09:47:03
 * @LastEditors  : Gatsby
 * @Description  : 一个闭包程序。
 * @FilePath     : \basicLearningProjectc:\github\JavaScriptDemo\一个闭包.js
 */
function fn1() {
    var a = 2;

    function fn2() {
        a++;
        console.log(a);
    }
    return fn2;
}
var f = fn1();
f();
f();