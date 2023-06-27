import {get, post} from './api.js'
import { clearUserData, setUserData } from '../utilities.js'

const endpoints={
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout'
}

export async function login(username, password) {
    const result = await post(endpoints.login, {username, password})
    setUserData(result)
}

export async function register (username, password) {
    const result = await post(endpoints.register, {username, password})
    setUserData(result)
}

export async function logout() {
    get(endpoints.logout)
    clearUserData()
}