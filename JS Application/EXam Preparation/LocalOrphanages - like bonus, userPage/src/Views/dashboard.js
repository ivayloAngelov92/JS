import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllOffers } from '../data/offers.js';

// todo replace with actual view
const dashboardTemplate = (offers) => html`
        <section id="dashboard-page">
            <h1 class="title">All Posts</h1>
            ${offers.length > 0 ? html`
            <div class="all-posts">
                ${offers.map(offerCard)}
            </div>` : html`
            <h1 class="title no-posts-title">No posts yet!</h1>`}
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

export async function dashboardPage(ctx) {
    const offers = await getAllOffers()
    ctx.render(dashboardTemplate(offers));
}