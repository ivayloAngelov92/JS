import {html} from '../../node_modules/lit-html/lit-html.js';

let homePageTemplate = () => html`
<h1>homePage</h1>
<p>Welcome to our site</p>
`

export function homePage(ctx) {
    ctx.render(homePageTemplate());
}