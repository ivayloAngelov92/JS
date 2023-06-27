import { html } from '../../node_modules/lit-html/lit-html.js';
import { getOfferById, updateOffer } from '../data/offers.js';
import { createSubmitHandler } from '../utilities.js';

const editTemplate = (offer, onEdit) => html` 
<section id="editPage">
<form class="editForm" @submit=${onEdit}>
    <img src="./images/editpage-dog.jpg">
    <div>
        <h2>Edit PetPal</h2>
        <div class="name">
            <label for="name">Name:</label>
            <input name="name" id="name" .value=${offer.name} type="text" >
        </div>
        <div class="breed">
            <label for="breed">Breed:</label>
            <input name="breed" id="breed" .value=${offer.breed} type="text"  >
        </div>
        <div class="Age">
            <label for="age">Age:</label>
            <input name="age" id="age" .value=${offer.age} type="text" >
        </div>
        <div class="weight">
            <label for="weight">Weight:</label>
            <input name="weight" id="weight" .value=${offer.weight} type="text" >
        </div>
        <div class="image">
            <label for="image">Image:</label>
            <input name="image" id="image" .value=${offer.image} type="text" >
        </div>
        <button class="btn" type="submit">Edit Pet</button>
    </div>
</form>
</section>`

export async function editPage(ctx) {
    let id = ctx.params.id;
    const offer = await getOfferById(id);

    ctx.render(editTemplate(offer, createSubmitHandler(onEdit)))

    async function onEdit({
        name,
        breed,
        age,
        weight,
        image
    }) {
        if ([name,
            breed,
            age,
            weight,
            image
          ].some(f => f == '')) {
            return alert('Please fill all fields')
        }
        await updateOffer(id, {
            name,
            breed,
            age,
            weight,
            image          
        })
        ctx.page.redirect('/dashboard/' + id)
    }
}