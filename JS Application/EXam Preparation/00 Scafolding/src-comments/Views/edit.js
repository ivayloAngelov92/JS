import { html } from '../../node_modules/lit-html/lit-html.js';
import { getOfferById, updateOffer } from '../data/offers.js';
import { createSubmitHandler } from '../utilities.js';

const editTemplate = (offer, onEdit) => html`
<section id="edit-page" class="auth">
<form id="edit" @submit=${onEdit}>
    <div class="container">

        <h1>Edit Game</h1>
        <label for="leg-title">Legendary title:</label>
        <input type="text" id="title" name="title" .value=${offer.title}>

        <label for="category">Category:</label>
        <input type="text" id="category" name="category" .value=${offer.category}>

        <label for="levels">MaxLevel:</label>
        <input type="number" id="maxLevel" name="maxLevel" min="1" .value=${offer.maxLevel}>

        <label for="game-img">Image:</label>
        <input type="text" id="imageUrl" name="imageUrl" .value=${offer.imageUrl}>

        <label for="summary">Summary:</label>
        <textarea name="summary" id="summary" .value=${offer.summary}></textarea>
        <input class="btn submit" type="submit" value="Edit Game">

    </div>
</form>
</section>`

export async function editPage(ctx) {
    let id = ctx.params.id;
    const offer = await getOfferById(id);

    ctx.render(editTemplate(offer, createSubmitHandler(onEdit)))

    async function onEdit({
        title,
        category,
        maxLevel,
        imageUrl,
        summary
    }) {
        if ([  title,
            category,
            maxLevel,
            imageUrl,
            summary
          ].some(f => f == '')) {
            return alert('Please fill all fields')
        }
 await updateOffer(id, {
    title,
    category,
    maxLevel,
    imageUrl,
    summary
        })
        ctx.page.redirect('/dashboard/' + id)
    }
}