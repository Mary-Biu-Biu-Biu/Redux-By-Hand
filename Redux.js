const createStore = require("./src/createStore").createStore
const combineReducers = require("./src/combineReducers").combineReducers
const applyMiddleware = require("./src/applyMiddleware").applyMiddleware
module.exports = {
    createStore: createStore,
    combineReducers: combineReducers,
    applyMiddleware: applyMiddleware,
}
