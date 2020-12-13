// 更改后，检查之前的用法是否还支持
const redux = require("./Redux")
const createStore = redux.createStore

// 使用唯一的state
const inistate = {
    count: 1,
}

// 单独的reducer
function reducer(state = inistate, action) {
    if (action.type === "INCREMENT") {
        return {
            ...state,
            count: state.count + 1,
        }
    }
    if (action.type === "ADD") {
        return {
            ...state,
            count: state.count + action.payload.value,
        }
    }
    return state
}

// 使用初始状态，创建store
let store = createStore(reducer)

// 订阅：添加处理函数
store.subscribe(() => {
    console.log(store.getState())
})
store.subscribe(() => {
    console.log(store.getState()["count"])
})

// 给出一个新的state，对旧state执行更改
store.changeState({ type: "INCREMENT" })
store.changeState({ type: "ADD", payload: { value: 2 } })
store.changeState("invalid change")
