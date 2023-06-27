import { html } from '../../node_modules/lit-html/lit-html.js';
import { getOfferById, updateOffer } from '../data/offers.js';
import { createSubmitHandler } from '../utilities.js';

const editTemplate = (offer, onEdit) => html`
<section id="edit">
    <div class="form">
        <h2>Edit Fruit</h2>
        <form class="edit-form" @submit=${onEdit}>
            <input type="text" name="name" id="name" placeholder="Fruit Name" .value=${offer.name} />
            <input type="text" name="imageUrl" id="Fruit-image" placeholder="Fruit Image URL"
                .value=${offer.imageUrl} />
            <textarea id="fruit-description" name="description" placeholder="Description" rows="10" cols="50"
                .value=${offer.description}></textarea>
            <textarea id="fruit-nutrition" name="nutrition" placeholder="Nutrition" rows="10" cols="50"
                .value=${offer.nutrition}></textarea>
            <button type="submit">post</button>
        </form>
    </div>
</section>`

export async function editPage(ctx) {
    let id = ctx.params.id;
    const offer = await getOfferById(id);

    ctx.render(editTemplate(offer, createSubmitHandler(onEdit)))

    async function onEdit({
        name,
        imageUrl,
        description,
        nutrition

    }) {
        if ([name,
            imageUrl,
            description,
            nutrition

        ].some(f => f == '')) {
            return alert('Please fill all fields')
        }
        const result = await updateOffer(id, {
            name,
            imageUrl,
            description,
            nutrition

        })
        ctx.page.redirect('/dashboard/' + id)
    }
}