import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteOffer, getOfferById } from '../data/offers.js';
import { getUserData } from '../utilities.js';

// todo replace with actual view
const detailsTemplate = (offer, onDelete) => html`
        <section id="detailsPage">
            <div class="details">
                <div class="animalPic">
                    <img src=${offer.image}>
                </div>
                <div>
                    <div class="animalInfo">
                        <h1>Name: ${offer.name}</h1>
                        <h3>Breed: ${offer.breed}</h3>
                        <h4>Age: ${offer.age}</h4>
                        <h4>Weight: ${offer.weight}</h4>
                        <h4 class="donation">Donation: ${offer.applications}$</h4>
                    </div>
                    <!-- if there is no registered user, do not display div-->
                    ${offer.canEdit|| canDonate? html`
                       <div class="actionBtn">
                        ${offer.canEdit? html`<a href="/dashboard/${offer._id}/edit" class="edit">Edit</a>
                        <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>`:null}

                        ${offer.canDonate? html`<a  href="javascript:void(0)" class="donate">Donate</a>`:null}
                        `:null}
                        
                    </div>
                </div>
            </div>
        </section>
`


export async function detailsPage(ctx) {
    let id = ctx.params.id;
    const userData = await getUserData()
    const offer = await getOfferById(id);

    if(userData){offer.canDonate= true}
    if(userData&& userData._id== offer._ownerId){
        offer.canEdit = true;
    }

    ctx.render(detailsTemplate(offer, onDelete));

    async function onDelete() {
        const choice=confirm('Are you sure you want to delete this offer?')
        if(choice){
            await deleteOffer(id);
            ctx.page.redirect('/');
        }
    }
}