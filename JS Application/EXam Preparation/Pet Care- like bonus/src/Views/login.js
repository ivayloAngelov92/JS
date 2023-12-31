import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../data/auth.js';
import { createSubmitHandler } from '../utilities.js';

// todo replace with actual view
const loginTemplate = (onLogin) => html`
        <section id="loginPage">
            <form class="loginForm" @submit="${onLogin}">
                <img src="./images/logo.png" alt="logo" />
                <h2>Login</h2>
        
                <div>
                    <label for="email">Email:</label>
                    <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
                </div>
        
                <div>
                    <label for="password">Password:</label>
                    <input id="password" name="password" type="password" placeholder="********" value="">
                </div>
        
                <button class="btn" type="submit">Login</button>
        
                <p class="field">
                    <span>If you don't have profile click <a href="/register">here</a></span>
                </p>
            </form>
        </section>
`

export function loginPage(ctx) {
    ctx.render(loginTemplate(createSubmitHandler(onLogin)));
    //TODO change user object requirements
    async function onLogin({ email, password }, form) {
        if (email == '' || password == '') {
            return alert('Please fill in all fields');

        }
        await login(email, password);
        form.reset();
        // USE redirect location from requirement
        ctx.page.redirect('/');
    }
}