import { html } from '../../node_modules/lit-html/lit-html.js'
import { getAllItems } from '../data/items.js';


// todo replace with actual view
const productsTemplate = (products) => html`
        <h2>Products</h2>
        <section id="dashboard">
            ${products.length > 0 ? products.map(productCard) : html`
            <h2>No products yet.</h2>`}
        
        </section>
`
let productCard = (product) => html`
        <div class="product">
            <img src=${product.imageUrl} alt="example1" />
            <p class="title">
                ${product.name}
            </p>
            <p><strong>Price:</strong><span class="price">${product.price}</span>$</p>
            <a class="details-btn" href="/products/${product._id}">Details</a>
        </div>
`



export async function productsPage(ctx) {
    const products = await getAllItems()
    ctx.render(productsTemplate(products));
}