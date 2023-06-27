import { del, get, post, put } from "./api.js";

let endpoints={
    products: "/data/products?sortBy=_createdOn%20desc",
    byId: '/data/products/',
}

export async function getAllItems(){
    return get(endpoints.products)
}

export async function getById(id){
    return get(endpoints.byId+id)
}

export async function createItem(data){
    return post(endpoints.products, data)
}

export async function updateItem(id, data){
    return put(endpoints.byId+id, data)
}

export async function deleteItem(id){
    return del(endpoints.byId+id)
}