import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMyOffers } from '../data/offers.js';
import { getUserData } from '../utilities.js';

// todo replace with actual view
const myPostsTemplate = (offers) => html`
        <section id="my-listings">
            <h1>My car listings</h1>
            <div class="listings">

                <!-- Display all records -->
                ${offers.length > 0? offers.map(offerCard) : html`<p class="no-cars"> You haven't listed any cars yet.</p>`}

                <!-- Display if there are no records -->
                
            </div>
        </section>
`

const offerCard = (offer) => html`
                <div class="listing">
                    <div class="preview">
                        <img src=${offer.imageUrl}>
                    </div>
                    <h2>${offer.brand} ${offer.model}</h2>
                    <div class="info">
                        <div class="data-info">
                            <h3>Year: ${offer.year}</h3>
                            <h3>Price: ${offer.price} $</h3>
                        </div>
                        <div class="data-buttons">
                            <a href="/dashboard/${offer._id}" class="button-carDetails">Details</a>
                        </div>
                    </div>
                </div>
`

export async function myPostsPage(ctx) {
    let userData=getUserData()
    let id=userData._id
    console.log(id);
    const offers = await getMyOffers(id)
    ctx.render(myPostsTemplate(offers));
}