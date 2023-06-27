import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteOffer, getOfferById } from '../data/offers.js';
import { getUserData } from '../utilities.js';

// todo replace with actual view
const detailsTemplate = (offer, onDelete) => html`
    <section id="detailsPage">
            <div class="wrapper">
                <div class="albumCover">
                    <img src=${offer.imgUrl}>
                </div>
                <div class="albumInfo">
                    <div class="albumText">

                        <h1>Name: ${offer.name}</h1>
                        <h3>Artist: ${offer.artist}</h3>
                        <h4>Genre: ${offer.genre}</h4>
                        <h4>Price: $${offer.price}</h4>
                        <h4>Date: ${offer.releaseDate}</h4>
                        <p>Description: ${offer.description}</p>
                    </div>

                    <!-- Only for registered user and creator of the album-->
                    ${offer.canEdit? html`<div class="actionBtn">
                        <a href="/dashboard/${offer._id}/edit" class="edit">Edit</a>
                        <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>
                    </div>`:null}
                    
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