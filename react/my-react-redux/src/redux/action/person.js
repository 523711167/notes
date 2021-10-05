import { addPerson as addPersonType } from "../constant"

export const addPerson = (val) => {
    return {type: addPersonType, data: val}
}