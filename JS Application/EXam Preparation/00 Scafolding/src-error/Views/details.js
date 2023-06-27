import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteOffer, getOfferById } from '../data/offers.js';
import { getUserData } from '../utilities.js';

// todo replace with actual view
const detailsTemplate = (offer, onDelete) => html`
        <section id="meme-details">
            <h1>Meme Title: ${offer.title}</h1>
            <div class="meme-details">
                <div class="meme-img">
                    <img alt="meme-alt" src=${offer.imageUrl}>
                </div>
                <div class="meme-description">
                    <h2>Meme Description</h2>
                    <p>
                        ${offer.description}
                    </p>

                    <!-- Buttons Edit/Delete should be displayed only for creator of this meme  -->
                    ${offer.canEdit? html`
                    <a class="button warning" href="/dashboard/${offer._id}/edit">Edit</a>
                    <button @click="${onDelete}" class="button danger">Delete</button>`:null}
                </div>
            </div>
        </section>
`


export async function detailsPage(ctx) {
    let id = ctx.params.id;
    const userData = await getUserData()
    const offer = await getOfferById(id);

    if(userData&& userData._id== offer._ownerId){
        offer.canEdit = true;
    }

    ctx.render(detailsTemplate(offer, onDelete));

    async function onDelete() {
        const choice=confirm('Are you sure you want to delete this offer?')
        if(choice){
            await deleteOffer(id);
            ctx.page.redirect('/dashboard');
        }
    }
}