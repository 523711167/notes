import { search } from '@s/constant.js'


export const searchAction = ({ data, total }) => {
    return {
        type: search,
        data: {
            data,
            total
        }
    }
}