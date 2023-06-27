import { html } from '../../node_modules/lit-html/lit-html.js'
import { getById, updateItem } from '../data/items.js';
import { createSubmitHandler } from '../utilities.js'


let editTemplate = (item, onEdit) => html`
        <section id="edit">
            <div class="form">
                <h2>Edit Product</h2>
                <form class="edit-form" @submit=${onEdit}>
                    <input type="text" name="name" .value=${item.name} id="name" placeholder="Product Name" />
                    <input type="text" name="imageUrl" .value=${item.imageUrl} id="product-image" placeholder="Product Image" />
                    <input type="text" name="category" .value=${item.category} id="product-category" placeholder="Category" />
                    <textarea id="product-description"  name="description" .value=${item.description} placeholder="Description" rows="5"
                        cols="50"></textarea>
        
                    <input type="text" name="price" .value=${item.price} id="product-price" placeholder="Price" />
                    <button type="submit">post</button>
                </form>
            </div>
        </section>
`

export async function editPage(ctx) {
    const id = ctx.params.id;

    let item = await getById(id);
    ctx.render(editTemplate(item, createSubmitHandler(onEdit)))

    async function onEdit({
        name,
        imageUrl,
        category,
        description,
        price
    }) {
        if ([name,
            imageUrl,
            category,
            description,
            price].some(x => x === '')) {
            return alert('Please fill in all fields')
        }
        await updateItem(id,{
            name,
            imageUrl,
            category,
            description,
            price
        })
        ctx.page.redirect('/products/'+id)
    }

}