import { get, post, put, del } from "./api.js";

const endpoints = {
    dashboard: "/data/books?sortBy=_createdOn%20desc",
    byId: '/data/books',
    myBooks: (userId)=>`/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`
}

export async function getMyBooks(userId) {
    return get(endpoints.myBooks(userId));
}

export async function getAllOffers() {
    return get(endpoints.dashboard);
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