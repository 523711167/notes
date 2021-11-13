// 自动化工程 
const files = require.context('../../views', true, /\.jsx$/)
let reg = /\.\/(?<path>.*)\/index.jsx/
export default files.keys()
                .filter(item => item.indexOf('Index') === -1 && item.indexOf('Login') === -1)
                .map(item => {
                    return {
                        path: `/index/${reg.exec(item).groups.path}`,
                        component: files(item).default
                    }
                })

