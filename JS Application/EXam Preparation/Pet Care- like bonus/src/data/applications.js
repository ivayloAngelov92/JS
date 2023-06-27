import { post,get } from "./api.js";


const endpoints={
    applications:'/data/donation',
    byOfferId: offerId=>`/data/donation?where=petId%3D%22${offerId}%22&distinct=_ownerId&count`,
    byOfferIdandUserId: (offerId,userId)=>`/data/donation?where=petId%3D%22${offerId}%22%20and%20_ownerId%3D%22${userId}%22&count`
}

export async function apply(offerId){
    return post(endpoints.applications,{offerId})
}

export async function getApplications(offerId){
    return get(endpoints.byOfferId(offerId))
}

export async function getUserApplication(offerId,userId){
    return get(endpoints.byOfferIdandUserId(offerId,userId))
}