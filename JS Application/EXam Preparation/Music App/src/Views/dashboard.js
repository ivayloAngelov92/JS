import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllOffers } from '../data/offers.js';
import { getUserData } from '../utilities.js';

// todo replace with actual view
const catalogTemplate = (userData, data) => html`
        <section id="catalogPage">
            <h1>All Albums</h1>
        ${data.length > 0 ?
        html`
            ${data.map(x => 
                html`
                <div class="card-box">
                <img src=${x.imgUrl}>
                <div>
                    <div class="text-center">
                        <p class="name">Name: ${x.name}</p>
                        <p class="artist">Artist: ${x.artist}</p>
                        <p class="genre">Genre: ${x.genre}</p>
                        <p class="price">Price: $${x.price}</p>
                        <p class="date">Release Date: ${x.releaseDate}</p>
                    </div>
                    ${userData ? html`
                    <div class="btn-group">
                        <a href="/dashboard/${x._id}" id="details">Details</a>
                    </div>
                    `:null}
                </div>
            </div>
                `)}
        `:
        html`<p>No Albums in Catalog!</p>`}
        </section>
`;

export async function dashboardPage(ctx) {
    const userData = getUserData();
    const data = await getAllOffers()
    ctx.render(catalogTemplate(userData, data))
}