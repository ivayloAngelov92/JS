import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllOffers } from '../data/offers.js';

// todo replace with actual view
const dashboardTemplate = (offers) => html`
    <h2>Fruits</h2>
    
      ${offers.length > 0 ?html`<section id="dashboard">${offers.map(offerCard)}</section>` : html`
      <h2>No fruit info yet.</h2>`}

    
`

const offerCard = (offer) => html`
          <div class="fruit">
            <img src=${offer.imageUrl} alt="example1" />
            <h3 class="title">${offer.name}</h3>
            <p class="description">${offer.description}</p>
            <a class="details-btn" href="/dashboard/${offer._id}">More Info</a>
          </div>
`

export async function dashboardPage(ctx) {
  const offers = await getAllOffers()
  ctx.render(dashboardTemplate(offers));
}