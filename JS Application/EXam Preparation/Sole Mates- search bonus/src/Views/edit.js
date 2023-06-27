import { html } from '../../node_modules/lit-html/lit-html.js';
import { getOfferById, updateOffer } from '../data/offers.js';
import { createSubmitHandler } from '../utilities.js';

const editTemplate = (offer, onEdit) => html`
<section id="edit">
    <div class="form">
        <h2>Edit item</h2>
        <form class="edit-form" @submit=${onEdit}>
            <input type="text" name="brand" id="shoe-brand" .value=${offer.brand} placeholder="Brand" />
            <input type="text" name="model" id="shoe-model" .value=${offer.model} placeholder="Model" />
            <input type="text" name="imageUrl" id="shoe-img" .value=${offer.imageUrl} placeholder="Image url" />
            <input type="text" name="release" id="shoe-release" .value=${offer.release} placeholder="Release date" />
            <input type="text" name="designer" id="shoe-designer" .value=${offer.designer} placeholder="Designer" />
            <input type="text" name="value" id="shoe-value" .value=${offer.value} placeholder="Value" />

            <button type="submit">post</button>
        </form>
    </div>
</section>`

export async function editPage(ctx) {
    let id = ctx.params.id;
    const offer = await getOfferById(id);

    ctx.render(editTemplate(offer, createSubmitHandler(onEdit)))

    async function onEdit({
        brand,
        model, 
        imageUrl, 
        release, 
        designer, 
        value      
    }) {
        if ([brand,
            model, 
            imageUrl, 
            release, 
            designer, 
            value
          ].some(f => f == '')) {
            return alert('Please fill all fields')
        }
        const result = await updateOffer(id, {
            brand,
            model, 
            imageUrl, 
            release, 
            designer, 
            value          
        })
        ctx.page.redirect('/dashboard/' + id)
    }
}