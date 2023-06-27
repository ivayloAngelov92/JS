import {html} from '../../node_modules/lit-html/lit-html.js';
import { register } from '../data/auth.js';
import { createSubmitHandler } from '../utilities.js';

// todo replace with actual view
const registerTemplate = (onRegister) => html`
        <section id="registerPage">
            <form class="registerForm" @submit=${onRegister}>
                <h2>Register</h2>
                <div class="on-dark">
                    <label for="email">Email:</label>
                    <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
                </div>

                <div class="on-dark">
                    <label for="password">Password:</label>
                    <input id="password" name="password" type="password" placeholder="********" value="">
                </div>

                <div class="on-dark">
                    <label for="repeatPassword">Repeat Password:</label>
                    <input id="repeatPassword" name="repeatPassword" type="password" placeholder="********" value="">
                </div>

                <button class="btn" type="submit">Register</button>

                <p class="field">
                    <span>If you have profile click <a href="/login">here</a></span>
                </p>
            </form>
        </section>
`

export function registerPage(ctx) {
    ctx.render(registerTemplate(createSubmitHandler(onRegister)));
//TODO change user object requirements
    async function onRegister({email, password, repeatPassword}, form) {
        if(email==''||password=='') {
            return alert('All fields are required');
        }
        if(password!=repeatPassword) {
            return alert('Passwords do not match');
        }
        await register(email, password);
        form.reset();
        ctx.page.redirect('/dashboard');
    }
}