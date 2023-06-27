import { html } from '../../node_modules/lit-html/lit-html.js';
import { apply, getApplications, getUserApplication } from '../data/applications.js';
import { deleteOffer, getOfferById } from '../data/offers.js';
import { getUserData } from '../utilities.js';

// todo replace with actual view
const detailsTemplate = (offer, onDelete, onApply, userData) => html`
        <section id="details-page" class="details">
            <div class="book-information">
                <h3>${offer.title}</h3>
                <p class="type">Type: ${offer.type}</p>
                <p class="img"><img src=${offer.imageUrl}></p>
                <div class="actions">
                    ${userData? 
                    html `
                    ${offer.canEdit? html`<a class="button" href="/dashboard/${offer._id}/edit">Edit</a>
                    <a @click=${onDelete} class="button" href="javascript:void(0)">Delete</a>`
                    :html `
                    ${offer.hasApplied===0 ? html`<a @click=${onApply} class="button" href="javascript:void(0)">Like</a>`: null}
                    `
                    }
                    `:null}
                
                    <!-- Edit/Delete buttons ( Only for creator of this book )  -->
                    
                    
                    <!-- Bonus -->
                    <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
                    
                    

                    <!-- ( for Guests and Users )  -->
                    <div class="likes">
                        <img class="hearts" src="/images/heart.png">
                        <span id="total-likes">Likes: ${offer.applications}</span>
                    </div>
                </div>
                    <!-- Bonus -->
                </div>
            </div>
            <div class="book-description">
                <h3>Description:</h3>
                <p>${offer.description}</p>
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
    offer.applications = applications
    offer.hasApplied = hasApplied

    if (userData) {
        offer.canEdit = userData._id == offer._ownerId
        offer.canApply = offer.canEdit == false && hasApplied == 0
    }

    ctx.render(detailsTemplate(offer, onDelete, onApply, userData));

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this offer?')
        if (choice) {
            await deleteOffer(id);
            ctx.page.redirect('/dashboard');
        }
    }

    async function onApply() {
        let bookId=id
        await apply({bookId})
        ctx.page.redirect(`/dashboard/${bookId}`);
    }
}