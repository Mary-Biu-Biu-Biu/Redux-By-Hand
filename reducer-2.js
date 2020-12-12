const inistate = {
    message: '',
}

// 更新2：为了满足不同逻辑部分的需求，可能会需要多个互相没有关联的reducer
function reducer2(state, action) {
    // 更新3：防止没有传入state的情况
    if (!state) return inistate

    if (action.type === 'EXTRA') {
        return {
            ...state,
            message: action.payload.newMessage,
        }
    }
    // 默认情况：返回旧state，避免不小心错误更改state
    return state
}

module.exports.reducer2 = reducer2
