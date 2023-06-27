import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMyOffers } from '../data/offers.js';
import { getUserData } from '../utilities.js';

// todo replace with actual view
const myPostsTemplate = (offers, userData) => html`
        <section id="user-profile-page" class="user-profile">
            <article class="user-info">
                <img id="user-avatar-url" alt="user-profile" src=${userData.gender=='male'?"/images/male.png":"/images/female.png" }>
                <div class="user-content">
                    <p>Username: ${userData.username}</p>
                    <p>Email: ${userData.email}</p>
                    <p>My memes count: ${offers.length}</p>
                </div>
            </article>
            <h1 id="user-listings-title">User Memes</h1>
            <div class="user-meme-listings">
            ${offers.length > 0 ? 
                offers.map(offerCard) : html`
            <p class="no-memes">No memes in database.</p>`}
            </div>
        </section>
`

const offerCard = (offer) => html`
                <div class="user-meme">
                    <p class="user-meme-title">${offer.title}</p>
                    <img class="userProfileImage" alt="meme-img" src=${offer.imageUrl}>
                    <a class="button" href="/dashboard/${offer._id}">Details</a>
                </div>
`

export async function myPostsPage(ctx) {
    let userData=getUserData()
    let id=userData._id
    const offers = await getMyOffers(id)
    ctx.render(myPostsTemplate(offers,userData));
}