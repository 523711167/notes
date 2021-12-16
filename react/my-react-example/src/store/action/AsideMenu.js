import { addTab, selectedTab, deleteTab, openKeysMenu } from '@s/constant'


export const onOpenMenuAction = (result) => {
    let { data } = result 
    return {
        type: openKeysMenu,
        data
    }
}

export const addTabAction = (result) => {
    let { data } = result 
    return {
        type: addTab,
        data
    }
}

export const selectedTabAction = (result) => {
    let { data } = result 
    return {
        type: selectedTab,
        data
    }
}

export const deleteTabAction = (result) => {
    let { data } = result 
    return {
        type: deleteTab,
        data
    }
}

