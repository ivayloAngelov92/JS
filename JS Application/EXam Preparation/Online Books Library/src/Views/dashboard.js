import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllOffers } from '../data/offers.js';

// todo replace with actual view
const dashboardTemplate = (offers) => html`
        <section id="dashboard-page" class="dashboard">
            <h1>Dashboard</h1>
            ${offers.length > 0 ? html`
            <ul class="other-books-list">${offers.map(offerCard)}</ul>` : html`
            <p class="no-books">No books in database!</p>`}
        </section>
`

const offerCard = (offer) => html`
<li class="otherBooks">
    <h3>${offer.title}</h3>
    <p>Type: ${offer.type}</p>
    <p class="img"><img src=${offer.imageUrl}></p>
    <a class="button" href="/dashboard/${offer._id}">Details</a>
</li>
`

export async function dashboardPage(ctx) {
    const offers = await getAllOffers()
    ctx.render(dashboardTemplate(offers));
}