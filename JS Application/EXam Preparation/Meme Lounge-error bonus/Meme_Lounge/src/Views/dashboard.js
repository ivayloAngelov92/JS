import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllOffers } from '../data/offers.js';

// todo replace with actual view
const dashboardTemplate = (offers) => html`
        <section id="meme-feed">
            <h1>All Memes</h1>
            <div id="memes">
                ${offers.length > 0 ? offers.map(offerCard) : html`
                <p class="no-memes">No memes in database.</p>`}
            </div>
        </section>
`

const offerCard = (offer) => html`
                <div class="meme">
                    <div class="card">
                        <div class="info">
                            <p class="meme-title">${offer.title}</p>
                            <img class="meme-image" alt="meme-img" src=${offer.imageUrl}>
                        </div>
                        <div id="data-buttons">
                            <a class="button" href="/dashboard/${offer._id}">Details</a>
                        </div>
                    </div>
                </div>
`

export async function dashboardPage(ctx) {
    const offers = await getAllOffers()
    ctx.render(dashboardTemplate(offers));
}