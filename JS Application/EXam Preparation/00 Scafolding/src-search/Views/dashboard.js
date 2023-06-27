import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllOffers } from '../data/offers.js';

// todo replace with actual view
const dashboardTemplate = (offers) => html`
    <section id="dashboard">
        <h2>Collectibles</h2>
        <ul class="card-wrapper">
            ${offers.length > 0 ? html`${offers.map(offerCard)} </ul>`  : html`
            </ul>
            <h2>There are no items added yet.</h2>`}
        
    </section>
`

const offerCard = (offer) => html`
          <li class="card">
            <img src=${offer.imageUrl} alt="travis" />
            <p>
              <strong>Brand: </strong><span class="brand">${offer.brand}</span>
            </p>
            <p>
              <strong>Model: </strong><span class="model">${offer.model}</span>
            </p>
            <p><strong>Value:</strong><span class="value">${offer.value}</span>$</p>
            <a class="details-btn" href="/dashboard/${offer._id}">Details</a>
          </li>
`

export async function dashboardPage(ctx) {
    const offers = await getAllOffers()
    ctx.render(dashboardTemplate(offers));
}