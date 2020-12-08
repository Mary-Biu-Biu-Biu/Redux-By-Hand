// 使用node语法导入redux文件中的函数
const redux = require('./Redux')
const createStore = redux.createStore

// 创建初始状态
const state = {
    count: 1,
}

// 使用初始状态，创建store
let store = createStore(state)

// 订阅：添加处理函数
store.subscribe(() => {
    console.log(store.getState())
})
store.subscribe(() => {
    console.log(store.getState()['count'])
})

// 给出一个新的state，对旧state执行更改
store.changeState({
    ...store.getState(),
    new: { name1: 'mary first change' },
})

store.changeState({
    ...store.getState(),
    count: 2,
    new: { name2: 'mary second change' },
})
