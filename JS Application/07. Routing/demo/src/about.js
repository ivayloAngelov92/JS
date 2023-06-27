import {html} from '../../node_modules/lit-html/lit-html.js';

let aboutTemplate = ()=>html`
<h1>about us</h1>
<p>Welcome to our site</p>
`
export function aboutPage(ctx){
    ctx.render(aboutTemplate());
}