import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMyOffers } from '../data/offers.js';
import { getUserData } from '../utilities.js';

// todo replace with actual view
const myPostsTemplate = (offers, userData) => html`
        <section id="profilePage">
            <div class="userInfo">
                <div class="avatar">
                    <img src="./images/profilePic.png">
                </div>
                <h2>${userData.email}</h2>
            </div>
            <div class="board">
                ${offers.length > 0 ? offers.map(offerCard) : html`
                <div class="no-events">
                    <p>This user has no events yet!</p>
                </div>`}
            </div>
        
        </section>
`

const offerCard = (offer) => html`
                <div class="eventBoard">
                    <div class="event-info">
                        <img src=${offer.imageUrl}>
                        <h2>${offer.title}</h2>
                        <h6>${offer.date}</h6>
                        <a href="/dashboard/${offer._id}" class="details-button">Details</a>
                    </div>
                </div>
`

export async function myPostsPage(ctx) {
    let userData = getUserData()
    let id = userData._id
    console.log(id);
    const offers = await getMyOffers(id)
    ctx.render(myPostsTemplate(offers, userData));
}