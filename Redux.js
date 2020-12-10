const createStore = require('./src/createStore').createStore
const combineReducers = require('./src/combineReducers').combineReducers
module.exports = {
    createStore: createStore,
    combineReducers: combineReducers,
}
