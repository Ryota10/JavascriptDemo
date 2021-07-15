console.dir("实例1_________________");
function f1() {
    var n = 999;
    nAdd = function () {
        n += 1
    }
    function f2() {
        console.dir(n);
    }
    return f2;
}
var result = f1();
result(); // 999
nAdd();
result(); // 1000

// 这里有一个地方需要注意， 函数内部声明变量的时候， 一定要使用var命令。 如果不用的话， 你实际上声明了一个全局变量！
console.dir("实例2_________________");
var name = "The Window";
var object = {
    name: "My Object",
    getNameFunc: function () {
        return function () {
            // Javascript语言的特殊之处， 就在于函数内部可以直接读取全局变量。
            console.dir(this);
            return this.name;
        };
    }
};
console.dir(object.getNameFunc()());


console.dir("实例3_________________");
var name = "The Window";
var object_2 = {
    name: "My Object",
    getNameFunc: function () {
        var that = this;
        return function () {
            console.dir(that)
            return that.name;
        };
    }
};
console.dir(object_2.getNameFunc()());


console.dir("实例4_________________");
function foo(x) {
    var tmp = 3;
    return function (y) {
        console.dir(x + y + (++tmp));
    }
}
var bar = foo(2); // bar 现在是一个闭包等于内部的嵌套函数
bar(10); //16
bar(10); //17   内部变量被保存于内存中



// 文章参考：http://www.ruanyifeng.com/blog/2009/08/learning_javascript_closures.html