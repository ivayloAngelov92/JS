import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteOffer, getOfferById } from '../data/offers.js';
import { getUserData } from '../utilities.js';

// todo replace with actual view
const detailsTemplate = (offer, onDelete) => html`
    <section id="details">
        <div id="details-wrapper">
            <img id="details-img" src=${offer.imageUrl} alt="example1" />
            <p id="details-title">${offer.name}</p>
            <div id="info-wrapper">
                <div id="details-description">
                    <p>
                        ${offer.description}
                    </p>
                    <p id="nutrition">Nutrition</p>
                    <p id="details-nutrition">
                        ${offer.nutrition}
                    </p>
                </div>
                <!--Edit and Delete are only for creator-->
                ${offer.canEdit? html`
                <div id="action-buttons">
                    <a href="/dashboard/${offer._id}/edit" id="edit-btn">Edit</a>
                    <a href="javascript:void(0)" id="delete-btn" @click=${onDelete}>Delete</a>
                </div>
                ` : null}
                
            </div>
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