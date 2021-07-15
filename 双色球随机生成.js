var a = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33'];

var b = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16']

var red1 = [];
var blue1 = [];
for (var i = 0; i < 6; i++) {
    var num = Math.floor(Math.random() * a.length);
    red1.push(a[num]);
    a.splice(num, 1);
}
red1.sort(function (n1, n2) {
    return n1 - n2;
})
console.log('红球： ' + red1);

var num2 = Math.floor(Math.random() * b.length); //得出随机下标
blue1.push(b[num2]);
console.log('蓝球： ' + blue1);