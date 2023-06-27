import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteOffer, getOfferById } from '../data/offers.js';
import { getUserData } from '../utilities.js';

// todo replace with actual view
const detailsTemplate = (offer, onDelete) => html`
    <section id="listing-details">
        <h1>Details</h1>
        <div class="details-info">
            <img src=${offer.imageUrl}>
            <hr>
            <ul class="listing-props">
                <li><span>Brand:</span>${offer.brand}</li>
                <li><span>Model:</span>${offer.model}</li>
                <li><span>Year:</span>${offer.year}</li>
                <li><span>Price:</span>${offer.price}$</li>
            </ul>
    
            <p class="description-para">${offer.description}</p>
            ${offer.canEdit ? html`
            <div class="listings-buttons">
                <a href="/dashboard/${offer._id}/edit" class="button-list">Edit</a>
                <a @click=${onDelete} href="javascript:void(0)" class="button-list">Delete</a>
            </div>`: null}
    
        </div>
    </section>
`


export async function detailsPage(ctx) {
    let id = ctx.params.id;
    const userData = await getUserData()
    const offer = await getOfferById(id);

    if (userData && userData._id == offer._ownerId) {
        offer.canEdit = true;
    }

    ctx.render(detailsTemplate(offer, onDelete));

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this offer?')
        if (choice) {
            await deleteOffer(id);
            ctx.page.redirect('/dashboard');
        }
    }
}