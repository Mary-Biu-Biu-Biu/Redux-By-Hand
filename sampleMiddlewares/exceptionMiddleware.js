const exceptionMiddleware = (store) => (next) => (action) => {
    try {
        next(action)
    } catch (err) {
        console.error("错误报告: ", err)
    }
}

exports.exceptionMiddleware = exceptionMiddleware
