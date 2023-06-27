import { post,get } from "./api.js";


const endpoints={
    applications:'/data/likes',
    byOfferId: theaterId=>`/data/likes?where=theaterId%3D%22${theaterId}%22&distinct=_ownerId&count`,
    byOfferIdandUserId: (theaterId,userId)=>`/data/likes?where=theaterId%3D%22${theaterId}%22%20and%20_ownerId%3D%22${userId}%22&count`
}

export async function apply(theaterId){
    return post(endpoints.applications,{theaterId})
}

export async function getApplications(theaterId){
    return get(endpoints.byOfferId(theaterId))
}

export async function getUserApplication(theaterId,userId){
    return get(endpoints.byOfferIdandUserId(theaterId,userId))
}