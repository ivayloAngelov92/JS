import { html } from '../../node_modules/lit-html/lit-html.js';
import { getUserData } from '../utilities.js';
import { getMyBooks } from './src/data/offers.js';

// todo replace with actual view
const myPostsTemplate = (offers) => html`
        <section id="my-books-page" class="my-books">
            <h1>My Books</h1>
            ${offers.length > 0 ? html`
            <ul class="my-books-list">
                ${offers.map(offerCard)}
            </ul>` : html`
            <p class="no-books">No books in database!</p>`}
        </section>
`

const offerCard = (offer) => html`
                <li class="otherBooks">
                    <h3>${offer.title}</h3>
                    <p>Type: ${offer.type}</p>
                    <p class="img"><img src=${offer.imageUrl}></p>
                    <a class="button" href="/dashboard/${offer._id}">Details</a>
                </li>
`

export async function myPostsPage(ctx) {
    let userData = getUserData()
    let id = userData._id
    console.log(id);
    const offers = await getMyBooks(id)
    ctx.render(myPostsTemplate(offers));
}