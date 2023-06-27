import { html } from '../../node_modules/lit-html/lit-html.js';
import { apply, getApplications, getUserApplication } from '../data/applications.js';
import { deleteOffer, getOfferById } from '../data/offers.js';
import { getUserData } from '../utilities.js';

// todo replace with actual view
const detailsTemplate = (offer, onDelete, onApply) => html`
        <section id="detailsPage">
            <div id="detailsBox">
                <div class="detailsInfo">
                    <h1>Title: ${offer.title}</h1>
                    <div>
                        <img src=${offer.imageUrl} />
                    </div>
                </div>
        
                <div class="details">
                    <h3>Theater Description</h3>
                    <p>${offer.description}</p>
                    <h4>Date: ${offer.date}</h4>
                    <h4>Author: ${offer.author}</h4>
                    ${offer.canApply || offer.canEdit ? html`
                    <div class="buttons">
                        ${offer.canEdit ? html`<a @click=${onDelete} class="btn-delete" href="javascript:void(0)">Delete</a>
                        <a class="btn-edit" href="/dashboard/${offer._id}/edit">Edit</a>` : null}
                        ${offer.canApply ? html`<a @click="${onApply}" class="btn-like"
                            href="javascript:void(0)">Like</a>` : null}
                    
                    `: null}
                    </div>
        
        
        
                    <p class="likes">Likes: ${offer.applications}</p>
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