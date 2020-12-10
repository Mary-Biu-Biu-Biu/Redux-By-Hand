// reducers需要以key（reducer名字）+value（reducer函数）的形式，传入
// 并返回一个新的完整reducer函数
function combineReducers(reducers) {
    // 获取reducer中的key，方便后续获取对应的reducer函数
    // 这里其实还需要对reducer的key和函数验证一下
    return (state, action) => {
        let keys = Object.keys(reducers)

        for (let i = 0; i < keys.length; i++) {
            // 获取 key，以及和 key 对应的 reducer + state
            let key = keys[i]
            let reducer = reducers[key]
            let stateForKey = state[key]

            // 对当前key的state执行它的reducer
            let newstateForKey = reducer(stateForKey, action)

            // 更新state
            state = {
                ...state,
            }
            state[key] = newstateForKey
        }
        return state
    }
}

exports.combineReducers = combineReducers
