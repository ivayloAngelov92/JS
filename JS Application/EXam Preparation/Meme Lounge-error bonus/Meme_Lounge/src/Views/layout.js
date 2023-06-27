import { html } from '../../node_modules/lit-html/lit-html.js';

export const layoutTemplate = (userData, content) => html`
        <section id="notifications">
            <div id="errorBox" class="notification">
                <span></span>
            </div>
        </section>
        <!-- Navigation -->
        <nav>
            <a href="/dashboard">All Memes</a>
            ${userData ? html`
            <div class="user">
                <a href="/create">Create Meme</a>
                <div class="profile">
                    <span>Welcome, ${userData.email}</span>
                    <a href="/myPosts">My Profile</a>
                    <a href="/logout">Logout</a>
                </div>
            </div>`: html`
            <div class="guest">
                <div class="profile">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>
                <a class="active" href="/">Home Page</a>
            </div>`}
        </nav>
        
        <main>
            ${content}
        </main>
` 