import { post } from "./api.js"

let endpoints={
    register: '/user/register',
    login: '/user/login',
    logout: '/user/logout'
}

export async function register(email, password) {
    let userData = await post(endpoints.register(email, password))
}