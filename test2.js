// 更改后，检查之前的用法是否还支持
const redux = require('./Redux')
const createStore = redux.createStore

// 使用唯一的state
const state = {
    count: 1,
}

// reducer
function reducer(state, action) {
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

// 使用初始状态，创建store
// 更新1：引入reducer概念，根据reducer创建store
let store = createStore(reducer, state)

// 订阅：添加处理函数
store.subscribe(() => {
    console.log(store.getState())
})
store.subscribe(() => {
    console.log(store.getState()['count'])
})

// 给出一个新的state，对旧state执行更改
// 更新1：仅派发指令代号，而不直接对state做出任何更改（不包含任何业务逻辑）
store.changeState({ type: 'INCREMENT' })
store.changeState({ type: 'ADD', payload: { value: 2 } })
store.changeState('invalid change')
