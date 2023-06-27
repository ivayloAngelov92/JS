import { html } from '../../node_modules/lit-html/lit-html.js';

export const layoutTemplate = (userData, content) => html`
    <header>
        <!-- Navigation -->
        <header>
            <nav>
                <a href="/">Theater</a>
                <ul>
                    ${userData ? html`
                    <li><a href="/myProfile">Profile</a></li>
                    <li><a href="/create">Create Event</a></li>
                    <li><a href="/logout">Logout</a></li>
                    </div>`: html`
                    <li><a href="/login">Login</a></li>
                    <li><a href="/register">Register</a></li>`}
                </ul>
            </nav>
        </header>
        <main id="content">
            ${content}
        </main>
        <footer>
            <div>© 2021
                <h3>JS Application</h3>
            </div>
        </footer>
` 