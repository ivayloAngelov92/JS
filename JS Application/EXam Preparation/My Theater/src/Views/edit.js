import { html } from '../../node_modules/lit-html/lit-html.js';
import { getOfferById, updateOffer } from '../data/offers.js';
import { createSubmitHandler } from '../utilities.js';

const editTemplate = (offer, onEdit) => html`
    <section id="editPage">
        <form class="theater-form" @submit=${onEdit}>
            <h1>Edit Theater</h1>
            <div>
                <label for="title">Title:</label>
                <input id="title" name="title" type="text" placeholder="Theater name" .value=${offer.title}>
            </div>
            <div>
                <label for="date">Date:</label>
                <input id="date" name="date" type="text" placeholder="Month Day, Year" .value=${offer.date}>
            </div>
            <div>
                <label for="author">Author:</label>
                <input id="author" name="author" type="text" placeholder="Author" .value=${offer.author}>
            </div>
            <div>
                <label for="description">Theater Description:</label>
                <textarea id="description" name="description" placeholder="Description"
                    .value=${offer.description}></textarea>
            </div>
            <div>
                <label for="imageUrl">Image url:</label>
                <input id="imageUrl" name="imageUrl" type="text" placeholder="Image Url" .value=${offer.imageUrl}>
            </div>
            <button class="btn" type="submit">Submit</button>
        </form>
    </section>`

export async function editPage(ctx) {
    let id = ctx.params.id;
    const offer = await getOfferById(id);

    ctx.render(editTemplate(offer, createSubmitHandler(onEdit)))

    async function onEdit({
        title,
        date,
        author,
        description,
        imageUrl

    }) {
        if ([title,
            date,
            author,
            description,
            imageUrl

        ].some(f => f == '')) {
            return alert('Please fill all fields')
        }
        await updateOffer(id, {
            title,
            date,
            author,
            description,
            imageUrl

        })
        ctx.page.redirect('/dashboard/' + id)
    }
}