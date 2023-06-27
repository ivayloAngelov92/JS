function addItem() {
    let newEl=document.getElementById('newItemText').value
    let newLi=document.createElement('li')
    let list=document.getElementById('items')
    newLi.textContent=newEl
    list.appendChild(newLi)
}