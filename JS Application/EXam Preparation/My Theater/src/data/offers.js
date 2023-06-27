import { get, post, put, del } from "./api.js";

const endpoints = {
    dashboard: "/data/theaters?sortBy=_createdOn%20desc&distinct=title",
    byId: '/data/theaters',
    myPosts: userId=> `/data/theaters?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`
}

export async function getAllOffers() {
    return get(endpoints.dashboard);
}
export async function getMyOffers(userId) {
    return get(endpoints.myPosts(userId));
}

export async function getOfferById(id) {
    return get(`${endpoints.byId}/${id}`);
}

export async function createOffer(data) {
    return post(endpoints.byId, data);
}
export async function updateOffer(id, data) {
    return put(`${endpoints.byId}/${id}`, data);
}
export async function deleteOffer(id) {
    return del(`${endpoints.byId}/${id}`)
}