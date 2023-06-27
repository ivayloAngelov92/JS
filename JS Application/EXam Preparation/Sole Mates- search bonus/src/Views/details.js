import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteOffer, getOfferById } from '../data/offers.js';
import { getUserData } from '../utilities.js';

// todo replace with actual view
const detailsTemplate = (offer, onDelete) => html`
    <section id="details">
        <div id="details-wrapper">
            <p id="details-title">Shoe Details</p>
            <div id="img-wrapper">
                <img src=${offer.imageUrl} alt="example1" />
            </div>
            <div id="info-wrapper">
                <p>Brand: <span id="details-brand">${offer.brand}</span></p>
                <p>
                    Model: <span id="details-model">${offer.model}</span>
                </p>
                <p>Release date: <span id="details-release">${offer.release}</span></p>
                <p>Designer: <span id="details-designer">${offer.designer}</span></p>
                <p>Value: <span id="details-value">${offer.value}</span></p>
            </div>
    
            <!--Edit and Delete are only for creator-->
            ${offer.canEdit ? html`
            <div id="action-buttons">
                <a href="/dashboard/${offer._id}/edit" id="edit-btn">Edit</a>
                <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
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