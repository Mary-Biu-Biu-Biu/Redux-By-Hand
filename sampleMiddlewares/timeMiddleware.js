const timeMiddleware = (store) => (next) => (action) => {
    console.log("time", new Date().getTime())
    next(action)
}

exports.timeMiddleware = timeMiddleware
