import { html } from '../../node_modules/lit-html/lit-html.js';
import { apply, getApplications, getUserApplication } from '../data/applications.js';
import { deleteOffer, getOfferById } from '../data/offers.js';
import { getUserData } from '../utilities.js';

// todo replace with actual view
const detailsTemplate = (offer, onDelete, onApply) => html`
        <section id="detailsPage">
            <div class="details">
                <div class="animalPic">
                    <img src=${offer.image}>
                </div>
                <div>
                    <div class="animalInfo">
                        <h1>Name: ${offer.name}</h1>
                        <h3>Breed: ${offer.breed}</h3>
                        <h4>Age: ${offer.age}</h4>
                        <h4>Weight: ${offer.weight}</h4>
                        <h4 class="donation">Donation: ${offer.applications}$</h4>
                    </div>
        
                    <!--Edit and Delete are only for creator-->
                    ${offer.canEdit || offer.canApply ? html`
                    <div class="actionBtn">
                        ${offer.canEdit ? html`
                        <a href="/dashboard/${offer._id}/edit" class="edit">Edit</a>
                        <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>` : null}
                        ${offer.canApply ? html` <a @click=${onApply} href="javascript:void(0)" class="donate">Donate</a>`
                        : null}
                        `: null}
                    </div>
                </div>
            </div>
        </section>
`


export async function detailsPage(ctx) {
    let id = ctx.params.id;
    const requests = [
        getOfferById(id),
        getApplications(id)
    ]

    const userData = getUserData()
    if (userData) {
        requests.push(getUserApplication(id, userData._id))
    }

    const [offer, applications, hasApplied] = await Promise.all(requests)
    offer.applications = Number(applications)*100
    offer.applications.toString()

    if (userData) {
        offer.canEdit = userData._id == offer._ownerId
        offer.canApply = offer.canEdit == false && hasApplied == 0
    }

    ctx.render(detailsTemplate(offer, onDelete, onApply));

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this offer?')
        if (choice) {
            await deleteOffer(id);
            ctx.page.redirect('/');
        }
    }

    async function onApply() {
        await apply(id)
        ctx.page.redirect('/dashboard/' + id);
    }
}