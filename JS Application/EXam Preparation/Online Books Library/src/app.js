import page from '../node_modules/page/page.mjs';
import {render} from '../node_modules/lit-html/lit-html.js';
import { getUserData } from './utilities.js';
import { layoutTemplate } from './Views/layout.js';
import { homePage } from './Views/homePage.js';
import { loginPage } from './Views/login.js';
import { registerPage } from './Views/register.js';
import { logout } from './data/auth.js';
import { dashboardPage } from './Views/dashboard.js';
import { detailsPage } from './Views/detailsWithBonus.js';
import { createPage } from './Views/create.js';
import { editPage } from './Views/edit.js';
import { myBooksPage } from './Views/myBooks.js';

import * as api from "./data/applications.js"
window.api = api;



// todo change render root depending on project html structure
let root= document.getElementById('container');
page(decorateContext)
page('index.html', '/')
page('/', dashboardPage)
page('/dashboard', dashboardPage)
page('/create',createPage)
page('/login', loginPage)
page('/register', registerPage)
page('/logout', logoutAction)
page('/myBooks', myBooksPage)
page('/dashboard/:id',detailsPage)
page('/dashboard/:id/edit',editPage)

page.start();

function decorateContext(ctx,next) {
    ctx.render = renderView
    next();
}
// TODO inject dependencies
function renderView(content){
    const userData= getUserData();
    render(layoutTemplate(userData,content),root)
}

function logoutAction(ctx){
    logout()
    ctx.page.redirect('/dashboard');
}