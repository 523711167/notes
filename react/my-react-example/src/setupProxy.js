const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
     app.use(
        //  神奇的ES6写法
         createProxyMiddleware([process.env.REACT_APP_API], {
            target: process.env.REACT_APP_URL,
            changeOrigin: true,
            pathRewrite: {
                [`${process.env.REACT_APP_API}`]: ''
            }
        })
    )
}