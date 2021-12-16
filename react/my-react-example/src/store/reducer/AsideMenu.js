import { addTab, selectedTab, openKeysMenu, deleteTab } from '@s/constant'

const reg = /(?<openKeys>.*)\/(?<other>.*)/

const init = {
    showMenus: [{
        title: '主页',
        key: '/welcome'
    }],
    selectedKeys: ['/welcome'],
    openKeys: [],
}
export default function AsideMenuReducer(preState=init, { type, data={} }) {
    let { showMenus } = preState
    let { selectMenu, selectedKeys, openKeys, deleteTabs } = data
    let { selectedKeys: oldSelectedKeys } = preState 
    switch (type) {
        case addTab:
            if (showMenus.find( menu => ([...selectMenu].some( selectedMenu => (selectedMenu.key === menu.key))))) {
                return {
                    ...preState,
                    showMenus,
                    selectedKeys,
                }
            } 
            return {
                ...preState,
                showMenus: [...showMenus, ...selectMenu],
                selectedKeys,
            }
        case selectedTab:
            return {
                ...preState,
                selectedKeys:[...selectedKeys],
                openKeys: selectedKeys.map( item => reg.exec(item).groups.openKeys)
            }
        case openKeysMenu:
            return {
                ...preState,
                openKeys
            }
        case deleteTab:
            let newShowMenus = showMenus.filter( item => ( !deleteTabs.some(a => a === item.key)))
            let newSelectedKeys = oldSelectedKeys.find( item => deleteTabs.some(a => a === item)) === undefined 
            ?  [...oldSelectedKeys]: newShowMenus.length !== 0  
            ? [newShowMenus[newShowMenus.length - 1].key]: []
            return {
                showMenus: newShowMenus,
                selectedKeys: newSelectedKeys,
                openKeys: newSelectedKeys.map( item => reg.exec(item).groups.openKeys)
            }
        default:
            return preState;
    }
}