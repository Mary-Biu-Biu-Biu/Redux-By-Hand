/* 封装一个function：适用于所有的state属性值更改 */
const createStore = function (initState) {
    let state = initState // 建立初始状态

    /* 发布-订阅模式：用于通知使用者state的改变 */
    // 订阅者
    let listeners = []

    // 添加新订阅
    function subscribe(listener) {
        listeners.push(listener)
    }

    // 更新state的值
    function changeState(newState) {
        state = newState

        // 循环每一个订阅
        for (let i = 0; i < listeners.length; i++) {
            const listener = listeners[i]
            // 执行订阅者中存储的function
            listener()
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
