import { post,get } from "./api.js";


const endpoints={
    buys:'/data/bought',
    byproductId: productId=>`/data/bought?where=productId%3D%22${productId}%22&distinct=_ownerId&count`,
    byproductIdandUserId: (productId,userId)=>`/data/bought?where=productId%3D%22${productId}%22%20and%20_ownerId%3D%22${userId}%22&count`
}

export async function buy(productId){
    return post(endpoints.buys,{productId})
}

export async function getTotalBuys(productId){
    return get(endpoints.byproductId(productId))
}

export async function getUserBuys(productId,userId){
    return get(endpoints.byproductIdandUserId(productId,userId))
}