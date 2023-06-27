import page from '../node_modules/page/page.mjs';
import {render} from '../node_modules/lit-html/lit-html.js';
import { layoutTemplate } from './Views/layout.js';
import { getUserData } from './utilities.js';
import { homePage } from './Views/homePage.js';
import { loginPage } from './Views/login.js';
import { registerPage } from './Views/register.js';
import { logout } from './data/auth.js';
import { productsPage } from './Views/catalog.js';
import { detailsPage } from './Views/details.js';
import { createPage } from './Views/create.js';
import { editPage } from './Views/edit.js';


import * as api from './data/buys.js'
window.api = api;




// TODO change render root depending on project html structure
let root= document.getElementById('wrapper');
page(decorateContext)
page('index.html', '/')
page('/', homePage)
page('/catalog', productsPage)
page('/catalog/:id', detailsPage)
page('/catalog/:id/edit', editPage)
page('/login', loginPage)
page('/add', createPage)
page('/register', registerPage)
page('/logout', logoutAction)

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
    // TODO redirect based on requirements
    ctx.page.redirect('/catalog');
}