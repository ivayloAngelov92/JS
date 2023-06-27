import {html,render} from './node_modules/lit-html/lit-html.js'
import {towns} from './towns.js'

let divTowns=document.getElementById('towns')

let button= document.querySelector('button')


let searchTemplate= (data)=>html `
<ul>
    ${data.map(town=>html`
      <li id=${town}>${town}</li>
    `)}
</ul>
`



render(searchTemplate(towns), divTowns)

button.addEventListener('click', search)

let searchTown= (towns,text)=>{
   return towns.filter((town)=>{
      if(town.includes(text)){
         let match=document.getElementById(`${town}`)
         match.setAttribute('class', 'active')
         return town
      }
   })
}

function search() {
   let text=document.getElementById('searchText').value
   let divResult=document.getElementById('result')
   let result= searchTown(towns,text)
   divResult.textContent= `${result.length} matches found`
}
