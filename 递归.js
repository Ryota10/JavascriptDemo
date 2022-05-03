/**
 * @Author       : liu-j-d
 * @Date         : 2022-05-02 10:45:53
 * @LastEditTime : 2022-05-02 10:45:55
 * @LastEditors  : liu-j-d
 * @Description  :
 * @FilePath     : \webc:\Users\Gatsby\Desktop\递归.js
 */
// 递归函数
function getCurNode(id, level = -1) {
    let curData = {}
    let curId = id
    const childrenKey = this.childrenKey
    const findData = function (treeData) {
        level++
        treeData.find(data => {
            if (data.id === id) {
                curData = cloneDeep(data)
            } else {
                const children = data[childrenKey]
                if (children && children.length > 0) {
                    findData(children)
                }
            }
        })
    }
}

