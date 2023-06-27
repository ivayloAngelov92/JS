import { page } from '/node_modules/page/page.mjs';
import { render } from '../../node_modules/lit-html/lit-html.js'
import { homePage } from './home.js';
import { addRender } from './render.js';
import { catalogPage } from './catalog.js';
import { aboutPage } from './about.js';



page (addRender)

page('/index.html','/')
page('/', homePage)
page('/catalog', catalogPage)
page('/about', aboutPage)


page.start()

