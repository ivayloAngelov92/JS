import { html } from '../../node_modules/lit-html/lit-html.js';

export const layoutTemplate = (userData, content) => html`
   <header>
            <nav>
                <a class="active" href="/">Home</a>
                <a href="/dashboard">All Listings</a>
                <a href="/search">By Year</a>
                <!-- Guest users -->
                ${userData? html`
                <div id="profile">
                    <a>Welcome ${userData.username}</a>
                    <a href="/myPage">My Listings</a>
                    <a href="/create">Create Listing</a>
                    <a href="/logout">Logout</a>
                </div>`: html`
                <div id="guest">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>`}
                
                <!-- Logged users -->
                
            </nav>
        </header>
    <main id="site-content">
        ${content}
    </main>
` 