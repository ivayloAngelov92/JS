import {html, render} from './node_modules/lit-html/lit-html.js'



document.getElementById('btnLoadTowns').addEventListener('click', clickFn)
let input =document.querySelector('#towns')

function clickFn(event){
    event.preventDefault()
    
    let data= input.value.split(', ')

    renderComponent(data)
    input.value=''
}

let renderComponent= (data)=>{
    let root= document.getElementById('root')
    render(cardTemplate(data),root)
}

let cardTemplate= (data)=> html `
<ul>
    ${data.map((item)=> html `<li>${item}</li> `)}
</ul>
`