import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMyOffers } from '../data/offers.js';
import { getUserData } from '../utilities.js';

// todo replace with actual view
const myPostsTemplate = (offers) => html`
        <section id="my-posts-page">
            <h1 class="title">My Posts</h1>
            ${offers.length > 0 ? html`
            <div class="my-posts">
                ${offers.map(offerCard)}
            </div>` : html`
            <h1 class="title no-posts-title">You have no posts yet!</h1>`}
        </section>
`

const offerCard = (offer) => html`
                <div class="post">
                    <h2 class="post-title">${offer.title}</h2>
                    <img class="post-image" src=${offer.imageUrl} alt="Material Image">
                    <div class="btn-wrapper">
                        <a href="/dashboard/${offer._id}" class="details-btn btn">Details</a>
                    </div>
                </div>
`

export async function myPostsPage(ctx) {
    let userData=getUserData()
    let id=userData._id
    console.log(id);
    const offers = await getMyOffers(id)
    ctx.render(myPostsTemplate(offers));
}