import { html } from '../../node_modules/lit-html/lit-html.js';
import { apply, getApplications, getUserApplication } from '../data/applications.js';
import { deleteOffer, getOfferById } from '../data/offers.js';
import { getUserData } from '../utilities.js';

// todo replace with actual view
const detailsTemplate = (offer, onDelete, onApply) => html`
        <section id="details-page">
            <h1 class="title">Post Details</h1>
        
            <div id="container">
                <div id="details">
                    <div class="image-wrapper">
                        <img src=${offer.imageUrl} alt="Material Image" class="post-image">
                    </div>
                    <div class="info">
                        <h2 class="title post-title">${offer.title}</h2>
                        <p class="post-description">Description: ${offer.description}</p>
                        <p class="post-address">Address: ${offer.address}</p>
                        <p class="post-number">Phone number: ${offer.phone}</p>
                        <p class="donate-Item">Donate Materials: ${offer.applications}</p>
        
                        <!--Edit and Delete are only for creator-->
                        ${offer.canEdit || offer.canApply ? html`
                        <div class="btns">
                            ${offer.canEdit ? html` <a href="/dashboard/${offer._id}/edit" class="edit-btn btn">Edit</a>
                            <a @click=${onDelete} href="javascript:void(0)" class="delete-btn btn">Delete</a>` : null}
                            ${offer.canApply ? html`
                            <a @click=${onApply} href="javascript:void(0)" class="donate-btn btn">Donate</a>` : null}
                        `: null}
                        </div>
                    </div>
                </div>
            </div>
        </section>
`


export async function detailsPage(ctx) {
    let id = ctx.params.id;

    let offer = await getOfferById(id)
    let applications = await getApplications(id)
    offer.applications = applications

    const userData = getUserData()
    if (userData) {
        let hasApplied = await getUserApplication(id, userData._id)
        offer.canEdit = userData._id == offer._ownerId
        offer.canApply = offer.canEdit == false && hasApplied == 0
    }


    ctx.render(detailsTemplate(offer, onDelete, onApply));

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this offer?')
        if (choice) {
            await deleteOffer(id);
            ctx.page.redirect('/dashboard');
        }
    }

    async function onApply() {
        await apply(id)

        ctx.page.redirect('/dashboard/' + id);
    }
}