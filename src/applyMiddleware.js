function applyMiddleware(...middlewares) {
    // 返回一个函数：在store中会用来创建一个加强版的createStore
    return function enhanceCreateStore(createStore) {
        // 基于现有createStore，对createStore进行改写
        // 最终返回一个加强版的store：会对dispatch（changestate）基于middleware进行改写
        return function enhanced(reducer, inistate) {
            // 先创建旧版的store，并获取初始的dispatch
            let store = createStore(reducer, inistate)
            let changeState = store.changeState

            // 反转middleware的顺序
            middlewares.reverse()

            // 按照顺序对dispatch进行改写
            middlewares.map((middleware) => {
                // 给middleware参数
                changeState = middleware(store)(changeState)
            })

            // 返回新的store
            return { ...store, changeState }
        }
    }
}

exports.applyMiddleware = applyMiddleware
