import {html} from '../../node_modules/lit-html/lit-html.js';
import { getParts } from './autoparts.js';

let catalogTemplate = (list)=>html`
<h1>Catalog page</h1>
<ul>${list.map(productTemplate)}</ul>
`

let productTemplate = (product)=>html`
<li>${product.label}</li>
`

export async function catalogPage(ctx){
    let request= await getParts()
    let list = await request.json()
    ctx.render(catalogTemplate(list));
}

