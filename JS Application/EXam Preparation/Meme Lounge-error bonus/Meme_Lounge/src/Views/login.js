import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../data/auth.js';
import { createSubmitHandler } from '../utilities.js';
import { notify } from './notification.js';

// todo replace with actual view
const loginTemplate = (onLogin) => html`
        <section id="login">
            <form id="login-form" @submit=${onLogin}>
                <div class="container">
                    <h1>Login</h1>
                    <label for="email">Email</label>
                    <input id="email" placeholder="Enter Email" name="email" type="text">
                    <label for="password">Password</label>
                    <input id="password" type="password" placeholder="Enter Password" name="password">
                    <input type="submit" class="registerbtn button" value="Login">
                    <div class="container signin">
                        <p>Dont have an account?<a href="/register">Sign up</a>.</p>
                    </div>
                </div>
            </form>
        </section>
`

export function loginPage(ctx) {
    ctx.render(loginTemplate(createSubmitHandler(onLogin)));
    //TODO change user object requirements
    async function onLogin({ email, password }, form) {
        if (email == '' || password == '') {
            return ctx.notify('All fields are required');
        }
        await login(email, password);
        form.reset();
        // USE redirect location from requirement
        ctx.page.redirect('/dashboard');
    }
}