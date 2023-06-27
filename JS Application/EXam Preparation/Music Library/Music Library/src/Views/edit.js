import { html } from '../../node_modules/lit-html/lit-html.js'
import { getById, updateItem } from '../data/items.js';
import { createSubmitHandler } from '../utilities.js'


let editTemplate = (item, onEdit) => html`
      <section id="edit">
        <div class="form">
          <h2>Edit Album</h2>
          <form class="edit-form" @submit=${onEdit}>
            <input type="text" name="singer"  id="album-singer" .value=${item.singer} placeholder="Singer/Band" />
            <input type="text" name="album" id="album-album" .value=${item.album} placeholder="Album" />
            <input type="text" name="imageUrl"  id="album-img" .value=${item.imageUrl} placeholder="Image url" />
            <input type="text" name="release"  id="album-release" .value=${item.release} placeholder="Release date" />
            <input type="text" name="label"  id="album-label" .value=${item.label} placeholder="Label" />
            <input type="text" name="sales"  id="album-sales" .value=${item.sales} placeholder="Sales" />

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
        singer,
        album, 
        imageUrl, 
        release, 
        label, 
        sales
      
    }) {
        if ([ singer,
            album, 
            imageUrl, 
            release, 
            label, 
            sales
          ].some(x => x === '')) {
            return alert('Please fill in all fields')
        }
        await updateItem(id,{
            singer,
            album, 
            imageUrl, 
            release, 
            label, 
            sales
          
        })
        ctx.page.redirect('/catalog/'+id)
    }

}