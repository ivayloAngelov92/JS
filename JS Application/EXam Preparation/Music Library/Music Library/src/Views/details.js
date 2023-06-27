import { html } from '../../node_modules/lit-html/lit-html.js'
import { buy, getTotalBuys, getUserBuys } from '../data/buys.js';
import { deleteItem, getById } from '../data/items.js';
import { getUserData } from '../utilities.js';


// todo replace with actual view
const detailsTemplate = (item, onDelete, onBuy) => html`
      <section id="details">
        <div id="details-wrapper">
          <p id="details-title">Album Details</p>
          <div id="img-wrapper">
            <img src=${item.imageUrl} alt="example1" />
          </div>
          <div id="info-wrapper">
            <p><strong>Band:</strong><span id="details-singer">${item.singer}</span></p>
            <p>
              <strong>Album name:</strong><span id="details-album">${item.album}</span>
            </p>
            <p><strong>Release date:</strong><span id="details-release">${item.release}</span></p>
            <p><strong>Label:</strong><span id="details-label">${item.label}</span></p>
            <p><strong>Sales:</strong><span id="details-sales">${item.sales}</span></p>
          </div>
          <div id="likes">Likes: <span id="likes-count">${item.buys}</span></div>
        
                <!--Edit and Delete are only for creator-->
                ${item.canEdit || item.canBuy ? html`
                <div id="action-buttons">
                    ${item.canEdit ? html`<a href="/catalog/${item._id}/edit" id="edit-btn">Edit</a>
                    <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>` : null}
                    ${item.canBuy ? html`<a @click=${onBuy} href="javascript:void(0)" id="like-btn">Like</a>` : null}
        
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
        item.canBuy = item.canEdit==false && hasBought == 0;
    }
    ctx.render(detailsTemplate(item, onDelete, onBuy));

    async function onDelete() {
        let choice = confirm('Are you sure you want to delete this item?');
        if (choice) {
            await deleteItem(id);
            ctx.page.redirect('/catalog');
        }
    }
    async function onBuy() {
        await buy(id)
        ctx.page.redirect('/catalog/' + id);
    }
}