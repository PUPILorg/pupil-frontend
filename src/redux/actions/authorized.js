export const AUTHORIZED = 'authorized/approved'

export function authorized(status) {
    return {
        type: AUTHORIZED,
        status: status,
    }
}

export const UNAUTHORIZED = 'authorized/rejected'

export function unauthorized(status) {
    return {
        type: UNAUTHORIZED,
        status: status,
    }
}
