import { html } from '../../node_modules/lit-html/lit-html.js';
import { createOffer } from '../data/offers.js';
import { createSubmitHandler } from '../utilities.js';


const createTemplate = (onCreate) => html`
<section id="create-meme">
    <form id="create-form" @submit=${onCreate}>
        <div class="container">
            <h1>Create Meme</h1>
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title">
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description"></textarea>
            <label for="imageUrl">Meme Image</label>
            <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl">
            <input type="submit" class="registerbtn button" value="Create Meme">
        </div>
    </form>
</section>`

export async function createPage(ctx) {

    ctx.render(createTemplate(createSubmitHandler(onCreate)))

    async function onCreate({
        title,
        description,
        imageUrl      
    }) {
        if ([title,
            description,
            imageUrl
          ].some(f => f == '')) {
            return ctx.notify('Please fill all fields')
        }
        await createOffer({
            title,
            description,
            imageUrl
        })
        ctx.page.redirect('/dashboard')
    }

}