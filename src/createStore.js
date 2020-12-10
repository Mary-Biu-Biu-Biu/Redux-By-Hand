/* 封装一个function：适用于所有的state属性值更改 */
// 更新1：引入reducer，防止对state的随意修改
const createStore = function (reducer, initState) {
    let state = initState // 建立初始状态

    /* 发布-订阅模式：用于通知使用者state的改变 */
    // 订阅者
    let listeners = []

    // 添加新订阅
    function subscribe(listener) {
        listeners.push(listener)
    }

    // 更新state的值（dispatch）
    function changeState(action) {
        // 更新1：通过reducer，根据不同action对state进行不同的修改。因此reducer必须是函数。
        state = reducer(state, action)

        // 循环每一个订阅
        for (let i = 0; i < listeners.length; i++) {
            // 执行订阅者中存储的function
            listeners[i]()
        }
    }

    // 获取当前的state
    function getState() {
        return state
    }

    return {
        subscribe,
        changeState,
        getState,
    }
}
// 使用node语法进行导出
module.exports.createStore = createStore
