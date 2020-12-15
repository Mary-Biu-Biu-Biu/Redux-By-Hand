# Redux-By-Hand
## 文件结构说明

- [sampleMiddlewares](sampleMiddlewares)（文件夹）：用于测试而写的参考中间件

- [sampleReducers](sampleReducers)（文件夹）：用于测试而写的参考reducer

- [src](src)（文件夹）：实现redux的源文件

- [test.js](test.js)（文件）：包含多reducer（拆分state）多中间件的测试文件

- [test2.js](test2.js)（文件）：简易测试，使用单独reducer，单独state，无中间件
- ---
## 实现功能

1. **createStore()**

     - 参数： reducer，初始state，createStore增强器

     - 返回3个函数

       - subscribe()：添加订阅

       - changeState()：从外部发送action，在store内部对state进行修改

       - getState()：从外部获取state（不可以在外部对state直接进行修改）

1. **combineReducers()**

     - 用途：拆分出多个reducer和state

     - 参数：通过key+value对应不同reducer函数

     - 返回一个新的reducer函数

       - 接收action时，会循环key对应的函数，并更新state中key对应的数值

1. **applyMiddleware()**

     - 用途：对store中的changeState功能进行增强和修改

     - 参数：多个middleware函数（有格式要求）

     - 返回一个之前提到的createStore增强器

       - 增强器：会返回一个增强的createStore函数

          - 增强的createStore函数：会返回一个增强的store，其中changeState函数会通过所有的middleware进行改写
