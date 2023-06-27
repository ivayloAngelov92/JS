import { html } from '../../node_modules/lit-html/lit-html.js'
import { buy, getTotalBuys, getUserBuys } from '../data/buys.js';
import { deleteItem, getById } from '../data/items.js';
import { getUserData } from '../utilities.js';


// todo replace with actual view
const detailsTemplate = (item, onDelete, onBuy) => html`
        <section id="details">
            <div id="details-wrapper">
                <img id="details-img" src=${item.imageUrl} alt="example1" />
                <p id="details-title">${item.name}</p>
                <p id="details-category">
                    Category: <span id="categories">${item.category}</span>
                </p>
                <p id="details-price">
                    Price: <span id="price-number">${item.price}</span>$</p>
                <div id="info-wrapper">
                    <div id="details-description">
                        <h4>Bought: <span id="buys">${item.buys}</span> times.</h4>
                        <span>${item.description}</span>
                    </div>
                </div>
        
                <!--Edit and Delete are only for creator-->
                ${item.canEdit || item.canBuy ? html`
                <div id="action-buttons">
                    ${item.canEdit ? html`<a href="/products/${item._id}/edit" id="edit-btn">Edit</a>
                    <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>` : null}
                    ${item.canBuy ? html`<a @click=${onBuy} href="javascript:void(0)" id="buy-btn">Buy</a>` : null}
        
                </div>`: null}
        
            </div>
        </section>
`




export async function detailsPage(ctx) {
    const id = ctx.params.id;

    let requests = [
        getById(id),
        getTotalBuys(id)
    ]
    let userData = getUserData()
    if (userData) {
        requests.push(getUserBuys(id, userData._id))
    }
    let [item, buys, hasBought] = await Promise.all(requests);
    item.buys = buys;

    if (userData) {
        item.canEdit = userData._id == item._ownerId;
        item.canBuy = !item.canEdit && hasBought == 0;
    }
    ctx.render(detailsTemplate(item, onDelete, onBuy));

    async function onDelete() {
        let choice = confirm('Are you sure you want to delete this item?');
        if (choice) {
            await deleteItem(id);
            ctx.page.redirect('/products');
        }
    }
    async function onBuy() {
        await buy(id)
        ctx.page.redirect('/products/' + id);
    }
}