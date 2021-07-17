/**
 * @Author       : Gatsby
 * @Date         : 2021-07-17 16:26:01
 * @LastEditTime : 2021-07-17 17:02:43
 * @LastEditors  : Gatsby
 * @Description  : 使用对象字面量解决代码中出现的大量 if-else 语句
 * @FilePath     : \JavaScriptDemo\使用对象字面量替换大量的If-else.js
 */
/*******
 * @description: function 1： 我们有一个对象， 其中键是条件， 值是响应。 然后我们可以使用方括号符号从传入的键中选择对象的正确值。
                 最后一部分（ ? ? “Rhyme not found”） 使用无效合并来分配默认响应。 这意味着如果 rhymes[rhyme.toLowercase()] 为 null 或未定义（ 但不是 false 或 0），
                 则返回默认字符串“ Rhyme not found”。 这很重要， 因为我们可能合法地希望从我们的条件中返回 false 或 0。
                 function 2： 可以将函数作为值传递给对象键并执行响应.
                 选择我们想要做的计算并执行响应， 传递两个数字。 你可以使用可选链接（ 最后一行代码中的 ? .）来仅执行已定义的响应。 否则， 将使用默认的返回字符串。
 * @param {rhyme}
 * @return {
     rhymes[rhyme.toLowerCase()],
     actions[val]
    }
 *
 */
const rhyme = {
    toLowerCase: function () {
        // return "apples and pears";
        // return null;
        return undefined;
        // return 0;
        // return false
    },
    action: "divide"
};


//无效合并 ??
function getTranslationMap(val) {
    const rhymes = {
        "apples and pears": "Stairs",
        "hampstead heath": "Teeth",
        "loaf of bread": "Head",
        "pork pies": "Lies",
        "whistle and flute": "Suit",
    };
    return rhymes[val.toLowerCase()] ?? "Rhyme not found";
}

//可选链接 ?.
function calculate(num_1, num_2, val) {
    const actions = {
        add: (a, b) => a + b,
        subtract: (a, b) => a - b,
        multiply: (a, b) => a * b,
        divide: (a, b) => a / b,
    };
    return actions[val] ?. (num_1, num_2) ?? "Calculation is not recognised";
}
console.log(getTranslationMap(rhyme));
console.log(calculate(7,8,rhyme.action));