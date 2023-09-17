function addItem() {
    let list= document.createElement('li')
    list.textContent= document.getElementById('newItemText').value
    document.getElementById('items').appendChild(list)
    document.getElementById('newItemText').value=''
}