import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { get } from "../data/api.js";
import { createSubmitHandler, getUserData } from '../utilities.js';

const searchTemplate = (onSearch) => html`
        <section id="search">
        
            <div class="form">
                <h2>Search</h2>
                <form class="search-form" @submit=${onSearch}>
                    <input type="text" name="search" id="search-input" />
                    <button class="button-list">Search</button>
                </form>
            </div>
            <h4>Results:</h4>
            <div class="search-result">
        
            </div>
        </section>
`;

export async function searchPage(ctx) {
    ctx.render(searchTemplate(createSubmitHandler(onSearch)))

    async function onSearch(searchString, form) {
        if (searchString.search.trim() === "") {
            return alert("Please enter a search term");
        }
        const data = await get(`/data/fruits?where=name%20LIKE%20%22${searchString.search}%22`);

        form.reset();
        showResult(data)
    }

    function showResult(result) {
        const searchContainer = document.getElementsByClassName('search-result')[0];
        const userData = getUserData();
        const resultTemplate = (result) => html`
                        ${result.length > 0 ? result.map(fruit => html`
                        <div class="fruit">
                            <img src=${fruit.imageUrl} alt="example1" />
                            <h3 class="title">${fruit.name}</h3>
                            <p class="description">${fruit.description}</p>
                            <a class="details-btn" href="/dashboard/${fruit._id}">More Info</a>
                        </div> `) : html`
                        <p class="no-result">No result.</p>
                        `}`;


        render(resultTemplate(result), searchContainer)

    }
}