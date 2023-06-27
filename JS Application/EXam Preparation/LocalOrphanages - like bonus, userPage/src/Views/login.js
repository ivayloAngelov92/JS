import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../data/auth.js';
import { createSubmitHandler } from '../utilities.js';

// todo replace with actual view
const loginTemplate = (onLogin) => html`
        <section id="login-page" class="auth">
            <form id="login" @submit=${onLogin}>
                <h1 class="title">Login</h1>
        
                <article class="input-group">
                    <label for="login-email">Email: </label>
                    <input type="email" id="login-email" name="email">
                </article>
        
                <article class="input-group">
                    <label for="password">Password: </label>
                    <input type="password" id="password" name="password">
                </article>
        
                <input type="submit" class="btn submit-btn" value="Log In">
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
        ctx.page.redirect('/dashboard');
    }
}