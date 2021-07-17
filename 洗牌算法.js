/**
 * @Author       : Gatsby
 * @Date         : 2021-07-15 15:11:50
 * @LastEditTime : 2021-07-16 17:30:53
 * @LastEditors  : Gatsby
 * @Description  : 洗牌算法多种实现方式。
 *                 题目： 给你一副崭新的扑克牌（ 54 张）， 你如何“ 洗乱” 它？？
 * @FilePath     : \JavaScriptDemo\洗牌算法.js
 */

/*******
 * @description: 方法一： 在 1 至 54 之前随机生成一个整数， 然后把它放到新数组里， 然后再随机生成一个整数， 如果和之前生成的没重复， 直接放入新数组， 如果和之前重复了， 那再随机生成一个......
 *               这样直至数组中所有数字都被抽取放到新数组， 最终得解!
 *               缺点： 效率太低,打乱这副扑克牌要洗 200~300 次！ 因为越往后， 生成随机数重复的概率就越大！
 * @param {nums}
 * @return {randRes}
 */
// 青铜洗牌算法：
// 生成 nums：
let nums = [];
for (let i = 1; i <= 54; i++) {
    nums.push(i);
}

let count = 0;
const shuffle = function (nums) {
    let radomRes = [];
    while (radomRes.length < nums.length) {
        count++; // count 计数洗牌次数
        let rand = randOne()
        if (radomRes.includes(rand)) { // 随机数重复
            rand = randOne(); // 再次生成
        } else {
            radomRes.push(rand);
        }
    }
    return radomRes;
}

// 在 1 至 54 之间任意取一整数；
const randOne = function () {
    return Math.floor(Math.random() * 54) + 1;
}

console.log(shuffle(nums)); //[41, 10, 44, 47, 29, 24, 11, 28, 3, 32, 27, 37,33, 23, 54, 19, 21, 45, 40, 5, 50, 17, 39, 1,43, 25, 34, 7, 9, 49, 14, 4, 51, 8, 15, 16,36, 12, 13, 53, 35, 48, 42, 30, 52, 26, 46, 2,31, 20, 18, 6, 22, 38]
console.log(count); //276


/*******
 * @description: 方法二： 将牌随机分成两堆， 让它们交换， 然后再随机分成两堆， 再让它们交换， 然后再随机分出两堆......这样重复洗十几、 二十次后， 完成洗牌。
 *               缺点： 整体 “乱” 的程度不够高！
 * @param {nums_2}
 * @return {radomRes_2}
 */
// 生成 nums：
let nums_2 = [];
for (let i = 1; i <= 54; i++) {
    nums_2.push(i);
}

// 白银洗牌算法：
const shuffle_2 = function (nums_2) {
    let radomRes_2 = JSON.parse(JSON.stringify(nums_2));
    for (var i = 0; i < 20; i++) {
        let randIndex1 = randOneIndex();
        let randIndex2 = randOneIndex();

        if (randIndex2 < randIndex1) { // 若 rand2<rand1，二者替换
            randIndex1 = randIndex1 + randIndex2;
            randIndex2 = randIndex1 - randIndex2;
            randIndex1 = randIndex1 - randIndex2;
        }

        let radomBlock = radomRes_2.slice(randIndex1, randIndex2 + 1);
        radomRes_2 = radomRes_2.slice(0, randIndex1).concat(radomRes_2.slice(randIndex2, 53)).concat(radomBlock);
    }
    return radomRes_2;
}

// 在 0 至 53 之间任意取一整数作数组下标；
const randOneIndex = function () {
    return Math.floor(Math.random() * 54);
}
console.log(shuffle_2(nums_2)); //[5, 6, 15, 16, 17, 53, 33, 9, 10, 11, 12, 47,48, 49, 1, 2, 3, 4, 39, 46, 26, 27, 19, 20,21, 22, 23, 24, 25, 50, 51, 31, 32, 35, 36, 37,38, 13, 43, 18, 28, 29, 30, 52, 40, 41, 42, 34,14, 44, 45, 7, 8, 9]


/*******
 * @description: 随机的结果要能够覆盖所有的情况， 并且随机结果出现的概率相等；
 *  洗 54 张牌， 随机结果需覆盖所有情况就应该是 54 张牌的排列方式， A5454， 即 54!（54 的阶层） 种随机结果。
    两两对换：
    洗 1 次， 会得到 n 种可能的结果；
    洗 2 次， 会得到 n * (n - 1) 种结果；
    洗 3 次， 会得到 n * (n - 1) * (n - 2) 种结果；
    ......
    洗 n 次之后， 我们才满足了： 随机结果【 覆盖所有情况】， 并且所有随机结果【 出现概率相等】。
    所以， 必须洗 54 次， 才能达到目的。
 * @param {nums_3}
 * @return {radomRes_3}
 */
// 生成 nums：
let nums_3 = [];
for (let i = 1; i <= 54; i++) {
    nums_3.push(i);
}

// 黄金洗牌算法：
const shuffle_3 = function (nums_3) {
    // 高手都用 slice(0) 复制数组
    const radomRes_3 = nums.slice(0);
    let length = radomRes_3.length;

    // 产生的结果有 n! 种可能
    for (let index = 0; index < length; index++) {
        // 从 i 到 n-1 随机选一个
        const rand = randOne_3(index, length - 1);

        // 交换nums数组i和rand下标的两个元素
        [radomRes_3[index], radomRes_3[rand]] = [radomRes_3[rand], radomRes_3[index]];
    }
    return radomRes_3;
};

// 获取闭区间 [n, m] 内的一个随机整数
const randOne_3 = function (n, m) {
    return Math.floor(Math.random() * (m - n + 1)) + n;
};
console.log(shuffle_3(nums_3)); //[    36, 28, 10, 30, 51, 20, 41, 26, 37, 29, 7, 39,    40, 5, 6, 27, 34, 35, 23, 11, 4, 3, 2, 38,    54, 21, 18, 48, 16, 1, 9, 44, 19, 47, 49, 24,    46, 45, 31, 53, 25, 32, 42, 43, 15, 17, 52, 14,    8, 22, 13, 50, 12, 33]


/*******
 * @description: Fisher - Yates 洗牌算法
 *                  思路：
                    随机生成 1 至 54 之间的整数， 将它和数组的最后一位替换；
                    然后再在 1 至 53 之间随机生成一位整数， 将它和数组的倒数第二位替换；
                    然后再 1 至 52 之间随机生成一位整数， 将它和数组的倒数第三位替换；
                    ......
                    直至在 1 至 1 之间随机生成一位整数（ 即 1）， 将它和数组第 1 位替换（ 即替换自身）；
                    这样做， 时间复杂度为 O(n)， 且任意一张牌出现的概率都是 1 / 52， 满足： 随机结果覆盖所有情况， 随机结果出现概率相等！
                    数学证明： 一张牌被放到第 i 个位置的机率为 P， 则 P 会等于前 i - 1 个位置都未选到这张牌且第 i 个位置选到这张牌。
 * @param {*}
 * @return {*}
 */
// 生成 nums：
let nums_4 = []
for (let i = 1; i <= 54; i++) {
    nums_4.push(i);
}

// 铂金洗牌算法：
const FYShuffle = function (nums) {
    const radomRes_4 = nums.slice(0);
    let len = radomRes_4.length;
    while (len > 1) {
        let rand = Math.floor(Math.random() * len);
        len--;
        let temp = radomRes_4[len];
        radomRes_4[len] = radomRes_4[rand];
        radomRes_4[rand] = temp;
    }
    return radomRes_4;
}
console.log(FYShuffle(nums_4));












// 内容摘自：
// 作者： 掘金安东尼
// 链接： https: //juejin.cn/post/6984925268754317320
// 来源： 掘金
// 著作权归作者所有。 商业转载请联系作者获得授权， 非商业转载请注明出处。