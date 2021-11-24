import service from "../utils/request";

// 添加部门
export function AddDept(data) {
    return service.request({
        url: "/department/add/",
        method: "post",
        data
    })
}


export function ListDept(data) {
    return service.request({
        url: "/department/list/",
        method: "post",
        data
    })
}

export function DeleteDept(data) {
    return service.request({
        url: "/department/delete/",
        method: "post",
        data
    })
}

export function StatusDept(data) {
    return service.request({
        url: "/department/status/",
        method: "post",
        data
    })
}

export function EditDept(data) {
    return service.request({
        url: "/department/edit/",
        method: "post",
        data
    })
}
