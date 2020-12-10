// reducer由使用者自己定义，但是会被用来执行state更改，所以需要传递给store
// 接收两个参数：1. 原始的state 2. 通过changeState派发的action
// action包含两个部分：1.type（必须） 2.payload
function reducer1(state, action) {
    if (action.type === 'INCREMENT') {
        return {
            ...state,
            count: state.count + 1,
        }
    }
    if (action.type === 'ADD') {
        return {
            ...state,
            count: state.count + action.payload.value,
        }
    }
    // 默认情况：返回旧state，避免不小心错误更改state
    return state
}

module.exports.reducer1 = reducer1
