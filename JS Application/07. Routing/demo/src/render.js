import { render } from "../../node_modules/lit-html/lit-html.js"
let main= document.querySelector('main')
export function addRender(ctx,next){
    ctx.render=renderView
    next()
}

function renderView(content){
    render(content,main)
}