import service from "../utils/request";

// 添加部门
export function AddDept(data) {
    return service.request({
        url: "/department/add/",
        method: "post",
        data
    })
}
