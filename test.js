// 使用node语法导入redux文件中的函数
const redux = require("./redux")
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware

// 更新4：导入middleware
const loggerMiddleware = require("./sampleMiddlewares/loggerMiddleware")
    .loggerMiddleware
const timeMiddleware = require("./sampleMiddlewares/timeMiddleware")
    .timeMiddleware
const exceptionMiddleware = require("./sampleMiddlewares/exceptionMiddleware")
    .exceptionMiddleware

// 导入不同逻辑的reducer
const reducer1 = require("./reducer-1").reducer1
const reducer2 = require("./reducer-2").reducer2

// 更新2：根据key合并reducer
const reducer = combineReducers({ reducer1: reducer1, reducer2: reducer2 })

// 更新4：使用middleware对store中的dispatch进行增强
// =》 通过applyMiddleware创建一个store增强器
const enhancer = applyMiddleware(
    exceptionMiddleware,
    timeMiddleware,
    loggerMiddleware
)
console.log(enhancer)

// 创建初始状态
// 更新2：新增不同reducer对应的key,以及对应的value
// 更新3：把state拆分到各自的reducer区块中，而不是合并写在一起,因此清空
const state = {}

// 使用初始状态，创建store
// 更新1：引入reducer概念，根据reducer创建store
let store = createStore(reducer, state, enhancer)

// 订阅：添加处理函数
store.subscribe(() => {
    console.log(store.getState())
})

// 给出一个新的state，对旧state执行更改
// 更新1：仅派发指令代号，而不直接对state做出任何更改（不包含任何业务逻辑）
store.changeState({ type: "INCREMENT" })
store.changeState({ type: "ADD", payload: { value: 2 } })
store.changeState("invalid change")

// 更新2：派发其他逻辑中的指令
store.changeState({ type: "EXTRA", payload: { newMessage: "new" } })
