let reg_email = /^([a-zA-Z]|[0-9])(\w|\\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/


export function email_validator(email) {
    return reg_email.test(email)
}