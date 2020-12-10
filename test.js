// 使用node语法导入redux文件中的函数
const redux = require('./redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers

// 导入不同逻辑的reducer
const reducer1 = require('./reducer-1').reducer1
const reducer2 = require('./reducer-2').reducer2

// 更新2：根据key合并reducer
const reducer = combineReducers({ reducer1: reducer1, reducer2: reducer2 })

// 创建初始状态
// 更新2：新增不同reducer对应的key,以及对应的value
const state = {
    reducer1: {
        count: 1,
    },
    reducer2: {
        message: '',
    },
}

// 使用初始状态，创建store
// 更新1：引入reducer概念，根据reducer创建store
let store = createStore(reducer, state)

// 订阅：添加处理函数
store.subscribe(() => {
    console.log(store.getState())
})

// 给出一个新的state，对旧state执行更改
// 更新1：仅派发指令代号，而不直接对state做出任何更改（不包含任何业务逻辑）
store.changeState({ type: 'INCREMENT' })
store.changeState({ type: 'ADD', payload: { value: 2 } })
store.changeState('invalid change')

// 更新2：派发其他逻辑中的指令
store.changeState({ type: 'EXTRA', payload: { newMessage: 'new' } })
