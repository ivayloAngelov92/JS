import { html } from '../../node_modules/lit-html/lit-html.js'
import { getAllItems } from '../data/items.js';


// todo replace with actual view
const productsTemplate = (products) => html`
    <section id="dashboard">
        <h2>Albums</h2>
        <ul class="card-wrapper">
            ${products.length > 0 ? products.map(productCard) : html`
            <h2>There are no albums added yet.</h2>`}
        </ul>
    </section>
`
let productCard = (product) => html`
<li class="card">
    <img src=${product.imageUrl} alt="travis" />
    <p>
        <strong>Singer/Band: </strong><span class="singer">${product.singer}</span>
    </p>
    <p>
        <strong>Album name: </strong><span class="album">${product.album}</span>
    </p>
    <p><strong>Sales:</strong><span class="sales">${product.sales}</span></p>
    <a class="details-btn" href="/catalog/${product._id}">Details</a>
</li>
`



export async function productsPage(ctx) {
    const products = await getAllItems()
    ctx.render(productsTemplate(products));
}