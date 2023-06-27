import { post,get } from "./api.js";


const endpoints={
    applications:'/data/donations',
    byOfferId: postId=>`/data/donations?where=postId%3D%22${postId}%22&distinct=_ownerId&count`,
    byOfferIdandUserId: (postId,userId)=>`/data/donations?where=postId%3D%22${postId}%22%20and%20_ownerId%3D%22${userId}%22&count`
}

export async function apply(postId){
    return post(endpoints.applications,{postId})
}

export async function getApplications(postId){
    return get(endpoints.byOfferId(postId))
}

export async function getUserApplication(postId,userId){
    return get(endpoints.byOfferIdandUserId(postId,userId))
}