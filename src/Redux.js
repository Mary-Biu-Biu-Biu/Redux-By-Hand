const createStore = require("./createStore").createStore
const combineReducers = require("./combineReducers").combineReducers
const applyMiddleware = require("./applyMiddleware").applyMiddleware
module.exports = {
    createStore: createStore,
    combineReducers: combineReducers,
    applyMiddleware: applyMiddleware,
}
