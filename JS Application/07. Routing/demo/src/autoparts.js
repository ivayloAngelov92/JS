import { get } from "./api.js";

let endpoints={
    catalog: '/data/autoparts'
}

export async function getParts(){
    return get(endpoints.catalog)
}